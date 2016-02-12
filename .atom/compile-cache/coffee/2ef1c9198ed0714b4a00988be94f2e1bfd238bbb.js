(function() {
  var MinimapPigments;

  MinimapPigments = require('../lib/minimap-pigments');

  describe("MinimapPigments", function() {
    var binding, colorBuffer, editBuffer, editor, minimap, minimapPackage, pigmentsProject, plugin, workspaceElement, _ref;
    _ref = [], workspaceElement = _ref[0], editor = _ref[1], minimapPackage = _ref[2], minimap = _ref[3], pigmentsProject = _ref[4], colorBuffer = _ref[5], plugin = _ref[6], binding = _ref[7];
    editBuffer = function(text, options) {
      var range;
      if (options == null) {
        options = {};
      }
      if (options.start != null) {
        if (options.end != null) {
          range = [options.start, options.end];
        } else {
          range = [options.start, options.start];
        }
        editor.setSelectedBufferRange(range);
      }
      editor.insertText(text);
      if (!options.noEvent) {
        return editor.getBuffer().emitter.emit('did-stop-changing');
      }
    };
    beforeEach(function() {
      workspaceElement = atom.views.getView(atom.workspace);
      jasmine.attachToDOM(workspaceElement);
      waitsForPromise(function() {
        return atom.workspace.open('sample.sass').then(function(textEditor) {
          return editor = textEditor;
        });
      });
      waitsForPromise(function() {
        return atom.packages.activatePackage('pigments').then(function(pkg) {
          return pigmentsProject = pkg.mainModule.getProject();
        });
      });
      waitsForPromise(function() {
        return atom.packages.activatePackage('minimap').then(function(pkg) {
          return minimapPackage = pkg.mainModule;
        });
      });
      waitsForPromise(function() {
        return atom.packages.activatePackage('minimap-pigments').then(function(pkg) {
          return plugin = pkg.mainModule;
        });
      });
      runs(function() {
        minimap = minimapPackage.minimapForEditor(editor);
        return colorBuffer = pigmentsProject.colorBufferForEditor(editor);
      });
      waitsFor(function() {
        return binding = plugin.bindingForEditor(editor);
      });
      return runs(function() {
        return spyOn(minimap, 'decorateMarker').andCallThrough();
      });
    });
    return describe("with an open editor that have a minimap", function() {
      beforeEach(function() {
        return waitsForPromise(function() {
          return colorBuffer.initialize();
        });
      });
      it("creates a binding between the two plugins", function() {
        return expect(binding).toBeDefined();
      });
      it('decorates the minimap with color markers', function() {
        return expect(minimap.decorateMarker).toHaveBeenCalled();
      });
      describe('when a color is added', function() {
        beforeEach(function() {
          editor.moveToBottom();
          editBuffer('  border-color: yellow');
          return waitsFor(function() {
            return minimap.decorateMarker.callCount > 2;
          });
        });
        return it('adds a new decoration on the minimap', function() {
          return expect(minimap.decorateMarker.callCount).toEqual(3);
        });
      });
      describe('when a color is removed', function() {
        beforeEach(function() {
          spyOn(minimap, 'removeAllDecorationsForMarker').andCallThrough();
          editBuffer('', {
            start: [2, 0],
            end: [2, Infinity]
          });
          return waitsFor(function() {
            return minimap.removeAllDecorationsForMarker.callCount > 0;
          });
        });
        return it('removes the minimap decoration', function() {
          return expect(minimap.removeAllDecorationsForMarker.callCount).toEqual(1);
        });
      });
      describe('when the editor is destroyed', function() {
        beforeEach(function() {
          spyOn(binding, 'destroy').andCallThrough();
          return editor.destroy();
        });
        return it('also destroy the binding model', function() {
          expect(binding.destroy).toHaveBeenCalled();
          return expect(plugin.bindingForEditor(editor)).toBeUndefined();
        });
      });
      return describe('when the plugin is deactivated', function() {
        beforeEach(function() {
          spyOn(binding, 'destroy').andCallThrough();
          return plugin.deactivatePlugin();
        });
        return it('removes all the decorations from the minimap', function() {
          return expect(binding.destroy).toHaveBeenCalled();
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwLXBpZ21lbnRzL3NwZWMvbWluaW1hcC1waWdtZW50cy1zcGVjLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxlQUFBOztBQUFBLEVBQUEsZUFBQSxHQUFrQixPQUFBLENBQVEseUJBQVIsQ0FBbEIsQ0FBQTs7QUFBQSxFQU9BLFFBQUEsQ0FBUyxpQkFBVCxFQUE0QixTQUFBLEdBQUE7QUFDMUIsUUFBQSxrSEFBQTtBQUFBLElBQUEsT0FBcUcsRUFBckcsRUFBQywwQkFBRCxFQUFtQixnQkFBbkIsRUFBMkIsd0JBQTNCLEVBQTJDLGlCQUEzQyxFQUFvRCx5QkFBcEQsRUFBcUUscUJBQXJFLEVBQWtGLGdCQUFsRixFQUEwRixpQkFBMUYsQ0FBQTtBQUFBLElBRUEsVUFBQSxHQUFhLFNBQUMsSUFBRCxFQUFPLE9BQVAsR0FBQTtBQUNYLFVBQUEsS0FBQTs7UUFEa0IsVUFBUTtPQUMxQjtBQUFBLE1BQUEsSUFBRyxxQkFBSDtBQUNFLFFBQUEsSUFBRyxtQkFBSDtBQUNFLFVBQUEsS0FBQSxHQUFRLENBQUMsT0FBTyxDQUFDLEtBQVQsRUFBZ0IsT0FBTyxDQUFDLEdBQXhCLENBQVIsQ0FERjtTQUFBLE1BQUE7QUFHRSxVQUFBLEtBQUEsR0FBUSxDQUFDLE9BQU8sQ0FBQyxLQUFULEVBQWdCLE9BQU8sQ0FBQyxLQUF4QixDQUFSLENBSEY7U0FBQTtBQUFBLFFBS0EsTUFBTSxDQUFDLHNCQUFQLENBQThCLEtBQTlCLENBTEEsQ0FERjtPQUFBO0FBQUEsTUFRQSxNQUFNLENBQUMsVUFBUCxDQUFrQixJQUFsQixDQVJBLENBQUE7QUFTQSxNQUFBLElBQUEsQ0FBQSxPQUFtRSxDQUFDLE9BQXBFO2VBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBQSxDQUFrQixDQUFDLE9BQU8s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

//# sourceURL=/home/qual/.atom/packages/minimap-pigments/spec/minimap-pigments-spec.coffee
