Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/*
  The following hack clears the require cache of all the paths to the minimap when this file is laoded. It should prevents errors of partial reloading after an update.
 */

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _atom = require('atom');

var _decoratorsInclude = require('./decorators/include');

var _decoratorsInclude2 = _interopRequireDefault(_decoratorsInclude);

var _mixinsPluginManagement = require('./mixins/plugin-management');

var _mixinsPluginManagement2 = _interopRequireDefault(_mixinsPluginManagement);

'use babel';
if (!atom.inSpecMode()) {
  Object.keys(require.cache).filter(function (p) {
    return p !== __filename && p.indexOf(_path2['default'].resolve(__dirname, '..') + _path2['default'].sep) > -1;
  }).forEach(function (p) {
    delete require.cache[p];
  });
}

var Minimap = undefined,
    MinimapElement = undefined,
    MinimapPluginGeneratorElement = undefined;

/**
 * The `Minimap` package provides an eagle-eye view of text buffers.
 *
 * It also provides API for plugin packages that want to interact with the
 * minimap and be available to the user through the minimap settings.
 */

var Main = (function () {
  /**
   * Used only at export time.
   *
   * @access private
   */

  function Main() {
    _classCallCheck(this, _Main);

    /**
     * The activation state of the package.
     *
     * @type {boolean}
     * @access private
     */
    this.active = false;
    /**
     * The toggle state of the package.
     *
     * @type {boolean}
     * @access private
     */
    this.toggled = false;
    /**
     * The `Map` where Minimap instances are stored with the text editor they
     * target as key.
     *
     * @type {Map}
     * @access private
     */
    this.editorsMinimaps = null;
    /**
     * The composite disposable that stores the package's subscriptions.
     *
     * @type {CompositeDisposable}
     * @access private
     */
    this.subscriptions = null;
    /**
     * The disposable that stores the package's commands subscription.
     *
     * @type {Disposable}
     * @access private
     */
    this.subscriptionsOfCommands = null;
    /**
     * The package's config object.
     *
     * @type {Object}
     * @access private
     */
    this.config = require('./config-schema.json');
    /**
     * The package's events emitter.
     *
     * @type {Emitter}
     * @access private
     */
    this.emitter = new _atom.Emitter();

    this.initializePlugins();
  }

  /**
   * The exposed instance of the `Main` class.
   *
   * @access private
   */

  /**
   * Activates the minimap package.
   */

  _createClass(Main, [{
    key: 'activate',
    value: function activate() {
      var _this = this;

      if (this.active) {
        return;
      }

      if (!Minimap) {
        Minimap = require('./minimap');
      }
      if (!MinimapElement) {
        MinimapElement = require('./minimap-element');
      }

      MinimapElement.registerViewProvider(Minimap);

      this.subscriptionsOfCommands = atom.commands.add('atom-workspace', {
        'minimap:toggle': function minimapToggle() {
          _this.toggle();
        },
        'minimap:generate-coffee-plugin': function minimapGenerateCoffeePlugin() {
          _this.generatePlugin('coffee');
        },
        'minimap:generate-javascript-plugin': function minimapGenerateJavascriptPlugin() {
          _this.generatePlugin('javascript');
        },
        'minimap:generate-babel-plugin': function minimapGenerateBabelPlugin() {
          _this.generatePlugin('babel');
        }
      });

      this.editorsMinimaps = new Map();
      this.subscriptions = new _atom.CompositeDisposable();
      this.active = true;

      if (atom.config.get('minimap.autoToggle')) {
        this.toggle();
      }
    }

    /**
     * Deactivates the minimap package.
     */
  }, {
    key: 'deactivate',
    value: function deactivate() {
      var _this2 = this;

      if (!this.active) {
        return;
      }

      this.deactivateAllPlugins();

      if (this.editorsMinimaps) {
        this.editorsMinimaps.forEach(function (value, key) {
          value.destroy();
          _this2.editorsMinimaps['delete'](key);
        });
      }

      this.subscriptions.dispose();
      this.subscriptions = null;
      this.subscriptionsOfCommands.dispose();
      this.subscriptionsOfCommands = null;
      this.editorsMinimaps = undefined;
      this.toggled = false;
      this.active = false;
    }

    /**
     * Toggles the minimap display.
     */
  }, {
    key: 'toggle',
    value: function toggle() {
      var _this3 = this;

      if (!this.active) {
        return;
      }

      if (this.toggled) {
        this.toggled = false;

        if (this.editorsMinimaps) {
          this.editorsMinimaps.forEach(function (value, key) {
            value.destroy();
            _this3.editorsMinimaps['delete'](key);
          });
        }
        this.subscriptions.dispose();
      } else {
        this.toggled = true;
        this.initSubscriptions();
      }
    }

    /**
     * Opens the plugin generation view.
     *
     * @param  {string} template the name of the template to use
     */
  }, {
    key: 'generatePlugin',
    value: function generatePlugin(template) {
      if (!MinimapPluginGeneratorElement) {
        MinimapPluginGeneratorElement = require('./minimap-plugin-generator-element');
      }
      var view = new MinimapPluginGeneratorElement();
      view.template = template;
      view.attach();
    }

    /**
     * Registers a callback to listen to the `did-activate` event of the package.
     *
     * @param  {function(event:Object):void} callback the callback function
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidActivate',
    value: function onDidActivate(callback) {
      return this.emitter.on('did-activate', callback);
    }

    /**
     * Registers a callback to listen to the `did-deactivate` event of the
     * package.
     *
     * @param  {function(event:Object):void} callback the callback function
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidDeactivate',
    value: function onDidDeactivate(callback) {
      return this.emitter.on('did-deactivate', callback);
    }

    /**
     * Registers a callback to listen to the `did-create-minimap` event of the
     * package.
     *
     * @param  {function(event:Object):void} callback the callback function
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidCreateMinimap',
    value: function onDidCreateMinimap(callback) {
      return this.emitter.on('did-create-minimap', callback);
    }

    /**
     * Registers a callback to listen to the `did-add-plugin` event of the
     * package.
     *
     * @param  {function(event:Object):void} callback the callback function
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidAddPlugin',
    value: function onDidAddPlugin(callback) {
      return this.emitter.on('did-add-plugin', callback);
    }

    /**
     * Registers a callback to listen to the `did-remove-plugin` event of the
     * package.
     *
     * @param  {function(event:Object):void} callback the callback function
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidRemovePlugin',
    value: function onDidRemovePlugin(callback) {
      return this.emitter.on('did-remove-plugin', callback);
    }

    /**
     * Registers a callback to listen to the `did-activate-plugin` event of the
     * package.
     *
     * @param  {function(event:Object):void} callback the callback function
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidActivatePlugin',
    value: function onDidActivatePlugin(callback) {
      return this.emitter.on('did-activate-plugin', callback);
    }

    /**
     * Registers a callback to listen to the `did-deactivate-plugin` event of the
     * package.
     *
     * @param  {function(event:Object):void} callback the callback function
     * @return {Disposable} a disposable to stop listening to the event
     */
  }, {
    key: 'onDidDeactivatePlugin',
    value: function onDidDeactivatePlugin(callback) {
      return this.emitter.on('did-deactivate-plugin', callback);
    }

    /**
     * Returns the `Minimap` class
     *
     * @return {Function} the `Minimap` class constructor
     */
  }, {
    key: 'minimapClass',
    value: function minimapClass() {
      return Minimap;
    }

    /**
     * Returns the `Minimap` object associated to the passed-in
     * `TextEditorElement`.
     *
     * @param  {TextEditorElement} editorElement a text editor element
     * @return {Minimap} the associated minimap
     */
  }, {
    key: 'minimapForEditorElement',
    value: function minimapForEditorElement(editorElement) {
      if (!editorElement) {
        return;
      }
      return this.minimapForEditor(editorElement.getModel());
    }

    /**
     * Returns the `Minimap` object associated to the passed-in
     * `TextEditor`.
     *
     * @param  {TextEditor} textEditor a text editor
     * @return {Minimap} the associated minimap
     */
  }, {
    key: 'minimapForEditor',
    value: function minimapForEditor(textEditor) {
      var _this4 = this;

      if (!textEditor) {
        return;
      }

      var minimap = this.editorsMinimaps.get(textEditor);

      if (!minimap) {
        minimap = new Minimap({ textEditor: textEditor });
        this.editorsMinimaps.set(textEditor, minimap);

        var editorSubscription = textEditor.onDidDestroy(function () {
          var minimaps = _this4.editorsMinimaps;
          if (minimaps) {
            minimaps['delete'](textEditor);
          }
          editorSubscription.dispose();
        });
      }

      return minimap;
    }

    /**
     * Returns a new stand-alone {Minimap} for the passed-in `TextEditor`.
     *
     * @param  {TextEditor} textEditor a text editor instance to create
     *                                 a minimap for
     * @return {Minimap} a new stand-alone Minimap for the passed-in editor
     */
  }, {
    key: 'standAloneMinimapForEditor',
    value: function standAloneMinimapForEditor(textEditor) {
      if (!textEditor) {
        return;
      }

      return new Minimap({
        textEditor: textEditor,
        standAlone: true
      });
    }

    /**
     * Returns the `Minimap` associated to the active `TextEditor`.
     *
     * @return {Minimap} the active Minimap
     */
  }, {
    key: 'getActiveMinimap',
    value: function getActiveMinimap() {
      return this.minimapForEditor(atom.workspace.getActiveTextEditor());
    }

    /**
     * Calls a function for each present and future minimaps.
     *
     * @param  {function(minimap:Minimap):void} iterator a function to call with
     *                                                   the existing and future
     *                                                   minimaps
     * @return {Disposable} a disposable to unregister the observer
     */
  }, {
    key: 'observeMinimaps',
    value: function observeMinimaps(iterator) {
      if (!iterator) {
        return;
      }

      if (this.editorsMinimaps) {
        this.editorsMinimaps.forEach(function (minimap) {
          iterator(minimap);
        });
      }
      return this.onDidCreateMinimap(function (minimap) {
        iterator(minimap);
      });
    }

    /**
     * Registers to the `observeTextEditors` method.
     *
     * @access private
     */
  }, {
    key: 'initSubscriptions',
    value: function initSubscriptions() {
      var _this5 = this;

      this.subscriptions.add(atom.workspace.observeTextEditors(function (textEditor) {
        var minimap = _this5.minimapForEditor(textEditor);
        var minimapElement = atom.views.getView(minimap);

        _this5.emitter.emit('did-create-minimap', minimap);

        minimapElement.attach();
      }));
    }
  }]);

  var _Main = Main;
  Main = (0, _decoratorsInclude2['default'])(_mixinsPluginManagement2['default'])(Main) || Main;
  return Main;
})();

