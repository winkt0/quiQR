
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
    {
      id: "create-qr",
      title: "Create QR Code",
      contexts: ["selection"],
      checked: false,
    },
  );
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  if (item.menuItemId === "create-qr") {
    const url = "index.html?text=" + item.selectionText;
    chrome.windows.create({
      url: url,
      focused: true,
      type: "popup",
    });
  }
});

