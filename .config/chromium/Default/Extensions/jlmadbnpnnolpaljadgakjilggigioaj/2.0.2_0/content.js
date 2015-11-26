window.addEventListener('keydown', function(event) {
    if (event.keyCode == 16) {
        chrome.runtime.sendMessage({
            shift: true
        });
    }
});

window.addEventListener('keyup', function(event) {
    if (event.keyCode == 16) {
        chrome.runtime.sendMessage({
            shift: false
        });
    }
});