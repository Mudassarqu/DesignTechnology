# Setup: save student scores to a Google Sheet

You do this once. It takes about 5 minutes.

1. Create a new Google Sheet (name it "AIA DT Scores").
2. Open **Extensions > Apps Script**. Delete any code, paste everything from `google-apps-script.gs`, and click **Save**.
3. In the editor, choose the function **setup** in the drop-down and click **Run**. Approve the permissions when asked. This creates the `Scores` and `Summary` tabs. (Google shows an "unverified app" warning because it is your own script: click Advanced, then Go to the project.)
4. Click **Deploy > New deployment**, choose type **Web app**, then set:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and copy the **Web app URL** (it ends in `/exec`).
6. Open `js/config.js` and paste the URL between the quotes of `SHEET_URL`. Save and upload to GitHub.
7. **Test it:** open `test-connection.html` on your site (or from the unzipped folder), press **Send a test score**, and check that a row appears in the `Scores` tab. Then try a quiz as a student.

Optional: set `ALLOWED_DOMAIN` in `js/config.js` to your school email domain so only school emails can sign in.

## Things to know

- **Sign-in is a name and email the student types.** It labels scores for your records. It does not prove who the person is, so a student could type someone else's email. It is fine for practice and progress tracking. Do not use these scores for formal grades.
- Anyone who has the web app URL can send rows to the sheet. Do not share the URL outside the site. If it leaks, make a new deployment and update `config.js`.
- The `Summary` tab shows each student's attempts and average percentage. Percent is stored as a fraction and shown as a %.
- In the sheet, add a Pivot table or filter by Class, Topic and Activity to see who has practised.
- If you change the script later, use **Deploy > Manage deployments > Edit > New version**.

## Adding more slide decks

Put each `.pptx` in the `resources/` folder and link it from the topic data file. GitHub accepts files up to 100 MB. Several of your decks are 35 to 52 MB, so they will upload, but the repository will grow quickly. If you prefer, store the decks in Google Drive and link them instead.
