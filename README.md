# Reddit Cleanup Userscripts

This repository contains two Tampermonkey userscripts for cleaning up your Reddit account on [old.reddit.com](https://old.reddit.com):

- 🗑 **Reddit Comment Deleter** — Deletes all your comments, one page at a time
- 🔼 **Reddit Upvote Cleaner** — Removes all your upvotes by clicking each one, then reloading to continue

These scripts are designed to work with [Tampermonkey](https://www.tampermonkey.net/) in Chrome or other Chromium-based browsers.

---

## 🧩 Requirements

- [Tampermonkey](https://www.tampermonkey.net/) extension installed
- Logged into [old.reddit.com](https://old.reddit.com) with your Reddit account

---

## 📁 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Open the Tampermonkey dashboard and click **"Create a new script..."**.
3. Delete the default template and paste in the code from the script you want.
4. Click **File → Save**, then refresh the Reddit page.
5. For a visual guide, see:  
   👉 [How to Install Userscripts in Tampermonkey (Official FAQ)](https://www.tampermonkey.net/faq.php?ext=dhdg#Q102)
   
---

## 🗑 Reddit Comment Deleter

**URL match:** `https://old.reddit.com/user/<your_username>/comments`

### Features
- Automatically clicks **"delete"** on each comment and confirms
- Waits between actions to avoid rate-limiting
- Reloads the page to continue until all comments are removed
- Includes a UI button: **🗑 Start Comment Deleter**

### How to Use
1. Navigate to `https://old.reddit.com/user/YOUR_USERNAME/comments`
2. Click the button in the top-right corner: `🗑 Start Comment Deleter`
3. Let it run; it will reload the page and continue deleting until no comments remain

---

## 🔼 Reddit Upvote Cleaner

**URL match:** `https://old.reddit.com/user/<your_username>/upvoted`

### Features
- Clicks each upvote (which removes it)
- Reloads the page to load the next set of upvoted posts
- Continues until all upvotes are removed
- Includes a UI button: **▶ Start Upvote Cleaner**

### How to Use
1. Navigate to `https://old.reddit.com/user/YOUR_USERNAME/upvoted`
2. Click the button in the top-right corner: `▶ Start Upvote Cleaner`
3. It will process all upvotes and reload until none are left

---

## ⚠️ Warnings

- These actions are **irreversible**. Once deleted or unvoted, content cannot be restored.
- Use at your own risk.
- Reddit may rate-limit or throttle your actions if used too quickly or excessively.
- Deleted content may still exist on Reddit’s databases or appear "deleted" without being fully removed.
- Your data might also have been archived by third-party scrapers and could still be accessible elsewhere.

---

## 📁 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Add each script from this repo using the “Create a new script” option
3. Paste in the code for the script you want
4. Save and refresh the target Reddit page

---

## 📜 License

This project is licensed under the [Apache License 2.0](LICENSE).

---

## 💬 Feedback

Issues, suggestions, or improvements? Feel free to open an issue or submit a pull request.
