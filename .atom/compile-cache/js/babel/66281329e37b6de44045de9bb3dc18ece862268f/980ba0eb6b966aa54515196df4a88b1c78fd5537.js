'use babel';

function mouseEvent(type, properties) {
  var defaults = {
    bubbles: true,
    cancelable: type !== 'mousemove',
    view: window,
    detail: 0,
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    button: 0,
    relatedTarget: undefined
  };

  for (var k in defaults) {
    var v = defaults[k];
    if (!(properties[k] != null)) {
      properties[k] = v;
    }
  }

  return new MouseEvent(type, properties);
}

function touchEvent(type, touches) {
  var event = new Event(type, {
    bubbles: true,
    cancelable: true,
    view: window,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    relatedTarget: undefined
  });
  event.touches = event.changedTouches = event.targetTouches = touches;

  return event;
}

function objectCenterCoordinates(obj) {
  var _obj$getBoundingClientRect = obj.getBoundingClientRect();

  var top = _obj$getBoundingClientRect.top;
  var left = _obj$getBoundingClientRect.left;
  var width = _obj$getBoundingClientRect.width;
  var height = _obj$getBoundingClientRect.height;

  return { x: left + width / 2, y: top + height / 2 };
}

function exists(value) {
  return typeof value !== 'undefined' && value !== null;
}

module.exports = { objectCenterCoordinates: objectCenterCoordinates, mouseEvent: mouseEvent };['mousedown', 'mousemove', 'mouseup', 'click'].forEach(function (key) {
  module.exports[key] = function (obj) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var x = _ref.x;
    var y = _ref.y;
    var cx = _ref.cx;
    var cy = _ref.cy;
    var btn = _ref.btn;

    if (!(typeof x !== 'undefined' && x !== null && typeof y !== 'undefined' && y !== null)) {
      var o = objectCenterCoordinates(obj);
      x = o.x;
      y = o.y;
    }

    if (!(typeof cx !== 'undefined' && cx !== null && typeof cy !== 'undefined' && cy !== null)) {
      cx = x;
      cy = y;
    }

    obj.dispatchEvent(mouseEvent(key, {
      pageX: x, pageY: y, clientX: cx, clientY: cy, button: btn
    }));
  };
});

