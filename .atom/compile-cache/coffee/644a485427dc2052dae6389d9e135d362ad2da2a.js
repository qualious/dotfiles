(function() {
  module.exports = {
    config: {
      ui: {
        order: 1,
        type: 'object',
        properties: {
          accentColor: {
            order: 1,
            title: 'Accent color',
            description: 'Sets the accent color for the UI theme.',
            type: 'string',
            "default": 'Teal',
            "enum": ['Blue', 'Cyan', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Teal', 'White', 'Yellow']
          },
          slimScrollbar: {
            title: 'Slim scrollbars',
            type: 'boolean',
            "default": false
          },
          disableAnimations: {
            title: 'Disable animations',
            description: 'Reduces visual distractions when switching tabs or giving focus to text fields.',
            type: 'boolean',
            "default": false
          }
        }
      },
      tabs: {
        order: 2,
        type: 'object',
        properties: {
          tabSize: {
            title: 'Tab bar size',
            description: 'Sets the height for the tab bar',
            type: 'string',
            "default": 'Normal',
            "enum": ['Small', 'Normal', 'Big']
          },
          tabMinWidth: {
            title: 'Tab minimum width',
            type: 'boolean',
            "default": false
          },
          showTabIcons: {
            title: 'Icons in tabs',
            description: 'Shows the file-type icon for focused tabs.',
            type: 'string',
            "default": 'Hide',
            "enum": ['Hide', 'Show on active tab', 'Show on all tabs']
          },
          rippleAccentColor: {
            title: 'Use accent color in tabs\' ripple effect',
            type: 'boolean',
            "default": false
          }
        }
      },
      fonts: {
        order: 3,
        type: 'object',
        properties: {
          useRoboto: {
            title: 'Use Roboto Mono font in text editors',
            type: 'boolean',
            "default": false
          },
          fontSize: {
            title: 'UI font size',
            description: 'Set the font size used through the user interface. It doesn\'t override the text editor font size setting.',
            type: 'string',
            "default": 'Regular',
            "enum": ['Small', 'Regular', 'Big', 'Huge']
          },
          useRobotoInUI: {
            title: 'Use Roboto font for UI',
            type: 'boolean',
            "default": false
          }
        }
      },
      treeView: {
        order: 4,
        type: 'object',
        properties: {
          compactTreeView: {
            title: 'Compact Tree View',
            description: 'Reduces line-height in the tree view component.',
            type: 'boolean',
            "default": false
          }
        }
      },
      panels: {
        order: 5,
        type: 'object',
        properties: {
          panelContrast: {
            title: 'Contrasting panels',
            description: 'Makes panels\' background darker. Applies to tabs, search & replace, tree-view, etc.',
            type: 'boolean',
            "default": false
          },
          depth: {
            title: 'Add depth',
            description: 'Adds a few shadows here and there to add depth to the UI.',
            type: 'boolean',
            "default": false
          },
          altCmdPalette: {
            title: 'Alternative command palette background',
            description: 'Use a syntax\' background color for the command palette and fuzzy finder.',
            type: 'boolean',
            "default": true
          }
        }
      }
    },
    activate: function(state) {
      return atom.themes.onDidChangeActiveThemes(function() {
        var Bindings, Config;
        Config = require('./config');
        Bindings = require('./bindings');
        Config.apply();
        return Bindings.apply();
      });
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9hdG9tLW1hdGVyaWFsLXVpL2xpYi9zZXR0aW5ncy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLEVBQUEsTUFBTSxDQUFDLE9BQVAsR0FDSTtBQUFBLElBQUEsTUFBQSxFQUNJO0FBQUEsTUFBQSxFQUFBLEVBQ0k7QUFBQSxRQUFBLEtBQUEsRUFBTyxDQUFQO0FBQUEsUUFDQSxJQUFBLEVBQU0sUUFETjtBQUFBLFFBRUEsVUFBQSxFQUNJO0FBQUEsVUFBQSxXQUFBLEVBQ0k7QUFBQSxZQUFBLEtBQUEsRUFBTyxDQUFQO0FBQUEsWUFDQSxLQUFBLEVBQU8sY0FEUDtBQUFBLFlBRUEsV0FBQSxFQUFhLHlDQUZiO0FBQUEsWUFHQSxJQUFBLEVBQU0sUUFITjtBQUFBLFlBSUEsU0FBQSxFQUFTLE1BSlQ7QUFBQSxZQUtBLE1BQUEsRUFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE9BQWpCLEVBQTBCLFFBQTFCLEVBQW9DLE1BQXBDLEVBQTRDLFFBQTVDLEVBQXNELEtBQXRELEVBQTZELE1BQTdELEVBQXFFLE9BQXJFLEVBQThFLFFBQTlFLENBTE47V0FESjtBQUFBLFVBT0EsYUFBQSxFQUNJO0FBQUEsWUFBQSxLQUFBLEVBQU8saUJBQVA7QUFBQSxZQUNBLElBQUEsRUFBTSxTQUROO0FBQUEsWUFFQSxTQUFBLEVBQVMsS0FGVDtXQVJKO0FBQUEsVUFXQSxpQkFBQSxFQUNJO0FBQUEsWUFBQSxLQUFBLEVBQU8sb0JBQVA7QUFBQSxZQUNBLFdBQUEsRUFBYSxpRkFEYjtBQUFBLFlBRUEsSUFBQSxFQUFNLFNBRk47QUFBQSxZQUdBLFNBQUEsRUFBUyxLQUhUO1dBWko7U0FISjtPQURKO0FBQUEsTUFvQkEsSUFBQSxFQUNJO0FBQUEsUUFBQSxLQUFBLEVBQU8sQ0FBUDtBQUFBLFFB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

//# sourceURL=/home/qual/.atom/packages/atom-material-ui/lib/settings.coffee
