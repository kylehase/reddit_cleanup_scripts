// ==UserScript==
// @name         Reddit Upvote Cleaner
// @namespace    https://old.reddit.com/
// @version      1.2
// @description  Click all upvotes on old Reddit upvoted page and auto-reload until done, with delay to avoid rate-limiting (429)
// @author       github.com/kylehase
// @include      https://old.reddit.com/user/*/upvoted*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const delay = ms => new Promise(r => setTimeout(r, ms));
  const storageKey = "upvoteCleanerActive";

  async function clickAllUpvotes() {
    const buttons = [...document.querySelectorAll('div.arrow.upmod.login-required.access-required')];
    console.log(`Clicking ${buttons.length} upvotes...`);
    for (const [i, b] of buttons.entries()) {
      console.log(`Clicking upvote ${i + 1}/${buttons.length}`);
      b.click();
      await delay(2000); // 2 second delay between clicks
    }
    return buttons.length;
  }

  async function run() {
    if (localStorage.getItem(storageKey) === "true") {
      const count = await clickAllUpvotes();
      if (count > 0) {
        console.log("Refreshing page...");
        setTimeout(() => location.reload(), 3000); // delay before reload for safety
      } else {
        console.log("All upvotes cleared. Stopping.");
        localStorage.removeItem(storageKey);
      }
    }
  }

  // Control toggle
  if (!window.hasRunUpvoteCleanerUI) {
    window.hasRunUpvoteCleanerUI = true;
    const btn = document.createElement("button");
    btn.textContent = "▶ Start Upvote Cleaner";
    btn.style = "position:fixed;top:10px;right:10px;z-index:9999;padding:8px;background:#ff4500;color:#fff;border:none;border-radius:4px;";
    btn.onclick = () => {
      localStorage.setItem(storageKey, "true");
      location.reload(); // force restart with flag
    };
    document.body.appendChild(btn);
  }

  run();
})();
