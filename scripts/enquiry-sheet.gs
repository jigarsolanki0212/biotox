/**
 * BIOTOX website enquiries -> Google Sheet tracker + email alert.
 *
 * Setup (once):
 * 1. In the Google Sheet: Extensions -> Apps Script, and paste this whole file over the existing code. Save.
 * 2. Project Settings (gear) -> Script Properties:
 *      SECRET   = the same long random value you put in Vercel as LEAD_WEBHOOK_SECRET
 *      NOTIFY   = enquiry@medregbiotox.com   (where alerts go; comma-separate for several)
 * 3. In the editor, choose the function "setupSheet" in the toolbar and click Run (formats the sheet, adds the
 *    Status dropdown, filters and the Summary tab). Safe to run again at any time.
 * 4. Deploy -> Manage deployments -> pencil (Edit) -> Version: "New version" -> Deploy.
 *    (First time: Deploy -> New deployment -> Web app, Execute as: Me, Who has access: Anyone.)
 *    The Web app URL stays the same; it goes into Vercel as LEAD_WEBHOOK_URL.
 */

var SHEET_NAME = 'Enquiries';
var SUMMARY_NAME = 'Summary';
var COLUMNS = ['Received', 'Status', 'Full name', 'Email', 'Phone', 'Company', 'Service required', 'Message', 'Notes', 'Source'];
var WIDTHS = [150, 130, 170, 230, 150, 180, 230, 420, 260, 140];
var STATUSES = ['New', 'Contacted', 'Proposal sent', 'Won', 'Lost', 'Spam'];
var STATUS_COLOURS = {
  'New': ['#E8F3F0', '#07504C'],
  'Contacted': ['#E0F2FE', '#075985'],
  'Proposal sent': ['#FEF3C7', '#92400E'],
  'Won': ['#DCFCE7', '#166534'],
  'Lost': ['#F3F4F6', '#4B5563'],
  'Spam': ['#FEE2E2', '#991B1B'],
};
var SERVICES = [
  'Biocompatibility Evaluation', 'BEP / BER Preparation & Review', 'Toxicological Risk Assessment',
  'In-silico Safety Assessment', 'QSAR Analysis', 'Genotoxicity Prediction', 'Global Regulatory Compliance',
  'Risk Assessment & Management', 'ISO 18562-1:2024 Compliance', 'ISO 7405:2025 Compliance', 'Other',
];

function doPost(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var secret = String(props.getProperty('SECRET') || '').trim();

    if (!secret || String(data.token || '').trim() !== secret) {
      return reply_({ ok: false, error: 'unauthorised' });
    }

    var lock = LockService.getScriptLock();
    lock.waitLock(20000); // two enquiries at the same moment must not overwrite each other
    try {
      var sheet = getSheet_();
      // Prefix values that a spreadsheet would treat as formulas, so nobody can inject one.
      var safe = function (v) {
        v = String(v == null ? '' : v);
        return /^[=+\-@]/.test(v) ? "'" + v : v;
      };
      sheet.appendRow([
        new Date(),
        'New',
        safe(data['Full name']),
        safe(data['Email']),
        safe(data['Phone']),
        safe(data['Company']),
        safe(data['Service required']),
        safe(data['Message']),
        '',
        safe(data.source),
      ]);
    } finally {
      lock.releaseLock();
    }

    var notify = props.getProperty('NOTIFY');
    if (notify) {
      var fields = ['Full name', 'Email', 'Phone', 'Company', 'Service required', 'Message'];
      var body = fields.map(function (k) { return k + ': ' + (data[k] || '—'); }).join('\n');
      MailApp.sendEmail({
        to: notify,
        replyTo: data['Email'] || undefined,
        name: 'BIOTOX Website',
        subject: data.subject || 'New website enquiry',
        body: body + '\n\nAll enquiries: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      });
    }
    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false, error: String(err) });
  }
}

/** The enquiries tab; created and formatted on first use. */
function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.getSheets()[0];
    if (sheet.getLastRow() > 0 && sheet.getRange(1, 1).getValue() !== COLUMNS[0]) sheet = ss.insertSheet(SHEET_NAME, 0);
    else sheet.setName(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) formatSheet_(sheet);
  return sheet;
}

/** Run once from the editor (and again any time) to format the tracker and build the Summary tab. */
function setupSheet() {
  var sheet = getSheet_();
  formatSheet_(sheet);
  buildSummary_();
  SpreadsheetApp.getActiveSpreadsheet().setActiveSheet(sheet);
}

