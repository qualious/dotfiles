function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./helpers/workspace');

var _libMinimap = require('../lib/minimap');

var _libMinimap2 = _interopRequireDefault(_libMinimap);

var _libMinimapElement = require('../lib/minimap-element');

var _libMinimapElement2 = _interopRequireDefault(_libMinimapElement);

'use babel';

describe('Minimap package', function () {
  var _ref = [];
  var editor = _ref[0];
  var minimap = _ref[1];
  var editorElement = _ref[2];
  var minimapElement = _ref[3];
  var workspaceElement = _ref[4];
  var minimapPackage = _ref[5];

  beforeEach(function () {
    atom.config.set('minimap.autoToggle', true);

    workspaceElement = atom.views.getView(atom.workspace);
    jasmine.attachToDOM(workspaceElement);

    _libMinimapElement2['default'].registerViewProvider(_libMinimap2['default']);

    waitsForPromise(function () {
      return atom.workspace.open('sample.coffee');
    });

    waitsForPromise(function () {
      return atom.packages.activatePackage('minimap').then(function (pkg) {
        minimapPackage = pkg.mainModule;
      });
    });

    waitsFor(function () {
      return workspaceElement.querySelector('atom-text-editor');
    });

    runs(function () {
      editor = atom.workspace.getActiveTextEditor();
      editorElement = atom.views.getView(editor);
    });

    waitsFor(function () {
      return workspaceElement.querySelector('atom-text-editor::shadow atom-text-editor-minimap');
    });
  });

  it('registers the minimap views provider', function () {
    var textEditor = atom.workspace.buildTextEditor({});
    minimap = new _libMinimap2['default']({ textEditor: textEditor });
    minimapElement = atom.views.getView(minimap);

    expect(minimapElement).toExist();
  });

  describe('when an editor is opened', function () {
    it('creates a minimap model for the editor', function () {
      expect(minimapPackage.minimapForEditor(editor)).toBeDefined();
    });

    it('attaches a minimap element to the editor view', function () {
      expect(editorElement.shadowRoot.querySelector('atom-text-editor-minimap')).toExist();
    });
  });

  describe('::observeMinimaps', function () {
    var _ref2 = [];
    var spy = _ref2[0];

    beforeEach(function () {
      spy = jasmine.createSpy('observeMinimaps');
      minimapPackage.observeMinimaps(spy);
    });

    it('calls the callback with the existing minimaps', function () {
      expect(spy).toHaveBeenCalled();
    });

    it('calls the callback when a new editor is opened', function () {
      waitsForPromise(function () {
        return atom.workspace.open('other-sample.js');
      });

      runs(function () {
        expect(spy.calls.length).toEqual(2);
      });
    });
  });

  describe('::deactivate', function () {
    beforeEach(function () {
      minimapPackage.deactivate();
    });

    it('destroys all the minimap models', function () {
      expect(minimapPackage.editorsMinimaps).toBeUndefined();
    });

    it('destroys all the minimap elements', function () {
      expect(editorElement.shadowRoot.querySelector('atom-text-editor-minimap')).not.toExist();
    });
  });

  describe('service', function () {
    it('returns the minimap main module', function () {
      expect(minimapPackage.provideMinimapServiceV1()).toEqual(minimapPackage);
    });

    it('creates standalone minimap with provided text editor', function () {
      var textEditor = atom.workspace.buildTextEditor({});
      var standaloneMinimap = minimapPackage.standAloneMinimapForEditor(textEditor);
      expect(standaloneMinimap.getTextEditor()).toEqual(textEditor);
    });
  });

  //    ########  ##       ##     ##  ######   #### ##    ##  ######
  //    ##     ## ##       ##     ## ##    ##   ##  ###   ## ##    ##
  //    ##     ## ##       ##     ## ##         ##  ####  ## ##
  //    ########  ##       ##     ## ##   ####  ##  ## ## ##  ######
  //    ##        ##       ##     ## ##    ##   ##  ##  ####       ##
  //    ##        ##       ##     ## ##    ##   ##  ##   ### ##    ##
  //    ##        ########  #######   ######   #### ##    ##  ######

  describe('plugins', function () {
    var _ref3 = [];
    var registerHandler = _ref3[0];
    var unregisterHandler = _ref3[1];
    var plugin = _ref3[2];

    beforeEach(function () {
      atom.config.set('minimap.displayPluginsControls', true);
      atom.config.set('minimap.plugins.dummy', undefined);

      plugin = {
        active: false,
        activatePlugin: function activatePlugin() {
          this.active = true;
        },
        deactivatePlugin: function deactivatePlugin() {
          this.active = false;
        },
        isActive: function isActive() {
          return this.active;
        }
      };

      spyOn(plugin, 'activatePlugin').andCallThrough();
      spyOn(plugin, 'deactivatePlugin').andCallThrough();

      registerHandler = jasmine.createSpy('register handler');
      unregisterHandler = jasmine.createSpy('unregister handler');
    });

    describe('when registered', function () {
      beforeEach(function () {
        minimapPackage.onDidAddPlugin(registerHandler);
        minimapPackage.onDidRemovePlugin(unregisterHandler);
        minimapPackage.registerPlugin('dummy', plugin);
      });

      it('makes the plugin available in the minimap', function () {
        expect(minimapPackage.plugins['dummy']).toBe(plugin);
      });

      it('emits an event', function () {
        expect(registerHandler).toHaveBeenCalled();
      });

      it('creates a default config for the plugin', function () {
        expect(minimapPackage.config.plugins.properties.dummy).toBeDefined();
      });

      it('sets the corresponding config', function () {
        expect(atom.config.get('minimap.plugins.dummy')).toBeTruthy();
      });

      describe('triggering the corresponding plugin command', function () {
        beforeEach(function () {
          atom.commands.dispatch(workspaceElement, 'minimap:toggle-dummy');
        });

        it('receives a deactivation call', function () {
          expect(plugin.deactivatePlugin).toHaveBeenCalled();
        });
      });

      describe('and then unregistered', function () {
        beforeEach(function () {
          minimapPackage.unregisterPlugin('dummy');
        });

        it('has been unregistered', function () {
          expect(minimapPackage.plugins['dummy']).toBeUndefined();
        });

        it('emits an event', function () {
          expect(unregisterHandler).toHaveBeenCalled();
        });

        describe('when the config is modified', function () {
          beforeEach(function () {
            atom.config.set('minimap.plugins.dummy', false);
          });

          it('does not activates the plugin', function () {
            expect(plugin.deactivatePlugin).not.toHaveBeenCalled();
          });
        });
      });

      describe('on minimap deactivation', function () {
        beforeEach(function () {
          expect(plugin.active).toBeTruthy();
          minimapPackage.deactivate();
        });

        it('deactivates all the plugins', function () {
          expect(plugin.active).toBeFalsy();
        });
      });
    });

    describe('when the config for it is false', function () {
      beforeEach(function () {
        atom.config.set('minimap.plugins.dummy', false);
        minimapPackage.registerPlugin('dummy', plugin);
      });

      it('does not receive an activation call', function () {
        expect(plugin.activatePlugin).not.toHaveBeenCalled();
      });
    });

    describe('the registered plugin', function () {
      beforeEach(function () {
        minimapPackage.registerPlugin('dummy', plugin);
      });

      it('receives an activation call', function () {
        expect(plugin.activatePlugin).toHaveBeenCalled();
      });

      it('activates the plugin', function () {
        expect(plugin.active).toBeTruthy();
      });

      describe('when the config is modified after registration', function () {
        beforeEach(function () {
          atom.config.set('minimap.plugins.dummy', false);
        });

        it('receives a deactivation call', function () {
          expect(plugin.deactivatePlugin).toHaveBeenCalled();
        });
      });
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9zcGVjL21pbmltYXAtbWFpbi1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBRU8scUJBQXFCOzswQkFDUixnQkFBZ0I7Ozs7aUNBQ1Qsd0JBQXdCOzs7O0FBSm5ELFdBQVcsQ0FBQTs7QUFNWCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsWUFBTTthQUN5RCxFQUFFO01BQXRGLE1BQU07TUFBRSxPQUFPO01BQUUsYUFBYTtNQUFFLGNBQWM7TUFBRSxnQkFBZ0I7TUFBRSxjQUFjOztBQUVyRixZQUFVLENBQUMsWUFBTTtBQUNmLFFBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFBOztBQUUzQyxvQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDckQsV0FBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOztBQUVyQyxtQ0FBZSxvQkFBb0IseUJBQVMsQ0FBQTs7QUFFNUMsbUJBQWUsQ0FBQyxZQUFNO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7S0FDNUMsQ0FBQyxDQUFBOztBQUVGLG1CQUFlLENBQUMsWUFBTTtBQUNwQixhQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUM1RCxzQkFBYyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUE7T0FDaEMsQ0FBQyxDQUFBO0tBQ0gsQ0FBQyxDQUFBOztBQUVGLFlBQVEsQ0FBQyxZQUFNO0FBQ2IsYUFBTyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtLQUMxRCxDQUFDLENBQUE7O0FBRUYsUUFBSSxDQUFDLFlBQU07QUFDVCxZQUFNLEdBQUcs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Qy9ELGtCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ2hELENBQUMsQ0FBQTs7QUFFRixVQUFFLENBQUMsOEJBQThCLEVBQUUsWUFBTTtBQUN2QyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUE7U0FDbkQsQ0FBQyxDQUFBO09BQ0gsQ0FBQyxDQUFBO0tBQ0gsQ0FBQyxDQUFBO0dBQ0gsQ0FBQyxDQUFBO0NBQ0gsQ0FBQyxDQUFBIiwiZmlsZSI6Ii9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9zcGVjL21pbmltYXAtbWFpbi1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0ICcuL2hlbHBlcnMvd29ya3NwYWNlJ1xuaW1wb3J0IE1pbmltYXAgZnJvbSAnLi4vbGliL21pbmltYXAnXG5pbXBvcnQgTWluaW1hcEVsZW1lbnQgZnJvbSAnLi4vbGliL21pbmltYXAtZWxlbWVudCdcblxuZGVzY3JpYmUoJ01pbmltYXAgcGFja2FnZScsICgpID0+IHtcbiAgbGV0IFtlZGl0b3IsIG1pbmltYXAsIGVkaXRvckVsZW1lbnQsIG1pbmltYXBFbGVtZW50LCB3b3Jrc3BhY2VFbGVtZW50LCBtaW5pbWFwUGFja2FnZV0gPSBbXVxuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGF0b20uY29uZmlnLnNldCgnbWluaW1hcC5hdXRvVG9nZ2xlJywgdHJ1ZSlcblxuICAgIHdvcmtzcGFjZUVsZW1lbnQgPSBhdG9tLnZpZXdzLmdldFZpZXcoYXRvbS53b3Jrc3BhY2UpXG4gICAgamFzbWluZS5hdHRhY2hUb0RPTSh3b3Jrc3BhY2VFbGVtZW50KVxuXG4gICAgTWluaW1hcEVsZW1lbnQucmVnaXN0ZXJWaWV3UHJvdmlkZXIoTWluaW1hcClcblxuICAgIHdhaXRzRm9yUHJvbWlzZSgoKSA9PiB7XG4gICAgICByZXR1cm4gYXRvbS53b3Jrc3BhY2Uub3Blbignc2FtcGxlLmNvZmZlZScpXG4gICAgfSlcblxuICAgIHdhaXRzRm9yUHJvbWlzZSgoKSA9PiB7XG4gICAgICByZXR1cm4gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ21pbmltYXAnKS50aGVuKChwa2cpID0+IHtcbiAgICAgICAgbWluaW1hcFBhY2thZ2UgPSBwa2cubWFpbk1vZHVsZVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgd2FpdHNGb3IoKCkgPT4ge1xuICAgICAgcmV0dXJuIHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYXRvbS10ZXh0LWVkaXRvcicpXG4gICAgfSlcblxuICAgIHJ1bnMoKCkgPT4ge1xuICAgICAgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpXG4gICAgICBlZGl0b3JFbGVtZW50ID0gYXRvbS52aWV3cy5nZXRWaWV3KGVkaXRvcilcbiAgICB9KVxuXG4gICAgd2FpdHNGb3IoKCkgPT4ge1xuICAgICAgcmV0dXJuIHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYXRvbS10ZXh0LWVkaXRvcjo6c2hhZG93IGF0b20tdGV4dC1lZGl0b3ItbWluaW1hcCcpXG4gICAgfSlcbiAgfSlcblxuICBpdCgncmVnaXN0ZXJzIHRoZSBtaW5pbWFwIHZpZXdzIHByb3ZpZGVyJywgKCkgPT4ge1xuICAgIGxldCB0ZXh0RWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuYnVpbGRUZXh0RWRpdG9yKHt9KVxuICAgIG1pbmltYXAgPSBuZXcgTWluaW1hcCh7dGV4dEVkaXRvcn0pXG4gICAgbWluaW1hcEVsZW1lbnQgPSBhdG9tLnZpZXdzLmdldFZpZXcobWluaW1hcClcblxuICAgIGV4cGVjdChtaW5pbWFwRWxlbWVudCkudG9FeGlzdCgpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3doZW4gYW4gZWRpdG9yIGlzIG9wZW5lZCcsICgpID0+IHtcbiAgICBpdCgnY3JlYXRlcyBhIG1pbmltYXAgbW9kZWwgZm9yIHRoZSBlZGl0b3InLCAoKSA9PiB7XG4gICAgICBleHBlY3QobWluaW1hcFBhY2thZ2UubWluaW1hcEZvckVkaXRvcihlZGl0b3IpKS50b0JlRGVmaW5lZCgpXG4gICAgfSlcblxuICAgIGl0KCdhdHRhY2hlcyBhIG1pbmltYXAgZWxlbWVudCB0byB0aGUgZWRpdG9yIHZpZXcnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoZWRpdG9yRWxlbWVudC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2F0b20tdGV4dC1lZGl0b3ItbWluaW1hcCcpKS50b0V4aXN0KClcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCc6Om9ic2VydmVNaW5pbWFwcycsICgpID0+IHtcbiAgICBsZXQgW3NweV0gPSBbXVxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgc3B5ID0gamFzbWluZS5jcmVhdGVTcHkoJ29ic2VydmVNaW5pbWFwcycpXG4gICAgICBtaW5pbWFwUGFja2FnZS5vYnNlcnZlTWluaW1hcHMoc3B5KVxuICAgIH0pXG5cbiAgICBpdCgnY2FsbHMgdGhlIGNhbGxiYWNrIHdpdGggdGhlIGV4aXN0aW5nIG1pbmltYXBzJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHNweSkudG9IYXZlQmVlbkNhbGxlZCgpXG4gICAgfSlcblxuICAgIGl0KCdjYWxscyB0aGUgY2FsbGJhY2sgd2hlbiBhIG5ldyBlZGl0b3IgaXMgb3BlbmVkJywgKCkgPT4ge1xuICAgICAgd2FpdHNGb3JQcm9taXNlKCgpID0+IHsgcmV0dXJuIGF0b20ud29ya3NwYWNlLm9wZW4oJ290aGVyLXNhbXBsZS5qcycpIH0pXG5cbiAgICAgIHJ1bnMoKCkgPT4geyBleHBlY3Qoc3B5LmNhbGxzLmxlbmd0aCkudG9FcXVhbCgyKSB9KVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJzo6ZGVhY3RpdmF0ZScsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIG1pbmltYXBQYWNrYWdlLmRlYWN0aXZhdGUoKVxuICAgIH0pXG5cbiAgICBpdCgnZGVzdHJveXMgYWxsIHRoZSBtaW5pbWFwIG1vZGVscycsICgpID0+IHtcbiAgICAgIGV4cGVjdChtaW5pbWFwUGFja2FnZS5lZGl0b3JzTWluaW1hcHMpLnRvQmVVbmRlZmluZWQoKVxuICAgIH0pXG5cbiAgICBpdCgnZGVzdHJveXMgYWxsIHRoZSBtaW5pbWFwIGVsZW1lbnRzJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGVkaXRvckVsZW1lbnQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdhdG9tLXRleHQtZWRpdG9yLW1pbmltYXAnKSkubm90LnRvRXhpc3QoKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3NlcnZpY2UnLCAoKSA9PiB7XG4gICAgaXQoJ3JldHVybnMgdGhlIG1pbmltYXAgbWFpbiBtb2R1bGUnLCAoKSA9PiB7XG4gICAgICBleHBlY3QobWluaW1hcFBhY2thZ2UucHJvdmlkZU1pbmltYXBTZXJ2aWNlVjEoKSkudG9FcXVhbChtaW5pbWFwUGFja2FnZSlcbiAgICB9KVxuXG4gICAgaXQoJ2NyZWF0ZXMgc3RhbmRhbG9uZSBtaW5pbWFwIHdpdGggcHJvdmlkZWQgdGV4dCBlZGl0b3InLCAoKSA9PiB7XG4gICAgICBsZXQgdGV4dEVkaXRvciA9IGF0b20ud29ya3NwYWNlLmJ1aWxkVGV4dEVkaXRvcih7fSlcbiAgICAgIGxldCBzdGFuZGFsb25lTWluaW1hcCA9IG1pbmltYXBQYWNrYWdlLnN0YW5kQWxvbmVNaW5pbWFwRm9yRWRpdG9yKHRleHRFZGl0b3IpXG4gICAgICBleHBlY3Qoc3RhbmRhbG9uZU1pbmltYXAuZ2V0VGV4dEVkaXRvcigpKS50b0VxdWFsKHRleHRFZGl0b3IpXG4gICAgfSlcbiAgfSlcblxuICAvLyAgICAjIyMjIyMjIyAgIyMgICAgICAgIyMgICAgICMjICAjIyMjIyMgICAjIyMjICMjICAgICMjICAjIyMjIyNcbiAgLy8gICAgIyMgICAgICMjICMjICAgICAgICMjICAgICAjIyAjIyAgICAjIyAgICMjICAjIyMgICAjIyAjIyAgICAjI1xuICAvLyAgICAjIyAgICAgIyMgIyMgICAgICAgIyMgICAgICMjICMjICAgICAgICAgIyMgICMjIyMgICMjICMjXG4gIC8vICAgICMjIyMjIyMjICAjIyAgICAgICAjIyAgICAgIyMgIyMgICAjIyMjICAjIyAgIyMgIyMgIyMgICMjIyMjI1xuICAvLyAgICAjIyAgICAgICAgIyMgICAgICAgIyMgICAgICMjICMjICAgICMjICAgIyMgICMjICAjIyMjICAgICAgICMjXG4gIC8vICAgICMjICAgICAgICAjIyAgICAgICAjIyAgICAgIyMgIyMgICAgIyMgICAjIyAgIyMgICAjIyMgIyMgICAgIyNcbiAgLy8gICAgIyMgICAgICAgICMjIyMjIyMjICAjIyMjIyMjICAgIyMjIyMjICAgIyMjIyAjIyAgICAjIyAgIyMjIyMjXG5cbiAgZGVzY3JpYmUoJ3BsdWdpbnMnLCAoKSA9PiB7XG4gICAgbGV0IFtyZWdpc3RlckhhbmRsZXIsIHVucmVnaXN0ZXJIYW5kbGVyLCBwbHVnaW5dID0gW11cblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmRpc3BsYXlQbHVnaW5zQ29udHJvbHMnLCB0cnVlKVxuICAgICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLnBsdWdpbnMuZHVtbXknLCB1bmRlZmluZWQpXG5cbiAgICAgIHBsdWdpbiA9IHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgYWN0aXZhdGVQbHVnaW4gKCkgeyB0aGlzLmFjdGl2ZSA9IHRydWUgfSxcbiAgICAgICAgZGVhY3RpdmF0ZVBsdWdpbiAoKSB7IHRoaXMuYWN0aXZlID0gZmFsc2UgfSxcbiAgICAgICAgaXNBY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5hY3RpdmUgfVxuICAgICAgfVxuXG4gICAgICBzcHlPbihwbHVnaW4sICdhY3RpdmF0ZVBsdWdpbicpLmFuZENhbGxUaHJvdWdoKClcbiAgICAgIHNweU9uKHBsdWdpbiwgJ2RlYWN0aXZhdGVQbHVnaW4nKS5hbmRDYWxsVGhyb3VnaCgpXG5cbiAgICAgIHJlZ2lzdGVySGFuZGxlciA9IGphc21pbmUuY3JlYXRlU3B5KCdyZWdpc3RlciBoYW5kbGVyJylcbiAgICAgIHVucmVnaXN0ZXJIYW5kbGVyID0gamFzbWluZS5jcmVhdGVTcHkoJ3VucmVnaXN0ZXIgaGFuZGxlcicpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCd3aGVuIHJlZ2lzdGVyZWQnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgbWluaW1hcFBhY2thZ2Uub25EaWRBZGRQbHVnaW4ocmVnaXN0ZXJIYW5kbGVyKVxuICAgICAgICBtaW5pbWFwUGFja2FnZS5vbkRpZFJlbW92ZVBsdWdpbih1bnJlZ2lzdGVySGFuZGxlcilcbiAgICAgICAgbWluaW1hcFBhY2thZ2UucmVnaXN0ZXJQbHVnaW4oJ2R1bW15JywgcGx1Z2luKVxuICAgICAgfSlcblxuICAgICAgaXQoJ21ha2VzIHRoZSBwbHVnaW4gYXZhaWxhYmxlIGluIHRoZSBtaW5pbWFwJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QobWluaW1hcFBhY2thZ2UucGx1Z2luc1snZHVtbXknXSkudG9CZShwbHVnaW4pXG4gICAgICB9KVxuXG4gICAgICBpdCgnZW1pdHMgYW4gZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChyZWdpc3RlckhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICAgICAgfSlcblxuICAgICAgaXQoJ2NyZWF0ZXMgYSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIHBsdWdpbicsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KG1pbmltYXBQYWNrYWdlLmNvbmZpZy5wbHVnaW5zLnByb3BlcnRpZXMuZHVtbXkpLnRvQmVEZWZpbmVkKClcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdzZXRzIHRoZSBjb3JyZXNwb25kaW5nIGNvbmZpZycsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGF0b20uY29uZmlnLmdldCgnbWluaW1hcC5wbHVnaW5zLmR1bW15JykpLnRvQmVUcnV0aHkoKVxuICAgICAgfSlcblxuICAgICAgZGVzY3JpYmUoJ3RyaWdnZXJpbmcgdGhlIGNvcnJlc3BvbmRpbmcgcGx1Z2luIGNvbW1hbmQnLCAoKSA9PiB7XG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2god29ya3NwYWNlRWxlbWVudCwgJ21pbmltYXA6dG9nZ2xlLWR1bW15JylcbiAgICAgICAgfSlcblxuICAgICAgICBpdCgncmVjZWl2ZXMgYSBkZWFjdGl2YXRpb24gY2FsbCcsICgpID0+IHtcbiAgICAgICAgICBleHBlY3QocGx1Z2luLmRlYWN0aXZhdGVQbHVnaW4pLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgZGVzY3JpYmUoJ2FuZCB0aGVuIHVucmVnaXN0ZXJlZCcsICgpID0+IHtcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgICAgbWluaW1hcFBhY2thZ2UudW5yZWdpc3RlclBsdWdpbignZHVtbXknKVxuICAgICAgICB9KVxuXG4gICAgICAgIGl0KCdoYXMgYmVlbiB1bnJlZ2lzdGVyZWQnLCAoKSA9PiB7XG4gICAgICAgICAgZXhwZWN0KG1pbmltYXBQYWNrYWdlLnBsdWdpbnNbJ2R1bW15J10pLnRvQmVVbmRlZmluZWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGl0KCdlbWl0cyBhbiBldmVudCcsICgpID0+IHtcbiAgICAgICAgICBleHBlY3QodW5yZWdpc3RlckhhbmRsZXIpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRlc2NyaWJlKCd3aGVuIHRoZSBjb25maWcgaXMgbW9kaWZpZWQnLCAoKSA9PiB7XG4gICAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICBhdG9tLmNvbmZpZy5zZXQoJ21pbmltYXAucGx1Z2lucy5kdW1teScsIGZhbHNlKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpdCgnZG9lcyBub3QgYWN0aXZhdGVzIHRoZSBwbHVnaW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBleHBlY3QocGx1Z2luLmRlYWN0aXZhdGVQbHVnaW4pLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgZGVzY3JpYmUoJ29uIG1pbmltYXAgZGVhY3RpdmF0aW9uJywgKCkgPT4ge1xuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgICBleHBlY3QocGx1Z2luLmFjdGl2ZSkudG9CZVRydXRoeSgpXG4gICAgICAgICAgbWluaW1hcFBhY2thZ2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaXQoJ2RlYWN0aXZhdGVzIGFsbCB0aGUgcGx1Z2lucycsICgpID0+IHtcbiAgICAgICAgICBleHBlY3QocGx1Z2luLmFjdGl2ZSkudG9CZUZhbHN5KClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCd3aGVuIHRoZSBjb25maWcgZm9yIGl0IGlzIGZhbHNlJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGF0b20uY29uZmlnLnNldCgnbWluaW1hcC5wbHVnaW5zLmR1bW15JywgZmFsc2UpXG4gICAgICAgIG1pbmltYXBQYWNrYWdlLnJlZ2lzdGVyUGx1Z2luKCdkdW1teScsIHBsdWdpbilcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdkb2VzIG5vdCByZWNlaXZlIGFuIGFjdGl2YXRpb24gY2FsbCcsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHBsdWdpbi5hY3RpdmF0ZVBsdWdpbikubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ3RoZSByZWdpc3RlcmVkIHBsdWdpbicsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBtaW5pbWFwUGFja2FnZS5yZWdpc3RlclBsdWdpbignZHVtbXknLCBwbHVnaW4pXG4gICAgICB9KVxuXG4gICAgICBpdCgncmVjZWl2ZXMgYW4gYWN0aXZhdGlvbiBjYWxsJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QocGx1Z2luLmFjdGl2YXRlUGx1Z2luKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdhY3RpdmF0ZXMgdGhlIHBsdWdpbicsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHBsdWdpbi5hY3RpdmUpLnRvQmVUcnV0aHkoKVxuICAgICAgfSlcblxuICAgICAgZGVzY3JpYmUoJ3doZW4gdGhlIGNvbmZpZyBpcyBtb2RpZmllZCBhZnRlciByZWdpc3RyYXRpb24nLCAoKSA9PiB7XG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICAgIGF0b20uY29uZmlnLnNldCgnbWluaW1hcC5wbHVnaW5zLmR1bW15JywgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaXQoJ3JlY2VpdmVzIGEgZGVhY3RpdmF0aW9uIGNhbGwnLCAoKSA9PiB7XG4gICAgICAgICAgZXhwZWN0KHBsdWdpbi5kZWFjdGl2YXRlUGx1Z2luKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=
//# sourceURL=/home/qual/.atom/packages/minimap/spec/minimap-main-spec.js
