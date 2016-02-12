Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _atom = require('atom');

var _atomUtils = require('atom-utils');

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _decoratorsElement = require('./decorators/element');

var _decoratorsElement2 = _interopRequireDefault(_decoratorsElement);

var _decoratorsInclude = require('./decorators/include');

var _decoratorsInclude2 = _interopRequireDefault(_decoratorsInclude);

/**
 * @access private
 */
'use babel';

var MinimapQuickSettingsElement = (function () {
  function MinimapQuickSettingsElement() {
    _classCallCheck(this, _MinimapQuickSettingsElement);
  }

  _createClass(MinimapQuickSettingsElement, [{
    key: 'createdCallback',
    value: function createdCallback() {
      this.buildContent();
    }
  }, {
    key: 'setModel',
    value: function setModel(minimap) {
      var _this = this;

      this.selectedItem = null;
      this.minimap = minimap;
      this.emitter = new _atom.Emitter();
      this.subscriptions = new _atom.CompositeDisposable();
      this.plugins = {};
      this.itemsActions = new WeakMap();

      var subs = this.subscriptions;

      subs.add(_main2['default'].onDidAddPlugin(function (_ref) {
        var name = _ref.name;
        var plugin = _ref.plugin;

        return _this.addItemFor(name, plugin);
      }));
      subs.add(_main2['default'].onDidRemovePlugin(function (_ref2) {
        var name = _ref2.name;
        var plugin = _ref2.plugin;

        return _this.removeItemFor(name, plugin);
      }));
      subs.add(_main2['default'].onDidActivatePlugin(function (_ref3) {
        var name = _ref3.name;
        var plugin = _ref3.plugin;

        return _this.activateItem(name, plugin);
      }));
      subs.add(_main2['default'].onDidDeactivatePlugin(function (_ref4) {
        var name = _ref4.name;
        var plugin = _ref4.plugin;

        return _this.deactivateItem(name, plugin);
      }));

      subs.add(atom.commands.add('minimap-quick-settings', {
        'core:move-up': function coreMoveUp() {
          _this.selectPreviousItem();
        },
        'core:move-down': function coreMoveDown() {
          _this.selectNextItem();
        },
        'core:move-left': function coreMoveLeft() {
          atom.config.set('minimap.displayMinimapOnLeft', true);
        },
        'core:move-right': function coreMoveRight() {
          atom.config.set('minimap.displayMinimapOnLeft', false);
        },
        'core:cancel': function coreCancel() {
          _this.destroy();
        },
        'core:confirm': function coreConfirm() {
          _this.toggleSelectedItem();
        }
      }));

      this.codeHighlights.classList.toggle('active', this.minimap.displayCodeHighlights);

      subs.add(this.subscribeTo(this.codeHighlights, {
        'mousedown': function mousedown(e) {
          e.preventDefault();
          atom.config.set('minimap.displayCodeHighlights', !_this.minimap.displayCodeHighlights);
        }
      }));

      this.itemsActions.set(this.codeHighlights, function () {
        atom.config.set('minimap.displayCodeHighlights', !_this.minimap.displayCodeHighlights);
      });

      subs.add(this.subscribeTo(this.absoluteMode, {
        'mousedown': function mousedown(e) {
          e.preventDefault();
          atom.config.set('minimap.absoluteMode', !atom.config.get('minimap.absoluteMode'));
        }
      }));

      this.itemsActions.set(this.absoluteMode, function () {
        atom.config.set('minimap.absoluteMode', !atom.config.get('minimap.absoluteMode'));
      });

      subs.add(this.subscribeTo(this.hiddenInput, {
        'focusout': function focusout(e) {
          _this.destroy();
        }
      }));

      subs.add(this.subscribeTo(this.onLeftButton, {
        'mousedown': function mousedown(e) {
          e.preventDefault();
          atom.config.set('minimap.displayMinimapOnLeft', true);
        }
      }));

      subs.add(this.subscribeTo(this.onRightButton, {
        'mousedown': function mousedown(e) {
          e.preventDefault();
          atom.config.set('minimap.displayMinimapOnLeft', false);
        }
      }));

      subs.add(atom.config.observe('minimap.displayCodeHighlights', function (bool) {
        _this.codeHighlights.classList.toggle('active', bool);
      }));

      subs.add(atom.config.observe('minimap.absoluteMode', function (bool) {
        _this.absoluteMode.classList.toggle('active', bool);
      }));

      subs.add(atom.config.observe('minimap.displayMinimapOnLeft', function (bool) {
        _this.onLeftButton.classList.toggle('selected', bool);
        _this.onRightButton.classList.toggle('selected', !bool);
      }));

      this.initList();
    }
  }, {
    key: 'onDidDestroy',
    value: function onDidDestroy(callback) {
      return this.emitter.on('did-destroy', callback);
    }
  }, {
    key: 'attach',
    value: function attach() {
      var workspaceElement = atom.views.getView(atom.workspace);
      workspaceElement.appendChild(this);
      this.hiddenInput.focus();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.emitter.emit('did-destroy');
      this.subscriptions.dispose();
      this.parentNode.removeChild(this);
    }
  }, {
    key: 'initList',
    value: function initList() {
      this.itemsDisposables = new WeakMap();
      for (var _name in _main2['default'].plugins) {
        this.addItemFor(_name, _main2['default'].plugins[_name]);
      }
    }
  }, {
    key: 'toggleSelectedItem',
    value: function toggleSelectedItem() {
      var fn = this.itemsActions.get(this.selectedItem);
      if (typeof fn === 'function') {
        fn();
      }
    }
  }, {
    key: 'selectNextItem',
    value: function selectNextItem() {
      this.selectedItem.classList.remove('selected');
      if (this.selectedItem.nextSibling != null) {
        this.selectedItem = this.selectedItem.nextSibling;
        if (this.selectedItem.matches('.separator')) {
          this.selectedItem = this.selectedItem.nextSibling;
        }
      } else {
        this.selectedItem = this.list.firstChild;
      }
      this.selectedItem.classList.add('selected');
    }
  }, {
    key: 'selectPreviousItem',
    value: function selectPreviousItem() {
      this.selectedItem.classList.remove('selected');
      if (this.selectedItem.previousSibling != null) {
        this.selectedItem = this.selectedItem.previousSibling;
        if (this.selectedItem.matches('.separator')) {
          this.selectedItem = this.selectedItem.previousSibling;
        }
      } else {
        this.selectedItem = this.list.lastChild;
      }
      this.selectedItem.classList.add('selected');
    }
  }, {
    key: 'addItemFor',
    value: function addItemFor(name, plugin) {
      var item = document.createElement('li');
      var action = function action() {
        _main2['default'].togglePluginActivation(name);
      };

      if (plugin.isActive()) {
        item.classList.add('active');
      }

      item.textContent = name;

      this.itemsActions.set(item, action);
      this.itemsDisposables.set(item, this.addDisposableEventListener(item, 'mousedown', function (e) {
        e.preventDefault();
        action();
      }));

      this.plugins[name] = item;
      this.list.insertBefore(item, this.separator);

      if (!(this.selectedItem != null)) {
        this.selectedItem = item;
        this.selectedItem.classList.add('selected');
      }
    }
  }, {
    key: 'removeItemFor',
    value: function removeItemFor(name, plugin) {
      try {
        this.list.removeChild(this.plugins[name]);
      } catch (error) {}

      delete this.plugins[name];
    }
  }, {
    key: 'activateItem',
    value: function activateItem(name, plugin) {
      this.plugins[name].classList.add('active');
    }
  }, {
    key: 'deactivateItem',
    value: function deactivateItem(name, plugin) {
      this.plugins[name].classList.remove('active');
    }
  }], [{
    key: 'content',
    value: function content() {
      var _this2 = this;

      this.div({ 'class': 'select-list popover-list minimap-quick-settings' }, function () {
        _this2.input({ type: 'text', 'class': 'hidden-input', outlet: 'hiddenInput' });
        _this2.ol({ 'class': 'list-group mark-active', outlet: 'list' }, function () {
          _this2.li({ 'class': 'separator', outlet: 'separator' });
          _this2.li({ 'class': 'code-highlights', outlet: 'codeHighlights' }, 'code-highlights');
          _this2.li({ 'class': 'absolute-mode', outlet: 'absoluteMode' }, 'absolute-mode');
        });
        _this2.div({ 'class': 'btn-group' }, function () {
          _this2.button({ 'class': 'btn btn-default', outlet: 'onLeftButton' }, 'On Left');
          _this2.button({ 'class': 'btn btn-default', outlet: 'onRightButton' }, 'On Right');
        });
      });
    }
  }]);

  var _MinimapQuickSettingsElement = MinimapQuickSettingsElement;
  MinimapQuickSettingsElement = (0, _decoratorsInclude2['default'])(_atomUtils.EventsDelegation, _atomUtils.SpacePenDSL.Babel)(MinimapQuickSettingsElement) || MinimapQuickSettingsElement;
  MinimapQuickSettingsElement = (0, _decoratorsElement2['default'])('minimap-quick-settings')(MinimapQuickSettingsElement) || MinimapQuickSettingsElement;
  return MinimapQuickSettingsElement;
})();