function formatSheet_(sheet) {
  var maxRows = Math.max(sheet.getMaxRows(), 1000);
  if (sheet.getMaxRows() < maxRows) sheet.insertRowsAfter(sheet.getMaxRows(), maxRows - sheet.getMaxRows());
  if (sheet.getMaxColumns() < COLUMNS.length) sheet.insertColumnsAfter(sheet.getMaxColumns(), COLUMNS.length - sheet.getMaxColumns());

  // Header
  sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS])
    .setBackground('#05201E').setFontColor('#FFFFFF').setFontWeight('bold')
    .setVerticalAlignment('middle').setWrap(false);
  sheet.setRowHeight(1, 34);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(0);
  WIDTHS.forEach(function (w, i) { sheet.setColumnWidth(i + 1, w); });

  var body = sheet.getRange(2, 1, maxRows - 1, COLUMNS.length);
  body.setVerticalAlignment('top').setFontFamily('Arial').setFontSize(10);
  sheet.getRange(2, 1, maxRows - 1, 1).setNumberFormat('dd mmm yyyy, hh:mm am/pm');
  sheet.getRange(2, 5, maxRows - 1, 1).setNumberFormat('@'); // phone as text, keeps the leading +
  sheet.getRange(2, 8, maxRows - 1, 2).setWrap(true); // Message, Notes

  // Status dropdown + colours
  var statusRange = sheet.getRange(2, 2, maxRows - 1, 1);
  statusRange.setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).setAllowInvalid(false).build()
  ).setHorizontalAlignment('center').setFontWeight('bold');
  var rules = sheet.getConditionalFormatRules().filter(function (r) {
    return !r.getRanges().some(function (rg) { return rg.getColumn() === 2; });
  });
  STATUSES.forEach(function (s) {
    rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo(s)
      .setBackground(STATUS_COLOURS[s][0]).setFontColor(STATUS_COLOURS[s][1]).setRanges([statusRange]).build());
  });
  sheet.setConditionalFormatRules(rules);

  // Alternating row colours (banding) and filters on every column
  sheet.getBandings().forEach(function (b) { b.remove(); });
  sheet.getRange(1, 1, maxRows, COLUMNS.length)
    .applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, true, false)
    .setHeaderRowColor('#05201E').setFirstRowColor('#FFFFFF').setSecondRowColor('#F3F8F6');
  if (sheet.getFilter()) sheet.getFilter().remove();
  sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 2), COLUMNS.length).createFilter();
}

function buildSummary_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sum = ss.getSheetByName(SUMMARY_NAME) || ss.insertSheet(SUMMARY_NAME);
  sum.clear();
  var e = "'" + SHEET_NAME + "'!";
  var rows = [['BIOTOX enquiries: summary', ''], ['', ''], ['Total enquiries', '=COUNTA(' + e + 'A2:A)'],
    ['This month', '=COUNTIFS(' + e + 'A2:A,">="&EOMONTH(TODAY(),-1)+1,' + e + 'A2:A,"<"&EOMONTH(TODAY(),0)+1)'],
    ['Waiting for reply (New)', '=COUNTIF(' + e + 'B2:B,"New")'], ['', ''], ['By status', 'Count']];
  STATUSES.forEach(function (s) { rows.push([s, '=COUNTIF(' + e + 'B2:B,"' + s + '")']); });
  rows.push(['', ''], ['By service', 'Count']);
  SERVICES.forEach(function (s) { rows.push([s, '=COUNTIF(' + e + 'G2:G,"' + s.replace(/"/g, '""') + '")']); });
  sum.getRange(1, 1, rows.length, 2).setValues(rows);

  var monthRow = rows.length + 2;
  sum.getRange(monthRow, 1, 1, 2).setValues([['By month', 'Count']]);
  sum.getRange(monthRow + 1, 1).setFormula(
    '=IFERROR(QUERY({ARRAYFORMULA(IF(' + e + 'A2:A="",,TEXT(' + e + 'A2:A,"yyyy-mm"))),' + e + 'C2:C},' +
    '"select Col1, count(Col2) where Col1 is not null group by Col1 order by Col1 desc label count(Col2) \'\'",0),"No enquiries yet")'
  );

  sum.setColumnWidth(1, 260);
  sum.setColumnWidth(2, 110);
  sum.getRange('A1').setFontSize(14).setFontWeight('bold').setFontColor('#05201E');
  sum.getRange('A3:B5').setFontWeight('bold');
  [7, 7 + STATUSES.length + 2, monthRow].forEach(function (r) {
    sum.getRange(r, 1, 1, 2).setBackground('#05201E').setFontColor('#FFFFFF').setFontWeight('bold');
  });
  sum.getRange('B:B').setHorizontalAlignment('right');
  sum.setFrozenRows(1);
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
