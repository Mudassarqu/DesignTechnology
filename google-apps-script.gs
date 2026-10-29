/**
 * AIA Design Technology: score recorder.
 * Paste this whole file into Extensions > Apps Script in a Google Sheet, then follow SETUP.md.
 *
 * What it does
 *  - doPost: the website sends one score; this adds a row to the "Scores" tab.
 *  - doGet:  ?action=ping            -> "ok" (used by test-connection.html)
 *            ?action=mine&email=...  -> that student's own rows (used to test)
 *  - setup(): run once from the editor. Creates the Scores and Summary tabs.
 *  - testWrite(): run from the editor to add a test row without using the website.
 */
const SCORES = 'Scores';
const SUMMARY = 'Summary';
const HEADERS = ['Timestamp','Name','Email','Class','Topic','Activity','Score','Max','Percent','Seconds','Points','Streak','Extra'];

function scoresSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SCORES);
  if (!sh) { sh = ss.insertSheet(SCORES); sh.appendRow(HEADERS); sh.setFrozenRows(1); sh.getRange('I:I').setNumberFormat('0%');
    sh.getRange('B:F').setNumberFormat('@'); sh.getRange('M:M').setNumberFormat('@'); }  // plain text, so a typed =formula stays text
  return sh;
}

// Limits length. Text columns are formatted as plain text, so a name such as =HYPERLINK(...) is not run as a formula.
function clean_(v) {
  return String(v == null ? '' : v).slice(0, 200);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const r = JSON.parse(e.postData.contents);
    const max = Number(r.max) || 0, score = Number(r.score) || 0;
    scoresSheet_().appendRow([
      new Date(r.ts || Date.now()), clean_(r.name), clean_(String(r.email || '').toLowerCase()), clean_(r.cls),
      clean_(r.topic), clean_(r.activity), score, max, max ? score / max : '',
      Number(r.secs) || '', Number(r.points) || '', Number(r.streak) || '', clean_(r.extra)
    ]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  let out;
  if (p.action === 'mine') {
    const email = String(p.email || '').toLowerCase();
    out = !email ? [] : scoresSheet_().getDataRange().getValues().slice(1)
      .filter(r => String(r[2]).toLowerCase() === email)
      .map(r => ({ ts: r[0], topic: r[4], activity: r[5], score: r[6], max: r[7] }));
  } else {
    out = { ok: true, rows: Math.max(0, scoresSheet_().getLastRow() - 1) };
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor (select setup, press Run). */
function setup() {
  scoresSheet_();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sm = ss.getSheetByName(SUMMARY);
  if (!sm) sm = ss.insertSheet(SUMMARY);
  sm.clear();
  sm.getRange('A1').setFormula(
    '=QUERY(Scores!A:M,"select B, C, D, count(A), avg(I), max(K) where A is not null group by B, C, D ' +
    'label count(A) \'Attempts\', avg(I) \'Average %\', max(K) \'Best live-quiz points\'",1)');
  sm.getRange('E:E').setNumberFormat('0%');
  sm.setFrozenRows(1);
  SpreadsheetApp.getActiveSpreadsheet().toast('Scores and Summary tabs are ready.');
}

/** Adds one test row from the editor, so you can check permissions without the website. */
function testWrite() {
  scoresSheet_().appendRow([new Date(), 'Test Teacher', 'teacher@test.local', 'G12 DT', 'a1-1', 'Quiz', 18, 23, 18 / 23, '', '', '', 'testWrite from editor']);
}
