(function() {
  module.exports = {
    view: null,
    activate: function() {
      var _TriggerKey, _command, _commands, _keymap, _linuxSelector, _macSelector, _triggerKey, _windowsSelector;
      this.view = (require('./ColorPicker-view'))();
      _command = 'color-picker:open';
      _triggerKey = (atom.config.get('color-picker.triggerKey')).toLowerCase();
      _TriggerKey = _triggerKey.toUpperCase();
      _macSelector = '.platform-darwin atom-workspace';
      _windowsSelector = '.platform-win32 atom-workspace';
      _linuxSelector = '.platform-linux atom-workspace';
      _keymap = {};
      _keymap["" + _macSelector] = {};
      _keymap["" + _macSelector]["cmd-" + _TriggerKey] = _command;
      _keymap["" + _windowsSelector] = {};
      _keymap["" + _windowsSelector]["ctrl-alt-" + _triggerKey] = _command;
      _keymap["" + _linuxSelector] = {};
      _keymap["" + _linuxSelector]["ctrl-alt-" + _triggerKey] = _command;
      atom.keymaps.add('color-picker:trigger', _keymap);
      atom.contextMenu.add({
        'atom-text-editor': [
          {
            label: 'Color Picker',
            command: _command
          }
        ]
      });
      _commands = {};
      _commands["" + _command] = (function(_this) {
        return function() {
          var _ref;
          if (!((_ref = _this.view) != null ? _ref.canOpen : void 0)) {
            return;
          }
          return _this.view.open();
        };
      })(this);
      atom.commands.add('atom-text-editor', _commands);
      return this.view.activate();
    },
    deactivate: function() {
      var _ref;
      return (_ref = this.view) != null ? _ref.destroy() : void 0;
    },
    provideColorPicker: function() {
      return {
        open: (function(_this) {
          return function(Editor, Cursor) {
            var _ref;
            if (!((_ref = _this.view) != null ? _ref.canOpen : void 0)) {
              return;
            }
            return _this.view.open(Editor, Cursor);
          };
        })(this)
      };
    },
    config: {
      randomColor: {
        title: 'Serve a random color on open',
        description: 'If the Color Picker doesn\'t get an input color, it serves a completely random color.',
        type: 'boolean',
        "default": true
      },
      automaticReplace: {
        title: 'Automatically Replace Color',
        description: 'Replace selected color automatically on change. Works well with as-you-type CSS reloaders.',
        type: 'boolean',
        "default": false
      },
      abbreviateValues: {
        title: 'Abbreviate Color Values',
        description: 'If possible, abbreviate color values, like for example “0.3” to “.3”,  “#ffffff” to “#fff” and “rgb(0, 0, 0)” to “rgb(0,0,0)”.',
        type: 'boolean',
        "default": false
      },
      uppercaseColorValues: {
        title: 'Uppercase Color Values',
        description: 'If sensible, uppercase the color value. For example, “#aaa” becomes “#AAA”.',
        type: 'boolean',
        "default": false
      },
      preferredFormat: {
        title: 'Preferred Color Format',
        description: 'On open, the Color Picker will show a color in this format.',
        type: 'string',
        "enum": ['RGB', 'HEX', 'HSL', 'HSV', 'VEC'],
        "default": 'RGB'
      },
      triggerKey: {
        title: 'Trigger key',
        description: 'Decide what trigger key should open the Color Picker. `CMD-SHIFT-{TRIGGER_KEY}` and `CTRL-ALT-{TRIGGER_KEY}`. Requires a restart.',
        type: 'string',
        "enum": ['C', 'E', 'H', 'K'],
        "default": 'C'
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9jb2xvci1waWNrZXIvbGliL0NvbG9yUGlja2VyLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUlJO0FBQUEsRUFBQSxNQUFNLENBQUMsT0FBUCxHQUNJO0FBQUEsSUFBQSxJQUFBLEVBQU0sSUFBTjtBQUFBLElBRUEsUUFBQSxFQUFVLFNBQUEsR0FBQTtBQUNOLFVBQUEsc0dBQUE7QUFBQSxNQUFBLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FBQyxPQUFBLENBQVEsb0JBQVIsQ0FBRCxDQUFBLENBQUEsQ0FBUixDQUFBO0FBQUEsTUFDQSxRQUFBLEdBQVcsbUJBRFgsQ0FBQTtBQUFBLE1BS0EsV0FBQSxHQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHlCQUFoQixDQUFELENBQTJDLENBQUMsV0FBNUMsQ0FBQSxDQUxkLENBQUE7QUFBQSxNQU1BLFdBQUEsR0FBYyxXQUFXLENBQUMsV0FBWixDQUFBLENBTmQsQ0FBQTtBQUFBLE1BU0EsWUFBQSxHQUFlLGlDQVRmLENBQUE7QUFBQSxNQVVBLGdCQUFBLEdBQW1CLGdDQVZuQixDQUFBO0FBQUEsTUFXQSxjQUFBLEdBQWlCLGdDQVhqQixDQUFBO0FBQUEsTUFhQSxPQUFBLEdBQVUsRUFiVixDQUFBO0FBQUEsTUFnQkEsT0FBUSxDQUFBLEVBQUEsR0FBbkIsWUFBbUIsQ0FBUixHQUErQixFQWhCL0IsQ0FBQTtBQUFBLE1BaUJBLE9BQVEsQ0FBQSxFQUFBLEdBQW5CLFlBQW1CLENBQXFCLENBQUMsTUFBQSxHQUF6QyxXQUF3QyxDQUE3QixHQUF1RCxRQWpCdkQsQ0FBQTtBQUFBLE1BbUJBLE9BQVEsQ0FBQSxFQUFBLEdBQW5CLGdCQUFtQixDQUFSLEdBQW1DLEVBbkJuQyxDQUFBO0FBQUEsTUFvQkEsT0FBUSxDQUFBLEVBQUEs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

//# sourceURL=/home/qual/.atom/packages/color-picker/lib/ColorPicker.coffee
