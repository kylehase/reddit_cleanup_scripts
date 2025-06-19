// ==UserScript==
// @name         Reddit Comment Deleter
// @namespace    https://old.reddit.com/
// @version      1.1
// @description  Automatically delete all comments from old.reddit.com and reload until complete
// @author       github.com/kylehase
// @include      https://old.reddit.com/user/*/comments*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const storageKey = "commentDeleterActive";

  async function waitForYesLink(comment, timeout = 2000) {
    for (let i = 0; i < timeout / 100; i++) {
      const yesLink = comment.querySelector('form.del-button a.yes');
      if (yesLink && yesLink.textContent.trim().toLowerCase() === 'yes') {
        return yesLink;
      }
      await delay(100);
    }
    return null;
  }

  async function deleteAllComments() {
    const comments = Array.from(document.querySelectorAll('.thing.comment'));
    console.log(`Found ${comments.length} comments.`);
    for (const comment of comments) {
      const deleteLink = comment.querySelector('form.del-button a');
      if (!deleteLink || deleteLink.textContent.trim().toLowerCase() !== 'delete') continue;

      deleteLink.click();
      await delay(500);

      const yes = await waitForYesLink(comment);
      if (yes) {
        yes.click();
        console.log('Deleted a comment.');
        await delay(500);
      } else {
        console.warn('Yes link not found. Skipping comment.');
      }
    }
    return comments.length;
  }

  async function run() {
    if (localStorage.getItem(storageKey) === "true") {
      const deleted = await deleteAllComments();
      if (deleted > 0) {
        console.log("Reloading page for next batch...");
        setTimeout(() => location.reload(), 1500);
      } else {
        console.log("No comments left. Stopping.");
        localStorage.removeItem(storageKey);
      }
    }
  }

  function addUI() {
    if (window.hasRunCommentDeleterUI) return;
    window.hasRunCommentDeleterUI = true;

    const btn = document.createElement("button");
    btn.textContent = "🗑 Start Comment Deleter";
    btn.style = "position:fixed;top:10px;right:10px;z-index:9999;padding:8px;background:#ff4500;color:#fff;border:none;border-radius:4px;";
    btn.onclick = () => {
      localStorage.setItem(storageKey, "true");
      location.reload(); // restart with active flag
    };
    document.body.appendChild(btn);
  }

  function onReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Run everything
  onReady(() => {
    addUI();
    run();
  });

  // Fallback in case DOMContentLoaded never fires
  setTimeout(() => {
    if (!window.hasRunCommentDeleterUI) {
      console.warn("Fallback: DOM may be slow. Injecting button manually.");
      addUI();
    }
  }, 3000);
})();
