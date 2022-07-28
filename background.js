
// ref: https://developer.chrome.com/docs/extensions/reference/tabs/#get-the-current-tab
async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

function refreshActiveFrameInTab(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['refresh_active_frame.js']
  });
}

chrome.action.onClicked.addListener((tab) => {
  refreshActiveFrameInTab(tab);
});

chrome.commands.onCommand.addListener(async (cmd) => {
  if (cmd == 'refresh-active-frame') {
    let tab = await getCurrentTab();
    if (!tab) {
    	return;
    }
    refreshActiveFrameInTab(tab);
  }
});
