Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mixto = require('mixto');

var _mixto2 = _interopRequireDefault(_mixto);

var _atom = require('atom');

/**
 * Provides methods to manage minimap plugins.
 * Minimap plugins are Atom packages that will augment the minimap.
 * They have a secondary activation cycle going on constrained by the minimap
 * package activation. A minimap plugin life cycle will generally look
 * like this:
 *
 * 1. The plugin module is activated by Atom through the `activate` method
 * 2. The plugin then register itself as a minimap plugin using `registerPlugin`
 * 3. The plugin is activated/deactivated according to the minimap settings.
 * 4. On the plugin module deactivation, the plugin must unregisters itself
 *    from the minimap using the `unregisterPlugin`.
 *
 * @access public
 */
'use babel';

var PluginManagement = (function (_Mixin) {
  _inherits(PluginManagement, _Mixin);

  function PluginManagement() {
    _classCallCheck(this, PluginManagement);

    _get(Object.getPrototypeOf(PluginManagement.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PluginManagement, [{
    key: 'provideMinimapServiceV1',

    /**
     * Returns the Minimap main module instance.
     *
     * @return {Main} The Minimap main module instance.
     */
    value: function provideMinimapServiceV1() {
      return this;
    }

    /**
     * Initializes the properties for plugins' management.
     *
     * @access private
     */
  }, {
    key: 'initializePlugins',
    value: function initializePlugins() {
      /**
       * The registered Minimap plugins stored using their name as key.
       *
       * @type {Object}
       * @access private
       */
      this.plugins = {};
      /**
       * The plugins' subscriptions stored using the plugin names as keys.
       *
       * @type {Object}
       * @access private
       */
      this.pluginsSubscriptions = {};
    }

    /**
     * Registers a minimap `plugin` with the given `name`.
     *
     * @param {string} name The identifying name of the plugin.
     *                      It will be used as activation settings name
     *                      as well as the key to unregister the module.
     * @param {MinimapPlugin} plugin The plugin to register.
     * @emits {did-add-plugin} with the name and a reference to the added plugin.
     * @emits {did-activate-plugin} if the plugin was activated during
     *                              the registration.
     */
  }, {
    key: 'registerPlugin',
    value: function registerPlugin(name, plugin) {
      this.plugins[name] = plugin;
      this.pluginsSubscriptions[name] = new _atom.CompositeDisposable();

      var event = { name: name, plugin: plugin };
      this.emitter.emit('did-add-plugin', event);

      if (atom.config.get('minimap.displayPluginsControls')) {
        this.registerPluginControls(name, plugin);
      }

      this.updatesPluginActivationState(name);
    }

    /**
     * Unregisters a plugin from the minimap.
     *
     * @param {string} name The identifying name of the plugin to unregister.
     * @emits {did-remove-plugin} with the name and a reference
     *        to the added plugin.
     */
  }, {
    key: 'unregisterPlugin',
    value: function unregisterPlugin(name) {
      var plugin = this.plugins[name];

      if (atom.config.get('minimap.displayPluginsControls')) {
        this.unregisterPluginControls(name);
      }

      delete this.plugins[name];

      var event = { name: name, plugin: plugin };
      this.emitter.emit('did-remove-plugin', event);
    }

    /**
     * Toggles the specified plugin activation state.
     *
     * @param  {string} name     The name of the plugin.
     * @param  {boolean} boolean An optional boolean to set the activation
     *                           state of the plugin. If ommitted the new plugin
     *                           state will be the the inverse of its current
     *                           state.
     * @emits {did-activate-plugin} if the plugin was activated by the call.
     * @emits {did-deactivate-plugin} if the plugin was deactivated by the call.
     */
  }, {
    key: 'togglePluginActivation',
    value: function togglePluginActivation(name, boolean) {
      var settingsKey = 'minimap.plugins.' + name;

      if (boolean !== undefined && boolean !== null) {
        atom.config.set(settingsKey, boolean);
      } else {
        atom.config.set(settingsKey, !atom.config.get(settingsKey));
      }

      this.updatesPluginActivationState(name);
    }

    /**
     * Deactivates all the plugins registered in the minimap package so far.
     *
     * @emits {did-deactivate-plugin} for each plugin deactivated by the call.
     */
  }, {
    key: 'deactivateAllPlugins',
    value: function deactivateAllPlugins() {
      for (var _ref3 of this.eachPlugin()) {
        var _ref2 = _slicedToArray(_ref3, 2);

        var _name = _ref2[0];
        var plugin = _ref2[1];

        plugin.deactivatePlugin();
        this.emitter.emit('did-deactivate-plugin', { name: _name, plugin: plugin });
      }
    }

    /**
     * A generator function to iterate over registered plugins.
     *
     * @return An iterable that yield the name and reference to every plugin
     *         as an array in each iteration.
     */
  }, {
    key: 'eachPlugin',
    value: function* eachPlugin() {
      for (var _name2 in this.plugins) {
        yield [_name2, this.plugins[_name2]];
      }
    }

    /**
     * Updates the plugin activation state according to the current config.
     *
     * @param {string} name The identifying name of the plugin to update.
     * @emits {did-activate-plugin} if the plugin was activated by the call.
     * @emits {did-deactivate-plugin} if the plugin was deactivated by the call.
     * @access private
     */
  }, {
    key: 'updatesPluginActivationState',
    value: function updatesPluginActivationState(name) {
      var plugin = this.plugins[name];
      var pluginActive = plugin.isActive();
      var settingActive = atom.config.get('minimap.plugins.' + name);
      var event = { name: name, plugin: plugin };

      if (settingActive && !pluginActive) {
        plugin.activatePlugin();
        this.emitter.emit('did-activate-plugin', event);
      } else if (pluginActive && !settingActive) {
        plugin.deactivatePlugin();
        this.emitter.emit('did-deactivate-plugin', event);
      }
    }

    /**
     * When the `minimap.displayPluginsControls` setting is toggled,
     * this function will register the commands and setting to manage the plugin
     * activation from the minimap settings.
     *
     * @param {string} name The identifying name of the plugin.
     * @param {MinimapPlugin} plugin The plugin instance to register
     *        controls for.
     * @listens {minimap.plugins.${name}} listen to the setting to update
     *          the plugin state accordingly.
     * @listens {minimap:toggle-${name}} listen to the command on `atom-workspace`
     *          to toggle the plugin state.
     * @access private
     */
  }, {
    key: 'registerPluginControls',
    value: function registerPluginControls(name, plugin) {
      var _this = this;

      var settingsKey = 'minimap.plugins.' + name;

      this.config.plugins.properties[name] = {
        type: 'boolean',
        'default': true
      };

      if (atom.config.get(settingsKey) === undefined) {
        atom.config.set(settingsKey, true);
      }

      this.pluginsSubscriptions[name].add(atom.config.observe(settingsKey, function () {
        _this.updatesPluginActivationState(name);
      }));

      this.pluginsSubscriptions[name].add(atom.commands.add('atom-workspace', _defineProperty({}, 'minimap:toggle-' + name, function () {
        _this.togglePluginActivation(name);
      })));
    }

    /**
     * When the `minimap.displayPluginsControls` setting is toggled,
     * this function will unregister the commands and setting that
     * was created previously.
     *
     * @param {string} name The identifying name of the plugin.
     * @access private
     */
  }, {
    key: 'unregisterPluginControls',
    value: function unregisterPluginControls(name) {
      this.pluginsSubscriptions[name].dispose();
      delete this.pluginsSubscriptions[name];
      delete this.config.plugins.properties[name];
    }
  }]);

  return PluginManagement;
})(_mixto2['default']);

exports['default'] = PluginManagement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvbWl4aW5zL3BsdWdpbi1tYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFFa0IsT0FBTzs7OztvQkFDVyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUgxQyxXQUFXLENBQUE7O0lBb0JVLGdCQUFnQjtZQUFoQixnQkFBZ0I7O1dBQWhCLGdCQUFnQjswQkFBaEIsZ0JBQWdCOzsrQkFBaEIsZ0JBQWdCOzs7ZUFBaEIsZ0JBQWdCOzs7Ozs7OztXQU1YLG1DQUFHO0FBQUUsYUFBTyxJQUFJLENBQUE7S0FBRTs7Ozs7Ozs7O1dBT3hCLDZCQUFHOzs7Ozs7O0FBT25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFBOzs7Ozs7O0FBT2pCLFVBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUE7S0FDL0I7Ozs7Ozs7Ozs7Ozs7OztXQWFjLHdCQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDNUIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUE7QUFDM0IsVUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLCtCQUF5QixDQUFBOztBQUUzRCxVQUFJLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFBO0FBQzFDLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFBOztBQUUxQyxVQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLEVBQUU7QUFDckQsWUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtPQUMxQzs7QUFFRCxVQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDeEM7Ozs7Ozs7Ozs7O1dBU2dC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QyxHQUFHO0FBQ3JDLFlBQUksRUFBRSxTQUFTO0FBQ2YsbUJBQVMsSUFBSTtPQUNkLENBQUE7O0FBRUQsVUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDOUMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO09BQ25DOztBQUVELFVBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFlBQU07QUFDekUsY0FBSyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtPQUN4QyxDQUFDLENBQUMsQ0FBQTs7QUFFSCxVQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQiwwQ0FDakQsSUFBSSxFQUFLLFlBQU07QUFDaEMsY0FBSyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtPQUNsQyxFQUNELENBQUMsQ0FBQTtLQUNKOzs7Ozs7Ozs7Ozs7V0FVd0Isa0NBQUMsSUFBSSxFQUFFO0FBQzlCLFVBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUN6QyxhQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QyxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUM1Qzs7O1NBbE1rQixnQkFBZ0I7OztxQkFBaEIsZ0JBQWdCIiwiZmlsZSI6Ii9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvbWl4aW5zL3BsdWdpbi1tYW5hZ2VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IE1peGluIGZyb20gJ21peHRvJ1xuaW1wb3J0IHsgQ29tcG9zaXRlRGlzcG9zYWJsZSB9IGZyb20gJ2F0b20nXG5cbi8qKlxuICogUHJvdmlkZXMgbWV0aG9kcyB0byBtYW5hZ2UgbWluaW1hcCBwbHVnaW5zLlxuICogTWluaW1hcCBwbHVnaW5zIGFyZSBBdG9tIHBhY2thZ2VzIHRoYXQgd2lsbCBhdWdtZW50IHRoZSBtaW5pbWFwLlxuICogVGhleSBoYXZlIGEgc2Vjb25kYXJ5IGFjdGl2YXRpb24gY3ljbGUgZ29pbmcgb24gY29uc3RyYWluZWQgYnkgdGhlIG1pbmltYXBcbiAqIHBhY2thZ2UgYWN0aXZhdGlvbi4gQSBtaW5pbWFwIHBsdWdpbiBsaWZlIGN5Y2xlIHdpbGwgZ2VuZXJhbGx5IGxvb2tcbiAqIGxpa2UgdGhpczpcbiAqXG4gKiAxLiBUaGUgcGx1Z2luIG1vZHVsZSBpcyBhY3RpdmF0ZWQgYnkgQXRvbSB0aHJvdWdoIHRoZSBgYWN0aXZhdGVgIG1ldGhvZFxuICogMi4gVGhlIHBsdWdpbiB0aGVuIHJlZ2lzdGVyIGl0c2VsZiBhcyBhIG1pbmltYXAgcGx1Z2luIHVzaW5nIGByZWdpc3RlclBsdWdpbmBcbiAqIDMuIFRoZSBwbHVnaW4gaXMgYWN0aXZhdGVkL2RlYWN0aXZhdGVkIGFjY29yZGluZyB0byB0aGUgbWluaW1hcCBzZXR0aW5ncy5cbiAqIDQuIE9uIHRoZSBwbHVnaW4gbW9kdWxlIGRlYWN0aXZhdGlvbiwgdGhlIHBsdWdpbiBtdXN0IHVucmVnaXN0ZXJzIGl0c2VsZlxuICogICAgZnJvbSB0aGUgbWluaW1hcCB1c2luZyB0aGUgYHVucmVnaXN0ZXJQbHVnaW5gLlxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbk1hbmFnZW1lbnQgZXh0ZW5kcyBNaXhpbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBNaW5pbWFwIG1haW4gbW9kdWxlIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtNYWlufSBUaGUgTWluaW1hcCBtYWluIG1vZHVsZSBpbnN0YW5jZS5cbiAgICovXG4gIHByb3ZpZGVNaW5pbWFwU2VydmljZVYxICgpIHsgcmV0dXJuIHRoaXMgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBmb3IgcGx1Z2lucycgbWFuYWdlbWVudC5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplUGx1Z2lucyAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlZ2lzdGVyZWQgTWluaW1hcCBwbHVnaW5zIHN0b3JlZCB1c2luZyB0aGVpciBuYW1lIGFzIGtleS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wbHVnaW5zID0ge31cbiAgICAvKipcbiAgICAgKiBUaGUgcGx1Z2lucycgc3Vic2NyaXB0aW9ucyBzdG9yZWQgdXNpbmcgdGhlIHBsdWdpbiBuYW1lcyBhcyBrZXlzLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBsdWdpbnNTdWJzY3JpcHRpb25zID0ge31cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBtaW5pbWFwIGBwbHVnaW5gIHdpdGggdGhlIGdpdmVuIGBuYW1lYC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGlkZW50aWZ5aW5nIG5hbWUgb2YgdGhlIHBsdWdpbi5cbiAgICogICAgICAgICAgICAgICAgICAgICAgSXQgd2lsbCBiZSB1c2VkIGFzIGFjdGl2YXRpb24gc2V0dGluZ3MgbmFtZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICBhcyB3ZWxsIGFzIHRoZSBrZXkgdG8gdW5yZWdpc3RlciB0aGUgbW9kdWxlLlxuICAgKiBAcGFyYW0ge01pbmltYXBQbHVnaW59IHBsdWdpbiBUaGUgcGx1Z2luIHRvIHJlZ2lzdGVyLlxuICAgKiBAZW1pdHMge2RpZC1hZGQtcGx1Z2lufSB3aXRoIHRoZSBuYW1lIGFuZCBhIHJlZmVyZW5jZSB0byB0aGUgYWRkZWQgcGx1Z2luLlxuICAgKiBAZW1pdHMge2RpZC1hY3RpdmF0ZS1wbHVnaW59IGlmIHRoZSBwbHVnaW4gd2FzIGFjdGl2YXRlZCBkdXJpbmdcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcmVnaXN0cmF0aW9uLlxuICAgKi9cbiAgcmVnaXN0ZXJQbHVnaW4gKG5hbWUsIHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luc1tuYW1lXSA9IHBsdWdpblxuICAgIHRoaXMucGx1Z2luc1N1YnNjcmlwdGlvbnNbbmFtZV0gPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpXG5cbiAgICBsZXQgZXZlbnQgPSB7IG5hbWU6IG5hbWUsIHBsdWdpbjogcGx1Z2luIH1cbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnZGlkLWFkZC1wbHVnaW4nLCBldmVudClcblxuICAgIGlmIChhdG9tLmNvbmZpZy5nZXQoJ21pbmltYXAuZGlzcGxheVBsdWdpbnNDb250cm9scycpKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyUGx1Z2luQ29udHJvbHMobmFtZSwgcGx1Z2luKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlc1BsdWdpbkFjdGl2YXRpb25TdGF0ZShuYW1lKVxuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGEgcGx1Z2luIGZyb20gdGhlIG1pbmltYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBpZGVudGlmeWluZyBuYW1lIG9mIHRoZSBwbHVnaW4gdG8gdW5yZWdpc3Rlci5cbiAgICogQGVtaXRzIHtkaWQtcmVtb3ZlLXBsdWdpbn0gd2l0aCB0aGUgbmFtZSBhbmQgYSByZWZlcmVuY2VcbiAgICogICAgICAgIHRvIHRoZSBhZGRlZCBwbHVnaW4uXG4gICAqL1xuICB1bnJlZ2lzdGVyUGx1Z2luIChuYW1lKSB7XG4gICAgbGV0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1tuYW1lXVxuXG4gICAgaWYgKGF0b20uY29uZmlnLmdldCgnbWluaW1hcC5kaXNwbGF5UGx1Z2luc0NvbnRyb2xzJykpIHtcbiAgICAgIHRoaXMudW5yZWdpc3RlclBsdWdpbkNvbnRyb2xzKG5hbWUpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMucGx1Z2luc1tuYW1lXVxuXG4gICAgbGV0IGV2ZW50ID0geyBuYW1lOiBuYW1lLCBwbHVnaW46IHBsdWdpbiB9XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2RpZC1yZW1vdmUtcGx1Z2luJywgZXZlbnQpXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc3BlY2lmaWVkIHBsdWdpbiBhY3RpdmF0aW9uIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgICAgIFRoZSBuYW1lIG9mIHRoZSBwbHVnaW4uXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IGJvb2xlYW4gQW4gb3B0aW9uYWwgYm9vbGVhbiB0byBzZXQgdGhlIGFjdGl2YXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSBvZiB0aGUgcGx1Z2luLiBJZiBvbW1pdHRlZCB0aGUgbmV3IHBsdWdpblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlIHdpbGwgYmUgdGhlIHRoZSBpbnZlcnNlIG9mIGl0cyBjdXJyZW50XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuXG4gICAqIEBlbWl0cyB7ZGlkLWFjdGl2YXRlLXBsdWdpbn0gaWYgdGhlIHBsdWdpbiB3YXMgYWN0aXZhdGVkIGJ5IHRoZSBjYWxsLlxuICAgKiBAZW1pdHMge2RpZC1kZWFjdGl2YXRlLXBsdWdpbn0gaWYgdGhlIHBsdWdpbiB3YXMgZGVhY3RpdmF0ZWQgYnkgdGhlIGNhbGwuXG4gICAqL1xuICB0b2dnbGVQbHVnaW5BY3RpdmF0aW9uIChuYW1lLCBib29sZWFuKSB7XG4gICAgbGV0IHNldHRpbmdzS2V5ID0gYG1pbmltYXAucGx1Z2lucy4ke25hbWV9YFxuXG4gICAgaWYgKGJvb2xlYW4gIT09IHVuZGVmaW5lZCAmJiBib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBhdG9tLmNvbmZpZy5zZXQoc2V0dGluZ3NLZXksIGJvb2xlYW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGF0b20uY29uZmlnLnNldChzZXR0aW5nc0tleSwgIWF0b20uY29uZmlnLmdldChzZXR0aW5nc0tleSkpXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVzUGx1Z2luQWN0aXZhdGlvblN0YXRlKG5hbWUpXG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgYWxsIHRoZSBwbHVnaW5zIHJlZ2lzdGVyZWQgaW4gdGhlIG1pbmltYXAgcGFja2FnZSBzbyBmYXIuXG4gICAqXG4gICAqIEBlbWl0cyB7ZGlkLWRlYWN0aXZhdGUtcGx1Z2lufSBmb3IgZWFjaCBwbHVnaW4gZGVhY3RpdmF0ZWQgYnkgdGhlIGNhbGwuXG4gICAqL1xuICBkZWFjdGl2YXRlQWxsUGx1Z2lucyAoKSB7XG4gICAgZm9yIChsZXQgW25hbWUsIHBsdWdpbl0gb2YgdGhpcy5lYWNoUGx1Z2luKCkpIHtcbiAgICAgIHBsdWdpbi5kZWFjdGl2YXRlUGx1Z2luKClcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkaWQtZGVhY3RpdmF0ZS1wbHVnaW4nLCB7IG5hbWU6IG5hbWUsIHBsdWdpbjogcGx1Z2luIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciByZWdpc3RlcmVkIHBsdWdpbnMuXG4gICAqXG4gICAqIEByZXR1cm4gQW4gaXRlcmFibGUgdGhhdCB5aWVsZCB0aGUgbmFtZSBhbmQgcmVmZXJlbmNlIHRvIGV2ZXJ5IHBsdWdpblxuICAgKiAgICAgICAgIGFzIGFuIGFycmF5IGluIGVhY2ggaXRlcmF0aW9uLlxuICAgKi9cbiAgKiBlYWNoUGx1Z2luICgpIHtcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMucGx1Z2lucykge1xuICAgICAgeWllbGQgW25hbWUsIHRoaXMucGx1Z2luc1tuYW1lXV1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGx1Z2luIGFjdGl2YXRpb24gc3RhdGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IGNvbmZpZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGlkZW50aWZ5aW5nIG5hbWUgb2YgdGhlIHBsdWdpbiB0byB1cGRhdGUuXG4gICAqIEBlbWl0cyB7ZGlkLWFjdGl2YXRlLXBsdWdpbn0gaWYgdGhlIHBsdWdpbiB3YXMgYWN0aXZhdGVkIGJ5IHRoZSBjYWxsLlxuICAgKiBAZW1pdHMge2RpZC1kZWFjdGl2YXRlLXBsdWdpbn0gaWYgdGhlIHBsdWdpbiB3YXMgZGVhY3RpdmF0ZWQgYnkgdGhlIGNhbGwuXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgdXBkYXRlc1BsdWdpbkFjdGl2YXRpb25TdGF0ZSAobmFtZSkge1xuICAgIGxldCBwbHVnaW4gPSB0aGlzLnBsdWdpbnNbbmFtZV1cbiAgICBsZXQgcGx1Z2luQWN0aXZlID0gcGx1Z2luLmlzQWN0aXZlKClcbiAgICBsZXQgc2V0dGluZ0FjdGl2ZSA9IGF0b20uY29uZmlnLmdldChgbWluaW1hcC5wbHVnaW5zLiR7bmFtZX1gKVxuICAgIGxldCBldmVudCA9IHsgbmFtZTogbmFtZSwgcGx1Z2luOiBwbHVnaW4gfVxuXG4gICAgaWYgKHNldHRpbmdBY3RpdmUgJiYgIXBsdWdpbkFjdGl2ZSkge1xuICAgICAgcGx1Z2luLmFjdGl2YXRlUGx1Z2luKClcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkaWQtYWN0aXZhdGUtcGx1Z2luJywgZXZlbnQpXG4gICAgfSBlbHNlIGlmIChwbHVnaW5BY3RpdmUgJiYgIXNldHRpbmdBY3RpdmUpIHtcbiAgICAgIHBsdWdpbi5kZWFjdGl2YXRlUGx1Z2luKClcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkaWQtZGVhY3RpdmF0ZS1wbHVnaW4nLCBldmVudClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgYG1pbmltYXAuZGlzcGxheVBsdWdpbnNDb250cm9sc2Agc2V0dGluZyBpcyB0b2dnbGVkLFxuICAgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgcmVnaXN0ZXIgdGhlIGNvbW1hbmRzIGFuZCBzZXR0aW5nIHRvIG1hbmFnZSB0aGUgcGx1Z2luXG4gICAqIGFjdGl2YXRpb24gZnJvbSB0aGUgbWluaW1hcCBzZXR0aW5ncy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGlkZW50aWZ5aW5nIG5hbWUgb2YgdGhlIHBsdWdpbi5cbiAgICogQHBhcmFtIHtNaW5pbWFwUGx1Z2lufSBwbHVnaW4gVGhlIHBsdWdpbiBpbnN0YW5jZSB0byByZWdpc3RlclxuICAgKiAgICAgICAgY29udHJvbHMgZm9yLlxuICAgKiBAbGlzdGVucyB7bWluaW1hcC5wbHVnaW5zLiR7bmFtZX19IGxpc3RlbiB0byB0aGUgc2V0dGluZyB0byB1cGRhdGVcbiAgICogICAgICAgICAgdGhlIHBsdWdpbiBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICogQGxpc3RlbnMge21pbmltYXA6dG9nZ2xlLSR7bmFtZX19IGxpc3RlbiB0byB0aGUgY29tbWFuZCBvbiBgYXRvbS13b3Jrc3BhY2VgXG4gICAqICAgICAgICAgIHRvIHRvZ2dsZSB0aGUgcGx1Z2luIHN0YXRlLlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyUGx1Z2luQ29udHJvbHMgKG5hbWUsIHBsdWdpbikge1xuICAgIGxldCBzZXR0aW5nc0tleSA9IGBtaW5pbWFwLnBsdWdpbnMuJHtuYW1lfWBcblxuICAgIHRoaXMuY29uZmlnLnBsdWdpbnMucHJvcGVydGllc1tuYW1lXSA9IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG5cbiAgICBpZiAoYXRvbS5jb25maWcuZ2V0KHNldHRpbmdzS2V5KSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhdG9tLmNvbmZpZy5zZXQoc2V0dGluZ3NLZXksIHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW5zU3Vic2NyaXB0aW9uc1tuYW1lXS5hZGQoYXRvbS5jb25maWcub2JzZXJ2ZShzZXR0aW5nc0tleSwgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVzUGx1Z2luQWN0aXZhdGlvblN0YXRlKG5hbWUpXG4gICAgfSkpXG5cbiAgICB0aGlzLnBsdWdpbnNTdWJzY3JpcHRpb25zW25hbWVdLmFkZChhdG9tLmNvbW1hbmRzLmFkZCgnYXRvbS13b3Jrc3BhY2UnLCB7XG4gICAgICBbYG1pbmltYXA6dG9nZ2xlLSR7bmFtZX1gXTogKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVBsdWdpbkFjdGl2YXRpb24obmFtZSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBgbWluaW1hcC5kaXNwbGF5UGx1Z2luc0NvbnRyb2xzYCBzZXR0aW5nIGlzIHRvZ2dsZWQsXG4gICAqIHRoaXMgZnVuY3Rpb24gd2lsbCB1bnJlZ2lzdGVyIHRoZSBjb21tYW5kcyBhbmQgc2V0dGluZyB0aGF0XG4gICAqIHdhcyBjcmVhdGVkIHByZXZpb3VzbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBpZGVudGlmeWluZyBuYW1lIG9mIHRoZSBwbHVnaW4uXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgdW5yZWdpc3RlclBsdWdpbkNvbnRyb2xzIChuYW1lKSB7XG4gICAgdGhpcy5wbHVnaW5zU3Vic2NyaXB0aW9uc1tuYW1lXS5kaXNwb3NlKClcbiAgICBkZWxldGUgdGhpcy5wbHVnaW5zU3Vic2NyaXB0aW9uc1tuYW1lXVxuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5wbHVnaW5zLnByb3BlcnRpZXNbbmFtZV1cbiAgfVxufVxuIl19
//# sourceURL=/home/qual/.atom/packages/minimap/lib/mixins/plugin-management.js
