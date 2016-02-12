Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _underscorePlus = require('underscore-plus');

var _underscorePlus2 = _interopRequireDefault(_underscorePlus);

var _atom = require('atom');

'use babel';

var idCounter = 0;
var nextId = function nextId() {
  return idCounter++;
};

/**
 * The `Decoration` class represents a decoration in the Minimap.
 *
 * It has the same API than the `Decoration` class of a text editor.
 */

var Decoration = (function () {
  _createClass(Decoration, null, [{
    key: 'isType',

    /**
     * Returns `true` if the passed-in decoration properties matches the
     * specified type.
     *
     * @param  {Object} decorationProperties the decoration properties to match
     * @param  {string} type the decoration type to match
     * @return {boolean} whether the decoration properties match the type
     */
    value: function isType(decorationProperties, type) {
      if (_underscorePlus2['default'].isArray(decorationProperties.type)) {
        if (decorationProperties.type.indexOf(type) >= 0) {
          return true;
        }
        return false;
      } else {
        return type === decorationProperties.type;
      }
    }

    /**
     * Creates a new decoration.
     *
     * @param  {Marker} marker the target marker for the decoration
     * @param  {Minimap} minimap the Minimap where the decoration will
     *                           be displayed
     * @param  {Object} properties the decoration's properties
     */
  }]);

  function Decoration(marker, minimap, properties) {
    var _this = this;

    _classCallCheck(this, Decoration);

    /**
     * @access private
     */
    this.marker = marker;
    /**
     * @access private
     */
    this.minimap = minimap;
    /**
     * @access private
     */
    this.emitter = new _atom.Emitter();
    /**
     * @access private
     */
    this.id = nextId();
    /**
     * @access private
     */
    this.properties = null;
    this.setProperties(properties);
    this.properties.id = this.id;
    /**
     * @access private
     */
    this.destroyed = false;
    /**
     * @access private
     */
    this.markerDestroyDisposable = this.marker.onDidDestroy(function () {
      _this.destroy();
    });
  }

  /**
   * Destroy this marker.
   *
   * If you own the marker, you should use `Marker#destroy` which will destroy
   * this decoration.
   */

  _createClass(Decoration, [{
    key: 'destroy',
    value: function destroy() {
      if (this.destroyed) {
        return;
      }

      this.markerDestroyDisposable.dispose();
      this.markerDestroyDisposable = null;
      this.destroyed = true;
      this.emitter.emit('did-destroy');
      this.emitter.dispose();
    }

    /**
     * Returns whether this decoration is destroyed or not.
     *
     * @return {boolean} whether this decoration is destroyed or not
     */
  }, {
    key: 'isDestroyed',
    value: function isDestroyed() {
      return this.destroyed;
    }

    /**
     * Registers an event listener to the `did-change-properties` event.
     *
     * This event is triggered when the decoration update method is called.
     *
     * @param  {function(change:Object):void} callback a function to call
     *                                        when the event is triggered
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidChangeProperties',
    value: function onDidChangeProperties(callback) {
      return this.emitter.on('did-change-properties', callback);
    }

    /**
     * Registers an event listener to the `did-destroy` event.
     *
     * @param  {function():void} callback a function to call when the event
     *                                    is triggered
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidDestroy',
    value: function onDidDestroy(callback) {
      return this.emitter.on('did-destroy', callback);
    }

    /**
     * An id unique across all Decoration objects.
     *
     * @return {number} the decoration id
     */
  }, {
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    /**
     * Returns the marker associated with this Decoration.
     *
     * @return {Marker} the decoration's marker
     */
  }, {
    key: 'getMarker',
    value: function getMarker() {
      return this.marker;
    }

    /**
     * Check if this decoration is of type `type`.
     *
     * @param  {string|Array} type a type like `'line-number'`, `'line'`, etc.
     *                             `type` can also be an Array of Strings, where
     *                             it will return true if the decoration's type
     *                             matches any in the array.
     * @return {boolean} whether this decoration match the passed-in type
     */
  }, {
    key: 'isType',
    value: function isType(type) {
      return Decoration.isType(this.properties, type);
    }

    /**
     * Returns the Decoration's properties.
     *
     * @return {Object} the decoration's properties
     */
  }, {
    key: 'getProperties',
    value: function getProperties() {
      return this.properties;
    }

    /**
     * Update the marker with new properties. Allows you to change the
     * decoration's class.
     *
     * @param {Object} newProperties the new properties for the decoration
     */
  }, {
    key: 'setProperties',
    value: function setProperties(newProperties) {
      if (this.destroyed) {
        return;
      }

      var oldProperties = this.properties;
      this.properties = newProperties;
      this.properties.id = this.id;

      this.emitter.emit('did-change-properties', { oldProperties: oldProperties, newProperties: newProperties });
    }
  }]);

  return Decoration;
})();

