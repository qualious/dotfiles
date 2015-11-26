(function() {
  var inject, injectFn, script;

  injectFn = function() {
    return window.__zm = {
      toggle: function(enabled) {
        return document.dispatchEvent(new CustomEvent('toggle', {
          detail: enabled
        }));
      },
      setPageExcludes: function(list) {
        return document.dispatchEvent(new CustomEvent('setPageExcludes', {
          detail: list
        }));
      },
      update: function() {
        return document.dispatchEvent(new CustomEvent('updateZM'));
      },
      updateWithCredentials: function(creds) {
        return document.dispatchEvent(new CustomEvent('updateWithCredentials', {
          detail: creds
        }));
      },
      getData: function(cb) {
        var ts;
        ts = Date.now();
        document.dispatchEvent(new CustomEvent('request:getData', {
          detail: ts
        }));
        return document.addEventListener('response:getData', function(e) {
          if (e.detail.timestamp === ts && (cb != null)) {
            return cb({
              user: e.detail.user,
              device: e.detail.device
            });
          }
        });
      }
    };
  };

  inject = "(" + injectFn + ")();";

  document.addEventListener('toggle', function(e) {
    return chrome.runtime.sendMessage({
      subject: 'toggle',
      payload: e.detail
    });
  });

  document.addEventListener('setPageExcludes', function(e) {
    return chrome.runtime.sendMessage({
      subject: 'setPageExcludes',
      payload: e.detail
    });
  });

  document.addEventListener('updateZM', function(e) {
    return chrome.runtime.sendMessage({
      subject: 'update'
    });
  });

  document.addEventListener('updateWithCredentials', function(e) {
    return chrome.runtime.sendMessage({
      subject: 'updateWithCredentials',
      payload: e.detail
    });
  });

  document.addEventListener('request:getData', function(e) {
    return chrome.runtime.sendMessage({
      subject: 'request:getData',
      payload: {
        timestamp: e.detail
      }
    });
  });

  chrome.runtime.onMessage.addListener(function(msg, sender) {
    if (msg != null ? msg.subject : void 0) {
      return document.dispatchEvent(new CustomEvent(msg.subject, {
        detail: msg.payload
      }));
    }
  });

  script = document.createElement('script');

  script.innerHTML = inject;

  (document.body || document.head || document.documentElement).appendChild(script);

}).call(this);