exports['default'] = MinimapQuickSettingsElement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvbWluaW1hcC1xdWljay1zZXR0aW5ncy1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7b0JBRTJDLE1BQU07O3lCQUNMLFlBQVk7O29CQUV2QyxRQUFROzs7O2lDQUNMLHNCQUFzQjs7OztpQ0FDdEIsc0JBQXNCOzs7Ozs7O0FBUDFDLFdBQVcsQ0FBQTs7SUFjVSwyQkFBMkI7V0FBM0IsMkJBQTJCOzs7O2VBQTNCLDJCQUEyQjs7V0FpQjlCLDJCQUFHO0FBQ2pCLFVBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtLQUNwQjs7O1dBRVEsa0JBQUMsT0FBTyxFQUFFOzs7QUFDakIsVUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7QUFDeEIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsVUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBYSxDQUFBO0FBQzVCLFVBQUksQ0FBQyxhQUFhLEdBQUcsK0JBQXlCLENBQUE7QUFDOUMsVUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7QUFDakIsVUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBOztBQUVqQyxVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFBOztBQUU3QixVQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFLLGNBQWMsQ0FBQyxVQUFDLElBQWMsRUFBSztZQUFsQixJQUFJLEdBQUwsSUFBYyxDQUFiLElBQUk7WUFBRSxNQUFNLEdBQWIsSUFBYyxDQUFQLE1BQU07O0FBQ3pDLGVBQU8sTUFBSyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO09BQ3JDLENBQUMsQ0FBQyxDQUFBO0FBQ0gsVUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBSyxpQkFBaUIsQ0FBQyxVQUFDLEtBQWMsRUFBSztZQUFsQixJQUFJLEdBQUwsS0FBYyxDQUFiLElBQUk7WUFBRSxNQUFNLEdBQWIsS0FBYyxDQUFQLE1BQU07O0FBQzVDLGVBQU8sTUFBSyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO09BQ3hDLENBQUMsQ0FBQyxDQUFBO0FBQ0gsVUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBSyxtQkFBbUIsQ0FBQyxVQUFDLEtBQWMsRUFBSztZQUFsQixJQUFJLEdBQUwsS0FBYyxDQUFiLElBQUk7WUFBRSxNQUFNLEdBQWIsS0FBYyxDQUFQLE1BQU07O0FBQzlDLGVBQU8sTUFBSyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO09BQ3ZDLENBQUMsQ0FBQyxDQUFBO0FBQ0gsVUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBSyxxQkFBcUIsQ0FBQyxVQUFDLEtBQWMsRUFBSztZQUFsQixJQUFJLEdBQUwsS0FBYyxDQUFiLElBQUk7WUFBRSxNQUFNLEdBQWIsS0FBYyxDQUFQLE1BQU07O0FBQ2hELGVBQU8sTUFBSyxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO09BQ3pDLENBQUMsQ0FBQyxDQUFBOztBQUVILFVBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUU7QUFDbkQsc0JBQWMsRUFBRSxzQkFBTTtBQUNwQixnQkFBSyxrQkFBa0IsRUFBRSxDQUFBO1NBQzFCO0FBQ0Qsd0JBQWdCLEVBQUUsd0JBQU07QUFDdEIsZ0JBQUssY0FBYyxFQUFFLENBQUE7U0FDdEI7QUFDRCx3QkFBZ0IsRUFBRSx3QkFBTTtBQUN0QixjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUN0RDtBQUNELHlCQUFpQixFQUFFLHlCQUFNO0FBQ3ZCLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3ZEO0FBQ0QscUJBQWEsRUFBRSxzQkFBTTtBQUNuQixnQkFBSyxPQUFPLEVBQUUsQ0FBQTtTQUNmO0FBQ0Qsc0JBQWMsRUFBRSx1QkFBTTtBQUNwQixnQkFBSyxrQkFBa0IsRUFBRSxDQUFBO1NBQzFCO09BQ0YsQ0FBQyxDQUFDLENBQUE7O0FBRUgsVUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUE7O0FBRWxGLFVBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzdDLG1CQUFXLEVBQUUsbUJBQUMsQ0FBQyxFQUFLO0FBQ2xCLFdBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUNsQixjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLE1BQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUE7U0FDdEY7T0FDRixDQUFDLENBQUMsQ0FBQTs7QUFFSCxVQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDL0MsWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BQ3RGLENBQUMsQ0FBQTs7QUFFRixVQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMzQyxtQkFBVyxFQUFFLG1CQUFDLENBQUMsRUFBSztBQUNsQixXQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7QUFDbEIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7U0FDbEY7T0FDRixDQUFDLENBQUMsQ0FBQTs7QUFFSCxVQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQU07QUFDN0MsWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7T0FDbEYsQ0FBQyxDQUFBOztBQUVGLFVBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFDLGtCQUFVLEVBQUUsa0JBQUMsQ0FBQyxFQUFLO0FBQUUsZ0JBQUssT0FBTyxFQUFFLENBQUE7U0FBRTtPQUN0QyxDQUFDLENBQUMsQ0FBQTs7QUFFSCxVQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMzQyxtQkFBVyxFQUFFLG1CQUFDLENBQUMsRUFBSztBQUNsQixXQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7QUFDbEIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDdEQ7T0FDRixDQUFDLENBQUMsQ0FBQTs7QUFFSCxVQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM1QyxtQkFBVyxFQUFFLG1CQUFDLENBQUMsRUFBSztBQUNsQixXQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7QUFDbEIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDdkQ7T0FDRixDQUFDLENBQUMsQ0FBQTs7QUFFSCxVQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLCtCQUErQixFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQ3RFLGNBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO09BQ3JELENBQUMsQ0FBQyxDQUFBOztBQUVILFVBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDN0QsY0FBSyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7T0FDbkQsQ0FBQyxDQUFDLENBQUE7O0FBRUgsVUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxVQUFDLElBQUksRUFBSztBQUNyRSxjQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNwRCxjQUFLLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO09BQ3ZELENBQUMsQ0FBQyxDQUFBOztBQUVILFVBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtLQUNoQjs7O1dBRVksc0JBQUMsUUFBUSxFQUFFO0FBQ3RCLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0tBQ2hEOzs7V0FFTSxrQkFBRztBQUNSLFVBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ3pELHNCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNsQyxVQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0tBQ3pCOzs7V0FFTyxtQkFBRztBQUNULFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQ2hDLFVBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDNUIsVUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDbEM7OztXQUVRLG9CQUFHO0FBQ1YsVUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7QUFDckMsV0FBSyxJQUFJLEtBQUksSUFBSSxrQkFBSyxPQUFPLEVBQUU7QUFDN0IsWUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLEVBQUUsa0JBQUssT0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUE7T0FDMUM7S0FDRjs7O1dBRWtCLDhCQUFHO0FBQ3BCLFVBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNqRCxVQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUFFLFVBQUUsRUFBRSxDQUFBO09BQUU7S0FDdkM7OztXQUVjLDBCQUFHO0FBQ2hCLFVBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUM5QyxVQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRztBQUMzQyxZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFBO0FBQ2pELFlBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDM0MsY0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQTtTQUNsRDtPQUNGLE1BQU07QUFDTCxZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO09BQ3pDO0FBQ0QsVUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQzVDOzs7V0FFa0IsOEJBQUc7QUFDcEIsVUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzlDLFVBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLElBQUksSUFBSSxFQUFHO0FBQy9DLFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUE7QUFDckQsWUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUMzQyxjQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFBO1NBQ3REO09BQ0YsTUFBTTtBQUNMLFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUE7T0FDeEM7QUFDRCxVQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7S0FDNUM7OztXQUVVLG9CQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDeEIsVUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2QyxVQUFJLE1BQU0sR0FBRyxTQUFULE1BQU0sR0FBUztBQUFFLDBCQUFLLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFBO09BQUUsQ0FBQTs7QUFFeEQsVUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFBRSxZQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtPQUFFOztBQUV2RCxVQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTs7QUFFdkIsVUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQ25DLFVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3hGLFNBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUNsQixjQUFNLEVBQUUsQ0FBQTtPQUNULENBQUMsQ0FBQyxDQUFBOztBQUVILFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFBO0FBQ3pCLFVBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7O0FBRTVDLFVBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQSxBQUFDLEVBQUU7QUFDaEMsWUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7QUFDeEIsWUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO09BQzVDO0tBQ0Y7OztXQUVhLHVCQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDM0IsVUFBSTtBQUNGLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtPQUMxQyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7O0FBRWxCLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUMxQjs7O1dBRVksc0JBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtBQUMxQixVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7S0FDM0M7OztXQUVjLHdCQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDNUIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQzlDOzs7V0FwTmMsbUJBQUc7OztBQUNoQixVQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsU0FBTyxpREFBaUQsRUFBQyxFQUFFLFlBQU07QUFDekUsZUFBSyxLQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQU8sY0FBYyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFBO0FBQ3hFLGVBQUssRUFBRSxDQUFDLEVBQUMsU0FBTyx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEVBQUUsWUFBTTtBQUMvRCxpQkFBSyxFQUFFLENBQUMsRUFBQyxTQUFPLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQTtBQUNsRCxpQkFBSyxFQUFFLENBQUMsRUFBQyxTQUFPLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQyxFQUFFLGlCQUFpQixDQUFDLENBQUE7QUFDaEYsaUJBQUssRUFBRSxDQUFDLEVBQUMsU0FBTyxlQUFlLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1NBQzNFLENBQUMsQ0FBQTtBQUNGLGVBQUssR0FBRyxDQUFDLEVBQUMsU0FBTyxXQUFXLEVBQUMsRUFBRSxZQUFNO0FBQ25DLGlCQUFLLE1BQU0sQ0FBQyxFQUFDLFNBQU8saUJBQWlCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0FBQzFFLGlCQUFLLE1BQU0sQ0FBQyxFQUFDLFNBQU8saUJBQWlCLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1NBQzdFLENBQUMsQ0FBQTtPQUNILENBQUMsQ0FBQTtLQUNIOzs7cUNBZmtCLDJCQUEyQjtBQUEzQiw2QkFBMkIsR0FEL0MsaUVBQTBCLHVCQUFZLEtBQUssQ0FBQyxDQUN4QiwyQkFBMkIsS0FBM0IsMkJBQTJCO0FBQTNCLDZCQUEyQixHQUYvQyxvQ0FBUSx3QkFBd0IsQ0FBQyxDQUViLDJCQUEyQixLQUEzQiwyQkFBMkI7U0FBM0IsMkJBQTJCOzs7cUJBQTNCLDJCQUEyQiIsImZpbGUiOiIvaG9tZS9xdWFsLy5hdG9tL3BhY2thZ2VzL21pbmltYXAvbGliL21pbmltYXAtcXVpY2stc2V0dGluZ3MtZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnXG5cbmltcG9ydCB7Q29tcG9zaXRlRGlzcG9zYWJsZSwgRW1pdHRlcn0gZnJvbSAnYXRvbSdcbmltcG9ydCB7RXZlbnRzRGVsZWdhdGlvbiwgU3BhY2VQZW5EU0x9IGZyb20gJ2F0b20tdXRpbHMnXG5cbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbidcbmltcG9ydCBlbGVtZW50IGZyb20gJy4vZGVjb3JhdG9ycy9lbGVtZW50J1xuaW1wb3J0IGluY2x1ZGUgZnJvbSAnLi9kZWNvcmF0b3JzL2luY2x1ZGUnXG5cbi8qKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKi9cbkBlbGVtZW50KCdtaW5pbWFwLXF1aWNrLXNldHRpbmdzJylcbkBpbmNsdWRlKEV2ZW50c0RlbGVnYXRpb24sIFNwYWNlUGVuRFNMLkJhYmVsKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaW1hcFF1aWNrU2V0dGluZ3NFbGVtZW50IHtcblxuICBzdGF0aWMgY29udGVudCAoKSB7XG4gICAgdGhpcy5kaXYoe2NsYXNzOiAnc2VsZWN0LWxpc3QgcG9wb3Zlci1saXN0IG1pbmltYXAtcXVpY2stc2V0dGluZ3MnfSwgKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dCh7dHlwZTogJ3RleHQnLCBjbGFzczogJ2hpZGRlbi1pbnB1dCcsIG91dGxldDogJ2hpZGRlbklucHV0J30pXG4gICAgICB0aGlzLm9sKHtjbGFzczogJ2xpc3QtZ3JvdXAgbWFyay1hY3RpdmUnLCBvdXRsZXQ6ICdsaXN0J30sICgpID0+IHtcbiAgICAgICAgdGhpcy5saSh7Y2xhc3M6ICdzZXBhcmF0b3InLCBvdXRsZXQ6ICdzZXBhcmF0b3InfSlcbiAgICAgICAgdGhpcy5saSh7Y2xhc3M6ICdjb2RlLWhpZ2hsaWdodHMnLCBvdXRsZXQ6ICdjb2RlSGlnaGxpZ2h0cyd9LCAnY29kZS1oaWdobGlnaHRzJylcbiAgICAgICAgdGhpcy5saSh7Y2xhc3M6ICdhYnNvbHV0ZS1tb2RlJywgb3V0bGV0OiAnYWJzb2x1dGVNb2RlJ30sICdhYnNvbHV0ZS1tb2RlJylcbiAgICAgIH0pXG4gICAgICB0aGlzLmRpdih7Y2xhc3M6ICdidG4tZ3JvdXAnfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbih7Y2xhc3M6ICdidG4gYnRuLWRlZmF1bHQnLCBvdXRsZXQ6ICdvbkxlZnRCdXR0b24nfSwgJ09uIExlZnQnKVxuICAgICAgICB0aGlzLmJ1dHRvbih7Y2xhc3M6ICdidG4gYnRuLWRlZmF1bHQnLCBvdXRsZXQ6ICdvblJpZ2h0QnV0dG9uJ30sICdPbiBSaWdodCcpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2sgKCkge1xuICAgIHRoaXMuYnVpbGRDb250ZW50KClcbiAgfVxuXG4gIHNldE1vZGVsIChtaW5pbWFwKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsXG4gICAgdGhpcy5taW5pbWFwID0gbWluaW1hcFxuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKClcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpXG4gICAgdGhpcy5wbHVnaW5zID0ge31cbiAgICB0aGlzLml0ZW1zQWN0aW9ucyA9IG5ldyBXZWFrTWFwKClcblxuICAgIGxldCBzdWJzID0gdGhpcy5zdWJzY3JpcHRpb25zXG5cbiAgICBzdWJzLmFkZChNYWluLm9uRGlkQWRkUGx1Z2luKCh7bmFtZSwgcGx1Z2lufSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkSXRlbUZvcihuYW1lLCBwbHVnaW4pXG4gICAgfSkpXG4gICAgc3Vicy5hZGQoTWFpbi5vbkRpZFJlbW92ZVBsdWdpbigoe25hbWUsIHBsdWdpbn0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUl0ZW1Gb3IobmFtZSwgcGx1Z2luKVxuICAgIH0pKVxuICAgIHN1YnMuYWRkKE1haW4ub25EaWRBY3RpdmF0ZVBsdWdpbigoe25hbWUsIHBsdWdpbn0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2YXRlSXRlbShuYW1lLCBwbHVnaW4pXG4gICAgfSkpXG4gICAgc3Vicy5hZGQoTWFpbi5vbkRpZERlYWN0aXZhdGVQbHVnaW4oKHtuYW1lLCBwbHVnaW59KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kZWFjdGl2YXRlSXRlbShuYW1lLCBwbHVnaW4pXG4gICAgfSkpXG5cbiAgICBzdWJzLmFkZChhdG9tLmNvbW1hbmRzLmFkZCgnbWluaW1hcC1xdWljay1zZXR0aW5ncycsIHtcbiAgICAgICdjb3JlOm1vdmUtdXAnOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXNJdGVtKClcbiAgICAgIH0sXG4gICAgICAnY29yZTptb3ZlLWRvd24nOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0TmV4dEl0ZW0oKVxuICAgICAgfSxcbiAgICAgICdjb3JlOm1vdmUtbGVmdCc6ICgpID0+IHtcbiAgICAgICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmRpc3BsYXlNaW5pbWFwT25MZWZ0JywgdHJ1ZSlcbiAgICAgIH0sXG4gICAgICAnY29yZTptb3ZlLXJpZ2h0JzogKCkgPT4ge1xuICAgICAgICBhdG9tLmNvbmZpZy5zZXQoJ21pbmltYXAuZGlzcGxheU1pbmltYXBPbkxlZnQnLCBmYWxzZSlcbiAgICAgIH0sXG4gICAgICAnY29yZTpjYW5jZWwnOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICB9LFxuICAgICAgJ2NvcmU6Y29uZmlybSc6ICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3RlZEl0ZW0oKVxuICAgICAgfVxuICAgIH0pKVxuXG4gICAgdGhpcy5jb2RlSGlnaGxpZ2h0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCB0aGlzLm1pbmltYXAuZGlzcGxheUNvZGVIaWdobGlnaHRzKVxuXG4gICAgc3Vicy5hZGQodGhpcy5zdWJzY3JpYmVUbyh0aGlzLmNvZGVIaWdobGlnaHRzLCB7XG4gICAgICAnbW91c2Vkb3duJzogKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGF0b20uY29uZmlnLnNldCgnbWluaW1hcC5kaXNwbGF5Q29kZUhpZ2hsaWdodHMnLCAhdGhpcy5taW5pbWFwLmRpc3BsYXlDb2RlSGlnaGxpZ2h0cylcbiAgICAgIH1cbiAgICB9KSlcblxuICAgIHRoaXMuaXRlbXNBY3Rpb25zLnNldCh0aGlzLmNvZGVIaWdobGlnaHRzLCAoKSA9PiB7XG4gICAgICBhdG9tLmNvbmZpZy5zZXQoJ21pbmltYXAuZGlzcGxheUNvZGVIaWdobGlnaHRzJywgIXRoaXMubWluaW1hcC5kaXNwbGF5Q29kZUhpZ2hsaWdodHMpXG4gICAgfSlcblxuICAgIHN1YnMuYWRkKHRoaXMuc3Vic2NyaWJlVG8odGhpcy5hYnNvbHV0ZU1vZGUsIHtcbiAgICAgICdtb3VzZWRvd24nOiAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmFic29sdXRlTW9kZScsICFhdG9tLmNvbmZpZy5nZXQoJ21pbmltYXAuYWJzb2x1dGVNb2RlJykpXG4gICAgICB9XG4gICAgfSkpXG5cbiAgICB0aGlzLml0ZW1zQWN0aW9ucy5zZXQodGhpcy5hYnNvbHV0ZU1vZGUsICgpID0+IHtcbiAgICAgIGF0b20uY29uZmlnLnNldCgnbWluaW1hcC5hYnNvbHV0ZU1vZGUnLCAhYXRvbS5jb25maWcuZ2V0KCdtaW5pbWFwLmFic29sdXRlTW9kZScpKVxuICAgIH0pXG5cbiAgICBzdWJzLmFkZCh0aGlzLnN1YnNjcmliZVRvKHRoaXMuaGlkZGVuSW5wdXQsIHtcbiAgICAgICdmb2N1c291dCc6IChlKSA9PiB7IHRoaXMuZGVzdHJveSgpIH1cbiAgICB9KSlcblxuICAgIHN1YnMuYWRkKHRoaXMuc3Vic2NyaWJlVG8odGhpcy5vbkxlZnRCdXR0b24sIHtcbiAgICAgICdtb3VzZWRvd24nOiAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmRpc3BsYXlNaW5pbWFwT25MZWZ0JywgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KSlcblxuICAgIHN1YnMuYWRkKHRoaXMuc3Vic2NyaWJlVG8odGhpcy5vblJpZ2h0QnV0dG9uLCB7XG4gICAgICAnbW91c2Vkb3duJzogKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGF0b20uY29uZmlnLnNldCgnbWluaW1hcC5kaXNwbGF5TWluaW1hcE9uTGVmdCcsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pKVxuXG4gICAgc3Vicy5hZGQoYXRvbS5jb25maWcub2JzZXJ2ZSgnbWluaW1hcC5kaXNwbGF5Q29kZUhpZ2hsaWdodHMnLCAoYm9vbCkgPT4ge1xuICAgICAgdGhpcy5jb2RlSGlnaGxpZ2h0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBib29sKVxuICAgIH0pKVxuXG4gICAgc3Vicy5hZGQoYXRvbS5jb25maWcub2JzZXJ2ZSgnbWluaW1hcC5hYnNvbHV0ZU1vZGUnLCAoYm9vbCkgPT4ge1xuICAgICAgdGhpcy5hYnNvbHV0ZU1vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgYm9vbClcbiAgICB9KSlcblxuICAgIHN1YnMuYWRkKGF0b20uY29uZmlnLm9ic2VydmUoJ21pbmltYXAuZGlzcGxheU1pbmltYXBPbkxlZnQnLCAoYm9vbCkgPT4ge1xuICAgICAgdGhpcy5vbkxlZnRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBib29sKVxuICAgICAgdGhpcy5vblJpZ2h0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgIWJvb2wpXG4gICAgfSkpXG5cbiAgICB0aGlzLmluaXRMaXN0KClcbiAgfVxuXG4gIG9uRGlkRGVzdHJveSAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0dGVyLm9uKCdkaWQtZGVzdHJveScsIGNhbGxiYWNrKVxuICB9XG5cbiAgYXR0YWNoICgpIHtcbiAgICBsZXQgd29ya3NwYWNlRWxlbWVudCA9IGF0b20udmlld3MuZ2V0VmlldyhhdG9tLndvcmtzcGFjZSlcbiAgICB3b3Jrc3BhY2VFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5mb2N1cygpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnZGlkLWRlc3Ryb3knKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5kaXNwb3NlKClcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcylcbiAgfVxuXG4gIGluaXRMaXN0ICgpIHtcbiAgICB0aGlzLml0ZW1zRGlzcG9zYWJsZXMgPSBuZXcgV2Vha01hcCgpXG4gICAgZm9yIChsZXQgbmFtZSBpbiBNYWluLnBsdWdpbnMpIHtcbiAgICAgIHRoaXMuYWRkSXRlbUZvcihuYW1lLCBNYWluLnBsdWdpbnNbbmFtZV0pXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU2VsZWN0ZWRJdGVtICgpIHtcbiAgICBsZXQgZm4gPSB0aGlzLml0ZW1zQWN0aW9ucy5nZXQodGhpcy5zZWxlY3RlZEl0ZW0pXG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgeyBmbigpIH1cbiAgfVxuXG4gIHNlbGVjdE5leHRJdGVtICgpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgaWYgKCh0aGlzLnNlbGVjdGVkSXRlbS5uZXh0U2libGluZyAhPSBudWxsKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbS5uZXh0U2libGluZ1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtLm1hdGNoZXMoJy5zZXBhcmF0b3InKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtLm5leHRTaWJsaW5nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5saXN0LmZpcnN0Q2hpbGRcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICB9XG5cbiAgc2VsZWN0UHJldmlvdXNJdGVtICgpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgaWYgKCh0aGlzLnNlbGVjdGVkSXRlbS5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW0ucHJldmlvdXNTaWJsaW5nXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0ubWF0Y2hlcygnLnNlcGFyYXRvcicpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW0ucHJldmlvdXNTaWJsaW5nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5saXN0Lmxhc3RDaGlsZFxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gIH1cblxuICBhZGRJdGVtRm9yIChuYW1lLCBwbHVnaW4pIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsZXQgYWN0aW9uID0gKCkgPT4geyBNYWluLnRvZ2dsZVBsdWdpbkFjdGl2YXRpb24obmFtZSkgfVxuXG4gICAgaWYgKHBsdWdpbi5pc0FjdGl2ZSgpKSB7IGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykgfVxuXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIHRoaXMuaXRlbXNBY3Rpb25zLnNldChpdGVtLCBhY3Rpb24pXG4gICAgdGhpcy5pdGVtc0Rpc3Bvc2FibGVzLnNldChpdGVtLCB0aGlzLmFkZERpc3Bvc2FibGVFdmVudExpc3RlbmVyKGl0ZW0sICdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBhY3Rpb24oKVxuICAgIH0pKVxuXG4gICAgdGhpcy5wbHVnaW5zW25hbWVdID0gaXRlbVxuICAgIHRoaXMubGlzdC5pbnNlcnRCZWZvcmUoaXRlbSwgdGhpcy5zZXBhcmF0b3IpXG5cbiAgICBpZiAoISh0aGlzLnNlbGVjdGVkSXRlbSAhPSBudWxsKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbUZvciAobmFtZSwgcGx1Z2luKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubGlzdC5yZW1vdmVDaGlsZCh0aGlzLnBsdWdpbnNbbmFtZV0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBkZWxldGUgdGhpcy5wbHVnaW5zW25hbWVdXG4gIH1cblxuICBhY3RpdmF0ZUl0ZW0gKG5hbWUsIHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luc1tuYW1lXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9XG5cbiAgZGVhY3RpdmF0ZUl0ZW0gKG5hbWUsIHBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luc1tuYW1lXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG59XG4iXX0=
//# sourceURL=/home/qual/.atom/packages/minimap/lib/minimap-quick-settings-element.js
