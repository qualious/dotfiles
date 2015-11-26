(function() {
  var showMessage;

  chrome.runtime.sendMessage({
    subject: 'getWidgetMessage'
  });

  showMessage = function() {
    window.top.postMessage({
      action: 'zm:resize',
      height: "400px",
      width: "375px"
    }, '*');
    return setTimeout(function() {
      document.getElementById('button').classList.toggle('active', true);
      return document.getElementById('message').classList.toggle('hidden', false);
    }, 50);
  };

  chrome.runtime.onMessage.addListener(function(msg, sender) {
    var messages;
    if (msg.subject !== 'widgetMessage') {
      return;
    }
    messages = msg.payload.messages;
    if (messages) {
      document.getElementById('heading').textContent = messages.heading;
      document.getElementById('copy').textContent = messages.message;
      document.getElementById('upgrade').textContent = messages.cta;
      document.getElementById('later').textContent = messages.dismiss;
    }
    if (msg.payload.show) {
      return showMessage();
    } else {
      document.getElementById('button').classList.toggle('active', false);
      return document.getElementById('message').classList.toggle('hidden', true);
    }
  });

  document.getElementById('upgrade').addEventListener('click', function() {
    chrome.runtime.sendMessage({
      subject: 'getPremium'
    });
    return window.top.postMessage({
      action: 'zm:resize',
      height: "70px",
      width: "70px",
      timeout: 500
    }, '*');
  });

  document.getElementById('later').addEventListener('click', function() {
    window.top.postMessage({
      action: 'zm:resize',
      height: "0px",
      width: "0px",
      timeout: 200
    }, '*');
    return chrome.runtime.sendMessage({
      subject: 'dismiss'
    });
  });

  document.getElementById('button').addEventListener('click', function() {
    if (document.getElementById('message').classList.contains('hidden')) {
      return showMessage();
    } else {
      document.getElementById('button').classList.toggle('active', false);
      document.getElementById('message').classList.toggle('hidden', true);
      chrome.runtime.sendMessage({
        subject: 'hideMessage'
      });
      return window.top.postMessage({
        action: 'zm:resize',
        height: "70px",
        width: "70px",
        timeout: 500
      }, '*');
    }
  });

}).call(this);
