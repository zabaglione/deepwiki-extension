document.getElementById("to-deepwiki").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url.includes("github.com")) {
        const url = new URL(tab.url);
        const paths = url.pathname.split("/").filter(Boolean);
        if (paths.length >= 2) {
            const user = paths[0];
            const repo = paths[1];
            const newUrl = `https://deepwiki.com/${user}/${repo}`;
            chrome.tabs.update(tab.id, { url: newUrl });
        } else {
            alert("これはGitHubリポジトリページではありません。");
        }
    } else {
        alert("現在のタブはGitHubではありません。");
    }
});

document.getElementById("to-github").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url.includes("deepwiki.com")) {
        const url = new URL(tab.url);
        const paths = url.pathname.split("/").filter(Boolean);
        if (paths.length >= 2) {
            const user = paths[0];
            const repo = paths[1];
            const newUrl = `https://github.com/${user}/${repo}`;
            chrome.tabs.update(tab.id, { url: newUrl });
        } else {
            alert("これはDeepWikiリポジトリページではありません。");
        }
    } else {
        alert("現在のタブはDeepWikiではありません。");
    }
});
