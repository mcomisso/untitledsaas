# Saving form submissions to a Google Sheet

The landing-page forms (call/booking form + platform waitlist) post to
**FormSubmit** for email delivery to `hello.rdmarketing@gmail.com`. This adds a
second, durable channel: every submission is also appended as a row in a Google
Sheet. Email and Sheet run in parallel — if one ever fails, the other still
captures the request.

The site is static (no backend), so the Sheet is fed by a **Google Apps Script
Web App** — a tiny script bound to the Sheet that accepts POSTs from the forms.

## One-time setup (do this from the `hello.rdmarketing@gmail.com` account)

1. **Create the Sheet.** Go to <https://sheets.new>, name it e.g.
   `Forj — Form Submissions`. (Tabs `Call Requests` and `Waitlist` are created
   automatically on first submission.)

2. **Add the script.** In the Sheet: **Extensions ▸ Apps Script**. Delete the
   placeholder code, then paste the entire contents of
   [`google-apps-script.gs`](google-apps-script.gs). Save (💾).

3. **Deploy as a Web App.** Click **Deploy ▸ New deployment**. Choose type
   **Web app**, then:
   - **Execute as:** Me (`hello.rdmarketing@gmail.com`)
   - **Who has access:** **Anyone**

   Click **Deploy**, authorize when prompted, and **copy the Web app URL**
   (looks like `https://script.google.com/macros/s/AKfy…/exec`).

4. **Wire up the site.** Open [`index.html`](index.html), find `GAS_ENDPOINT`
   (in the "Google Sheet Logging" script block near the bottom), and paste the
   URL between the quotes:

   ```js
   const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfy…/exec';
   ```

That's it. While `GAS_ENDPOINT` is empty the logging block does nothing and the
forms behave exactly as before — so it's safe to commit the code before the
Sheet exists.

## Test end-to-end

1. Open the site, submit the **call form** and the **waitlist form** with test data.
2. Confirm new rows appear in the `Call Requests` and `Waitlist` tabs.
3. Confirm the FormSubmit email still arrives at `hello.rdmarketing@gmail.com`
   (this requires the FormSubmit activation link to have been clicked — see the
   Trello card).

Health check: opening the Web app URL directly in a browser should print
`Forj form logger is running.`

## How it works

- `index.html` uses `navigator.sendBeacon` to POST each form's fields to the Web
  App. `sendBeacon` delivers reliably even as the call form navigates away to
  `thank-you.html`, and it never blocks or breaks the primary FormSubmit
  submission if the Sheet is unreachable.
- A hidden `form_type` value (`call-request` / `waitlist`) tells the script which
  tab to append to.
- The script (`doPost`) appends a timestamped row; it creates the tab with a
  bold, frozen header row on first use.

## Editing the script later

After changing `google-apps-script.gs` in the Apps Script editor, re-deploy:
**Deploy ▸ Manage deployments ▸ ✏️ ▸ Version: New ▸ Deploy**. The `/exec` URL
stays the same, so no HTML change is needed.
