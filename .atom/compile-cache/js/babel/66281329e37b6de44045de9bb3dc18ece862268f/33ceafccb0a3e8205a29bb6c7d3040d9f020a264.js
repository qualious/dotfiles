'use babel';

/**
 * @access private
 */
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CanvasLayer = (function () {
  function CanvasLayer() {
    _classCallCheck(this, CanvasLayer);

    /**
     * The onscreen canvas.
     * @type {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');
    /**
     * The onscreen canvas context.
     * @type {CanvasRenderingContext2D}
     */
    this.context = this.canvas.getContext('2d');
    this.canvas.webkitImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;

    /**
    * The offscreen canvas.
    * @type {HTMLCanvasElement}
    * @access private
    */
    this.offscreenCanvas = document.createElement('canvas');
    /**
     * The offscreen canvas context.
     * @type {CanvasRenderingContext2D}
     * @access private
     */
    this.offscreenContext = this.offscreenCanvas.getContext('2d');
    this.offscreenCanvas.webkitImageSmoothingEnabled = false;
    this.offscreenContext.imageSmoothingEnabled = false;
  }

  _createClass(CanvasLayer, [{
    key: 'attach',
    value: function attach(parent) {
      if (this.canvas.parentNode) {
        return;
      }

      parent.appendChild(this.canvas);
    }
  }, {
    key: 'setSize',
    value: function setSize() {
      var width = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      var height = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      this.canvas.width = width;
      this.canvas.height = height;
      this.context.imageSmoothingEnabled = false;
      this.resetOffscreenSize();
    }
  }, {
    key: 'getSize',
    value: function getSize() {
      return {
        width: this.canvas.width,
        height: this.canvas.height
      };
    }
  }, {
    key: 'resetOffscreenSize',
    value: function resetOffscreenSize() {
      this.offscreenCanvas.width = this.canvas.width;
      this.offscreenCanvas.height = this.canvas.height;
      this.offscreenContext.imageSmoothingEnabled = false;
    }
  }, {
    key: 'copyToOffscreen',
    value: function copyToOffscreen() {
      this.offscreenContext.drawImage(this.canvas, 0, 0);
    }
  }, {
    key: 'copyFromOffscreen',
    value: function copyFromOffscreen() {
      this.context.drawImage(this.offscreenCanvas, 0, 0);
    }
  }, {
    key: 'copyPartFromOffscreen',
    value: function copyPartFromOffscreen(srcY, destY, height) {
      this.context.drawImage(this.offscreenCanvas, 0, srcY, this.offscreenCanvas.width, height, 0, destY, this.offscreenCanvas.width, height);
    }
  }, {
    key: 'clearCanvas',
    value: function clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return CanvasLayer;
})();

exports['default'] = CanvasLayer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvY2FudmFzLWxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsQ0FBQTs7Ozs7Ozs7Ozs7OztJQUtVLFdBQVc7QUFDbEIsV0FETyxXQUFXLEdBQ2Y7MEJBREksV0FBVzs7Ozs7O0FBTTVCLFFBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTs7Ozs7QUFLOUMsUUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMzQyxRQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQTtBQUMvQyxRQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQTs7Ozs7OztBQU8xQyxRQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs7OztBQU12RCxRQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDN0QsUUFBSSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUE7QUFDeEQsUUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQTtHQUNwRDs7ZUE3QmtCLFdBQVc7O1dBK0J2QixnQkFBQyxNQUFNLEVBQUU7QUFDZCxVQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO0FBQUUsZUFBTTtPQUFFOztBQUV0QyxZQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUNoQzs7O1dBRU8sbUJBQXdCO1VBQXZCLEtBQUsseURBQUcsQ0FBQztVQUFFLE1BQU0seURBQUcsQ0FBQzs7QUFDNUIsVUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0FBQ3pCLFVBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUMzQixVQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQTtBQUMxQyxVQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtLQUMxQjs7O1dBRU8sbUJBQUc7QUFDVCxhQUFPO0FBQ0wsYUFBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztBQUN4QixjQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO09BQzNCLENBQUE7S0FDRjs7O1dBRWtCLDhCQUFHO0FBQ3BCLFVBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO0FBQzlDLFVBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO0FBQ2hELFVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUE7S0FDcEQ7OztXQUVlLDJCQUFHO0FBQ2pCLFVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7S0FDbkQ7OztXQUVpQiw2QkFBRztBQUNuQixVQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtLQUNuRDs7O1dBRXFCLCtCQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQzFDLFVBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNwQixJQUFJLENBQUMsZUFBZSxFQUNwQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFDM0MsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQzdDLENBQUE7S0FDRjs7O1dBRVcsdUJBQUc7QUFDYixVQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDcEU7OztTQTNFa0IsV0FBVzs7O3FCQUFYLFdBQVciLCJmaWxlIjoiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwL2xpYi9jYW52YXMtbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNMYXllciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb25zY3JlZW4gY2FudmFzLlxuICAgICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgLyoqXG4gICAgICogVGhlIG9uc2NyZWVuIGNhbnZhcyBjb250ZXh0LlxuICAgICAqIEB0eXBlIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XG4gICAgICovXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuY2FudmFzLndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAqIFRoZSBvZmZzY3JlZW4gY2FudmFzLlxuICAgICogQHR5cGUge0hUTUxDYW52YXNFbGVtZW50fVxuICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgKi9cbiAgICB0aGlzLm9mZnNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgLyoqXG4gICAgICogVGhlIG9mZnNjcmVlbiBjYW52YXMgY29udGV4dC5cbiAgICAgKiBAdHlwZSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfVxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMub2Zmc2NyZWVuQ29udGV4dCA9IHRoaXMub2Zmc2NyZWVuQ2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLm9mZnNjcmVlbkNhbnZhcy53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMub2Zmc2NyZWVuQ29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgYXR0YWNoIChwYXJlbnQpIHtcbiAgICBpZiAodGhpcy5jYW52YXMucGFyZW50Tm9kZSkgeyByZXR1cm4gfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxuICB9XG5cbiAgc2V0U2l6ZSAod2lkdGggPSAwLCBoZWlnaHQgPSAwKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVzZXRPZmZzY3JlZW5TaXplKClcbiAgfVxuXG4gIGdldFNpemUgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuY2FudmFzLmhlaWdodFxuICAgIH1cbiAgfVxuXG4gIHJlc2V0T2Zmc2NyZWVuU2l6ZSAoKSB7XG4gICAgdGhpcy5vZmZzY3JlZW5DYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxuICAgIHRoaXMub2Zmc2NyZWVuQ2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodFxuICAgIHRoaXMub2Zmc2NyZWVuQ29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgY29weVRvT2Zmc2NyZWVuICgpIHtcbiAgICB0aGlzLm9mZnNjcmVlbkNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKVxuICB9XG5cbiAgY29weUZyb21PZmZzY3JlZW4gKCkge1xuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5DYW52YXMsIDAsIDApXG4gIH1cblxuICBjb3B5UGFydEZyb21PZmZzY3JlZW4gKHNyY1ksIGRlc3RZLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgdGhpcy5vZmZzY3JlZW5DYW52YXMsXG4gICAgICAwLCBzcmNZLCB0aGlzLm9mZnNjcmVlbkNhbnZhcy53aWR0aCwgaGVpZ2h0LFxuICAgICAgMCwgZGVzdFksIHRoaXMub2Zmc2NyZWVuQ2FudmFzLndpZHRoLCBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbGVhckNhbnZhcyAoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuICB9XG59XG4iXX0=
//# sourceURL=/home/qual/.atom/packages/minimap/lib/canvas-layer.js