module.exports.mousewheel = function (obj) {
  var deltaX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var deltaY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  obj.dispatchEvent(mouseEvent('mousewheel', { deltaX: deltaX, deltaY: deltaY }));
};['touchstart', 'touchmove', 'touchend'].forEach(function (key) {
  module.exports[key] = function (obj, touches) {
    if (!Array.isArray(touches)) {
      touches = [touches];
    }

    touches.forEach(function (touch) {
      if (!exists(touch.target)) {
        touch.target = obj;
      }

      if (!(exists(touch.pageX) && exists(touch.pageY))) {
        var o = objectCenterCoordinates(obj);
        touch.pageX = exists(touch.x) ? touch.x : o.x;
        touch.pageY = exists(touch.y) ? touch.y : o.y;
      }

      if (!(exists(touch.clientX) && exists(touch.clientY))) {
        touch.clientX = touch.pageX;
        touch.clientY = touch.pageY;
      }
    });

    obj.dispatchEvent(touchEvent(key, touches));
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9zcGVjL2hlbHBlcnMvZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsQ0FBQTs7QUFFWCxTQUFTLFVBQVUsQ0FBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQ3JDLE1BQUksUUFBUSxHQUFHO0FBQ2IsV0FBTyxFQUFFLElBQUk7QUFDYixjQUFVLEVBQUcsSUFBSSxLQUFLLFdBQVcsQUFBQztBQUNsQyxRQUFJLEVBQUUsTUFBTTtBQUNaLFVBQU0sRUFBRSxDQUFDO0FBQ1QsU0FBSyxFQUFFLENBQUM7QUFDUixTQUFLLEVBQUUsQ0FBQztBQUNSLFdBQU8sRUFBRSxDQUFDO0FBQ1YsV0FBTyxFQUFFLENBQUM7QUFDVixXQUFPLEVBQUUsS0FBSztBQUNkLFVBQU0sRUFBRSxLQUFLO0FBQ2IsWUFBUSxFQUFFLEtBQUs7QUFDZixXQUFPLEVBQUUsS0FBSztBQUNkLFVBQU0sRUFBRSxDQUFDO0FBQ1QsaUJBQWEsRUFBRSxTQUFTO0dBQ3pCLENBQUE7O0FBRUQsT0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7QUFDdEIsUUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ25CLFFBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM1QixnQkFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNsQjtHQUNGOztBQUVELFNBQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0NBQ3hDOztBQUVELFNBQVMsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDbEMsTUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQzFCLFdBQU8sRUFBRSxJQUFJO0FBQ2IsY0FBVSxFQUFFLElBQUk7QUFDaEIsUUFBSSxFQUFFLE1BQU07QUFDWixX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QTtHQUM1QyxDQUFBO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6Ii9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9zcGVjL2hlbHBlcnMvZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuZnVuY3Rpb24gbW91c2VFdmVudCAodHlwZSwgcHJvcGVydGllcykge1xuICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiAodHlwZSAhPT0gJ21vdXNlbW92ZScpLFxuICAgIHZpZXc6IHdpbmRvdyxcbiAgICBkZXRhaWw6IDAsXG4gICAgcGFnZVg6IDAsXG4gICAgcGFnZVk6IDAsXG4gICAgY2xpZW50WDogMCxcbiAgICBjbGllbnRZOiAwLFxuICAgIGN0cmxLZXk6IGZhbHNlLFxuICAgIGFsdEtleTogZmFsc2UsXG4gICAgc2hpZnRLZXk6IGZhbHNlLFxuICAgIG1ldGFLZXk6IGZhbHNlLFxuICAgIGJ1dHRvbjogMCxcbiAgICByZWxhdGVkVGFyZ2V0OiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvciAobGV0IGsgaW4gZGVmYXVsdHMpIHtcbiAgICBsZXQgdiA9IGRlZmF1bHRzW2tdXG4gICAgaWYgKCEocHJvcGVydGllc1trXSAhPSBudWxsKSkge1xuICAgICAgcHJvcGVydGllc1trXSA9IHZcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IE1vdXNlRXZlbnQodHlwZSwgcHJvcGVydGllcylcbn1cblxuZnVuY3Rpb24gdG91Y2hFdmVudCAodHlwZSwgdG91Y2hlcykge1xuICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICB2aWV3OiB3aW5kb3csXG4gICAgY3RybEtleTogZmFsc2UsXG4gICAgYWx0S2V5OiBmYWxzZSxcbiAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgbWV0YUtleTogZmFsc2UsXG4gICAgcmVsYXRlZFRhcmdldDogdW5kZWZpbmVkXG4gIH0pXG4gIGV2ZW50LnRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LnRhcmdldFRvdWNoZXMgPSB0b3VjaGVzXG5cbiAgcmV0dXJuIGV2ZW50XG59XG5cbmZ1bmN0aW9uIG9iamVjdENlbnRlckNvb3JkaW5hdGVzIChvYmopIHtcbiAgbGV0IHt0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHR9ID0gb2JqLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiB7eDogbGVmdCArIHdpZHRoIC8gMiwgeTogdG9wICsgaGVpZ2h0IC8gMn1cbn1cblxuZnVuY3Rpb24gZXhpc3RzICh2YWx1ZSkge1xuICByZXR1cm4gKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge29iamVjdENlbnRlckNvb3JkaW5hdGVzLCBtb3VzZUV2ZW50fVxuXG47Wydtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnY2xpY2snXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgbW9kdWxlLmV4cG9ydHNba2V5XSA9IGZ1bmN0aW9uIChvYmosIHt4LCB5LCBjeCwgY3ksIGJ0bn0gPSB7fSkge1xuICAgIGlmICghKCh0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgJiYgeCAhPT0gbnVsbCkgJiYgKHR5cGVvZiB5ICE9PSAndW5kZWZpbmVkJyAmJiB5ICE9PSBudWxsKSkpIHtcbiAgICAgIGxldCBvID0gb2JqZWN0Q2VudGVyQ29vcmRpbmF0ZXMob2JqKVxuICAgICAgeCA9IG8ueFxuICAgICAgeSA9IG8ueVxuICAgIH1cblxuICAgIGlmICghKCh0eXBlb2YgY3ggIT09ICd1bmRlZmluZWQnICYmIGN4ICE9PSBudWxsKSAmJiAodHlwZW9mIGN5ICE9PSAndW5kZWZpbmVkJyAmJiBjeSAhPT0gbnVsbCkpKSB7XG4gICAgICBjeCA9IHhcbiAgICAgIGN5ID0geVxuICAgIH1cblxuICAgIG9iai5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQoa2V5LCB7XG4gICAgICBwYWdlWDogeCwgcGFnZVk6IHksIGNsaWVudFg6IGN4LCBjbGllbnRZOiBjeSwgYnV0dG9uOiBidG5cbiAgICB9KSlcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMubW91c2V3aGVlbCA9IGZ1bmN0aW9uIChvYmosIGRlbHRhWCA9IDAsIGRlbHRhWSA9IDApIHtcbiAgb2JqLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCgnbW91c2V3aGVlbCcsIHtkZWx0YVgsIGRlbHRhWX0pKVxufVxuXG47Wyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCddLmZvckVhY2goKGtleSkgPT4ge1xuICBtb2R1bGUuZXhwb3J0c1trZXldID0gZnVuY3Rpb24gKG9iaiwgdG91Y2hlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0b3VjaGVzKSkge1xuICAgICAgdG91Y2hlcyA9IFt0b3VjaGVzXVxuICAgIH1cblxuICAgIHRvdWNoZXMuZm9yRWFjaCgodG91Y2gpID0+IHtcbiAgICAgIGlmICghZXhpc3RzKHRvdWNoLnRhcmdldCkpIHtcbiAgICAgICAgdG91Y2gudGFyZ2V0ID0gb2JqXG4gICAgICB9XG5cbiAgICAgIGlmICghKGV4aXN0cyh0b3VjaC5wYWdlWCkgJiYgZXhpc3RzKHRvdWNoLnBhZ2VZKSkpIHtcbiAgICAgICAgbGV0IG8gPSBvYmplY3RDZW50ZXJDb29yZGluYXRlcyhvYmopXG4gICAgICAgIHRvdWNoLnBhZ2VYID0gZXhpc3RzKHRvdWNoLngpID8gdG91Y2gueCA6IG8ueFxuICAgICAgICB0b3VjaC5wYWdlWSA9IGV4aXN0cyh0b3VjaC55KSA/IHRvdWNoLnkgOiBvLnlcbiAgICAgIH1cblxuICAgICAgaWYgKCEoZXhpc3RzKHRvdWNoLmNsaWVudFgpICYmIGV4aXN0cyh0b3VjaC5jbGllbnRZKSkpIHtcbiAgICAgICAgdG91Y2guY2xpZW50WCA9IHRvdWNoLnBhZ2VYXG4gICAgICAgIHRvdWNoLmNsaWVudFkgPSB0b3VjaC5wYWdlWVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvYmouZGlzcGF0Y2hFdmVudCh0b3VjaEV2ZW50KGtleSwgdG91Y2hlcykpXG4gIH1cbn0pXG4iXX0=
//# sourceURL=/home/qual/.atom/packages/minimap/spec/helpers/events.js