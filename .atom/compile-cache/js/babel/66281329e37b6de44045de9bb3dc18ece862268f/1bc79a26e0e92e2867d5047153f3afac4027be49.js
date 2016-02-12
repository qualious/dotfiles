Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mixto = require('mixto');

var _mixto2 = _interopRequireDefault(_mixto);

/**
 * This mixin is used by the `CanvasDrawer` in `MinimapElement` to
 * read the styles informations from the DOM to use when rendering
 * the `Minimap`.
 */
'use babel';

var DOMStylesReader = (function (_Mixin) {
  _inherits(DOMStylesReader, _Mixin);

  function DOMStylesReader() {
    _classCallCheck(this, DOMStylesReader);

    _get(Object.getPrototypeOf(DOMStylesReader.prototype), 'constructor', this).apply(this, arguments);
  }

  //    ##     ## ######## ##       ########  ######## ########   ######
  //    ##     ## ##       ##       ##     ## ##       ##     ## ##    ##
  //    ##     ## ##       ##       ##     ## ##       ##     ## ##
  //    ######### ######   ##       ########  ######   ########   ######
  //    ##     ## ##       ##       ##        ##       ##   ##         ##
  //    ##     ## ##       ##       ##        ##       ##    ##  ##    ##
  //    ##     ## ######## ######## ##        ######## ##     ##  ######

  /**
   * Computes the hue rotation on the provided `r`, `g` and `b` channels
   * by the amount of `angle`.
   *
   * @param  {number} r the red channel of the color to rotate
   * @param  {number} g the green channel of the color to rotate
   * @param  {number} b the blue channel of the color to rotate
   * @param  {number} angle the angle to rotate the hue with
   * @return {Array<number>} the rotated color channels
   * @access private
   */

  _createClass(DOMStylesReader, [{
    key: 'retrieveStyleFromDom',

    /**
     * Returns the computed values for the given property and scope in the DOM.
     *
     * This function insert a dummy element in the DOM to compute
     * its style, return the specified property, and clear the content of the
     * dummy element.
     *
     * @param  {Array<string>} scopes a list of classes reprensenting the scope
     *                                to build
     * @param  {string} property the name of the style property to compute
     * @param  {boolean} [shadowRoot=true] whether to compute the style inside
     *                                     a shadow DOM or not
     * @param  {boolean} [cache=true] whether to cache the computed value or not
     * @return {string} the computed property's value
     */
    value: function retrieveStyleFromDom(scopes, property) {
      var shadowRoot = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
      var cache = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

      this.ensureCache();

      var key = scopes.join(' ');
      var cachedData = this.constructor.domStylesCache[key];

      if (cache && (cachedData ? cachedData[property] : void 0) != null) {
        return cachedData[property];
      }

      this.ensureDummyNodeExistence(shadowRoot);

      if (!cachedData) {
        this.constructor.domStylesCache[key] = cachedData = {};
      }

      var parent = this.dummyNode;
      for (var i = 0, len = scopes.length; i < len; i++) {
        var scope = scopes[i];
        var node = document.createElement('span');
        node.className = scope.replace(/\.+/g, ' ');

        if (parent != null) {
          parent.appendChild(node);
        }

        parent = node;
      }

      var style = window.getComputedStyle(parent);
      var filter = style.getPropertyValue('-webkit-filter');
      var value = style.getPropertyValue(property);

      if (filter.indexOf('hue-rotate') > -1) {
        value = this.rotateHue(value, filter);
      }

      if (value !== '') {
        cachedData[property] = value;
      }

      this.dummyNode.innerHTML = '';
      return value;
    }

    /**
     * Creates a DOM node container for all the operations that need to read
     * styles properties from DOM.
     *
     * @param  {boolean} shadowRoot whether to create the dummy node in the shadow
     *                              DOM or not
     * @access private
     */
  }, {
    key: 'ensureDummyNodeExistence',
    value: function ensureDummyNodeExistence(shadowRoot) {
      if (this.dummyNode == null) {
        /**
         * @access private
         */
        this.dummyNode = document.createElement('span');
        this.dummyNode.style.visibility = 'hidden';
      }

      this.getDummyDOMRoot(shadowRoot).appendChild(this.dummyNode);
    }

    /**
     * Ensures the presence of the cache object in the class that received
     * this mixin.
     *
     * @access private
     */
  }, {
    key: 'ensureCache',
    value: function ensureCache() {
      if (!this.constructor.domStylesCache) {
        this.constructor.domStylesCache = {};
      }
    }

    /**
     * Invalidates the cache by emptying the cache object.
     */
  }, {
    key: 'invalidateDOMStylesCache',
    value: function invalidateDOMStylesCache() {
      this.constructor.domStylesCache = {};
    }

    /**
     * Invalidates the cache only for the first tokenization event.
     *
     * @access private
     */
  }, {
    key: 'invalidateIfFirstTokenization',
    value: function invalidateIfFirstTokenization() {
      if (this.constructor.hasTokenizedOnce) {
        return;
      }
      this.invalidateDOMStylesCache();
      this.constructor.hasTokenizedOnce = true;
    }

    /**
     * Computes the output color of `value` with a rotated hue defined
     * in `filter`.
     *
     * @param  {string} value the CSS color to apply the rotation on
     * @param  {string} filter the CSS hue rotate filter declaration
     * @return {string} the rotated CSS color
     * @access private
     */
  }, {
    key: 'rotateHue',
    value: function rotateHue(value, filter) {
      var match = value.match(/rgb(a?)\((\d+), (\d+), (\d+)(, (\d+(\.\d+)?))?\)/);

      var _match = _slicedToArray(match, 7);

      var r = _match[2];
      var g = _match[3];
      var b = _match[4];
      var a = _match[6];

      var _filter$match = filter.match(/hue-rotate\((\d+)deg\)/);

      var _filter$match2 = _slicedToArray(_filter$match, 2);

      var hue = _filter$match2[1];

      var _map = [r, g, b, a, hue].map(Number);

      var _map2 = _slicedToArray(_map, 5);

      r = _map2[0];
      g = _map2[1];
      b = _map2[2];
      a = _map2[3];
      hue = _map2[4];

      var _rotate = rotate(r, g, b, hue);

      var _rotate2 = _slicedToArray(_rotate, 3);

      r = _rotate2[0];
      g = _rotate2[1];
      b = _rotate2[2];

      if (isNaN(a)) {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      } else {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
      }
    }
  }]);

  return DOMStylesReader;
})(_mixto2['default']);

