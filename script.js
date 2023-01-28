document.getElementById("stats").addEventListener("click", function() {
    chrome.tabs.create({
        url:"https://everlook.org/stats/realms",
        active: true
    })
})