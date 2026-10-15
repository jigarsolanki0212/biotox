/**
 * BIOTOX website enquiries -> Google Sheet + email alert.
 *
 * Setup (once):
 * 1. Create a Google Sheet, then Extensions -> Apps Script, and paste this whole file over the default code.
 * 2. Project Settings (gear) -> Script Properties -> add:
 *      SECRET   = the same long random value you put in Vercel as LEAD_WEBHOOK_SECRET
 *      NOTIFY   = enquiry@medregbiotox.com   (where alerts go; comma-separate for several)
 * 3. Deploy -> New deployment -> type "Web app" -> Execute as: Me, Who has access: Anyone -> Deploy,
 *    authorise, and copy the Web app URL into Vercel as LEAD_WEBHOOK_URL.
 */

var COLUMNS = ['Received', 'Full name', 'Email', 'Phone', 'Company', 'Service required', 'Message', 'Source'];

function doPost(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    if (!props.getProperty('SECRET') || data.token !== props.getProperty('SECRET')) {
      return reply_({ ok: false, error: 'unauthorised' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS);
      sheet.setFrozenRows(1);
    }
    // Prefix values that a spreadsheet would treat as formulas, so nobody can inject one.
    var safe = function (v) {
      v = String(v == null ? '' : v);
      return /^[=+\-@]/.test(v) ? "'" + v : v;
    };
    sheet.appendRow([
      new Date(),
      safe(data['Full name']),
      safe(data['Email']),
      safe(data['Phone']),
      safe(data['Company']),
      safe(data['Service required']),
      safe(data['Message']),
      safe(data.source),
    ]);

    var notify = props.getProperty('NOTIFY');
    if (notify) {
      var body = COLUMNS.slice(1, 7).map(function (k) { return k + ': ' + (data[k] || '—'); }).join('\n');
      MailApp.sendEmail({
        to: notify,
        replyTo: data['Email'] || undefined,
        subject: data.subject || 'New website enquiry',
        body: body + '\n\nAll enquiries: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      });
    }
    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false, error: String(err) });
  }
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
