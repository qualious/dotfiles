(function() {
  var CompositeDisposable, MinimapPigmentsBinding;

  CompositeDisposable = require('event-kit').CompositeDisposable;

  MinimapPigmentsBinding = require('./minimap-pigments-binding');

  module.exports = {
    active: false,
    isActive: function() {
      return this.active;
    },
    activate: function(state) {
      this.bindingsById = {};
      this.subscriptionsById = {};
      return this.subscriptions = new CompositeDisposable;
    },
    consumeMinimapServiceV1: function(minimap) {
      this.minimap = minimap;
      return this.minimap.registerPlugin('pigments', this);
    },
    consumePigmentsServiceV1: function(pigments) {
      this.pigments = pigments;
      this.subscriptions.add(this.pigments.getProject().onDidDestroy((function(_this) {
        return function() {
          return _this.pigments = null;
        };
      })(this)));
      if ((this.minimap != null) && this.active) {
        return this.initialize();
      }
    },
    deactivate: function() {
      this.subscriptions.dispose();
      this.editorsSubscription.dispose();
      this.minimap.unregisterPlugin('pigments');
      this.minimap = null;
      return this.pigments = null;
    },
    activatePlugin: function() {
      if (this.active) {
        return;
      }
      this.active = true;
      if (this.pigments != null) {
        return this.initialize();
      }
    },
    initialize: function() {
      return this.editorsSubscription = this.pigments.observeColorBuffers((function(_this) {
        return function(colorBuffer) {
          var binding, editor, minimap;
          editor = colorBuffer.editor;
          minimap = _this.minimap.minimapForEditor(editor);
          binding = new MinimapPigmentsBinding({
            editor: editor,
            minimap: minimap,
            colorBuffer: colorBuffer
          });
          _this.bindingsById[editor.id] = binding;
          return _this.subscriptionsById[editor.id] = editor.onDidDestroy(function() {
            var _ref;
            if ((_ref = _this.subscriptionsById[editor.id]) != null) {
              _ref.dispose();
            }
            binding.destroy();
            delete _this.subscriptionsById[editor.id];
            return delete _this.bindingsById[editor.id];
          });
        };
      })(this));
    },
    bindingForEditor: function(editor) {
      if (this.bindingsById[editor.id] != null) {
        return this.bindingsById[editor.id];
      }
    },
    deactivatePlugin: function() {
      var binding, id, _ref, _ref1;
      if (!this.active) {
        return;
      }
      _ref = this.bindingsById;
      for (id in _ref) {
        binding = _ref[id];
        binding.destroy();
      }
      this.active = false;
      return (_ref1 = this.editorsSubscription) != null ? _ref1.dispose() : void 0;
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwLXBpZ21lbnRzL2xpYi9taW5pbWFwLXBpZ21lbnRzLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSwyQ0FBQTs7QUFBQSxFQUFDLHNCQUF1QixPQUFBLENBQVEsV0FBUixFQUF2QixtQkFBRCxDQUFBOztBQUFBLEVBQ0Esc0JBQUEsR0FBeUIsT0FBQSxDQUFRLDRCQUFSLENBRHpCLENBQUE7O0FBQUEsRUFHQSxNQUFNLENBQUMsT0FBUCxHQUNFO0FBQUEsSUFBQSxNQUFBLEVBQVEsS0FBUjtBQUFBLElBRUEsUUFBQSxFQUFVLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxPQUFKO0lBQUEsQ0FGVjtBQUFBLElBSUEsUUFBQSxFQUFVLFNBQUMsS0FBRCxHQUFBO0FBQ1IsTUFBQSxJQUFDLENBQUEsWUFBRCxHQUFnQixFQUFoQixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsaUJBQUQsR0FBcUIsRUFEckIsQ0FBQTthQUVBLElBQUMsQ0FBQSxhQUFELEdBQWlCLEdBQUEsQ0FBQSxvQkFIVDtJQUFBLENBSlY7QUFBQSxJQVNBLHVCQUFBLEVBQXlCLFNBQUUsT0FBRixHQUFBO0FBQ3ZCLE1BRHdCLElBQUMsQ0FBQSxVQUFBLE9BQ3pCLENBQUE7YUFBQSxJQUFDLENBQUEsT0FBTyxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsSUFBcEMsRUFEdUI7SUFBQSxDQVR6QjtBQUFBLElBWUEsd0JBQUEsRUFBMEIsU0FBRSxRQUFGLEdBQUE7QUFDeEIsTUFEeUIsSUFBQyxDQUFBLFdBQUEsUUFDMUIsQ0FBQTtBQUFBLE1BQUEsSUFBQyxDQUFBLGFBQWEsQ0FBQyxHQUFmLENBQW1CLElBQUMsQ0FBQSxRQUFRLENBQUMsVUFBVixDQUFBLENBQXNCLENBQUMsWUFBdkIsQ0FBb0MsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFBRyxLQUFDLENBQUEsUUFBRCxHQUFZLEtBQWY7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQyxDQUFuQixDQUFBLENBQUE7QUFFQSxNQUFBLElBQWlCLHNCQUFBLElBQWMsSUFBQyxDQUFBLE1BQWhDO2VBQUEsSUFBQyxDQUFBLFVBQUQsQ0FBQSxFQUFBO09BSHdCO0lBQUEsQ0FaMUI7QUFBQSxJQWlCQSxVQUFBLEVBQVksU0FBQSxHQUFBO0FBQ1YsTUFBQSxJQUFDLENBQUEsYUFBYSxDQUFDLE9BQWYsQ0FBQSxDQUFBLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxtQkFBbUIsQ0FBQyxPQUFyQixDQUFBLENBREEsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxnQkFBVCxDQUEwQixVQUExQixDQUZBLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFIWCxDQUFBO2FBSUEsSUFBQyxDQUFBLFFBQUQsR0FBWSxLQUxGO0lBQUEsQ0FqQlo7QUFBQSxJQXdCQSxjQUFBLEVBQWdCLFNBQUEsR0FBQTtBQUNkLE1BQUEsSUFBVSxJQUFDLENBQUEsTUFBWDtBQUFBLGNBQUEsQ0FBQTtPQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBRlYsQ0FBQTtBQUlBLE1BQUEsSUFBaUIscUJBQWpCO2VBQUEsSUFBQyxDQUFBLFVBQUQsQ0FBQSxFQUFBO09BTGM7SUFBQSxDQXhCaEI7QUFBQSxJQStCQSxVQUFBLEVBQVksU0FBQSxHQUFBO2FBQ1YsSUFBQyxDQUFBLG1CQUFELEdBQXVCLElBQUMsQ0FBQSxRQUFRLENBQUMsbUJBQVYsQ0FBOEIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsV0FBRCxHQUFBO0FBQ25ELGNBQUEsd0JBQUE7QUFBQSxVQUFBLE1BQUEsR0FBUyxXQUFXLENBQUMsTUFBckIsQ0FBQTtBQUFBLFVBQ0EsT0FBQSxHQUFVLEtBQUMsQ0FBQSxPQUFPLENBQUMsZ0JBQVQsQ0FBMEIsTUFBMUIsQ0FEVixDQUFBO0FBQUEsVUFHQSxPQUFBLEdBQWMsSUFBQSxzQkFBQSxDQUF1QjtBQUFBLFlBQUMsUUFBQSxNQUFEO0FBQUEsWUFBUyxTQUFBLE9BQVQ7QUFBQSxZQUFrQixhQUFBLFdBQWxCO1dBQXZCLENBSGQsQ0FBQTtBQUFBLFVBSUEsS0FBQyxDQUFBLFlBQWEsQ0FBQSxNQUFNLENBQUMsRUFBUCxDQUFkLEdBQTJCLE9BSjNCLENBQUE7aUJBTUEsS0FBQyxDQUFBLGlCQUFrQixDQUFBLE1BQU0sQ0FBQyxFQUFQLENBQW5CLEdBQWdDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFNBQUEsR0FBQTtBQUNsRCxnQkFBQSxJQUFBOztrQkFBNkIsQ0FBRSxPQUEvQixDQUFBO2FBQUE7QUFBQSxZQUNBLE9BQU8sQ0FBQyxPQUFSLENBQUEsQ0FEQSxDQUFBO0FBQUEsWUFFQSxNQUFBLENBQUEsS0FBUSxDQUFBLGlCQUFrQixDQUFBLE1BQU0sQ0FBQyxFQUFQLENBRjFCLENBQUE7bUJBR0EsTUFBQSxDQUFBLEtBQVEsQ0FBQSxZQUFhLENBQUEsTUFBTSxDQUFDLEVBQVAsRUFKNkI7VUFBQSxDQUFwQixFQVBtQjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTlCLEVBRGI7SUFBQSxDQS9CWjtBQUFBLElBNkNBLGdCQUFBLEVBQWtCLFNBQUMsTUFBRCxHQUFBO0FBQ2hCLE1BQUEsSUFBbUMsb0NBQW5DO0FBQUEsZUFBTyxJQUFDLENBQUEsWUFBYSxDQUFBLE1BQU0sQ0FBQyxFQUFQLENBQXJCLENBQUE7T0FEZ0I7SUFBQSxDQTdDbEI7QUFBQSxJQWdEQSxnQkFBQSxFQUFrQixTQUFBLEdBQUE7QUFDaEIsVUFBQSx3QkFBQTtBQUFBLE1BQUEsSUFBQSxDQUFBLElBQWUsQ0FBQSxNQUFmO0FBQUEsY0FBQSxDQUFBO09BQUE7QUFFQTtBQUFBLFdBQUEsVUFBQTsyQkFBQTtBQUFBLFFBQUEsT0FBTyxDQUFDLE9BQVIsQ0FBQSxDQUFBLENBQUE7QUFBQSxPQUZBO0FBQUEsTUFJQSxJQUFDLENBQUEsTUFBRCxHQUFVLEtBSlYsQ0FBQTsrREFLb0IsQ0FBRSxPQUF0QixDQUFBLFdBTmdCO0lBQUEsQ0FoRGxCO0dBSkYsQ0FBQTtBQUFBIgp9

//# sourceURL=/home/qual/.atom/packages/minimap-pigments/lib/minimap-pigments.coffee
