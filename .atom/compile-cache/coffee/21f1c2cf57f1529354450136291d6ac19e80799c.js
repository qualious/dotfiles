(function() {
  var CompositeDisposable, MinimapPigmentsBinding,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  CompositeDisposable = require('atom').CompositeDisposable;

  module.exports = MinimapPigmentsBinding = (function() {
    function MinimapPigmentsBinding(_arg) {
      this.editor = _arg.editor, this.minimap = _arg.minimap, this.colorBuffer = _arg.colorBuffer;
      this.displayedMarkers = [];
      this.decorationsByMarkerId = {};
      this.subscriptionsByMarkerId = {};
      this.subscriptions = new CompositeDisposable;
      this.colorBuffer.initialize().then((function(_this) {
        return function() {
          return _this.updateMarkers();
        };
      })(this));
      this.subscriptions.add(this.colorBuffer.editor.displayBuffer.onDidTokenize((function(_this) {
        return function() {
          return _this.updateMarkers();
        };
      })(this)));
      this.subscriptions.add(this.colorBuffer.onDidUpdateColorMarkers((function(_this) {
        return function() {
          return _this.updateMarkers();
        };
      })(this)));
      this.decorations = [];
    }

    MinimapPigmentsBinding.prototype.updateMarkers = function() {
      var decoration, m, markers, _i, _j, _len, _len1, _ref, _ref1, _ref2;
      markers = this.colorBuffer.findValidColorMarkers();
      _ref = this.displayedMarkers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        m = _ref[_i];
        if (__indexOf.call(markers, m) < 0) {
          if ((_ref1 = this.decorationsByMarkerId[m.id]) != null) {
            _ref1.destroy();
          }
        }
      }
      for (_j = 0, _len1 = markers.length; _j < _len1; _j++) {
        m = markers[_j];
        if (!(((_ref2 = m.color) != null ? _ref2.isValid() : void 0) && __indexOf.call(this.displayedMarkers, m) < 0)) {
          continue;
        }
        decoration = this.minimap.decorateMarker(m.marker, {
          type: 'highlight',
          color: m.color.toCSS()
        });
        this.decorationsByMarkerId[m.id] = decoration;
        this.subscriptionsByMarkerId[m.id] = decoration.onDidDestroy((function(_this) {
          return function() {
            var _ref3;
            if ((_ref3 = _this.subscriptionsByMarkerId[m.id]) != null) {
              _ref3.dispose();
            }
            delete _this.subscriptionsByMarkerId[m.id];
            return delete _this.decorationsByMarkerId[m.id];
          };
        })(this));
      }
      return this.displayedMarkers = markers;
    };

    MinimapPigmentsBinding.prototype.destroy = function() {
      this.destroyDecorations();
      return this.subscriptions.dispose();
    };

    MinimapPigmentsBinding.prototype.destroyDecorations = function() {
      var decoration, id, sub, _ref, _ref1;
      _ref = this.subscriptionsByMarkerId;
      for (id in _ref) {
        sub = _ref[id];
        if (sub != null) {
          sub.dispose();
        }
      }
      _ref1 = this.decorationsByMarkerId;
      for (id in _ref1) {
        decoration = _ref1[id];
        if (decoration != null) {
          decoration.destroy();
        }
      }
      this.decorationsByMarkerId = {};
      return this.subscriptionsByMarkerId = {};
    };

    return MinimapPigmentsBinding;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwLXBpZ21lbnRzL2xpYi9taW5pbWFwLXBpZ21lbnRzLWJpbmRpbmcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDJDQUFBO0lBQUEscUpBQUE7O0FBQUEsRUFBQyxzQkFBdUIsT0FBQSxDQUFRLE1BQVIsRUFBdkIsbUJBQUQsQ0FBQTs7QUFBQSxFQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFDUyxJQUFBLGdDQUFDLElBQUQsR0FBQTtBQUNYLE1BRGEsSUFBQyxDQUFBLGNBQUEsUUFBUSxJQUFDLENBQUEsZUFBQSxTQUFTLElBQUMsQ0FBQSxtQkFBQSxXQUNqQyxDQUFBO0FBQUEsTUFBQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsRUFBcEIsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLHFCQUFELEdBQXlCLEVBRHpCLENBQUE7QUFBQSxNQUVBLElBQUMsQ0FBQSx1QkFBRCxHQUEyQixFQUYzQixDQUFBO0FBQUEsTUFJQSxJQUFDLENBQUEsYUFBRCxHQUFpQixHQUFBLENBQUEsbUJBSmpCLENBQUE7QUFBQSxNQU1BLElBQUMsQ0FBQSxXQUFXLENBQUMsVUFBYixDQUFBLENBQXlCLENBQUMsSUFBMUIsQ0FBK0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFBRyxLQUFDLENBQUEsYUFBRCxDQUFBLEVBQUg7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEvQixDQU5BLENBQUE7QUFBQSxNQVFBLElBQUMsQ0FBQSxhQUFhLENBQUMsR0FBZixDQUFtQixJQUFDLENBQUEsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBbEMsQ0FBZ0QsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFDakUsS0FBQyxDQUFBLGFBQUQsQ0FBQSxFQURpRTtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWhELENBQW5CLENBUkEsQ0FBQTtBQUFBLE1BVUEsSUFBQyxDQUFBLGFBQWEsQ0FBQyxHQUFmLENBQW1CLElBQUMsQ0FBQSxXQUFXLENBQUMsdUJBQWIsQ0FBcUMsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFDdEQsS0FBQyxDQUFBLGFBQUQsQ0FBQSxFQURzRDtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXJDLENBQW5CLENBVkEsQ0FBQTtBQUFBLE1BYUEsSUFBQyxDQUFBLFdBQUQsR0FBZSxFQWJmLENBRFc7SUFBQSxDQUFiOztBQUFBLHFDQWdCQSxhQUFBLEdBQWUsU0FBQSxHQUFBO0FBQ2IsVUFBQSwrREFBQTtBQUFBLE1BQUEsT0FBQSxHQUFVLElBQUMsQ0FBQSxXQUFXLENBQUMscUJBQWIsQ0FBQSxDQUFWLENBQUE7QUFFQTtBQUFBLFdBQUEsMkNBQUE7cUJBQUE7WUFBZ0MsZUFBUyxPQUFULEVBQUEsQ0FBQTs7aUJBQ0YsQ0FBRSxPQUE5QixDQUFBOztTQURGO0FBQUEsT0FGQTtBQUtBLFdBQUEsZ0RBQUE7d0JBQUE7Z0RBQTZCLENBQUUsT0FBVCxDQUFBLFdBQUEsSUFBdUIsZUFBUyxJQUFDLENBQUEsZ0JBQVYsRUFBQSxDQUFBOztTQUMzQztBQUFBLFFBQUEsVUFBQSxHQUFhLElBQUMsQ0FBQSxPQUFPLENBQUMsY0FBVCxDQUF3QixDQUFDLENBQUMsTUFBMUIsRUFBa0M7QUFBQSxVQUFBLElBQUEsRUFBTSxXQUFOO0FBQUEsVUFBbUIsS0FBQSxFQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBUixDQUFBLENBQTFCO1NBQWxDLENBQWIsQ0FBQTtBQUFBLFFBRUEsSUFBQyxDQUFBLHFCQUFzQixDQUFBLENBQUMsQ0FBQyxFQUFGLENBQXZCLEdBQStCLFVBRi9CLENBQUE7QUFBQSxRQUdBLElBQUMsQ0FBQSx1QkFBd0IsQ0FBQSxDQUFDLENBQUMsRUFBRixDQUF6QixHQUFpQyxVQUFVLENBQUMsWUFBWCxDQUF3QixDQUFBLFNBQUEsS0FBQSxHQUFBO2lCQUFBLFNBQUEsR0FBQTtBQUN2RCxnQkFBQSxLQUFBOzttQkFBOEIsQ0FBRSxPQUFoQyxDQUFBO2FBQUE7QUFBQSxZQUNBLE1BQUEsQ0FBQSxLQUFRLENBQUEsdUJBQXdCLENBQUEsQ0FBQyxDQUFDLEVBQUYsQ0FEaEMsQ0FBQTttQkFFQSxNQUFBLENBQUEsS0FBUSxDQUFBLHFCQUFzQixDQUFBLENBQUMsQ0FBQyxFQUFGLEVBSHlCO1VBQUEsRUFBQTtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBeEIsQ0FIakMsQ0FERjtBQUFBLE9BTEE7YUFjQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsUUFmUDtJQUFBLENBaEJmLENBQUE7O0FBQUEscUNBaUNBLE9BQUEsR0FBUyxTQUFBLEdBQUE7QUFDUCxNQUFBLElBQUMsQ0FBQSxrQkFBRCxDQUFBLENBQUEsQ0FBQTthQUNBLElBQUMsQ0FBQSxhQUFhLENBQUMsT0FBZixDQUFBLEVBRk87SUFBQSxDQWpDVCxDQUFBOztBQUFBLHFDQXFDQSxrQkFBQSxHQUFvQixTQUFBLEdBQUE7QUFDbEIsVUFBQSxnQ0FBQTtBQUFBO0FBQUEsV0FBQSxVQUFBO3VCQUFBOztVQUFBLEdBQUcsQ0FBRSxPQUFMLENBQUE7U0FBQTtBQUFBLE9BQUE7QUFDQTtBQUFBLFdBQUEsV0FBQTsrQkFBQTs7VUFBQSxVQUFVLENBQUUsT0FBWixDQUFBO1NBQUE7QUFBQSxPQURBO0FBQUEsTUFHQSxJQUFDLENBQUEscUJBQUQsR0FBeUIsRUFIekIsQ0FBQTthQUlBLElBQUMsQ0FBQSx1QkFBRCxHQUEyQixHQUxUO0lBQUEsQ0FyQ3BCLENBQUE7O2tDQUFBOztNQUpGLENBQUE7QUFBQSIKfQ==

//# sourceURL=/home/qual/.atom/packages/minimap-pigments/lib/minimap-pigments-binding.coffee
