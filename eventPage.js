
var refreshActiveFrameInCurrentTab = function () {
    chrome.tabs.executeScript({
        file: 'refresh_active_frame.js'
    });
};

chrome.browserAction.onClicked.addListener(function(tab) {
    refreshActiveFrameInCurrentTab();
});

chrome.commands.onCommand.addListener(function(cmd) {
    if (cmd == 'refresh-active-frame')
    {
        refreshActiveFrameInCurrentTab();
    }
});
