/**
 * Forj Intel — form submission logger
 *
 * Receives POSTs from the landing-page forms (call/booking form + platform
 * waitlist) and appends each submission as a row in the bound spreadsheet.
 * This runs ALONGSIDE FormSubmit email delivery — it is the durable record so
 * that "no submissions are silently lost" (Trello card DAXSx7oI).
 *
 * Deploy:  Deploy ▸ New deployment ▸ Web app
 *            - Execute as:      Me
 *            - Who has access:  Anyone
 *          Copy the resulting Web app URL into GAS_ENDPOINT in index.html.
 *
 * Re-deploy after any edit:  Deploy ▸ Manage deployments ▸ (edit) ▸ Version: New.
 */

function doPost(e) {
  try {
    var params = (e && e.parameter) ? e.parameter : {};
    var formType = params.form_type || 'unknown';
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (formType === 'waitlist') {
      appendRow_(ss, 'Waitlist',
        ['Timestamp', 'Email', 'Source'],
        [new Date(), params.email || '', params.source || '']);
    } else {
      // call-request (and any unknown form) lands here
      appendRow_(ss, 'Call Requests',
        ['Timestamp', 'Name', 'Email', 'Channel URL', 'Call Type', 'Preferred Times'],
        [new Date(),
         params.name || '',
         params.email || '',
         params.channel_url || '',
         params.call_type || '',
         params.preferred_times || '']);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Simple health check — open the Web app URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('Forj form logger is running.');
}

function appendRow_(ss, sheetName, headers, row) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  sheet.appendRow(row);
}
