let active = false;

// function makeOrange(color: string): void {
//     document.body.style.backgroundColor = color;
// }


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        chrome.tabs.executeScript(tabId, {
            file: "content-scripts.ts"
        });
    }
});

(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    if (tab.id !== undefined) {
        const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
        // do something with response here, not outside the function
        console.log(response);
    }
  })();
// chrome.action.onClicked.addListener((tab) => {
//     active = !active;
//     const color = active ? 'orange' : 'white';
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id ? tab.id : -1},
//         func: makeOrange,
//         args: [color]
//     }).then();
// });
