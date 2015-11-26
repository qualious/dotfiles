(function() {
  var iframe, iframeStyle, lastTimeout, ref, ref1;

  if (~((ref = document.location) != null ? (ref1 = ref.pathname) != null ? ref1.indexOf('/chrome/newtab') : void 0 : void 0)) {
    return;
  }

  iframe = null;

  iframeStyle = {
    overflow: "hidden",
    position: "fixed",
    height: "70px",
    width: "70px",
    bottom: "7px",
    right: "11px",
    background: "none",
    border: "none",
    zIndex: "2147483646",
    "-webkit-user-select": "none"
  };

  chrome.runtime.sendMessage({
    subject: 'getWidgetStatus'
  });

  lastTimeout = null;

  window.onmessage = function(msg) {
    if (msg.data.action === 'zm:resize' && iframe) {
      clearTimeout(lastTimeout);
      return lastTimeout = setTimeout(function() {
        iframe.style.height = msg.data.height;
        return iframe.style.width = msg.data.width;
      }, msg.data.timeout || 10);
    }
  };

  chrome.runtime.onMessage.addListener(function(msg, sender) {
    var k, v;
    if (msg.subject === 'widgetStatus') {
      if (msg.payload.active) {
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.src = msg.payload.extUrl + "widget.html";
          for (k in iframeStyle) {
            v = iframeStyle[k];
            iframe.style[k] = v;
          }
          document.body.appendChild(iframe);
        }
        return iframe.style.display = 'block';
      } else {
        return iframe != null ? iframe.style.display = 'none' : void 0;
      }
    }
  });

}).call(this);
