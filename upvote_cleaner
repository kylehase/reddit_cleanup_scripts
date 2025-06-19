// ==UserScript==
// @name         Reddit Upvote Cleaner
// @namespace    https://old.reddit.com/
// @version      1.1
// @description  Click all upvotes on old Reddit upvoted page and auto-reload until done
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
    for (const b of buttons) {
      b.click();
      await delay(300);
    }
    return buttons.length;
  }

  async function run() {
    if (localStorage.getItem(storageKey) === "true") {
      const count = await clickAllUpvotes();
      if (count > 0) {
        console.log("Refreshing page...");
        setTimeout(() => location.reload(), 1500);
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