exports['default'] = DOMStylesReader;
function rotate(r, g, b, angle) {
  var matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  var lumR = 0.2126;
  var lumG = 0.7152;
  var lumB = 0.0722;
  var hueRotateR = 0.143;
  var hueRotateG = 0.140;
  var hueRotateB = 0.283;
  var cos = Math.cos(angle * Math.PI / 180);
  var sin = Math.sin(angle * Math.PI / 180);

  matrix[0] = lumR + (1 - lumR) * cos - lumR * sin;
  matrix[1] = lumG - lumG * cos - lumG * sin;
  matrix[2] = lumB - lumB * cos + (1 - lumB) * sin;
  matrix[3] = lumR - lumR * cos + hueRotateR * sin;
  matrix[4] = lumG + (1 - lumG) * cos + hueRotateG * sin;
  matrix[5] = lumB - lumB * cos - hueRotateB * sin;
  matrix[6] = lumR - lumR * cos - (1 - lumR) * sin;
  matrix[7] = lumG - lumG * cos + lumG * sin;
  matrix[8] = lumB + (1 - lumB) * cos + lumB * sin;

  return [clamp(matrix[0] * r + matrix[1] * g + matrix[2] * b), clamp(matrix[3] * r + matrix[4] * g + matrix[5] * b), clamp(matrix[6] * r + matrix[7] * g + matrix[8] * b)];

  function clamp(num) {
    return Math.ceil(Math.max(0, Math.min(255, num)));
  }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvbWl4aW5zL2RvbS1zdHlsZXMtcmVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBRWtCLE9BQU87Ozs7Ozs7OztBQUZ6QixXQUFXLENBQUE7O0lBU1UsZUFBZTtZQUFmLGVBQWU7O1dBQWYsZUFBZTswQkFBZixlQUFlOzsrQkFBZixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQWdCYiw4QkFBQyxNQUFNLEVBQUUsUUFBUSxFQUFtQztVQUFqQyxVQUFVLHlEQUFHLElBQUk7VUFBRSxLQUFLLHlEQUFHLElBQUk7O0FBQ3JFLFVBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTs7QUFFbEIsVUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMxQixVQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFckQsVUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFBLElBQUssSUFBSSxFQUFFO0FBQ2pFLGVBQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO09BQzVCOztBQUVELFVBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQTs7QUFFekMsVUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNmLFlBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUE7T0FDdkQ7O0FBRUQsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtBQUMzQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcs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QUFJLEdBQUksSUFBSSxHQUFHLEdBQUcsQUFBQyxHQUFJLElBQUksR0FBRyxHQUFHLEFBQUMsQ0FBQTtBQUM5QyxRQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFJLElBQUksR0FBRyxHQUFHLEFBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUEsR0FBSSxHQUFHLENBQUE7QUFDbEQsUUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBSSxJQUFJLEdBQUcsR0FBRyxBQUFDLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQTtBQUNsRCxRQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQSxHQUFJLEdBQUcsR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFBO0FBQ3RELFFBQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUksSUFBSSxHQUFHLEdBQUcsQUFBQyxHQUFJLFVBQVUsR0FBRyxHQUFHLEFBQUMsQ0FBQTtBQUNwRCxRQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFJLElBQUksR0FBRyxHQUFHLEFBQUMsR0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUEsR0FBSSxHQUFHLEFBQUMsQ0FBQTtBQUNwRCxRQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFJLElBQUksR0FBRyxHQUFHLEFBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFBO0FBQzVDLFFBQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBLEdBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUE7O0FBRWhELFNBQU8sQ0FDTCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3BELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNyRCxDQUFBOztBQUVELFdBQVMsS0FBSyxDQUFFLEdBQUcsRUFBRTtBQUNuQixXQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQ2xEO0NBQ0YiLCJmaWxlIjoiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwL2xpYi9taXhpbnMvZG9tLXN0eWxlcy1yZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgTWl4aW4gZnJvbSAnbWl4dG8nXG5cbi8qKlxuICogVGhpcyBtaXhpbiBpcyB1c2VkIGJ5IHRoZSBgQ2FudmFzRHJhd2VyYCBpbiBgTWluaW1hcEVsZW1lbnRgIHRvXG4gKiByZWFkIHRoZSBzdHlsZXMgaW5mb3JtYXRpb25zIGZyb20gdGhlIERPTSB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAqIHRoZSBgTWluaW1hcGAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTVN0eWxlc1JlYWRlciBleHRlbmRzIE1peGluIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIHZhbHVlcyBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IGFuZCBzY29wZSBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGluc2VydCBhIGR1bW15IGVsZW1lbnQgaW4gdGhlIERPTSB0byBjb21wdXRlXG4gICAqIGl0cyBzdHlsZSwgcmV0dXJuIHRoZSBzcGVjaWZpZWQgcHJvcGVydHksIGFuZCBjbGVhciB0aGUgY29udGVudCBvZiB0aGVcbiAgICogZHVtbXkgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIGEgbGlzdCBvZiBjbGFzc2VzIHJlcHJlbnNlbnRpbmcgdGhlIHNjb3BlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBidWlsZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb3BlcnR5IHRoZSBuYW1lIG9mIHRoZSBzdHlsZSBwcm9wZXJ0eSB0byBjb21wdXRlXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IFtzaGFkb3dSb290PXRydWVdIHdoZXRoZXIgdG8gY29tcHV0ZSB0aGUgc3R5bGUgaW5zaWRlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgc2hhZG93IERPTSBvciBub3RcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gW2NhY2hlPXRydWVdIHdoZXRoZXIgdG8gY2FjaGUgdGhlIGNvbXB1dGVkIHZhbHVlIG9yIG5vdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBjb21wdXRlZCBwcm9wZXJ0eSdzIHZhbHVlXG4gICAqL1xuICByZXRyaWV2ZVN0eWxlRnJvbURvbSAoc2NvcGVzLCBwcm9wZXJ0eSwgc2hhZG93Um9vdCA9IHRydWUsIGNhY2hlID0gdHJ1ZSkge1xuICAgIHRoaXMuZW5zdXJlQ2FjaGUoKVxuXG4gICAgbGV0IGtleSA9IHNjb3Blcy5qb2luKCcgJylcbiAgICBsZXQgY2FjaGVkRGF0YSA9IHRoaXMuY29uc3RydWN0b3IuZG9tU3R5bGVzQ2FjaGVba2V5XVxuXG4gICAgaWYgKGNhY2hlICYmIChjYWNoZWREYXRhID8gY2FjaGVkRGF0YVtwcm9wZXJ0eV0gOiB2b2lkIDApICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBjYWNoZWREYXRhW3Byb3BlcnR5XVxuICAgIH1cblxuICAgIHRoaXMuZW5zdXJlRHVtbXlOb2RlRXhpc3RlbmNlKHNoYWRvd1Jvb3QpXG5cbiAgICBpZiAoIWNhY2hlZERhdGEpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuZG9tU3R5bGVzQ2FjaGVba2V5XSA9IGNhY2hlZERhdGEgPSB7fVxuICAgIH1cblxuICAgIGxldCBwYXJlbnQgPSB0aGlzLmR1bW15Tm9kZVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzY29wZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxldCBzY29wZSA9IHNjb3Blc1tpXVxuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIG5vZGUuY2xhc3NOYW1lID0gc2NvcGUucmVwbGFjZSgvXFwuKy9nLCAnICcpXG5cbiAgICAgIGlmIChwYXJlbnQgIT0gbnVsbCkgeyBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSkgfVxuXG4gICAgICBwYXJlbnQgPSBub2RlXG4gICAgfVxuXG4gICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVxuICAgIGxldCBmaWx0ZXIgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctd2Via2l0LWZpbHRlcicpXG4gICAgbGV0IHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSlcblxuICAgIGlmIChmaWx0ZXIuaW5kZXhPZignaHVlLXJvdGF0ZScpID4gLTEpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yb3RhdGVIdWUodmFsdWUsIGZpbHRlcilcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09ICcnKSB7IGNhY2hlZERhdGFbcHJvcGVydHldID0gdmFsdWUgfVxuXG4gICAgdGhpcy5kdW1teU5vZGUuaW5uZXJIVE1MID0gJydcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgRE9NIG5vZGUgY29udGFpbmVyIGZvciBhbGwgdGhlIG9wZXJhdGlvbnMgdGhhdCBuZWVkIHRvIHJlYWRcbiAgICogc3R5bGVzIHByb3BlcnRpZXMgZnJvbSBET00uXG4gICAqXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IHNoYWRvd1Jvb3Qgd2hldGhlciB0byBjcmVhdGUgdGhlIGR1bW15IG5vZGUgaW4gdGhlIHNoYWRvd1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTSBvciBub3RcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuICBlbnN1cmVEdW1teU5vZGVFeGlzdGVuY2UgKHNoYWRvd1Jvb3QpIHtcbiAgICBpZiAodGhpcy5kdW1teU5vZGUgPT0gbnVsbCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgdGhpcy5kdW1teU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHRoaXMuZHVtbXlOb2RlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuZ2V0RHVtbXlET01Sb290KHNoYWRvd1Jvb3QpLmFwcGVuZENoaWxkKHRoaXMuZHVtbXlOb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhlIHByZXNlbmNlIG9mIHRoZSBjYWNoZSBvYmplY3QgaW4gdGhlIGNsYXNzIHRoYXQgcmVjZWl2ZWRcbiAgICogdGhpcyBtaXhpbi5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuICBlbnN1cmVDYWNoZSAoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnN0cnVjdG9yLmRvbVN0eWxlc0NhY2hlKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmRvbVN0eWxlc0NhY2hlID0ge31cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIGNhY2hlIGJ5IGVtcHR5aW5nIHRoZSBjYWNoZSBvYmplY3QuXG4gICAqL1xuICBpbnZhbGlkYXRlRE9NU3R5bGVzQ2FjaGUgKCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IuZG9tU3R5bGVzQ2FjaGUgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIHRoZSBjYWNoZSBvbmx5IGZvciB0aGUgZmlyc3QgdG9rZW5pemF0aW9uIGV2ZW50LlxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIGludmFsaWRhdGVJZkZpcnN0VG9rZW5pemF0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5oYXNUb2tlbml6ZWRPbmNlKSB7IHJldHVybiB9XG4gICAgdGhpcy5pbnZhbGlkYXRlRE9NU3R5bGVzQ2FjaGUoKVxuICAgIHRoaXMuY29uc3RydWN0b3IuaGFzVG9rZW5pemVkT25jZSA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgb3V0cHV0IGNvbG9yIG9mIGB2YWx1ZWAgd2l0aCBhIHJvdGF0ZWQgaHVlIGRlZmluZWRcbiAgICogaW4gYGZpbHRlcmAuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgdGhlIENTUyBjb2xvciB0byBhcHBseSB0aGUgcm90YXRpb24gb25cbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWx0ZXIgdGhlIENTUyBodWUgcm90YXRlIGZpbHRlciBkZWNsYXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSByb3RhdGVkIENTUyBjb2xvclxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIHJvdGF0ZUh1ZSAodmFsdWUsIGZpbHRlcikge1xuICAgIGxldCBtYXRjaCA9IHZhbHVlLm1hdGNoKC9yZ2IoYT8pXFwoKFxcZCspLCAoXFxkKyksIChcXGQrKSgsIChcXGQrKFxcLlxcZCspPykpP1xcKS8pXG4gICAgbGV0IFssICwgciwgZywgYiwgLCBhXSA9IG1hdGNoXG5cbiAgICBsZXQgWywgaHVlXSA9IGZpbHRlci5tYXRjaCgvaHVlLXJvdGF0ZVxcKChcXGQrKWRlZ1xcKS8pXG5cbiAgICA7W3IsIGcsIGIsIGEsIGh1ZV0gPSBbciwgZywgYiwgYSwgaHVlXS5tYXAoTnVtYmVyKVxuICAgIDtbciwgZywgYl0gPSByb3RhdGUociwgZywgYiwgaHVlKVxuXG4gICAgaWYgKGlzTmFOKGEpKSB7XG4gICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YX0pYFxuICAgIH1cbiAgfVxufVxuXG4vLyAgICAjIyAgICAgIyMgIyMjIyMjIyMgIyMgICAgICAgIyMjIyMjIyMgICMjIyMjIyMjICMjIyMjIyMjICAgIyMjIyMjXG4vLyAgICAjIyAgICAgIyMgIyMgICAgICAgIyMgICAgICAgIyMgICAgICMjICMjICAgICAgICMjICAgICAjIyAjIyAgICAjI1xuLy8gICAgIyMgICAgICMjICMjICAgICAgICMjICAgICAgICMjICAgICAjIyAjIyAgICAgICAjIyAgICAgIyMgIyNcbi8vICAgICMjIyMjIyMjIyAjIyMjIyMgICAjIyAgICAgICAjIyMjIyMjIyAgIyMjIyMjICAgIyMjIyMjIyMgICAjIyMjIyNcbi8vICAgICMjICAgICAjIyAjIyAgICAgICAjIyAgICAgICAjIyAgICAgICAgIyMgICAgICAgIyMgICAjIyAgICAgICAgICMjXG4vLyAgICAjIyAgICAgIyMgIyMgICAgICAgIyMgICAgICAgIyMgICAgICAgICMjICAgICAgICMjICAgICMjICAjIyAgICAjI1xuLy8gICAgIyMgICAgICMjICMjIyMjIyMjICMjIyMjIyMjICMjICAgICAgICAjIyMjIyMjIyAjIyAgICAgIyMgICMjIyMjI1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBodWUgcm90YXRpb24gb24gdGhlIHByb3ZpZGVkIGByYCwgYGdgIGFuZCBgYmAgY2hhbm5lbHNcbiAqIGJ5IHRoZSBhbW91bnQgb2YgYGFuZ2xlYC5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHIgdGhlIHJlZCBjaGFubmVsIG9mIHRoZSBjb2xvciB0byByb3RhdGVcbiAqIEBwYXJhbSAge251bWJlcn0gZyB0aGUgZ3JlZW4gY2hhbm5lbCBvZiB0aGUgY29sb3IgdG8gcm90YXRlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGIgdGhlIGJsdWUgY2hhbm5lbCBvZiB0aGUgY29sb3IgdG8gcm90YXRlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIGh1ZSB3aXRoXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSB0aGUgcm90YXRlZCBjb2xvciBjaGFubmVsc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZSAociwgZywgYiwgYW5nbGUpIHtcbiAgbGV0IG1hdHJpeCA9IFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXVxuICBjb25zdCBsdW1SID0gMC4yMTI2XG4gIGNvbnN0IGx1bUcgPSAwLjcxNTJcbiAgY29uc3QgbHVtQiA9IDAuMDcyMlxuICBjb25zdCBodWVSb3RhdGVSID0gMC4xNDNcbiAgY29uc3QgaHVlUm90YXRlRyA9IDAuMTQwXG4gIGNvbnN0IGh1ZVJvdGF0ZUIgPSAwLjI4M1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApXG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MClcblxuICBtYXRyaXhbMF0gPSBsdW1SICsgKDEgLSBsdW1SKSAqIGNvcyAtIChsdW1SICogc2luKVxuICBtYXRyaXhbMV0gPSBsdW1HIC0gKGx1bUcgKiBjb3MpIC0gKGx1bUcgKiBzaW4pXG4gIG1hdHJpeFsyXSA9IGx1bUIgLSAobHVtQiAqIGNvcykgKyAoMSAtIGx1bUIpICogc2luXG4gIG1hdHJpeFszXSA9IGx1bVIgLSAobHVtUiAqIGNvcykgKyBodWVSb3RhdGVSICogc2luXG4gIG1hdHJpeFs0XSA9IGx1bUcgKyAoMSAtIGx1bUcpICogY29zICsgaHVlUm90YXRlRyAqIHNpblxuICBtYXRyaXhbNV0gPSBsdW1CIC0gKGx1bUIgKiBjb3MpIC0gKGh1ZVJvdGF0ZUIgKiBzaW4pXG4gIG1hdHJpeFs2XSA9IGx1bVIgLSAobHVtUiAqIGNvcykgLSAoKDEgLSBsdW1SKSAqIHNpbilcbiAgbWF0cml4WzddID0gbHVtRyAtIChsdW1HICogY29zKSArIGx1bUcgKiBzaW5cbiAgbWF0cml4WzhdID0gbHVtQiArICgxIC0gbHVtQikgKiBjb3MgKyBsdW1CICogc2luXG5cbiAgcmV0dXJuIFtcbiAgICBjbGFtcChtYXRyaXhbMF0gKiByICsgbWF0cml4WzFdICogZyArIG1hdHJpeFsyXSAqIGIpLFxuICAgIGNsYW1wKG1hdHJpeFszXSAqIHIgKyBtYXRyaXhbNF0gKiBnICsgbWF0cml4WzVdICogYiksXG4gICAgY2xhbXAobWF0cml4WzZdICogciArIG1hdHJpeFs3XSAqIGcgKyBtYXRyaXhbOF0gKiBiKVxuICBdXG5cbiAgZnVuY3Rpb24gY2xhbXAgKG51bSkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBudW0pKSlcbiAgfVxufVxuIl19
//# sourceURL=/home/qual/.atom/packages/minimap/lib/mixins/dom-styles-reader.js