exports['default'] = new Main();
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztvQkFLaUIsTUFBTTs7OztvQkFTb0IsTUFBTTs7aUNBQzdCLHNCQUFzQjs7OztzQ0FDYiw0QkFBNEI7Ozs7QUFoQnpELFdBQVcsQ0FBQTtBQU1YLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7QUFDdEIsUUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQ3ZDLFdBQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsa0JBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7R0FDcEYsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBSztBQUNoQixXQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FDeEIsQ0FBQyxDQUFBO0NBQ0g7O0FBTUQsSUFBSSxPQUFPLFlBQUE7SUFBRSxjQUFjLFlBQUE7SUFBRSw2QkFBNkIsWUFBQSxDQUFBOzs7Ozs7Ozs7SUFTcEQsSUFBSTs7Ozs7OztBQU1JLFdBTlIsSUFBSSxHQU1POzs7Ozs7Ozs7QUFPYixRQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTs7Ozs7OztBQU9uQixRQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTs7Ozs7Ozs7QUFRcEIsUUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7Ozs7Ozs7QUFPM0IsUUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7Ozs7Ozs7QUFPekIsUUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQTs7Ozs7OztBQU9uQyxRQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxz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O09BQ3hCLENBQUMsQ0FBQyxDQUFBO0tBQ0o7OztjQTNVRyxJQUFJO0FBQUosTUFBSSxHQURULHdFQUF5QixDQUNwQixJQUFJLEtBQUosSUFBSTtTQUFKLElBQUk7OztxQkFtVkssSUFBSSxJQUFJLEVBQUUiLCJmaWxlIjoiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwL2xpYi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuLypcbiAgVGhlIGZvbGxvd2luZyBoYWNrIGNsZWFycyB0aGUgcmVxdWlyZSBjYWNoZSBvZiBhbGwgdGhlIHBhdGhzIHRvIHRoZSBtaW5pbWFwIHdoZW4gdGhpcyBmaWxlIGlzIGxhb2RlZC4gSXQgc2hvdWxkIHByZXZlbnRzIGVycm9ycyBvZiBwYXJ0aWFsIHJlbG9hZGluZyBhZnRlciBhbiB1cGRhdGUuXG4gKi9cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pZiAoIWF0b20uaW5TcGVjTW9kZSgpKcKge1xuICBPYmplY3Qua2V5cyhyZXF1aXJlLmNhY2hlKS5maWx0ZXIoKHApID0+IHtcbiAgICByZXR1cm4gcCAhPT0gX19maWxlbmFtZSAmJiBwLmluZGV4T2YocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykgKyBwYXRoLnNlcCkgPiAtMVxuICB9KS5mb3JFYWNoKChwKSA9PiB7XG4gICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcF1cbiAgfSlcbn1cblxuaW1wb3J0IHtFbWl0dGVyLCBDb21wb3NpdGVEaXNwb3NhYmxlfSBmcm9tICdhdG9tJ1xuaW1wb3J0IGluY2x1ZGUgZnJvbSAnLi9kZWNvcmF0b3JzL2luY2x1ZGUnXG5pbXBvcnQgUGx1Z2luTWFuYWdlbWVudCBmcm9tICcuL21peGlucy9wbHVnaW4tbWFuYWdlbWVudCdcblxubGV0IE1pbmltYXAsIE1pbmltYXBFbGVtZW50LCBNaW5pbWFwUGx1Z2luR2VuZXJhdG9yRWxlbWVudFxuXG4vKipcbiAqIFRoZSBgTWluaW1hcGAgcGFja2FnZSBwcm92aWRlcyBhbiBlYWdsZS1leWUgdmlldyBvZiB0ZXh0IGJ1ZmZlcnMuXG4gKlxuICogSXQgYWxzbyBwcm92aWRlcyBBUEkgZm9yIHBsdWdpbiBwYWNrYWdlcyB0aGF0IHdhbnQgdG8gaW50ZXJhY3Qgd2l0aCB0aGVcbiAqIG1pbmltYXAgYW5kIGJlIGF2YWlsYWJsZSB0byB0aGUgdXNlciB0aHJvdWdoIHRoZSBtaW5pbWFwIHNldHRpbmdzLlxuICovXG5AaW5jbHVkZShQbHVnaW5NYW5hZ2VtZW50KVxuY2xhc3MgTWFpbiB7XG4gIC8qKlxuICAgKiBVc2VkIG9ubHkgYXQgZXhwb3J0IHRpbWUuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmF0aW9uIHN0YXRlIG9mIHRoZSBwYWNrYWdlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIFRoZSB0b2dnbGUgc3RhdGUgb2YgdGhlIHBhY2thZ2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRvZ2dsZWQgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIFRoZSBgTWFwYCB3aGVyZSBNaW5pbWFwIGluc3RhbmNlcyBhcmUgc3RvcmVkIHdpdGggdGhlIHRleHQgZWRpdG9yIHRoZXlcbiAgICAgKiB0YXJnZXQgYXMga2V5LlxuICAgICAqXG4gICAgICogQHR5cGUge01hcH1cbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVkaXRvcnNNaW5pbWFwcyA9IG51bGxcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9zaXRlIGRpc3Bvc2FibGUgdGhhdCBzdG9yZXMgdGhlIHBhY2thZ2UncyBzdWJzY3JpcHRpb25zLlxuICAgICAqXG4gICAgICogQHR5cGUge0NvbXBvc2l0ZURpc3Bvc2FibGV9XG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbnVsbFxuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwb3NhYmxlIHRoYXQgc3RvcmVzIHRoZSBwYWNrYWdlJ3MgY29tbWFuZHMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogQHR5cGUge0Rpc3Bvc2FibGV9XG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zT2ZDb21tYW5kcyA9IG51bGxcbiAgICAvKipcbiAgICAgKiBUaGUgcGFja2FnZSdzIGNvbmZpZyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWctc2NoZW1hLmpzb24nKVxuICAgIC8qKlxuICAgICAqIFRoZSBwYWNrYWdlJ3MgZXZlbnRzIGVtaXR0ZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RW1pdHRlcn1cbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpXG5cbiAgICB0aGlzLmluaXRpYWxpemVQbHVnaW5zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIG1pbmltYXAgcGFja2FnZS5cbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHsgcmV0dXJuIH1cblxuICAgIGlmICghTWluaW1hcCkgeyBNaW5pbWFwID0gcmVxdWlyZSgnLi9taW5pbWFwJykgfVxuICAgIGlmICghTWluaW1hcEVsZW1lbnQpIHsgTWluaW1hcEVsZW1lbnQgPSByZXF1aXJlKCcuL21pbmltYXAtZWxlbWVudCcpIH1cblxuICAgIE1pbmltYXBFbGVtZW50LnJlZ2lzdGVyVmlld1Byb3ZpZGVyKE1pbmltYXApXG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNPZkNvbW1hbmRzID0gYXRvbS5jb21tYW5kcy5hZGQoJ2F0b20td29ya3NwYWNlJywge1xuICAgICAgJ21pbmltYXA6dG9nZ2xlJzogKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICB9LFxuICAgICAgJ21pbmltYXA6Z2VuZXJhdGUtY29mZmVlLXBsdWdpbic6ICgpID0+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVBsdWdpbignY29mZmVlJylcbiAgICAgIH0sXG4gICAgICAnbWluaW1hcDpnZW5lcmF0ZS1qYXZhc2NyaXB0LXBsdWdpbic6ICgpID0+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVBsdWdpbignamF2YXNjcmlwdCcpXG4gICAgICB9LFxuICAgICAgJ21pbmltYXA6Z2VuZXJhdGUtYmFiZWwtcGx1Z2luJzogKCkgPT4ge1xuICAgICAgICB0aGlzLmdlbmVyYXRlUGx1Z2luKCdiYWJlbCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZWRpdG9yc01pbmltYXBzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKVxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZVxuXG4gICAgaWYgKGF0b20uY29uZmlnLmdldCgnbWluaW1hcC5hdXRvVG9nZ2xlJykpIHsgdGhpcy50b2dnbGUoKSB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIG1pbmltYXAgcGFja2FnZS5cbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmUpIHsgcmV0dXJuIH1cblxuICAgIHRoaXMuZGVhY3RpdmF0ZUFsbFBsdWdpbnMoKVxuXG4gICAgaWYgKHRoaXMuZWRpdG9yc01pbmltYXBzKSB7XG4gICAgICB0aGlzLmVkaXRvcnNNaW5pbWFwcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHZhbHVlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmVkaXRvcnNNaW5pbWFwcy5kZWxldGUoa2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZGlzcG9zZSgpXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbnVsbFxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc09mQ29tbWFuZHMuZGlzcG9zZSgpXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zT2ZDb21tYW5kcyA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnNNaW5pbWFwcyA9IHVuZGVmaW5lZFxuICAgIHRoaXMudG9nZ2xlZCA9IGZhbHNlXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIG1pbmltYXAgZGlzcGxheS5cbiAgICovXG4gIHRvZ2dsZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkgeyByZXR1cm4gfVxuXG4gICAgaWYgKHRoaXMudG9nZ2xlZCkge1xuICAgICAgdGhpcy50b2dnbGVkID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMuZWRpdG9yc01pbmltYXBzKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yc01pbmltYXBzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICB2YWx1ZS5kZXN0cm95KClcbiAgICAgICAgICB0aGlzLmVkaXRvcnNNaW5pbWFwcy5kZWxldGUoa2V5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmRpc3Bvc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZWQgPSB0cnVlXG4gICAgICB0aGlzLmluaXRTdWJzY3JpcHRpb25zKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHBsdWdpbiBnZW5lcmF0aW9uIHZpZXcuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGVtcGxhdGUgdGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlIHRvIHVzZVxuICAgKi9cbiAgZ2VuZXJhdGVQbHVnaW4gKHRlbXBsYXRlKSB7XG4gICAgaWYgKCFNaW5pbWFwUGx1Z2luR2VuZXJhdG9yRWxlbWVudCkge1xuICAgICAgTWluaW1hcFBsdWdpbkdlbmVyYXRvckVsZW1lbnQgPSByZXF1aXJlKCcuL21pbmltYXAtcGx1Z2luLWdlbmVyYXRvci1lbGVtZW50JylcbiAgICB9XG4gICAgdmFyIHZpZXcgPSBuZXcgTWluaW1hcFBsdWdpbkdlbmVyYXRvckVsZW1lbnQoKVxuICAgIHZpZXcudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICAgIHZpZXcuYXR0YWNoKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBsaXN0ZW4gdG8gdGhlIGBkaWQtYWN0aXZhdGVgIGV2ZW50IG9mIHRoZSBwYWNrYWdlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtmdW5jdGlvbihldmVudDpPYmplY3QpOnZvaWR9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKiBAcmV0dXJuIHtEaXNwb3NhYmxlfSBhIGRpc3Bvc2FibGUgdG8gc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50XG4gICAqL1xuICBvbkRpZEFjdGl2YXRlIChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmVtaXR0ZXIub24oJ2RpZC1hY3RpdmF0ZScsIGNhbGxiYWNrKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGxpc3RlbiB0byB0aGUgYGRpZC1kZWFjdGl2YXRlYCBldmVudCBvZiB0aGVcbiAgICogcGFja2FnZS5cbiAgICpcbiAgICogQHBhcmFtICB7ZnVuY3Rpb24oZXZlbnQ6T2JqZWN0KTp2b2lkfSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybiB7RGlzcG9zYWJsZX0gYSBkaXNwb3NhYmxlIHRvIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudFxuICAgKi9cbiAgb25EaWREZWFjdGl2YXRlIChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmVtaXR0ZXIub24oJ2RpZC1kZWFjdGl2YXRlJywgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gbGlzdGVuIHRvIHRoZSBgZGlkLWNyZWF0ZS1taW5pbWFwYCBldmVudCBvZiB0aGVcbiAgICogcGFja2FnZS5cbiAgICpcbiAgICogQHBhcmFtICB7ZnVuY3Rpb24oZXZlbnQ6T2JqZWN0KTp2b2lkfSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybiB7RGlzcG9zYWJsZX0gYSBkaXNwb3NhYmxlIHRvIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudFxuICAgKi9cbiAgb25EaWRDcmVhdGVNaW5pbWFwIChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmVtaXR0ZXIub24oJ2RpZC1jcmVhdGUtbWluaW1hcCcsIGNhbGxiYWNrKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGxpc3RlbiB0byB0aGUgYGRpZC1hZGQtcGx1Z2luYCBldmVudCBvZiB0aGVcbiAgICogcGFja2FnZS5cbiAgICpcbiAgICogQHBhcmFtICB7ZnVuY3Rpb24oZXZlbnQ6T2JqZWN0KTp2b2lkfSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybiB7RGlzcG9zYWJsZX0gYSBkaXNwb3NhYmxlIHRvIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudFxuICAgKi9cbiAgb25EaWRBZGRQbHVnaW4gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbignZGlkLWFkZC1wbHVnaW4nLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBsaXN0ZW4gdG8gdGhlIGBkaWQtcmVtb3ZlLXBsdWdpbmAgZXZlbnQgb2YgdGhlXG4gICAqIHBhY2thZ2UuXG4gICAqXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9uKGV2ZW50Ok9iamVjdCk6dm9pZH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge0Rpc3Bvc2FibGV9IGEgZGlzcG9zYWJsZSB0byBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnRcbiAgICovXG4gIG9uRGlkUmVtb3ZlUGx1Z2luIChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmVtaXR0ZXIub24oJ2RpZC1yZW1vdmUtcGx1Z2luJywgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gbGlzdGVuIHRvIHRoZSBgZGlkLWFjdGl2YXRlLXBsdWdpbmAgZXZlbnQgb2YgdGhlXG4gICAqIHBhY2thZ2UuXG4gICAqXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9uKGV2ZW50Ok9iamVjdCk6dm9pZH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge0Rpc3Bvc2FibGV9IGEgZGlzcG9zYWJsZSB0byBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnRcbiAgICovXG4gIG9uRGlkQWN0aXZhdGVQbHVnaW4gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbignZGlkLWFjdGl2YXRlLXBsdWdpbicsIGNhbGxiYWNrKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGxpc3RlbiB0byB0aGUgYGRpZC1kZWFjdGl2YXRlLXBsdWdpbmAgZXZlbnQgb2YgdGhlXG4gICAqIHBhY2thZ2UuXG4gICAqXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9uKGV2ZW50Ok9iamVjdCk6dm9pZH0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge0Rpc3Bvc2FibGV9IGEgZGlzcG9zYWJsZSB0byBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnRcbiAgICovXG4gIG9uRGlkRGVhY3RpdmF0ZVBsdWdpbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0dGVyLm9uKCdkaWQtZGVhY3RpdmF0ZS1wbHVnaW4nLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgTWluaW1hcGAgY2xhc3NcbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBgTWluaW1hcGAgY2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIG1pbmltYXBDbGFzcyAoKSB7IHJldHVybiBNaW5pbWFwIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYE1pbmltYXBgIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBwYXNzZWQtaW5cbiAgICogYFRleHRFZGl0b3JFbGVtZW50YC5cbiAgICpcbiAgICogQHBhcmFtICB7VGV4dEVkaXRvckVsZW1lbnR9IGVkaXRvckVsZW1lbnQgYSB0ZXh0IGVkaXRvciBlbGVtZW50XG4gICAqIEByZXR1cm4ge01pbmltYXB9IHRoZSBhc3NvY2lhdGVkIG1pbmltYXBcbiAgICovXG4gIG1pbmltYXBGb3JFZGl0b3JFbGVtZW50IChlZGl0b3JFbGVtZW50KSB7XG4gICAgaWYgKCFlZGl0b3JFbGVtZW50KSB7IHJldHVybiB9XG4gICAgcmV0dXJuIHRoaXMubWluaW1hcEZvckVkaXRvcihlZGl0b3JFbGVtZW50LmdldE1vZGVsKCkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYE1pbmltYXBgIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBwYXNzZWQtaW5cbiAgICogYFRleHRFZGl0b3JgLlxuICAgKlxuICAgKiBAcGFyYW0gIHtUZXh0RWRpdG9yfSB0ZXh0RWRpdG9yIGEgdGV4dCBlZGl0b3JcbiAgICogQHJldHVybiB7TWluaW1hcH0gdGhlIGFzc29jaWF0ZWQgbWluaW1hcFxuICAgKi9cbiAgbWluaW1hcEZvckVkaXRvciAodGV4dEVkaXRvcikge1xuICAgIGlmICghdGV4dEVkaXRvcikgeyByZXR1cm4gfVxuXG4gICAgbGV0IG1pbmltYXAgPSB0aGlzLmVkaXRvcnNNaW5pbWFwcy5nZXQodGV4dEVkaXRvcilcblxuICAgIGlmICghbWluaW1hcCkge1xuICAgICAgbWluaW1hcCA9IG5ldyBNaW5pbWFwKHt0ZXh0RWRpdG9yfSlcbiAgICAgIHRoaXMuZWRpdG9yc01pbmltYXBzLnNldCh0ZXh0RWRpdG9yLCBtaW5pbWFwKVxuXG4gICAgICB2YXIgZWRpdG9yU3Vic2NyaXB0aW9uID0gdGV4dEVkaXRvci5vbkRpZERlc3Ryb3koKCkgPT4ge1xuICAgICAgICBsZXQgbWluaW1hcHMgPSB0aGlzLmVkaXRvcnNNaW5pbWFwc1xuICAgICAgICBpZiAobWluaW1hcHMpIHsgbWluaW1hcHMuZGVsZXRlKHRleHRFZGl0b3IpIH1cbiAgICAgICAgZWRpdG9yU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaW1hcFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgc3RhbmQtYWxvbmUge01pbmltYXB9IGZvciB0aGUgcGFzc2VkLWluIGBUZXh0RWRpdG9yYC5cbiAgICpcbiAgICogQHBhcmFtICB7VGV4dEVkaXRvcn0gdGV4dEVkaXRvciBhIHRleHQgZWRpdG9yIGluc3RhbmNlIHRvIGNyZWF0ZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgbWluaW1hcCBmb3JcbiAgICogQHJldHVybiB7TWluaW1hcH0gYSBuZXcgc3RhbmQtYWxvbmUgTWluaW1hcCBmb3IgdGhlIHBhc3NlZC1pbiBlZGl0b3JcbiAgICovXG4gIHN0YW5kQWxvbmVNaW5pbWFwRm9yRWRpdG9yICh0ZXh0RWRpdG9yKSB7XG4gICAgaWYgKCF0ZXh0RWRpdG9yKSB7IHJldHVybiB9XG5cbiAgICByZXR1cm4gbmV3IE1pbmltYXAoe1xuICAgICAgdGV4dEVkaXRvcjogdGV4dEVkaXRvcixcbiAgICAgIHN0YW5kQWxvbmU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGBNaW5pbWFwYCBhc3NvY2lhdGVkIHRvIHRoZSBhY3RpdmUgYFRleHRFZGl0b3JgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtNaW5pbWFwfSB0aGUgYWN0aXZlIE1pbmltYXBcbiAgICovXG4gIGdldEFjdGl2ZU1pbmltYXAgKCkge1xuICAgIHJldHVybiB0aGlzLm1pbmltYXBGb3JFZGl0b3IoYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIGEgZnVuY3Rpb24gZm9yIGVhY2ggcHJlc2VudCBhbmQgZnV0dXJlIG1pbmltYXBzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtmdW5jdGlvbihtaW5pbWFwOk1pbmltYXApOnZvaWR9IGl0ZXJhdG9yIGEgZnVuY3Rpb24gdG8gY2FsbCB3aXRoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGV4aXN0aW5nIGFuZCBmdXR1cmVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbWFwc1xuICAgKiBAcmV0dXJuIHtEaXNwb3NhYmxlfSBhIGRpc3Bvc2FibGUgdG8gdW5yZWdpc3RlciB0aGUgb2JzZXJ2ZXJcbiAgICovXG4gIG9ic2VydmVNaW5pbWFwcyAoaXRlcmF0b3IpIHtcbiAgICBpZiAoIWl0ZXJhdG9yKSB7IHJldHVybiB9XG5cbiAgICBpZiAodGhpcy5lZGl0b3JzTWluaW1hcHMpIHtcbiAgICAgIHRoaXMuZWRpdG9yc01pbmltYXBzLmZvckVhY2goKG1pbmltYXApID0+IHsgaXRlcmF0b3IobWluaW1hcCkgfSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub25EaWRDcmVhdGVNaW5pbWFwKChtaW5pbWFwKSA9PiB7IGl0ZXJhdG9yKG1pbmltYXApIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRvIHRoZSBgb2JzZXJ2ZVRleHRFZGl0b3JzYCBtZXRob2QuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgaW5pdFN1YnNjcmlwdGlvbnMgKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoYXRvbS53b3Jrc3BhY2Uub2JzZXJ2ZVRleHRFZGl0b3JzKCh0ZXh0RWRpdG9yKSA9PiB7XG4gICAgICBsZXQgbWluaW1hcCA9IHRoaXMubWluaW1hcEZvckVkaXRvcih0ZXh0RWRpdG9yKVxuICAgICAgbGV0IG1pbmltYXBFbGVtZW50ID0gYXRvbS52aWV3cy5nZXRWaWV3KG1pbmltYXApXG5cbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkaWQtY3JlYXRlLW1pbmltYXAnLCBtaW5pbWFwKVxuXG4gICAgICBtaW5pbWFwRWxlbWVudC5hdHRhY2goKVxuICAgIH0pKVxuICB9XG59XG5cbi8qKlxuICogVGhlIGV4cG9zZWQgaW5zdGFuY2Ugb2YgdGhlIGBNYWluYCBjbGFzcy5cbiAqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgbmV3IE1haW4oKVxuIl19
//# sourceURL=/home/qual/.atom/packages/minimap/lib/main.js
