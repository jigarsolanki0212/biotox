/**
 * BIOTOX website enquiries -> Google Sheet tracker + email alert.
 *
 * Setup (once):
 * 1. In the Google Sheet: Extensions -> Apps Script, and paste this whole file over the existing code. Save.
 * 2. Project Settings (gear) -> Script Properties:
 *      SECRET   = the same long random value you put in Vercel as LEAD_WEBHOOK_SECRET
 *      NOTIFY   = enquiry@medregbiotox.com   (where alerts go; comma-separate for several)
 * 3. In the editor, choose the function "setupSheet" in the toolbar and click Run (formats the sheet, adds the
 *    Status dropdown and filters, and builds the Summary and Dashboard tabs). Safe to run again at any time;
 *    existing enquiries are kept.
 * 4. Deploy -> Manage deployments -> pencil (Edit) -> Version: "New version" -> Deploy.
 *    (First time: Deploy -> New deployment -> Web app, Execute as: Me, Who has access: Anyone.)
 *    The Web app URL stays the same; it goes into Vercel as LEAD_WEBHOOK_URL.
 */

var SHEET_NAME = 'Enquiries';
var SUMMARY_NAME = 'Summary';
var DASHBOARD_NAME = 'Dashboard';
var DATA_NAME = 'Chart data';
var INK = '#05201E', TEAL = '#0B6B66', TINT = '#E8F3F0', MUTED = '#4D6360', LINE = '#DCE9E5';
// Chart colour per status, in STATUSES order
var STATUS_CHART = ['#0B6B66', '#0EA5E9', '#F59E0B', '#16A34A', '#9CA3AF', '#DC2626'];
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

/** Run once from the editor (and again any time) to format the tracker and rebuild Summary + Dashboard. */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getSheet_();
  formatSheet_(sheet);
  buildChartData_();
  buildSummary_();
  buildDashboard_();
  // Tab order: Enquiries, Dashboard, Summary; the Chart data helper stays hidden at the end
  [SHEET_NAME, DASHBOARD_NAME, SUMMARY_NAME].forEach(function (n, i) {
    ss.setActiveSheet(ss.getSheetByName(n));
    ss.moveActiveSheet(i + 1);
  });
  ss.setActiveSheet(ss.getSheetByName(DASHBOARD_NAME));
  ss.getSheetByName(DATA_NAME).hideSheet();
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

var E_ = "'" + SHEET_NAME + "'!"; // prefix for formulas that read the Enquiries tab

