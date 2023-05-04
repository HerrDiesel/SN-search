chrome.runtime.onInstalled.addListener(() => {
    let contextMenuItem = {
        "id": "searchSN",
        "title": chrome.i18n.getMessage('title'),
        "contexts": ["selection"]
    };
      
    chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "searchSN" && clickData.selectionText) {
        chrome.tabs.create({url: "https://www.sn.pl/orzecznictwo/SitePages/Baza_orzeczen.aspx?Sygnatura=" + clickData.selectionText});
    }
});