exports['default'] = Decoration;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvZGVjb3JhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzhCQUVjLGlCQUFpQjs7OztvQkFDVCxNQUFNOztBQUg1QixXQUFXLENBQUE7O0FBS1gsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFBO0FBQ2pCLElBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxHQUFlO0FBQUUsU0FBTyxTQUFTLEVBQUUsQ0FBQTtDQUFFLENBQUE7Ozs7Ozs7O0lBTzFCLFVBQVU7ZUFBVixVQUFVOzs7Ozs7Ozs7OztXQVVmLGdCQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLDRCQUFFLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN4QyxZQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQUUsaUJBQU8sSUFBSSxDQUFBO1NBQUU7QUFDakUsZUFBTyxLQUFLLENBQUE7T0FDYixNQUFNO0FBQ0wsZUFBTyxJQUFJLEtBQUssb0JBQW9CLENBQUMsSUFBSSxDQUFBO09BQzFDO0tBQ0Y7Ozs7Ozs7Ozs7OztBQVVXLFdBM0JPLFVBQVUsQ0EyQmhCLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFOzs7MEJBM0J2QixVQUFVOzs7OztBQStCM0IsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7Ozs7QUFJcEIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7Ozs7QUFJdEIsUUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBYSxDQUFBOzs7O0FBSTVCLFFBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUE7Ozs7QUFJbEIsUUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7QUFDdEIsUUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUM5QixRQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBOzs7O0FBSTVCLFFBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBOzs7O0FBSXRCLFFBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFNO0FBQzVELFlBQUssT0FBTyxFQUFFLENBQUE7S0FDZixDQUFDLENBQUE7R0FDSDs7Ozs7Ozs7O2VBNURrQixVQUFVOztXQW9FckIsbUJBQUc7QUFDVCxVQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFBRSxlQUFNO09BQUU7O0FBRTlCLFVBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUN0QyxVQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFBO0FBQ25DLFVBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0FBQ3JCLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQ2hDLFVBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7S0FDdkI7Ozs7Ozs7OztXQU9XLHVCQUFHO0FBQUUsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0tBQUU7Ozs7Ozs7Ozs7Ozs7V0FXbEIsK0JBQUMsUUFBUSxFQUFFO0FBQy9CLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsUUFBUSxDQUFDLENBQUE7S0FDMUQ7Ozs7Ozs7Ozs7O1dBU1ksc0JBQUMsUUFBUSxFQUFFO0FBQ3RCLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0tBQ2hEOzs7Ozs7Ozs7V0FPSyxpQkFBRztBQUFFLGFBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQTtLQUFFOzs7Ozs7Ozs7V0FPakIscUJBQUc7QUFBRSxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7S0FBRTs7Ozs7Ozs7Ozs7OztXQVc1QixnQkFBQyxJQUFJLEVBQUU7QUFDWixhQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtLQUNoRDs7Ozs7Ozs7O1dBT2EseUJBQUc7QUFDZixhQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7S0FDdkI7Ozs7Ozs7Ozs7V0FRYSx1QkFBQyxhQUFhLEVBQUU7QUFDNUIsVUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQUUsZUFBTTtPQUFFOztBQUU5QixVQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0FBQ25DLFVBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFBO0FBQy9CLFVBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7O0FBRTVCLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUMsYUFBYSxFQUFiLGFBQWEsRUFBRSxhQUFhLEVBQWIsYUFBYSxFQUFDLENBQUMsQ0FBQTtLQUMzRTs7O1NBL0prQixVQUFVOzs7cUJBQVYsVUFBVSIsImZpbGUiOiIvaG9tZS9xdWFsLy5hdG9tL3BhY2thZ2VzL21pbmltYXAvbGliL2RlY29yYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlLXBsdXMnXG5pbXBvcnQge0VtaXR0ZXJ9IGZyb20gJ2F0b20nXG5cbnZhciBpZENvdW50ZXIgPSAwXG52YXIgbmV4dElkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaWRDb3VudGVyKysgfVxuXG4vKipcbiAqIFRoZSBgRGVjb3JhdGlvbmAgY2xhc3MgcmVwcmVzZW50cyBhIGRlY29yYXRpb24gaW4gdGhlIE1pbmltYXAuXG4gKlxuICogSXQgaGFzIHRoZSBzYW1lIEFQSSB0aGFuIHRoZSBgRGVjb3JhdGlvbmAgY2xhc3Mgb2YgYSB0ZXh0IGVkaXRvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjb3JhdGlvbiB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwYXNzZWQtaW4gZGVjb3JhdGlvbiBwcm9wZXJ0aWVzIG1hdGNoZXMgdGhlXG4gICAqIHNwZWNpZmllZCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRlY29yYXRpb25Qcm9wZXJ0aWVzIHRoZSBkZWNvcmF0aW9uIHByb3BlcnRpZXMgdG8gbWF0Y2hcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0eXBlIHRoZSBkZWNvcmF0aW9uIHR5cGUgdG8gbWF0Y2hcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciB0aGUgZGVjb3JhdGlvbiBwcm9wZXJ0aWVzIG1hdGNoIHRoZSB0eXBlXG4gICAqL1xuICBzdGF0aWMgaXNUeXBlIChkZWNvcmF0aW9uUHJvcGVydGllcywgdHlwZSkge1xuICAgIGlmIChfLmlzQXJyYXkoZGVjb3JhdGlvblByb3BlcnRpZXMudHlwZSkpIHtcbiAgICAgIGlmIChkZWNvcmF0aW9uUHJvcGVydGllcy50eXBlLmluZGV4T2YodHlwZSkgPj0gMCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHR5cGUgPT09IGRlY29yYXRpb25Qcm9wZXJ0aWVzLnR5cGVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBkZWNvcmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHtNYXJrZXJ9IG1hcmtlciB0aGUgdGFyZ2V0IG1hcmtlciBmb3IgdGhlIGRlY29yYXRpb25cbiAgICogQHBhcmFtICB7TWluaW1hcH0gbWluaW1hcCB0aGUgTWluaW1hcCB3aGVyZSB0aGUgZGVjb3JhdGlvbiB3aWxsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgZGlzcGxheWVkXG4gICAqIEBwYXJhbSAge09iamVjdH0gcHJvcGVydGllcyB0aGUgZGVjb3JhdGlvbidzIHByb3BlcnRpZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChtYXJrZXIsIG1pbmltYXAsIHByb3BlcnRpZXMpIHtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm1hcmtlciA9IG1hcmtlclxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubWluaW1hcCA9IG1pbmltYXBcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pZCA9IG5leHRJZCgpXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gbnVsbFxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKVxuICAgIHRoaXMucHJvcGVydGllcy5pZCA9IHRoaXMuaWRcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5tYXJrZXJEZXN0cm95RGlzcG9zYWJsZSA9IHRoaXMubWFya2VyLm9uRGlkRGVzdHJveSgoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3koKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGlzIG1hcmtlci5cbiAgICpcbiAgICogSWYgeW91IG93biB0aGUgbWFya2VyLCB5b3Ugc2hvdWxkIHVzZSBgTWFya2VyI2Rlc3Ryb3lgIHdoaWNoIHdpbGwgZGVzdHJveVxuICAgKiB0aGlzIGRlY29yYXRpb24uXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHsgcmV0dXJuIH1cblxuICAgIHRoaXMubWFya2VyRGVzdHJveURpc3Bvc2FibGUuZGlzcG9zZSgpXG4gICAgdGhpcy5tYXJrZXJEZXN0cm95RGlzcG9zYWJsZSA9IG51bGxcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnZGlkLWRlc3Ryb3knKVxuICAgIHRoaXMuZW1pdHRlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBkZWNvcmF0aW9uIGlzIGRlc3Ryb3llZCBvciBub3QuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBkZWNvcmF0aW9uIGlzIGRlc3Ryb3llZCBvciBub3RcbiAgICovXG4gIGlzRGVzdHJveWVkICgpIHsgcmV0dXJuIHRoaXMuZGVzdHJveWVkIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBgZGlkLWNoYW5nZS1wcm9wZXJ0aWVzYCBldmVudC5cbiAgICpcbiAgICogVGhpcyBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgZGVjb3JhdGlvbiB1cGRhdGUgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICpcbiAgICogQHBhcmFtICB7ZnVuY3Rpb24oY2hhbmdlOk9iamVjdCk6dm9pZH0gY2FsbGJhY2sgYSBmdW5jdGlvbiB0byBjYWxsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgKiBAcmV0dXJuIHtEaXNwb3NhYmxlfSBhIGRpc3Bvc2FibGUgdG8gc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50XG4gICAqL1xuICBvbkRpZENoYW5nZVByb3BlcnRpZXMgKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbignZGlkLWNoYW5nZS1wcm9wZXJ0aWVzJywgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBgZGlkLWRlc3Ryb3lgIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gIHtmdW5jdGlvbigpOnZvaWR9IGNhbGxiYWNrIGEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBldmVudFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIHRyaWdnZXJlZFxuICAgKiBAcmV0dXJuIHtEaXNwb3NhYmxlfSBhIGRpc3Bvc2FibGUgdG8gc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50XG4gICAqL1xuICBvbkRpZERlc3Ryb3kgKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbignZGlkLWRlc3Ryb3knLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpZCB1bmlxdWUgYWNyb3NzIGFsbCBEZWNvcmF0aW9uIG9iamVjdHMuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGRlY29yYXRpb24gaWRcbiAgICovXG4gIGdldElkICgpIHsgcmV0dXJuIHRoaXMuaWQgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXJrZXIgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRGVjb3JhdGlvbi5cbiAgICpcbiAgICogQHJldHVybiB7TWFya2VyfSB0aGUgZGVjb3JhdGlvbidzIG1hcmtlclxuICAgKi9cbiAgZ2V0TWFya2VyICgpIHsgcmV0dXJuIHRoaXMubWFya2VyIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyBkZWNvcmF0aW9uIGlzIG9mIHR5cGUgYHR5cGVgLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd8QXJyYXl9IHR5cGUgYSB0eXBlIGxpa2UgYCdsaW5lLW51bWJlcidgLCBgJ2xpbmUnYCwgZXRjLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHR5cGVgIGNhbiBhbHNvIGJlIGFuIEFycmF5IG9mIFN0cmluZ3MsIHdoZXJlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZSBkZWNvcmF0aW9uJ3MgdHlwZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyBhbnkgaW4gdGhlIGFycmF5LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoaXMgZGVjb3JhdGlvbiBtYXRjaCB0aGUgcGFzc2VkLWluIHR5cGVcbiAgICovXG4gIGlzVHlwZSAodHlwZSkge1xuICAgIHJldHVybiBEZWNvcmF0aW9uLmlzVHlwZSh0aGlzLnByb3BlcnRpZXMsIHR5cGUpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgRGVjb3JhdGlvbidzIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGRlY29yYXRpb24ncyBwcm9wZXJ0aWVzXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBtYXJrZXIgd2l0aCBuZXcgcHJvcGVydGllcy4gQWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlXG4gICAqIGRlY29yYXRpb24ncyBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG5ld1Byb3BlcnRpZXMgdGhlIG5ldyBwcm9wZXJ0aWVzIGZvciB0aGUgZGVjb3JhdGlvblxuICAgKi9cbiAgc2V0UHJvcGVydGllcyAobmV3UHJvcGVydGllcykge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgeyByZXR1cm4gfVxuXG4gICAgbGV0IG9sZFByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXNcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXdQcm9wZXJ0aWVzXG4gICAgdGhpcy5wcm9wZXJ0aWVzLmlkID0gdGhpcy5pZFxuXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2RpZC1jaGFuZ2UtcHJvcGVydGllcycsIHtvbGRQcm9wZXJ0aWVzLCBuZXdQcm9wZXJ0aWVzfSlcbiAgfVxufVxuIl19
//# sourceURL=/home/qual/.atom/packages/minimap/lib/decoration.js
