const SPREADSHEET_ID = '1-S5moHHAnTveFRxlgD8uCrvFHdcQu3wbwzvsPdnimDw';
const SHEET_NAME = 'Form Submissions';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const payload = JSON.parse(e.postData && e.postData.contents ? e.postData.contents : '{}');
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(spreadsheet);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Phone',
        'Email',
        'Details',
        'Page',
        'Language',
        'Submitted At'
      ]);
    }

    sheet.appendRow([
      new Date(),
      payload.name || '',
      payload.phone || '',
      payload.email || '',
      payload.details || '',
      payload.page || '',
      payload.language || '',
      payload.submittedAt || ''
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, message: 'Darb contact form endpoint is running.' });
}

function getOrCreateSheet_(spreadsheet) {
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
