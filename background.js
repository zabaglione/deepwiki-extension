chrome.action.onClicked.addListener(async (tab) => {
    if (!tab || !tab.url) return;

    const url = new URL(tab.url);

    if (url.hostname === "github.com") {
        // GitHub → DeepWiki
        const paths = url.pathname.split("/").filter(Boolean);
        if (paths.length >= 2) {
            const user = paths[0];
            const repo = paths[1];
            const newUrl = `https://deepwiki.com/${user}/${repo}`;
            chrome.tabs.update(tab.id, { url: newUrl });
        }
    } else if (url.hostname === "deepwiki.com") {
        // DeepWiki → GitHub
        const paths = url.pathname.split("/").filter(Boolean);
        if (paths.length >= 2) {
            const user = paths[0];
            const repo = paths[1];
            const newUrl = `https://github.com/${user}/${repo}`;
            chrome.tabs.update(tab.id, { url: newUrl });
        }
    } else {
        // 他のページは無反応
        return;
    }
});
