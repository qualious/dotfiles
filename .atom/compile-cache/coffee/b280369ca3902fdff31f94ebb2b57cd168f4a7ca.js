(function() {
  module.exports = {
    apply: function() {
      var checkPacks, root, setAccentColor, setAltCmdPalette, setAnimationStatus, setCompactTreeView, setDepth, setFontSize, setPanelContrast, setRippleAccentColor, setRobotoFont, setRobotoUIFont, setShowTabIcons, setSlimScrollbars, setTabMinWidth, setTabSize;
      root = document.documentElement;
      checkPacks = function() {
        var iconPacks, loadedPackages;
        root.classList.remove('dont-change-icons');
        loadedPackages = atom.packages.getActivePackages();
        iconPacks = ['file-icons', 'file-type-icons', 'seti-icons', 'envygeeks-file-icons'];
        return loadedPackages.forEach(function(pack, i) {
          if (iconPacks.indexOf(pack.name) >= 0) {
            return root.classList.add('dont-change-icons');
          }
        });
      };
      atom.packages.onDidActivatePackage(function() {
        return checkPacks();
      });
      atom.packages.onDidDeactivatePackage(function() {
        return checkPacks();
      });
      setAccentColor = function(currentAccentColor) {
        root.classList.remove('blue');
        root.classList.remove('cyan');
        root.classList.remove('green');
        root.classList.remove('orange');
        root.classList.remove('pink');
        root.classList.remove('purple');
        root.classList.remove('red');
        root.classList.remove('teal');
        root.classList.remove('white');
        root.classList.remove('yellow');
        return root.classList.add(currentAccentColor.toLowerCase());
      };
      atom.config.onDidChange('atom-material-ui.ui.accentColor', function() {
        return setAccentColor(atom.config.get('atom-material-ui.ui.accentColor'));
      });
      setAccentColor(atom.config.get('atom-material-ui.ui.accentColor'));
      setRobotoFont = function(boolean) {
        if (boolean) {
          return root.classList.add('roboto-mono');
        } else {
          return root.classList.remove('roboto-mono');
        }
      };
      atom.config.onDidChange('atom-material-ui.fonts.useRoboto', function() {
        return setRobotoFont(atom.config.get('atom-material-ui.fonts.useRoboto'));
      });
      setRobotoFont(atom.config.get('atom-material-ui.fonts.useRoboto'));
      setRobotoUIFont = function(boolean) {
        if (boolean) {
          return root.classList.add('roboto');
        } else {
          return root.classList.remove('roboto');
        }
      };
      atom.config.onDidChange('atom-material-ui.fonts.useRobotoInUI', function() {
        return setRobotoUIFont(atom.config.get('atom-material-ui.fonts.useRobotoInUI'));
      });
      setRobotoUIFont(atom.config.get('atom-material-ui.fonts.useRobotoInUI'));
      setSlimScrollbars = function(boolean) {
        if (boolean) {
          return root.classList.add('slim-scrollbar');
        } else {
          return root.classList.remove('slim-scrollbar');
        }
      };
      atom.config.onDidChange('atom-material-ui.ui.slimScrollbar', function() {
        return setSlimScrollbars(atom.config.get('atom-material-ui.ui.slimScrollbar'));
      });
      setSlimScrollbars(atom.config.get('atom-material-ui.ui.slimScrollbar'));
      setAnimationStatus = function(boolean) {
        if (boolean) {
          return root.classList.add('no-animations');
        } else {
          return root.classList.remove('no-animations');
        }
      };
      atom.config.onDidChange('atom-material-ui.ui.disableAnimations', function() {
        return setAnimationStatus(atom.config.get('atom-material-ui.ui.disableAnimations'));
      });
      setAnimationStatus(atom.config.get('atom-material-ui.ui.disableAnimations'));
      setPanelContrast = function(boolean) {
        if (boolean) {
          return root.classList.add('panel-contrast');
        } else {
          return root.classList.remove('panel-contrast');
        }
      };
      atom.config.onDidChange('atom-material-ui.panels.panelContrast', function() {
        return setPanelContrast(atom.config.get('atom-material-ui.panels.panelContrast'));
      });
      setPanelContrast(atom.config.get('atom-material-ui.panels.panelContrast'));
      setDepth = function(boolean) {
        if (boolean) {
          return root.classList.add('panel-depth');
        } else {
          return root.classList.remove('panel-depth');
        }
      };
      atom.config.onDidChange('atom-material-ui.panels.depth', function() {
        return setDepth(atom.config.get('atom-material-ui.panels.depth'));
      });
      setDepth(atom.config.get('atom-material-ui.panels.depth'));
      setAltCmdPalette = function(boolean) {
        if (boolean) {
          return root.classList.add('alt-cmd-palette');
        } else {
          return root.classList.remove('alt-cmd-palette');
        }
      };
      atom.config.onDidChange('atom-material-ui.panels.altCmdPalette', function() {
        return setAltCmdPalette(atom.config.get('atom-material-ui.panels.altCmdPalette'));
      });
      setAltCmdPalette(atom.config.get('atom-material-ui.panels.altCmdPalette'));
      setTabSize = function(currentTabSize) {
        root.classList.remove('tab-size-small');
        root.classList.remove('tab-size-normal');
        root.classList.remove('tab-size-big');
        return root.classList.add('tab-size-' + currentTabSize.toLowerCase());
      };
      atom.config.onDidChange('atom-material-ui.tabs.tabSize', function() {
        return setTabSize(atom.config.get('atom-material-ui.tabs.tabSize'));
      });
      setTabSize(atom.config.get('atom-material-ui.tabs.tabSize'));
      setCompactTreeView = function(boolean) {
        if (boolean) {
          return root.classList.add('compact-tree-view');
        } else {
          return root.classList.remove('compact-tree-view');
        }
      };
      atom.config.onDidChange('atom-material-ui.treeView.compactTreeView', function() {
        return setCompactTreeView(atom.config.get('atom-material-ui.treeView.compactTreeView'));
      });
      setCompactTreeView(atom.config.get('atom-material-ui.treeView.compactTreeView'));
      setFontSize = function(currentFontSize) {
        root.classList.remove('font-size-small');
        root.classList.remove('font-size-regular');
        root.classList.remove('font-size-big');
        root.classList.remove('font-size-huge');
        return root.classList.add('font-size-' + currentFontSize.toLowerCase());
      };
      atom.config.onDidChange('atom-material-ui.fonts.fontSize', function() {
        return setFontSize(atom.config.get('atom-material-ui.fonts.fontSize'));
      });
      setFontSize(atom.config.get('atom-material-ui.fonts.fontSize'));
      setShowTabIcons = function(option) {
        root.classList.remove('tab-icons');
        root.classList.remove('tab-icons-all');
        if (option === 'Show on active tab') {
          return root.classList.add('tab-icons');
        } else if (option === 'Show on all tabs') {
          return root.classList.add('tab-icons-all');
        }
      };
      atom.config.onDidChange('atom-material-ui.tabs.showTabIcons', function() {
        return setShowTabIcons(atom.config.get('atom-material-ui.tabs.showTabIcons'));
      });
      setShowTabIcons(atom.config.get('atom-material-ui.tabs.showTabIcons'));
      setRippleAccentColor = function(boolean) {
        if (boolean) {
          return root.classList.add('ripple-accent-color');
        } else {
          return root.classList.remove('ripple-accent-color');
        }
      };
      atom.config.onDidChange('atom-material-ui.tabs.rippleAccentColor', function() {
        return setRippleAccentColor(atom.config.get('atom-material-ui.tabs.rippleAccentColor'));
      });
      setRippleAccentColor(atom.config.get('atom-material-ui.tabs.rippleAccentColor'));
      setTabMinWidth = function(boolean) {
        if (boolean) {
          return root.classList.add('tab-min-width');
        } else {
          return root.classList.remove('tab-min-width');
        }
      };
      atom.config.onDidChange('atom-material-ui.tabs.tabMinWidth', function() {
        return setTabMinWidth(atom.config.get('atom-material-ui.tabs.tabMinWidth'));
      });
      return setTabMinWidth(atom.config.get('atom-material-ui.tabs.tabMinWidth'));
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9hdG9tLW1hdGVyaWFsLXVpL2xpYi9jb25maWcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQ0k7QUFBQSxJQUFBLEtBQUEsRUFBTyxTQUFBLEdBQUE7QUFDSCxVQUFBLHlQQUFBO0FBQUEsTUFBQSxJQUFBLEdBQU8sUUFBUSxDQUFDLGVBQWhCLENBQUE7QUFBQSxNQUlBLFVBQUEsR0FBYSxTQUFBLEdBQUE7QUFDVCxZQUFBLHlCQUFBO0FBQUEsUUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsbUJBQXRCLENBQUEsQ0FBQTtBQUFBLFFBRUEsY0FBQSxHQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFkLENBQUEsQ0FGbEIsQ0FBQTtBQUFBLFFBR0EsU0FBQSxHQUFZLENBQUMsWUFBRCxFQUFlLGlCQUFmLEVBQWtDLFlBQWxDLEVBQWdELHNCQUFoRCxDQUhaLENBQUE7ZUFLQSxjQUFjLENBQUMsT0FBZixDQUF1QixTQUFDLElBQUQsRUFBTyxDQUFQLEdBQUE7QUFDbkIsVUFBQSxJQUFJLFNBQVMsQ0FBQyxPQUFWLENBQWtCLElBQUksQ0FBQyxJQUF2QixDQUFBLElBQWdDLENBQXBDO21CQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBZixDQUFtQixtQkFBbkIsRUFESjtXQURtQjtRQUFBLENBQXZCLEVBTlM7TUFBQSxDQUpiLENBQUE7QUFBQSxNQWNBLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQWQsQ0FBbUMsU0FBQSxHQUFBO2VBQU0sVUFBQSxDQUFBLEVBQU47TUFBQSxDQUFuQyxDQWRBLENBQUE7QUFBQSxNQWVBLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQWQsQ0FBcUMsU0FBQSxHQUFBO2VBQU0sVUFBQSxDQUFBLEVBQU47TUFBQSxDQUFyQyxDQWZBLENBQUE7QUFBQSxNQW1CQSxjQUFBLEdBQWlCLFNBQUMsa0JBQUQsR0FBQTtBQUNiLFFBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLE1BQXRCLENBQUEsQ0FBQTtBQUFBLFFBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLE1BQXRCLENBREEsQ0FBQTtBQUFBLFFBRUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLE9BQXRCLENBRkEsQ0FBQTtBQUFBLFFBR0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLFFBQXRCLENBSEEsQ0FBQTtBQUFBLFFBSUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLE1BQXRCLENBSkEsQ0FBQTtBQUFBLFFBS0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLFFBQXRCLENBTEEsQ0FBQTtBQUFBLFFBTUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLEtBQXRCLENBTkEsQ0FBQTtBQUFBLFFBT0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLE1BQXRCLENBUEEsQ0FBQTtBQUFBLFFBUUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLE9BQXRCLENBUkEsQ0FBQTtBQUFBLFFBU0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLFFBQXRCLENBVEEsQ0FBQTtlQVVBLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBZixDQUFtQixrQkFBa0IsQ0FBQyxXQUFuQixDQUFBLENBQW5CLEVBWGE7TUFBQSxDQW5CakIsQ0FBQTtBQUFBLE1BZ0NBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QixpQ0FBeEIsRUFBMkQsU0FBQSxHQUFBO2VBQ3ZELGNBQUEsQ0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsaUNBQWhCLENBQWYsRUFEdUQ7TUFBQSxDQUEzRCxDQWhDQSxDQUFBO0FBQUEsTUFtQ0EsY0FBQSxDQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixpQ0FBaEIsQ0FBZixDQW5DQSxDQUFBO0FBQUEsTUF1Q0EsYUFBQSxHQUFnQixTQUFDLE9BQUQsR0FBQTtBQUNaLFFBQUEsSUFBRyxPQUFIO2lCQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBZixDQUFtQixhQUFuQixFQURKO1NBQUEsTUFBQTtpQkFHSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsYUFBdEIsRUFISjtTQURZO01BQUEsQ0F2Q2hCLENBQUE7QUFBQSxNQTZDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVosQ0FBd0Isa0NBQXhCLEVBQTRELFNBQUEsR0FBQTtlQUN4RCxhQUFBLENBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLGtDQUFoQixDQUFkLEVBRHdEO01BQUEsQ0FBNUQsQ0E3Q0EsQ0FBQTtBQUFBLE1BZ0RBLGFBQUEsQ0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isa0NBQWhCLENBQWQsQ0FoREEsQ0FBQTtBQUFBLE1Bb0RBLGVBQUEsR0FBa0IsU0FBQyxPQUFELEdBQUE7QUFDZCxRQUFBLElBQUcsT0FBSDtpQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQWYsQ0FBbUIsUUFBbkIsRUFESjtTQUFBLE1BQUE7aUJBR0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLFFBQXRCLEVBSEo7U0FEYztNQUFBLENBcERsQixDQUFBO0FBQUEsTUEwREEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFaLENBQXdCLHNDQUF4QixFQUFnRSxTQUFBLEdBQUE7ZUFDNUQsZUFBQSxDQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0NBQWhCLENBQWhCLEVBRDREO01BQUEsQ0FBaEUsQ0ExREEsQ0FBQTtBQUFBLE1BNkRBLGVBQUEsQ0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHNDQUFoQixDQUFoQixDQTdEQSxDQUFBO0FBQUEsTUFpRUEsaUJBQUEsR0FBb0IsU0FBQyxPQUFELEdBQUE7QUFDaEIsUUFBQSxJQUFHLE9BQUg7aUJBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLGdCQUFuQixFQURKO1NBQUEsTUFBQTtpQkFHSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsZ0JBQXRCLEVBSEo7U0FEZ0I7TUFBQSxDQWpFcEIsQ0FBQTtBQUFBLE1BdUVBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QixtQ0FBeEIsRUFBNkQsU0FBQSxHQUFBO2VBQ3pELGlCQUFBLENBQWtCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixtQ0FBaEIsQ0FBbEIsRUFEeUQ7TUFBQSxDQUE3RCxDQXZFQSxDQUFBO0FBQUEsTUEwRUEsaUJBQUEsQ0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLG1DQUFoQixDQUFsQixDQTFFQSxDQUFBO0FBQUEsTUE4RUEsa0JBQUEsR0FBcUIsU0FBQyxPQUFELEdBQUE7QUFDakIsUUFBQSxJQUFHLE9BQUg7aUJBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLGVBQW5CLEVBREo7U0FBQSxNQUFBO2lCQUdJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixlQUF0QixFQUhKO1NBRGlCO01BQUEsQ0E5RXJCLENBQUE7QUFBQSxNQW9GQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVosQ0FBd0IsdUNBQXhCLEVBQWlFLFNBQUEsR0FBQTtlQUM3RCxrQkFBQSxDQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsdUNBQWhCLENBQW5CLEVBRDZEO01BQUEsQ0FBakUsQ0FwRkEsQ0FBQTtBQUFBLE1BdUZBLGtCQUFBLENBQW1CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQix1Q0FBaEIsQ0FBbkIsQ0F2RkEsQ0FBQTtBQUFBLE1BMkZBLGdCQUFBLEdBQW1CLFNBQUMsT0FBRCxHQUFBO0FBQ2YsUUFBQSxJQUFHLE9BQUg7aUJBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLGdCQUFuQixFQURKO1NBQUEsTUFBQTtpQkFHSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsZ0JBQXRCLEVBSEo7U0FEZTtNQUFBLENBM0ZuQixDQUFBO0FBQUEsTUFpR0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFaLENBQXdCLHVDQUF4QixFQUFpRSxTQUFBLEdBQUE7ZUFDN0QsZ0JBQUEsQ0FBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHVDQUFoQixDQUFqQixFQUQ2RDtNQUFBLENBQWpFLENBakdBLENBQUE7QUFBQSxNQW9HQSxnQkFBQSxDQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsdUNBQWhCLENBQWpCLENBcEdBLENBQUE7QUFBQSxNQXdHQSxRQUFBLEdBQVcsU0FBQyxPQUFELEdBQUE7QUFDUCxRQUFBLElBQUcsT0FBSDtpQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQWYsQ0FBbUIsYUFBbkIsRUFESjtTQUFBLE1BQUE7aUJBR0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLGFBQXRCLEVBSEo7U0FETztNQUFBLENBeEdYLENBQUE7QUFBQSxNQThHQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVosQ0FBd0IsK0JBQXhCLEVBQXlELFNBQUEsR0FBQTtlQUNyRCxRQUFBLENBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLCtCQUFoQixDQUFULEVBRHFEO01BQUEsQ0FBekQsQ0E5R0EsQ0FBQTtBQUFBLE1BaUhBLFFBQUEsQ0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsK0JBQWhCLENBQVQsQ0FqSEEsQ0FBQTtBQUFBLE1BcUhBLGdCQUFBLEdBQW1CLFNBQUMsT0FBRCxHQUFBO0FBQ2YsUUFBQSxJQUFHLE9BQUg7aUJBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLGlCQUFuQixFQURKO1NBQUEsTUFBQTtpQkFHSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsaUJBQXRCLEVBSEo7U0FEZTtNQUFBLENBckhuQixDQUFBO0FBQUEsTUEySEEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFaLENBQXdCLHVDQUF4QixFQUFpRSxTQUFBLEdBQUE7ZUFDN0QsZ0JBQUEsQ0FBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHVDQUFoQixDQUFqQixFQUQ2RDtNQUFBLENBQWpFLENBM0hBLENBQUE7QUFBQSxNQThIQSxnQkFBQSxDQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsdUNBQWhCLENBQWpCLENBOUhBLENBQUE7QUFBQSxNQWtJQSxVQUFBLEdBQWEsU0FBQyxjQUFELEdBQUE7QUFDVCxRQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixnQkFBdEIsQ0FBQSxDQUFBO0FBQUEsUUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsaUJBQXRCLENBREEsQ0FBQTtBQUFBLFFBRUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLGNBQXRCLENBRkEsQ0FBQTtlQUdBLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBZixDQUFtQixXQUFBLEdBQWMsY0FBYyxDQUFDLFdBQWYsQ0FBQSxDQUFqQyxFQUpTO01BQUEsQ0FsSWIsQ0FBQTtBQUFBLE1Bd0lBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QiwrQkFBeEIsRUFBeUQsU0FBQSxHQUFBO2VBQ3JELFVBQUEsQ0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsK0JBQWhCLENBQVgsRUFEcUQ7TUFBQSxDQUF6RCxDQXhJQSxDQUFBO0FBQUEsTUEySUEsVUFBQSxDQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQiwrQkFBaEIsQ0FBWCxDQTNJQSxDQUFBO0FBQUEsTUErSUEsa0JBQUEsR0FBcUIsU0FBQyxPQUFELEdBQUE7QUFDakIsUUFBQSxJQUFHLE9BQUg7aUJBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLG1CQUFuQixFQURKO1NBQUEsTUFBQTtpQkFHSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsbUJBQXRCLEVBSEo7U0FEaUI7TUFBQSxDQS9JckIsQ0FBQTtBQUFBLE1BcUpBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QiwyQ0FBeEIsRUFBcUUsU0FBQSxHQUFBO2VBQ2pFLGtCQUFBLENBQW1CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQiwyQ0FBaEIsQ0FBbkIsRUFEaUU7TUFBQSxDQUFyRSxDQXJKQSxDQUFBO0FBQUEsTUF3SkEsa0JBQUEsQ0FBbUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLDJDQUFoQixDQUFuQixDQXhKQSxDQUFBO0FBQUEsTUE0SkEsV0FBQSxHQUFjLFNBQUMsZUFBRCxHQUFBO0FBQ1YsUUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQWYsQ0FBc0IsaUJBQXRCLENBQUEsQ0FBQTtBQUFBLFFBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFmLENBQXNCLG1CQUF0QixDQURBLENBQUE7QUFBQSxRQUVBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixlQUF0QixDQUZBLENBQUE7QUFBQSxRQUdBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixnQkFBdEIsQ0FIQSxDQUFBO2VBSUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLFlBQUEsR0FBZSxlQUFlLENBQUMsV0FBaEIsQ0FBQSxDQUFsQyxFQUxVO01BQUEsQ0E1SmQsQ0FBQTtBQUFBLE1BbUtBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QixpQ0FBeEIsRUFBMkQsU0FBQSxHQUFBO2VBQ3ZELFdBQUEsQ0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsaUNBQWhCLENBQVosRUFEdUQ7TUFBQSxDQUEzRCxDQW5LQSxDQUFBO0FBQUEsTUFzS0EsV0FBQSxDQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixpQ0FBaEIsQ0FBWixDQXRLQSxDQUFBO0FBQUEsTUEwS0EsZUFBQSxHQUFrQixTQUFDLE1BQUQsR0FBQTtBQUNoQixRQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixXQUF0QixDQUFBLENBQUE7QUFBQSxRQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixlQUF0QixDQURBLENBQUE7QUFFQSxRQUFBLElBQUcsTUFBQSxLQUFVLG9CQUFiO2lCQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBZixDQUFtQixXQUFuQixFQURKO1NBQUEsTUFFSyxJQUFHLE1BQUEsS0FBVSxrQkFBYjtpQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQWYsQ0FBbUIsZUFBbkIsRUFEQztTQUxXO01BQUEsQ0ExS2xCLENBQUE7QUFBQSxNQWtMQSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVosQ0FBd0Isb0NBQXhCLEVBQThELFNBQUEsR0FBQTtlQUMxRCxlQUFBLENBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixvQ0FBaEIsQ0FBaEIsRUFEMEQ7TUFBQSxDQUE5RCxDQWxMQSxDQUFBO0FBQUEsTUFxTEEsZUFBQSxDQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isb0NBQWhCLENBQWhCLENBckxBLENBQUE7QUFBQSxNQXlMQSxvQkFBQSxHQUF1QixTQUFDLE9BQUQsR0FBQTtBQUNuQixRQUFBLElBQUcsT0FBSDtpQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQWYsQ0FBbUIscUJBQW5CLEVBREo7U0FBQSxNQUFBO2lCQUdJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixxQkFBdEIsRUFISjtTQURtQjtNQUFBLENBekx2QixDQUFBO0FBQUEsTUErTEEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFaLENBQXdCLHlDQUF4QixFQUFtRSxTQUFBLEdBQUE7ZUFDL0Qsb0JBQUEsQ0FBcUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHlDQUFoQixDQUFyQixFQUQrRDtNQUFBLENBQW5FLENBL0xBLENBQUE7QUFBQSxNQWtNQSxvQkFBQSxDQUFxQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IseUNBQWhCLENBQXJCLENBbE1BLENBQUE7QUFBQSxNQXNNQSxjQUFBLEdBQWlCLFNBQUMsT0FBRCxHQUFBO0FBQ2IsUUFBQSxJQUFHLE9BQUg7aUJBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFmLENBQW1CLGVBQW5CLEVBREo7U0FBQSxNQUFBO2lCQUdJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBZixDQUFzQixlQUF0QixFQUhKO1NBRGE7TUFBQSxDQXRNakIsQ0FBQTtBQUFBLE1BNE1BLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QixtQ0FBeEIsRUFBNkQsU0FBQSxHQUFBO2VBQ3pELGNBQUEsQ0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsbUNBQWhCLENBQWYsRUFEeUQ7TUFBQSxDQUE3RCxDQTVNQSxDQUFBO2FBK01BLGNBQUEsQ0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsbUNBQWhCLENBQWYsRUFoTkc7SUFBQSxDQUFQO0dBREosQ0FBQTtBQUFBIgp9

//# sourceURL=/home/qual/.atom/packages/atom-material-ui/lib/config.coffee