/** Hidden helper tab that feeds the Dashboard charts: last 12 months, last 30 days, status and service counts. */
function buildChartData_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var d = ss.getSheetByName(DATA_NAME) || ss.insertSheet(DATA_NAME);
  d.clear();
  var A = E_ + 'A2:A', B = E_ + 'B2:B', G = E_ + 'G2:G';

  var months = [['Month', 'Enquiries', 'Start']];
  for (var i = 1; i <= 12; i++) {
    var r = i + 1;
    months.push(['=TEXT(C' + r + ',"mmm yy")',
      '=COUNTIFS(' + A + ',">="&C' + r + ',' + A + ',"<"&EDATE(C' + r + ',1))',
      '=EDATE(EOMONTH(TODAY(),-1)+1,' + (i - 12) + ')']);
  }
  d.getRange(1, 1, months.length, 3).setValues(months);

  var days = [['Day', 'Enquiries', 'Date']];
  for (var j = 1; j <= 30; j++) {
    var q = j + 1;
    days.push(['=TEXT(G' + q + ',"dd mmm")', '=COUNTIFS(' + A + ',">="&G' + q + ',' + A + ',"<"&G' + q + '+1)', '=TODAY()-' + (30 - j)]);
  }
  d.getRange(1, 5, days.length, 3).setValues(days);

  var status = [['Status', 'Enquiries']].concat(STATUSES.map(function (st) { return [st, '=COUNTIF(' + B + ',"' + st + '")']; }));
  d.getRange(1, 9, status.length, 2).setValues(status);

  var svc = [['Service', 'Enquiries']].concat(SERVICES.map(function (sv) { return [sv, '=COUNTIF(' + G + ',"' + sv.replace(/"/g, '""') + '")']; }));
  d.getRange(1, 12, svc.length, 2).setValues(svc);

  d.getRange('C:C').setNumberFormat('dd mmm yyyy');
  d.getRange('G:G').setNumberFormat('dd mmm yyyy');
  d.getRange(1, 1, 1, 13).setFontWeight('bold');
  d.hideSheet();
}

/** Summary tab: headline tiles, status and service tables with in-cell bars, last 6 months, latest enquiries. */
function buildSummary_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sum = ss.getSheetByName(SUMMARY_NAME) || ss.insertSheet(SUMMARY_NAME);
  sum.clear();
  sum.getRange(1, 1, sum.getMaxRows(), sum.getMaxColumns()).breakApart();
  sum.setHiddenGridlines(true);
  var A = E_ + 'A2:A', B = E_ + 'B2:B', G = E_ + 'G2:G';
  [200, 90, 80, 150, 24, 260, 90, 80, 150].forEach(function (w, i) { sum.setColumnWidth(i + 1, w); });

  // Title
  sum.getRange('A1:I1').merge().setValue('BIOTOX enquiries')
    .setFontSize(20).setFontWeight('bold').setFontColor(INK);
  sum.getRange('A2:I2').merge().setValue('Updates automatically from the Enquiries tab. Open the Dashboard tab for charts.')
    .setFontColor(MUTED).setFontSize(10);
  sum.setRowHeight(1, 40);

  // Headline tiles: label row 4, value row 5 (A, B:C, D, F, G:H, I)
  var tiles = [
    ['A', 'Total enquiries', '=COUNTA(' + A + ')', '0'],
    ['B4:C4', 'This month', '=COUNTIFS(' + A + ',">="&EOMONTH(TODAY(),-1)+1,' + A + ',"<"&EOMONTH(TODAY(),0)+1)', '0'],
    ['D', 'Last 7 days', '=COUNTIFS(' + A + ',">="&TODAY()-6)', '0'],
    ['F', 'Waiting for reply', '=COUNTIF(' + B + ',"New")', '0'],
    ['G4:H4', 'Won', '=COUNTIF(' + B + ',"Won")', '0'],
    ['I', 'Win rate (won ÷ closed)', '=IFERROR(COUNTIF(' + B + ',"Won")/(COUNTIF(' + B + ',"Won")+COUNTIF(' + B + ',"Lost")),0)', '0%'],
  ];
  tiles.forEach(function (t) {
    var label = t[0].indexOf(':') > -1 ? sum.getRange(t[0]) : sum.getRange(t[0] + '4');
    var value = t[0].indexOf(':') > -1 ? sum.getRange(t[0].replace(/4/g, '5')) : sum.getRange(t[0] + '5');
    if (t[0].indexOf(':') > -1) { label.merge(); value.merge(); }
    label.setValue(t[1].toUpperCase()).setFontSize(8).setFontWeight('bold').setFontColor(MUTED).setBackground(TINT).setVerticalAlignment('bottom');
    value.setValue(t[2]).setNumberFormat(t[3]).setFontSize(24).setFontWeight('bold').setFontColor(TEAL).setBackground(TINT)
      .setHorizontalAlignment('left').setVerticalAlignment('top');
  });
  sum.setRowHeight(4, 26); sum.setRowHeight(5, 44);
  sum.getRange('F5').setFontColor('#B45309'); // waiting for reply stands out

  var header = function (range, labels) {
    sum.getRange(range).setValues([labels]).setBackground(INK).setFontColor('#FFFFFF').setFontWeight('bold');
  };
  var bar = function (cell, maxRange, colour) {
    return '=SPARKLINE(' + cell + ',{"charttype","bar";"max",MAX(1,MAX(' + maxRange + '));"color1","' + colour + '"})';
  };

  // By status (A:D, rows 7-13)
  header('A7:D7', ['By status', 'Count', 'Share', '']);
  STATUSES.forEach(function (st, i) {
    var r = 8 + i;
    sum.getRange(r, 1, 1, 4).setValues([[st, '=COUNTIF(' + B + ',"' + st + '")', '=IFERROR(B' + r + '/$A$5,0)', bar('B' + r, '$B$8:$B$13', STATUS_CHART[i])]]);
  });
  sum.getRange('C8:C13').setNumberFormat('0%');

  // By service (F:I, rows 7-18)
  header('F7:I7', ['By service', 'Count', 'Share', '']);
  SERVICES.forEach(function (sv, i) {
    var r = 8 + i;
    sum.getRange(r, 6, 1, 4).setValues([[sv, '=COUNTIF(' + G + ',"' + sv.replace(/"/g, '""') + '")', '=IFERROR(G' + r + '/$A$5,0)', bar('G' + r, '$G$8:$G$18', TEAL)]]);
  });
  sum.getRange('H8:H18').setNumberFormat('0%');

  // Last 6 months (A:D, rows 16-22), from the hidden Chart data tab
  header('A16:D16', ['Last 6 months', 'Count', '', '']);
  for (var m = 0; m < 6; m++) {
    var r = 17 + m, src = 13 - m; // newest first
    sum.getRange(r, 1, 1, 4).setValues([["='" + DATA_NAME + "'!A" + src, "='" + DATA_NAME + "'!B" + src, '', bar('B' + r, '$B$17:$B$22', TEAL)]]);
  }

  // Latest 5 enquiries (A:I, rows 25-30)
  header('A25:I25', ['Latest enquiries', '', '', '', '', '', '', '', '']);
  sum.getRange('A26:D26').setValues([['Received', 'Status', '', 'Name']]);
  sum.getRange('F26:G26').setValues([['Service', '']]);
  sum.getRange('A26:I26').setFontWeight('bold').setFontColor(MUTED).setFontSize(9);
  sum.getRange('A27').setFormula('=IFERROR(QUERY(' + E_ + 'A2:B,"select A, B where A is not null order by A desc limit 5",0),"No enquiries yet")');
  sum.getRange('D27').setFormula('=IFERROR(QUERY({' + E_ + 'A2:A,' + E_ + 'C2:C},"select Col2 where Col1 is not null order by Col1 desc limit 5",0),"")');
  sum.getRange('F27').setFormula('=IFERROR(QUERY({' + E_ + 'A2:A,' + E_ + 'G2:G},"select Col2 where Col1 is not null order by Col1 desc limit 5",0),"")');
  sum.getRange('A27:A31').setNumberFormat('dd mmm yyyy, hh:mm am/pm').setHorizontalAlignment('left');

  // Common styling
  sum.getRange('B8:B22').setHorizontalAlignment('right');
  sum.getRange('G8:G18').setHorizontalAlignment('right');
  [['A8:D13'], ['F8:I18'], ['A17:D22'], ['A27:I31']].forEach(function (r) {
    sum.getRange(r[0]).setBorder(null, null, true, null, null, true, LINE, SpreadsheetApp.BorderStyle.SOLID);
  });
  sum.getRange('A1:I40').setFontFamily('Arial').setVerticalAlignment('middle');
  sum.getRange('A4:I5').setVerticalAlignment('bottom');
  sum.getRange('A5:I5').setVerticalAlignment('top');
  sum.setFrozenRows(0);
}

/** Dashboard tab: headline numbers and four charts. */
function buildDashboard_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dash = ss.getSheetByName(DASHBOARD_NAME) || ss.insertSheet(DASHBOARD_NAME);
  dash.getCharts().forEach(function (c) { dash.removeChart(c); });
  dash.clear();
  dash.getRange(1, 1, dash.getMaxRows(), dash.getMaxColumns()).breakApart();
  dash.setHiddenGridlines(true);
  for (var c = 1; c <= 12; c++) dash.setColumnWidth(c, 100);
  var data = ss.getSheetByName(DATA_NAME);
  var S = "'" + SUMMARY_NAME + "'!";

  dash.getRange('A1:L1').merge().setValue('BIOTOX enquiries dashboard').setFontSize(20).setFontWeight('bold').setFontColor(INK);
  dash.getRange('A2:L2').merge().setValue('Live charts from the Enquiries tab. Change a Status there and these update automatically.').setFontColor(MUTED).setFontSize(10);
  dash.setRowHeight(1, 40);

  // Headline strip: 6 tiles, 2 columns each
  var kpis = [['Total', S + 'A5', '0'], ['This month', S + 'B5', '0'], ['Last 7 days', S + 'D5', '0'],
    ['Waiting for reply', S + 'F5', '0'], ['Won', S + 'G5', '0'], ['Win rate', S + 'I5', '0%']];
  kpis.forEach(function (k, i) {
    var col = 1 + i * 2;
    dash.getRange(4, col, 1, 2).merge().setValue(k[0].toUpperCase()).setFontSize(8).setFontWeight('bold').setFontColor(MUTED).setBackground(TINT);
    dash.getRange(5, col, 1, 2).merge().setFormula('=' + k[1]).setNumberFormat(k[2]).setFontSize(22).setFontWeight('bold')
      .setFontColor(k[0] === 'Waiting for reply' ? '#B45309' : TEAL).setBackground(TINT).setHorizontalAlignment('left');
  });
  dash.setRowHeight(4, 24); dash.setRowHeight(5, 42);
  dash.getRange('A1:L5').setFontFamily('Arial');

  var base = function (type, range, title) {
    return dash.newChart().setChartType(type).addRange(range).setNumHeaders(1)
      .setOption('title', title).setOption('titleTextStyle', { color: INK, fontSize: 14, bold: true })
      .setOption('backgroundColor', '#FFFFFF').setOption('width', 590).setOption('height', 330)
      .setOption('legend', { position: 'none' }).setOption('fontName', 'Arial');
  };

  // Row 7: status donut (left), monthly columns (right)
  dash.insertChart(base(Charts.ChartType.PIE, data.getRange('I1:J7'), 'Enquiries by status')
    .setOption('pieHole', 0.55).setOption('colors', STATUS_CHART)
    .setOption('legend', { position: 'right', textStyle: { color: MUTED } })
    .setOption('pieSliceText', 'value').setPosition(7, 1, 0, 0).build());
  dash.insertChart(base(Charts.ChartType.COLUMN, data.getRange('A1:B13'), 'Enquiries per month (last 12 months)')
    .setOption('colors', [TEAL]).setOption('vAxis', { minValue: 0, format: '0', gridlines: { color: LINE } })
    .setPosition(7, 7, 0, 0).build());

  // Row 25: services bar (left), last 30 days area (right)
  dash.insertChart(base(Charts.ChartType.BAR, data.getRange('L1:M12'), 'Which services people ask about')
    .setOption('colors', ['#0E7490']).setOption('hAxis', { minValue: 0, format: '0', gridlines: { color: LINE } })
    .setPosition(25, 1, 0, 0).build());
  dash.insertChart(base(Charts.ChartType.AREA, data.getRange('E1:F31'), 'Daily enquiries (last 30 days)')
    .setOption('colors', [TEAL]).setOption('areaOpacity', 0.18).setOption('lineWidth', 2)
    .setOption('vAxis', { minValue: 0, format: '0', gridlines: { color: LINE } }).setOption('hAxis', { showTextEvery: 5 })
    .setPosition(25, 7, 0, 0).build());
}

/**
 * DEMO DATA: run addSampleData from the editor to fill the tracker with 70-90 realistic sample enquiries spread over
 * the last 12 months (all marked Source = "sample"), so the Dashboard has something to show.
 * Run removeSampleData to delete every sample row again; real enquiries are never touched.
 */
function addSampleData() {
  var sheet = getSheet_();
  var first = ['Anita', 'David', 'Priya', 'Marco', 'Neha', 'Rahul', 'Sofia', 'Kenji', 'Aisha', 'Lukas', 'Meera', 'James',
    'Chen', 'Fatima', 'Arjun', 'Elena', 'Omar', 'Hannah', 'Vikram', 'Grace', 'Ravi', 'Isabel', 'Tom', 'Kavya'];
  var last = ['Rao', 'Lee', 'Shah', 'Rossi', 'Gupta', 'Mehta', 'Garcia', 'Tanaka', 'Khan', 'Becker', 'Iyer', 'Brown',
    'Wang', 'Hassan', 'Patel', 'Novak', 'Ali', 'Schmidt', 'Nair', 'Wilson', 'Desai', 'Lopez', 'Clark', 'Reddy'];
  var companies = ['OrthoMed Implants', 'CardioFlow', 'DentaCare Labs', 'RespiraTech', 'MedPlast', 'NeuroLink Devices',
    'SurgiTools', 'VitaCath', 'OptiLens Medical', 'BioSeal', 'Nova Diagnostics', 'FlexStent', ''];
  var phones = ['+91 9', '+1 555 01', '+44 7700 9', '+49 151 0', '+971 50 0', '+65 8'];
  // Services weighted the way enquiries usually arrive (biocompatibility and BEP/BER most often)
  var weighted = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
  var pick = function (a) { return a[Math.floor(Math.random() * a.length)]; };
  var n = 70 + Math.floor(Math.random() * 21); // 70-90
  var now = new Date();
  var rows = [];
  for (var i = 0; i < n; i++) {
    // More enquiries in recent months: square the random number to skew towards today
    var daysAgo = Math.floor(Math.pow(Math.random(), 1.6) * 360);
    var d = new Date(now.getTime() - daysAgo * 86400000);
    d.setHours(9 + Math.floor(Math.random() * 10), Math.floor(Math.random() * 60), 0, 0);
    var status;
    var r = Math.random();
    if (daysAgo < 3) status = r < 0.8 ? 'New' : 'Contacted';
    else if (daysAgo < 21) status = r < 0.25 ? 'New' : r < 0.6 ? 'Contacted' : r < 0.9 ? 'Proposal sent' : 'Spam';
    else status = r < 0.12 ? 'Contacted' : r < 0.32 ? 'Proposal sent' : r < 0.62 ? 'Won' : r < 0.9 ? 'Lost' : 'Spam';
    var f = pick(first), l = pick(last), co = pick(companies);
    rows.push([d, status, f + ' ' + l, (f + '.' + l).toLowerCase() + '@example.com',
      "'" + pick(phones) + String(Math.floor(1000000 + Math.random() * 8999999)), co, SERVICES[pick(weighted)],
      'Sample enquiry for the dashboard demo.', '', 'sample']);
  }
  var start = sheet.getLastRow() + 1;
  sheet.getRange(start, 1, rows.length, COLUMNS.length).setValues(rows);
  sheet.getRange(2, 1, sheet.getLastRow() - 1, COLUMNS.length).sort({ column: 1, ascending: true });
  formatSheet_(sheet); // widen the filter to cover the new rows
  SpreadsheetApp.getActiveSpreadsheet().toast(n + ' sample enquiries added. Run removeSampleData to delete them.', 'BIOTOX', 8);
}

/** Deletes every row whose Source is "sample" (from addSampleData or test posts). Real enquiries stay. */
function removeSampleData() {
  var sheet = getSheet_();
  var last = sheet.getLastRow();
  if (last < 2) return;
  var range = sheet.getRange(2, 1, last - 1, COLUMNS.length);
  var keep = range.getValues().filter(function (row) { return String(row[9]).toLowerCase() !== 'sample'; });
  var removed = last - 1 - keep.length;
  range.clearContent();
  if (keep.length) sheet.getRange(2, 1, keep.length, COLUMNS.length).setValues(keep);
  formatSheet_(sheet);
  SpreadsheetApp.getActiveSpreadsheet().toast(removed + ' sample rows removed.', 'BIOTOX', 8);
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
