(function() {
  var Cursor, Delegator, DisplayBuffer, Editor, LanguageMode, Model, Point, Range, Selection, Serializable, TextMateScopeSelector, deprecate, path, _, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _ = require('underscore-plus');

  path = require('path');

  Serializable = require('serializable');

  Delegator = require('delegato');

  deprecate = require('grim').deprecate;

  Model = require('theorist').Model;

  _ref = require('text-buffer'), Point = _ref.Point, Range = _ref.Range;

  LanguageMode = require('./language-mode');

  DisplayBuffer = require('./display-buffer');

  Cursor = require('./cursor');

  Selection = require('./selection');

  TextMateScopeSelector = require('first-mate').ScopeSelector;

  module.exports = Editor = (function(_super) {
    __extends(Editor, _super);

    Serializable.includeInto(Editor);

    atom.deserializers.add(Editor);

    Delegator.includeInto(Editor);

    Editor.prototype.deserializing = false;

    Editor.prototype.callDisplayBufferCreatedHook = false;

    Editor.prototype.registerEditor = false;

    Editor.prototype.buffer = null;

    Editor.prototype.languageMode = null;

    Editor.prototype.cursors = null;

    Editor.prototype.selections = null;

    Editor.prototype.suppressSelectionMerging = false;

    Editor.delegatesMethods('suggestedIndentForBufferRow', 'autoIndentBufferRow', 'autoIndentBufferRows', 'autoDecreaseIndentForBufferRow', 'toggleLineCommentForBufferRow', 'toggleLineCommentsForBufferRows', {
      toProperty: 'languageMode'
    });

    Editor.delegatesProperties('$lineHeight', '$defaultCharWidth', '$height', '$width', '$scrollTop', '$scrollLeft', 'manageScrollPosition', {
      toProperty: 'displayBuffer'
    });

    function Editor(_arg) {
      var buffer, initialColumn, initialLine, marker, registerEditor, softWrap, suppressCursorCreation, tabLength, _i, _len, _ref1, _ref2, _ref3, _ref4, _ref5;
      this.softTabs = _arg.softTabs, initialLine = _arg.initialLine, initialColumn = _arg.initialColumn, tabLength = _arg.tabLength, softWrap = _arg.softWrap, this.displayBuffer = _arg.displayBuffer, buffer = _arg.buffer, registerEditor = _arg.registerEditor, suppressCursorCreation = _arg.suppressCursorCreation;
      this.handleMarkerCreated = __bind(this.handleMarkerCreated, this);
      Editor.__super__.constructor.apply(this, arguments);
      this.cursors = [];
      this.selections = [];
      if (this.displayBuffer == null) {
        this.displayBuffer = new DisplayBuffer({
          buffer: buffer,
          tabLength: tabLength,
          softWrap: softWrap
        });
      }
      this.buffer = this.displayBuffer.buffer;
      this.softTabs = (_ref1 = (_ref2 = (_ref3 = this.buffer.usesSoftTabs()) != null ? _ref3 : this.softTabs) != null ? _ref2 : atom.config.get('editor.softTabs')) != null ? _ref1 : true;
      _ref4 = this.findMarkers(this.getSelectionMarkerAttributes());
      for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
        marker = _ref4[_i];
        marker.setAttributes({
          preserveFolds: true
        });
        this.addSelection(marker);
      }
      this.subscribeToBuffer();
      this.subscribeToDisplayBuffer();
      if (this.getCursors().length === 0 && !suppressCursorCreation) {
        initialLine = Math.max(parseInt(initialLine) || 0, 0);
        initialColumn = Math.max(parseInt(initialColumn) || 0, 0);
        this.addCursorAtBufferPosition([initialLine, initialColumn]);
      }
      this.languageMode = new LanguageMode(this);
      this.subscribe(this.$scrollTop, (function(_this) {
        return function(scrollTop) {
          return _this.emit('scroll-top-changed', scrollTop);
        };
      })(this));
      this.subscribe(this.$scrollLeft, (function(_this) {
        return function(scrollLeft) {
          return _this.emit('scroll-left-changed', scrollLeft);
        };
      })(this));
      if (registerEditor) {
        if ((_ref5 = atom.workspace) != null) {
          _ref5.editorAdded(this);
        }
      }
    }

    Editor.prototype.serializeParams = function() {
      return {
        id: this.id,
        softTabs: this.softTabs,
        scrollTop: this.scrollTop,
        scrollLeft: this.scrollLeft,
        displayBuffer: this.displayBuffer.serialize()
      };
    };

    Editor.prototype.deserializeParams = function(params) {
      params.displayBuffer = DisplayBuffer.deserialize(params.displayBuffer);
      params.registerEditor = true;
      return params;
    };

    Editor.prototype.subscribeToBuffer = function() {
      this.buffer.retain();
      this.subscribe(this.buffer, "path-changed", (function(_this) {
        return function() {
          if (atom.project.getPath() == null) {
            atom.project.setPath(path.dirname(_this.getPath()));
          }
          _this.emit("title-changed");
          return _this.emit("path-changed");
        };
      })(this));
      this.subscribe(this.buffer, "contents-modified", (function(_this) {
        return function() {
          return _this.emit("contents-modified");
        };
      })(this));
      this.subscribe(this.buffer, "contents-conflicted", (function(_this) {
        return function() {
          return _this.emit("contents-conflicted");
        };
      })(this));
      this.subscribe(this.buffer, "modified-status-changed", (function(_this) {
        return function() {
          return _this.emit("modified-status-changed");
        };
      })(this));
      this.subscribe(this.buffer, "destroyed", (function(_this) {
        return function() {
          return _this.destroy();
        };
      })(this));
      return this.preserveCursorPositionOnBufferReload();
    };

    Editor.prototype.subscribeToDisplayBuffer = function() {
      this.subscribe(this.displayBuffer, 'marker-created', this.handleMarkerCreated);
      this.subscribe(this.displayBuffer, "changed", (function(_this) {
        return function(e) {
          return _this.emit('screen-lines-changed', e);
        };
      })(this));
      this.subscribe(this.displayBuffer, "markers-updated", (function(_this) {
        return function() {
          return _this.mergeIntersectingSelections();
        };
      })(this));
      this.subscribe(this.displayBuffer, 'grammar-changed', (function(_this) {
        return function() {
          return _this.handleGrammarChange();
        };
      })(this));
      return this.subscribe(this.displayBuffer, 'soft-wrap-changed', (function(_this) {
        return function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return _this.emit.apply(_this, ['soft-wrap-changed'].concat(__slice.call(args)));
        };
      })(this));
    };

    Editor.prototype.getViewClass = function() {
      if (atom.config.get('core.useReactEditor')) {
        return require('./react-editor-view');
      } else {
        return require('./editor-view');
      }
    };

    Editor.prototype.destroyed = function() {
      var selection, _i, _len, _ref1;
      this.unsubscribe();
      _ref1 = this.getSelections();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        selection.destroy();
      }
      this.buffer.release();
      this.displayBuffer.destroy();
      return this.languageMode.destroy();
    };

    Editor.prototype.copy = function() {
      var displayBuffer, marker, newEditor, softTabs, tabLength, _i, _len, _ref1;
      tabLength = this.getTabLength();
      displayBuffer = this.displayBuffer.copy();
      softTabs = this.getSoftTabs();
      newEditor = new Editor({
        buffer: this.buffer,
        displayBuffer: displayBuffer,
        tabLength: tabLength,
        softTabs: softTabs,
        suppressCursorCreation: true,
        registerEditor: true
      });
      _ref1 = this.findMarkers({
        editorId: this.id
      });
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        marker = _ref1[_i];
        marker.copy({
          editorId: newEditor.id,
          preserveFolds: true
        });
      }
      return newEditor;
    };

    Editor.prototype.getTitle = function() {
      var sessionPath;
      if (sessionPath = this.getPath()) {
        return path.basename(sessionPath);
      } else {
        return 'untitled';
      }
    };

    Editor.prototype.getLongTitle = function() {
      var directory, fileName, sessionPath;
      if (sessionPath = this.getPath()) {
        fileName = path.basename(sessionPath);
        directory = path.basename(path.dirname(sessionPath));
        return "" + fileName + " - " + directory;
      } else {
        return 'untitled';
      }
    };

    Editor.prototype.setVisible = function(visible) {
      return this.displayBuffer.setVisible(visible);
    };

    Editor.prototype.setEditorWidthInChars = function(editorWidthInChars) {
      return this.displayBuffer.setEditorWidthInChars(editorWidthInChars);
    };

    Editor.prototype.getSoftWrapColumn = function() {
      return this.displayBuffer.getSoftWrapColumn();
    };

    Editor.prototype.getSoftTabs = function() {
      return this.softTabs;
    };

    Editor.prototype.setSoftTabs = function(softTabs) {
      this.softTabs = softTabs;
      return this.softTabs;
    };

    Editor.prototype.toggleSoftTabs = function() {
      return this.setSoftTabs(!this.getSoftTabs());
    };

    Editor.prototype.getSoftWrap = function() {
      return this.displayBuffer.getSoftWrap();
    };

    Editor.prototype.setSoftWrap = function(softWrap) {
      return this.displayBuffer.setSoftWrap(softWrap);
    };

    Editor.prototype.toggleSoftWrap = function() {
      return this.setSoftWrap(!this.getSoftWrap());
    };

    Editor.prototype.getTabText = function() {
      return this.buildIndentString(1);
    };

    Editor.prototype.getTabLength = function() {
      return this.displayBuffer.getTabLength();
    };

    Editor.prototype.setTabLength = function(tabLength) {
      return this.displayBuffer.setTabLength(tabLength);
    };

    Editor.prototype.clipBufferPosition = function(bufferPosition) {
      return this.buffer.clipPosition(bufferPosition);
    };

    Editor.prototype.clipBufferRange = function(range) {
      return this.buffer.clipRange(range);
    };

    Editor.prototype.indentationForBufferRow = function(bufferRow) {
      return this.indentLevelForLine(this.lineForBufferRow(bufferRow));
    };

    Editor.prototype.setIndentationForBufferRow = function(bufferRow, newLevel, _arg) {
      var endColumn, newIndentString, preserveLeadingWhitespace;
      preserveLeadingWhitespace = (_arg != null ? _arg : {}).preserveLeadingWhitespace;
      if (preserveLeadingWhitespace) {
        endColumn = 0;
      } else {
        endColumn = this.lineForBufferRow(bufferRow).match(/^\s*/)[0].length;
      }
      newIndentString = this.buildIndentString(newLevel);
      return this.buffer.setTextInRange([[bufferRow, 0], [bufferRow, endColumn]], newIndentString);
    };

    Editor.prototype.indentLevelForLine = function(line) {
      return this.displayBuffer.indentLevelForLine(line);
    };

    Editor.prototype.buildIndentString = function(number) {
      if (this.getSoftTabs()) {
        return _.multiplyString(" ", Math.floor(number * this.getTabLength()));
      } else {
        return _.multiplyString("\t", Math.floor(number));
      }
    };

    Editor.prototype.save = function() {
      return this.buffer.save();
    };

    Editor.prototype.saveAs = function(filePath) {
      return this.buffer.saveAs(filePath);
    };

    Editor.prototype.checkoutHead = function() {
      var filePath, _ref1;
      if (filePath = this.getPath()) {
        return (_ref1 = atom.project.getRepo()) != null ? _ref1.checkoutHead(filePath) : void 0;
      }
    };

    Editor.prototype.copyPathToClipboard = function() {
      var filePath;
      if (filePath = this.getPath()) {
        return atom.clipboard.write(filePath);
      }
    };

    Editor.prototype.getPath = function() {
      return this.buffer.getPath();
    };

    Editor.prototype.getText = function() {
      return this.buffer.getText();
    };

    Editor.prototype.setText = function(text) {
      return this.buffer.setText(text);
    };

    Editor.prototype.getTextInRange = function(range) {
      return this.buffer.getTextInRange(range);
    };

    Editor.prototype.getLineCount = function() {
      return this.buffer.getLineCount();
    };

    Editor.prototype.getBuffer = function() {
      return this.buffer;
    };

    Editor.prototype.getUri = function() {
      return this.buffer.getUri();
    };

    Editor.prototype.isBufferRowBlank = function(bufferRow) {
      return this.buffer.isRowBlank(bufferRow);
    };

    Editor.prototype.isBufferRowCommented = function(bufferRow) {
      var match, scopes;
      if (match = this.lineForBufferRow(bufferRow).match(/\S/)) {
        scopes = this.tokenForBufferPosition([bufferRow, match.index]).scopes;
        return new TextMateScopeSelector('comment.*').matches(scopes);
      }
    };

    Editor.prototype.nextNonBlankBufferRow = function(bufferRow) {
      return this.buffer.nextNonBlankRow(bufferRow);
    };

    Editor.prototype.getEofBufferPosition = function() {
      return this.buffer.getEndPosition();
    };

    Editor.prototype.getLastBufferRow = function() {
      return this.buffer.getLastRow();
    };

    Editor.prototype.bufferRangeForBufferRow = function(row, _arg) {
      var includeNewline;
      includeNewline = (_arg != null ? _arg : {}).includeNewline;
      return this.buffer.rangeForRow(row, includeNewline);
    };

    Editor.prototype.lineForBufferRow = function(row) {
      return this.buffer.lineForRow(row);
    };

    Editor.prototype.lineLengthForBufferRow = function(row) {
      return this.buffer.lineLengthForRow(row);
    };

    Editor.prototype.scan = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.buffer).scan.apply(_ref1, args);
    };

    Editor.prototype.scanInBufferRange = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.buffer).scanInRange.apply(_ref1, args);
    };

    Editor.prototype.backwardsScanInBufferRange = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.buffer).backwardsScanInRange.apply(_ref1, args);
    };

    Editor.prototype.isModified = function() {
      return this.buffer.isModified();
    };

    Editor.prototype.shouldPromptToSave = function() {
      return this.isModified() && !this.buffer.hasMultipleEditors();
    };

    Editor.prototype.screenPositionForBufferPosition = function(bufferPosition, options) {
      return this.displayBuffer.screenPositionForBufferPosition(bufferPosition, options);
    };

    Editor.prototype.bufferPositionForScreenPosition = function(screenPosition, options) {
      return this.displayBuffer.bufferPositionForScreenPosition(screenPosition, options);
    };

    Editor.prototype.screenRangeForBufferRange = function(bufferRange) {
      return this.displayBuffer.screenRangeForBufferRange(bufferRange);
    };

    Editor.prototype.bufferRangeForScreenRange = function(screenRange) {
      return this.displayBuffer.bufferRangeForScreenRange(screenRange);
    };

    Editor.prototype.clipScreenPosition = function(screenPosition, options) {
      return this.displayBuffer.clipScreenPosition(screenPosition, options);
    };

    Editor.prototype.lineForScreenRow = function(row) {
      return this.displayBuffer.lineForRow(row);
    };

    Editor.prototype.linesForScreenRows = function(start, end) {
      return this.displayBuffer.linesForRows(start, end);
    };

    Editor.prototype.getScreenLineCount = function() {
      return this.displayBuffer.getLineCount();
    };

    Editor.prototype.getMaxScreenLineLength = function() {
      return this.displayBuffer.getMaxLineLength();
    };

    Editor.prototype.getLastScreenRow = function() {
      return this.displayBuffer.getLastRow();
    };

    Editor.prototype.bufferRowsForScreenRows = function(startRow, endRow) {
      return this.displayBuffer.bufferRowsForScreenRows(startRow, endRow);
    };

    Editor.prototype.bufferRowForScreenRow = function(row) {
      return this.displayBuffer.bufferRowForScreenRow(row);
    };

    Editor.prototype.scopesForBufferPosition = function(bufferPosition) {
      return this.displayBuffer.scopesForBufferPosition(bufferPosition);
    };

    Editor.prototype.bufferRangeForScopeAtCursor = function(selector) {
      return this.displayBuffer.bufferRangeForScopeAtPosition(selector, this.getCursorBufferPosition());
    };

    Editor.prototype.tokenForBufferPosition = function(bufferPosition) {
      return this.displayBuffer.tokenForBufferPosition(bufferPosition);
    };

    Editor.prototype.getCursorScopes = function() {
      return this.getCursor().getScopes();
    };

    Editor.prototype.logCursorScope = function() {
      return console.log(this.getCursorScopes());
    };

    Editor.prototype.insertText = function(text, options) {
      if (options == null) {
        options = {};
      }
      if (options.autoIndentNewline == null) {
        options.autoIndentNewline = this.shouldAutoIndent();
      }
      if (options.autoDecreaseIndent == null) {
        options.autoDecreaseIndent = this.shouldAutoIndent();
      }
      return this.mutateSelectedText(function(selection) {
        return selection.insertText(text, options);
      });
    };

    Editor.prototype.insertNewline = function() {
      return this.insertText('\n');
    };

    Editor.prototype.insertNewlineBelow = function() {
      return this.transact((function(_this) {
        return function() {
          _this.moveCursorToEndOfLine();
          return _this.insertNewline();
        };
      })(this));
    };

    Editor.prototype.insertNewlineAbove = function() {
      return this.transact((function(_this) {
        return function() {
          var bufferRow, indentLevel, onFirstLine;
          bufferRow = _this.getCursorBufferPosition().row;
          indentLevel = _this.indentationForBufferRow(bufferRow);
          onFirstLine = bufferRow === 0;
          _this.moveCursorToBeginningOfLine();
          _this.moveCursorLeft();
          _this.insertNewline();
          if (_this.shouldAutoIndent() && _this.indentationForBufferRow(bufferRow) < indentLevel) {
            _this.setIndentationForBufferRow(bufferRow, indentLevel);
          }
          if (onFirstLine) {
            _this.moveCursorUp();
            return _this.moveCursorToEndOfLine();
          }
        };
      })(this));
    };

    Editor.prototype.indent = function(options) {
      if (options == null) {
        options = {};
      }
      if (options.autoIndent == null) {
        options.autoIndent = this.shouldAutoIndent();
      }
      return this.mutateSelectedText(function(selection) {
        return selection.indent(options);
      });
    };

    Editor.prototype.backspace = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.backspace();
      });
    };

    Editor.prototype.backspaceToBeginningOfWord = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.backspaceToBeginningOfWord();
      });
    };

    Editor.prototype.backspaceToBeginningOfLine = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.backspaceToBeginningOfLine();
      });
    };

    Editor.prototype["delete"] = function() {
      return this.mutateSelectedText(function(selection) {
        return selection["delete"]();
      });
    };

    Editor.prototype.deleteToEndOfWord = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.deleteToEndOfWord();
      });
    };

    Editor.prototype.deleteLine = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.deleteLine();
      });
    };

    Editor.prototype.indentSelectedRows = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.indentSelectedRows();
      });
    };

    Editor.prototype.outdentSelectedRows = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.outdentSelectedRows();
      });
    };

    Editor.prototype.toggleLineCommentsInSelection = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.toggleLineComments();
      });
    };

    Editor.prototype.autoIndentSelectedRows = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.autoIndentSelectedRows();
      });
    };

    Editor.prototype.normalizeTabsInBufferRange = function(bufferRange) {
      if (!this.getSoftTabs()) {
        return;
      }
      return this.scanInBufferRange(/\t/g, bufferRange, (function(_this) {
        return function(_arg) {
          var replace;
          replace = _arg.replace;
          return replace(_this.getTabText());
        };
      })(this));
    };

    Editor.prototype.cutToEndOfLine = function() {
      var maintainClipboard;
      maintainClipboard = false;
      return this.mutateSelectedText(function(selection) {
        selection.cutToEndOfLine(maintainClipboard);
        return maintainClipboard = true;
      });
    };

    Editor.prototype.cutSelectedText = function() {
      var maintainClipboard;
      maintainClipboard = false;
      return this.mutateSelectedText(function(selection) {
        selection.cut(maintainClipboard);
        return maintainClipboard = true;
      });
    };

    Editor.prototype.copySelectedText = function() {
      var maintainClipboard, selection, _i, _len, _ref1, _results;
      maintainClipboard = false;
      _ref1 = this.getSelections();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        selection.copy(maintainClipboard);
        _results.push(maintainClipboard = true);
      }
      return _results;
    };

    Editor.prototype.pasteText = function(options) {
      var containsNewlines, metadata, text, _ref1;
      if (options == null) {
        options = {};
      }
      _ref1 = atom.clipboard.readWithMetadata(), text = _ref1.text, metadata = _ref1.metadata;
      containsNewlines = text.indexOf('\n') !== -1;
      if (((metadata != null ? metadata.selections : void 0) != null) && metadata.selections.length === this.getSelections().length) {
        this.mutateSelectedText((function(_this) {
          return function(selection, index) {
            text = metadata.selections[index];
            return selection.insertText(text, options);
          };
        })(this));
        return;
      } else if (atom.config.get("editor.normalizeIndentOnPaste") && ((metadata != null ? metadata.indentBasis : void 0) != null)) {
        if (!this.getCursor().hasPrecedingCharactersOnLine() || containsNewlines) {
          if (options.indentBasis == null) {
            options.indentBasis = metadata.indentBasis;
          }
        }
      }
      return this.insertText(text, options);
    };

    Editor.prototype.undo = function() {
      this.getCursor().needsAutoscroll = true;
      return this.buffer.undo(this);
    };

    Editor.prototype.redo = function() {
      this.getCursor().needsAutoscroll = true;
      return this.buffer.redo(this);
    };

    Editor.prototype.foldCurrentRow = function() {
      var bufferRow;
      bufferRow = this.bufferPositionForScreenPosition(this.getCursorScreenPosition()).row;
      return this.foldBufferRow(bufferRow);
    };

    Editor.prototype.unfoldCurrentRow = function() {
      var bufferRow;
      bufferRow = this.bufferPositionForScreenPosition(this.getCursorScreenPosition()).row;
      return this.unfoldBufferRow(bufferRow);
    };

    Editor.prototype.foldSelectedLines = function() {
      var selection, _i, _len, _ref1, _results;
      _ref1 = this.getSelections();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        _results.push(selection.fold());
      }
      return _results;
    };

    Editor.prototype.foldAll = function() {
      return this.languageMode.foldAll();
    };

    Editor.prototype.unfoldAll = function() {
      return this.languageMode.unfoldAll();
    };

    Editor.prototype.foldAllAtIndentLevel = function(level) {
      return this.languageMode.foldAllAtIndentLevel(level);
    };

    Editor.prototype.foldBufferRow = function(bufferRow) {
      return this.languageMode.foldBufferRow(bufferRow);
    };

    Editor.prototype.unfoldBufferRow = function(bufferRow) {
      return this.displayBuffer.unfoldBufferRow(bufferRow);
    };

    Editor.prototype.isFoldableAtBufferRow = function(bufferRow) {
      return this.languageMode.isFoldableAtBufferRow(bufferRow);
    };

    Editor.prototype.createFold = function(startRow, endRow) {
      return this.displayBuffer.createFold(startRow, endRow);
    };

    Editor.prototype.destroyFoldWithId = function(id) {
      return this.displayBuffer.destroyFoldWithId(id);
    };

    Editor.prototype.destroyFoldsIntersectingBufferRange = function(bufferRange) {
      var row, _i, _ref1, _ref2, _results;
      _results = [];
      for (row = _i = _ref1 = bufferRange.start.row, _ref2 = bufferRange.end.row; _ref1 <= _ref2 ? _i <= _ref2 : _i >= _ref2; row = _ref1 <= _ref2 ? ++_i : --_i) {
        _results.push(this.unfoldBufferRow(row));
      }
      return _results;
    };

    Editor.prototype.toggleFoldAtBufferRow = function(bufferRow) {
      if (this.isFoldedAtBufferRow(bufferRow)) {
        return this.unfoldBufferRow(bufferRow);
      } else {
        return this.foldBufferRow(bufferRow);
      }
    };

    Editor.prototype.isFoldedAtCursorRow = function() {
      return this.isFoldedAtScreenRow(this.getCursorScreenRow());
    };

    Editor.prototype.isFoldedAtBufferRow = function(bufferRow) {
      return this.displayBuffer.isFoldedAtBufferRow(bufferRow);
    };

    Editor.prototype.isFoldedAtScreenRow = function(screenRow) {
      return this.displayBuffer.isFoldedAtScreenRow(screenRow);
    };

    Editor.prototype.largestFoldContainingBufferRow = function(bufferRow) {
      return this.displayBuffer.largestFoldContainingBufferRow(bufferRow);
    };

    Editor.prototype.largestFoldStartingAtScreenRow = function(screenRow) {
      return this.displayBuffer.largestFoldStartingAtScreenRow(screenRow);
    };

    Editor.prototype.outermostFoldsInBufferRowRange = function(startRow, endRow) {
      return this.displayBuffer.outermostFoldsInBufferRowRange(startRow, endRow);
    };

    Editor.prototype.moveLineUp = function() {
      var lastRow, selection;
      selection = this.getSelectedBufferRange();
      if (selection.start.row === 0) {
        return;
      }
      lastRow = this.buffer.getLastRow();
      if (selection.isEmpty() && selection.start.row === lastRow && this.buffer.getLastLine() === '') {
        return;
      }
      return this.transact((function(_this) {
        return function() {
          var bufferRange, endPosition, endRow, fold, foldedRow, foldedRows, insertDelta, insertPosition, lines, precedingBufferRow, precedingScreenRow, row, rows, startRow, _i, _j, _k, _len, _len1, _ref1, _ref2, _results;
          foldedRows = [];
          rows = (function() {
            _results = [];
            for (var _i = _ref1 = selection.start.row, _ref2 = selection.end.row; _ref1 <= _ref2 ? _i <= _ref2 : _i >= _ref2; _ref1 <= _ref2 ? _i++ : _i--){ _results.push(_i); }
            return _results;
          }).apply(this);
          if (selection.start.row !== selection.end.row && selection.end.column === 0) {
            if (!_this.isFoldedAtBufferRow(selection.end.row)) {
              rows.pop();
            }
          }
          precedingScreenRow = _this.screenPositionForBufferPosition([selection.start.row]).translate([-1]);
          precedingBufferRow = _this.bufferPositionForScreenPosition(precedingScreenRow).row;
          if (fold = _this.largestFoldContainingBufferRow(precedingBufferRow)) {
            insertDelta = fold.getBufferRange().getRowCount();
          } else {
            insertDelta = 1;
          }
          for (_j = 0, _len = rows.length; _j < _len; _j++) {
            row = rows[_j];
            if (fold = _this.displayBuffer.largestFoldStartingAtBufferRow(row)) {
              bufferRange = fold.getBufferRange();
              startRow = bufferRange.start.row;
              endRow = bufferRange.end.row;
              foldedRows.push(startRow - insertDelta);
            } else {
              startRow = row;
              endRow = row;
            }
            insertPosition = Point.fromObject([startRow - insertDelta]);
            endPosition = Point.min([endRow + 1], _this.buffer.getEndPosition());
            lines = _this.buffer.getTextInRange([[startRow], endPosition]);
            if (endPosition.row === lastRow && endPosition.column > 0 && !_this.buffer.lineEndingForRow(endPosition.row)) {
              lines = "" + lines + "\n";
            }
            _this.buffer.deleteRows(startRow, endRow);
            if (fold = _this.displayBuffer.largestFoldStartingAtBufferRow(insertPosition.row)) {
              _this.unfoldBufferRow(insertPosition.row);
              foldedRows.push(insertPosition.row + endRow - startRow + fold.getBufferRange().getRowCount());
            }
            _this.buffer.insert(insertPosition, lines);
          }
          for (_k = 0, _len1 = foldedRows.length; _k < _len1; _k++) {
            foldedRow = foldedRows[_k];
            if ((0 <= foldedRow && foldedRow <= _this.getLastBufferRow())) {
              _this.foldBufferRow(foldedRow);
            }
          }
          return _this.setSelectedBufferRange(selection.translate([-insertDelta]), {
            preserveFolds: true,
            autoscroll: true
          });
        };
      })(this));
    };

    Editor.prototype.moveLineDown = function() {
      var lastRow, selection;
      selection = this.getSelectedBufferRange();
      lastRow = this.buffer.getLastRow();
      if (selection.end.row === lastRow) {
        return;
      }
      if (selection.end.row === lastRow - 1 && this.buffer.getLastLine() === '') {
        return;
      }
      return this.transact((function(_this) {
        return function() {
          var bufferRange, endPosition, endRow, fold, foldedRow, foldedRows, followingBufferRow, followingScreenRow, insertDelta, insertPosition, lines, row, rows, startRow, _i, _j, _k, _len, _len1, _ref1, _ref2, _results;
          foldedRows = [];
          rows = (function() {
            _results = [];
            for (var _i = _ref1 = selection.end.row, _ref2 = selection.start.row; _ref1 <= _ref2 ? _i <= _ref2 : _i >= _ref2; _ref1 <= _ref2 ? _i++ : _i--){ _results.push(_i); }
            return _results;
          }).apply(this);
          if (selection.start.row !== selection.end.row && selection.end.column === 0) {
            if (!_this.isFoldedAtBufferRow(selection.end.row)) {
              rows.shift();
            }
          }
          followingScreenRow = _this.screenPositionForBufferPosition([selection.end.row]).translate([1]);
          followingBufferRow = _this.bufferPositionForScreenPosition(followingScreenRow).row;
          if (fold = _this.largestFoldContainingBufferRow(followingBufferRow)) {
            insertDelta = fold.getBufferRange().getRowCount();
          } else {
            insertDelta = 1;
          }
          for (_j = 0, _len = rows.length; _j < _len; _j++) {
            row = rows[_j];
            if (fold = _this.displayBuffer.largestFoldStartingAtBufferRow(row)) {
              bufferRange = fold.getBufferRange();
              startRow = bufferRange.start.row;
              endRow = bufferRange.end.row;
              foldedRows.push(endRow + insertDelta);
            } else {
              startRow = row;
              endRow = row;
            }
            if (endRow + 1 === lastRow) {
              endPosition = [endRow, _this.buffer.lineLengthForRow(endRow)];
            } else {
              endPosition = [endRow + 1];
            }
            lines = _this.buffer.getTextInRange([[startRow], endPosition]);
            _this.buffer.deleteRows(startRow, endRow);
            insertPosition = Point.min([startRow + insertDelta], _this.buffer.getEndPosition());
            if (insertPosition.row === _this.buffer.getLastRow() && insertPosition.column > 0) {
              lines = "\n" + lines;
            }
            if (fold = _this.displayBuffer.largestFoldStartingAtBufferRow(insertPosition.row)) {
              _this.unfoldBufferRow(insertPosition.row);
              foldedRows.push(insertPosition.row + fold.getBufferRange().getRowCount());
            }
            _this.buffer.insert(insertPosition, lines);
          }
          for (_k = 0, _len1 = foldedRows.length; _k < _len1; _k++) {
            foldedRow = foldedRows[_k];
            if ((0 <= foldedRow && foldedRow <= _this.getLastBufferRow())) {
              _this.foldBufferRow(foldedRow);
            }
          }
          return _this.setSelectedBufferRange(selection.translate([insertDelta]), {
            preserveFolds: true,
            autoscroll: true
          });
        };
      })(this));
    };

    Editor.prototype.duplicateLines = function() {
      return this.transact((function(_this) {
        return function() {
          var delta, endRow, foldEndRow, foldStartRow, foldedRowRanges, rangeToDuplicate, selectedBufferRange, selection, start, startRow, textToDuplicate, _i, _len, _ref1, _ref2, _results;
          _ref1 = _this.getSelectionsOrderedByBufferPosition().reverse();
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            selection = _ref1[_i];
            selectedBufferRange = selection.getBufferRange();
            if (selection.isEmpty()) {
              start = selection.getScreenRange().start;
              selection.selectToScreenPosition([start.row + 1, 0]);
            }
            _ref2 = selection.getBufferRowRange(), startRow = _ref2[0], endRow = _ref2[1];
            endRow++;
            foldedRowRanges = _this.outermostFoldsInBufferRowRange(startRow, endRow).map(function(fold) {
              return fold.getBufferRowRange();
            });
            rangeToDuplicate = [[startRow, 0], [endRow, 0]];
            textToDuplicate = _this.getTextInBufferRange(rangeToDuplicate);
            if (endRow > _this.getLastBufferRow()) {
              textToDuplicate = '\n' + textToDuplicate;
            }
            _this.buffer.insert([endRow, 0], textToDuplicate);
            delta = endRow - startRow;
            selection.setBufferRange(selectedBufferRange.translate([delta, 0]));
            _results.push((function() {
              var _j, _len1, _ref3, _results1;
              _results1 = [];
              for (_j = 0, _len1 = foldedRowRanges.length; _j < _len1; _j++) {
                _ref3 = foldedRowRanges[_j], foldStartRow = _ref3[0], foldEndRow = _ref3[1];
                _results1.push(this.createFold(foldStartRow + delta, foldEndRow + delta));
              }
              return _results1;
            }).call(_this));
          }
          return _results;
        };
      })(this));
    };

    Editor.prototype.duplicateLine = function() {
      deprecate("Use Editor::duplicateLines() instead");
      return this.duplicateLines();
    };

    Editor.prototype.mutateSelectedText = function(fn) {
      return this.transact((function(_this) {
        return function() {
          var index, selection, _i, _len, _ref1, _results;
          _ref1 = _this.getSelections();
          _results = [];
          for (index = _i = 0, _len = _ref1.length; _i < _len; index = ++_i) {
            selection = _ref1[index];
            _results.push(fn(selection, index));
          }
          return _results;
        };
      })(this));
    };

    Editor.prototype.replaceSelectedText = function(options, fn) {
      var selectWordIfEmpty;
      if (options == null) {
        options = {};
      }
      selectWordIfEmpty = options.selectWordIfEmpty;
      return this.mutateSelectedText(function(selection) {
        var range, text;
        range = selection.getBufferRange();
        if (selectWordIfEmpty && selection.isEmpty()) {
          selection.selectWord();
        }
        text = selection.getText();
        selection.deleteSelectedText();
        selection.insertText(fn(text));
        return selection.setBufferRange(range);
      });
    };

    Editor.prototype.getMarker = function(id) {
      return this.displayBuffer.getMarker(id);
    };

    Editor.prototype.getMarkers = function() {
      return this.displayBuffer.getMarkers();
    };

    Editor.prototype.findMarkers = function(properties) {
      return this.displayBuffer.findMarkers(properties);
    };

    Editor.prototype.markScreenRange = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.displayBuffer).markScreenRange.apply(_ref1, args);
    };

    Editor.prototype.markBufferRange = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.displayBuffer).markBufferRange.apply(_ref1, args);
    };

    Editor.prototype.markScreenPosition = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.displayBuffer).markScreenPosition.apply(_ref1, args);
    };

    Editor.prototype.markBufferPosition = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.displayBuffer).markBufferPosition.apply(_ref1, args);
    };

    Editor.prototype.destroyMarker = function() {
      var args, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref1 = this.displayBuffer).destroyMarker.apply(_ref1, args);
    };

    Editor.prototype.getMarkerCount = function() {
      return this.buffer.getMarkerCount();
    };

    Editor.prototype.hasMultipleCursors = function() {
      return this.getCursors().length > 1;
    };

    Editor.prototype.getCursors = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Array, this.cursors, function(){});
    };

    Editor.prototype.getCursor = function() {
      return _.last(this.cursors);
    };

    Editor.prototype.addCursorAtScreenPosition = function(screenPosition) {
      this.markScreenPosition(screenPosition, this.getSelectionMarkerAttributes());
      return this.getLastSelection().cursor;
    };

    Editor.prototype.addCursorAtBufferPosition = function(bufferPosition) {
      this.markBufferPosition(bufferPosition, this.getSelectionMarkerAttributes());
      return this.getLastSelection().cursor;
    };

    Editor.prototype.addCursor = function(marker) {
      var cursor;
      cursor = new Cursor({
        editor: this,
        marker: marker
      });
      this.cursors.push(cursor);
      this.emit('cursor-added', cursor);
      return cursor;
    };

    Editor.prototype.removeCursor = function(cursor) {
      return _.remove(this.cursors, cursor);
    };

    Editor.prototype.addSelection = function(marker, options) {
      var cursor, selection, selectionBufferRange, _i, _len, _ref1;
      if (options == null) {
        options = {};
      }
      if (!marker.getAttributes().preserveFolds) {
        this.destroyFoldsIntersectingBufferRange(marker.getBufferRange());
      }
      cursor = this.addCursor(marker);
      selection = new Selection(_.extend({
        editor: this,
        marker: marker,
        cursor: cursor
      }, options));
      this.selections.push(selection);
      selectionBufferRange = selection.getBufferRange();
      this.mergeIntersectingSelections();
      if (selection.destroyed) {
        _ref1 = this.getSelections();
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          selection = _ref1[_i];
          if (selection.intersectsBufferRange(selectionBufferRange)) {
            return selection;
          }
        }
      } else {
        this.emit('selection-added', selection);
        return selection;
      }
    };

    Editor.prototype.addSelectionForBufferRange = function(bufferRange, options) {
      if (options == null) {
        options = {};
      }
      this.markBufferRange(bufferRange, _.defaults(this.getSelectionMarkerAttributes(), options));
      return this.getLastSelection();
    };

    Editor.prototype.setSelectedBufferRange = function(bufferRange, options) {
      return this.setSelectedBufferRanges([bufferRange], options);
    };

    Editor.prototype.setSelectedScreenRange = function(screenRange, options) {
      return this.setSelectedBufferRange(this.bufferRangeForScreenRange(screenRange, options), options);
    };

    Editor.prototype.setSelectedBufferRanges = function(bufferRanges, options) {
      var selection, selections, _i, _len, _ref1;
      if (options == null) {
        options = {};
      }
      if (!bufferRanges.length) {
        throw new Error("Passed an empty array to setSelectedBufferRanges");
      }
      selections = this.getSelections();
      _ref1 = selections.slice(bufferRanges.length);
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        selection.destroy();
      }
      return this.mergeIntersectingSelections(options, (function(_this) {
        return function() {
          var bufferRange, i, _j, _len1, _results;
          _results = [];
          for (i = _j = 0, _len1 = bufferRanges.length; _j < _len1; i = ++_j) {
            bufferRange = bufferRanges[i];
            bufferRange = Range.fromObject(bufferRange);
            if (selections[i]) {
              _results.push(selections[i].setBufferRange(bufferRange, options));
            } else {
              _results.push(_this.addSelectionForBufferRange(bufferRange, options));
            }
          }
          return _results;
        };
      })(this));
    };

    Editor.prototype.removeSelection = function(selection) {
      _.remove(this.selections, selection);
      return this.emit('selection-removed', selection);
    };

    Editor.prototype.clearSelections = function() {
      this.consolidateSelections();
      return this.getSelection().clear();
    };

    Editor.prototype.consolidateSelections = function() {
      var selection, selections, _i, _len, _ref1;
      selections = this.getSelections();
      if (selections.length > 1) {
        _ref1 = selections.slice(0, -1);
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          selection = _ref1[_i];
          selection.destroy();
        }
        return true;
      } else {
        return false;
      }
    };

    Editor.prototype.selectionScreenRangeChanged = function(selection) {
      return this.emit('selection-screen-range-changed', selection);
    };

    Editor.prototype.getSelections = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Array, this.selections, function(){});
    };

    Editor.prototype.getSelection = function(index) {
      if (index == null) {
        index = this.selections.length - 1;
      }
      return this.selections[index];
    };

    Editor.prototype.getLastSelection = function() {
      return _.last(this.selections);
    };

    Editor.prototype.getSelectionsOrderedByBufferPosition = function() {
      return this.getSelections().sort(function(a, b) {
        return a.compare(b);
      });
    };

    Editor.prototype.getLastSelectionInBuffer = function() {
      return _.last(this.getSelectionsOrderedByBufferPosition());
    };

    Editor.prototype.selectionIntersectsBufferRange = function(bufferRange) {
      return _.any(this.getSelections(), function(selection) {
        return selection.intersectsBufferRange(bufferRange);
      });
    };

    Editor.prototype.setCursorScreenPosition = function(position, options) {
      return this.moveCursors(function(cursor) {
        return cursor.setScreenPosition(position, options);
      });
    };

    Editor.prototype.getCursorScreenPosition = function() {
      return this.getCursor().getScreenPosition();
    };

    Editor.prototype.getCursorScreenRow = function() {
      return this.getCursor().getScreenRow();
    };

    Editor.prototype.setCursorBufferPosition = function(position, options) {
      return this.moveCursors(function(cursor) {
        return cursor.setBufferPosition(position, options);
      });
    };

    Editor.prototype.getCursorBufferPosition = function() {
      return this.getCursor().getBufferPosition();
    };

    Editor.prototype.getSelectedScreenRange = function() {
      return this.getLastSelection().getScreenRange();
    };

    Editor.prototype.getSelectedBufferRange = function() {
      return this.getLastSelection().getBufferRange();
    };

    Editor.prototype.getSelectedBufferRanges = function() {
      var selection, _i, _len, _ref1, _results;
      _ref1 = this.getSelectionsOrderedByBufferPosition();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        _results.push(selection.getBufferRange());
      }
      return _results;
    };

    Editor.prototype.getSelectedScreenRanges = function() {
      var selection, _i, _len, _ref1, _results;
      _ref1 = this.getSelectionsOrderedByBufferPosition();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        _results.push(selection.getScreenRange());
      }
      return _results;
    };

    Editor.prototype.getSelectedText = function() {
      return this.getLastSelection().getText();
    };

    Editor.prototype.getTextInBufferRange = function(range) {
      return this.buffer.getTextInRange(range);
    };

    Editor.prototype.setTextInBufferRange = function(range, text) {
      return this.getBuffer().setTextInRange(range, text);
    };

    Editor.prototype.getCurrentParagraphBufferRange = function() {
      return this.getCursor().getCurrentParagraphBufferRange();
    };

    Editor.prototype.getWordUnderCursor = function(options) {
      return this.getTextInBufferRange(this.getCursor().getCurrentWordBufferRange(options));
    };

    Editor.prototype.moveCursorUp = function(lineCount) {
      return this.moveCursors(function(cursor) {
        return cursor.moveUp(lineCount, {
          moveToEndOfSelection: true
        });
      });
    };

    Editor.prototype.moveCursorDown = function(lineCount) {
      return this.moveCursors(function(cursor) {
        return cursor.moveDown(lineCount, {
          moveToEndOfSelection: true
        });
      });
    };

    Editor.prototype.moveCursorLeft = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveLeft({
          moveToEndOfSelection: true
        });
      });
    };

    Editor.prototype.moveCursorRight = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveRight({
          moveToEndOfSelection: true
        });
      });
    };

    Editor.prototype.moveCursorToTop = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToTop();
      });
    };

    Editor.prototype.moveCursorToBottom = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToBottom();
      });
    };

    Editor.prototype.moveCursorToBeginningOfScreenLine = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToBeginningOfScreenLine();
      });
    };

    Editor.prototype.moveCursorToBeginningOfLine = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToBeginningOfLine();
      });
    };

    Editor.prototype.moveCursorToFirstCharacterOfLine = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToFirstCharacterOfLine();
      });
    };

    Editor.prototype.moveCursorToEndOfScreenLine = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToEndOfScreenLine();
      });
    };

    Editor.prototype.moveCursorToEndOfLine = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToEndOfLine();
      });
    };

    Editor.prototype.moveCursorToBeginningOfWord = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToBeginningOfWord();
      });
    };

    Editor.prototype.moveCursorToEndOfWord = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToEndOfWord();
      });
    };

    Editor.prototype.moveCursorToBeginningOfNextWord = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToBeginningOfNextWord();
      });
    };

    Editor.prototype.moveCursorToPreviousWordBoundary = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToPreviousWordBoundary();
      });
    };

    Editor.prototype.moveCursorToNextWordBoundary = function() {
      return this.moveCursors(function(cursor) {
        return cursor.moveToNextWordBoundary();
      });
    };

    Editor.prototype.scrollToCursorPosition = function() {
      return this.getCursor().autoscroll();
    };

    Editor.prototype.pageUp = function() {
      return this.setScrollTop(this.getScrollTop() - this.getHeight());
    };

    Editor.prototype.pageDown = function() {
      return this.setScrollTop(this.getScrollTop() + this.getHeight());
    };

    Editor.prototype.moveCursors = function(fn) {
      this.movingCursors = true;
      return this.batchUpdates((function(_this) {
        return function() {
          var cursor, _i, _len, _ref1;
          _ref1 = _this.getCursors();
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            cursor = _ref1[_i];
            fn(cursor);
          }
          _this.mergeCursors();
          _this.movingCursors = false;
          return _this.emit('cursors-moved');
        };
      })(this));
    };

    Editor.prototype.cursorMoved = function(event) {
      this.emit('cursor-moved', event);
      if (!this.movingCursors) {
        return this.emit('cursors-moved');
      }
    };

    Editor.prototype.selectToScreenPosition = function(position) {
      var lastSelection;
      lastSelection = this.getLastSelection();
      lastSelection.selectToScreenPosition(position);
      return this.mergeIntersectingSelections({
        reversed: lastSelection.isReversed()
      });
    };

    Editor.prototype.selectRight = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectRight();
        };
      })(this));
    };

    Editor.prototype.selectLeft = function() {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.selectLeft();
        };
      })(this));
    };

    Editor.prototype.selectUp = function(rowCount) {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.selectUp(rowCount);
        };
      })(this));
    };

    Editor.prototype.selectDown = function(rowCount) {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectDown(rowCount);
        };
      })(this));
    };

    Editor.prototype.selectToTop = function() {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.selectToTop();
        };
      })(this));
    };

    Editor.prototype.selectAll = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectAll();
        };
      })(this));
    };

    Editor.prototype.selectToBottom = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectToBottom();
        };
      })(this));
    };

    Editor.prototype.selectToBeginningOfLine = function() {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.selectToBeginningOfLine();
        };
      })(this));
    };

    Editor.prototype.selectToFirstCharacterOfLine = function() {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.selectToFirstCharacterOfLine();
        };
      })(this));
    };

    Editor.prototype.selectToEndOfLine = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectToEndOfLine();
        };
      })(this));
    };

    Editor.prototype.selectToPreviousWordBoundary = function() {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.selectToPreviousWordBoundary();
        };
      })(this));
    };

    Editor.prototype.selectToNextWordBoundary = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectToNextWordBoundary();
        };
      })(this));
    };

    Editor.prototype.selectLine = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectLine();
        };
      })(this));
    };

    Editor.prototype.addSelectionBelow = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.addSelectionBelow();
        };
      })(this));
    };

    Editor.prototype.addSelectionAbove = function() {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.addSelectionAbove();
        };
      })(this));
    };

    Editor.prototype.splitSelectionsIntoLines = function() {
      var end, range, row, selection, start, _i, _len, _ref1, _results;
      _ref1 = this.getSelections();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        range = selection.getBufferRange();
        if (range.isSingleLine()) {
          continue;
        }
        selection.destroy();
        start = range.start, end = range.end;
        this.addSelectionForBufferRange([start, [start.row, Infinity]]);
        row = start.row;
        while (++row < end.row) {
          this.addSelectionForBufferRange([[row, 0], [row, Infinity]]);
        }
        _results.push(this.addSelectionForBufferRange([[end.row, 0], [end.row, end.column]]));
      }
      return _results;
    };

    Editor.prototype.transpose = function() {
      return this.mutateSelectedText((function(_this) {
        return function(selection) {
          var text;
          if (selection.isEmpty()) {
            selection.selectRight();
            text = selection.getText();
            selection["delete"]();
            selection.cursor.moveLeft();
            return selection.insertText(text);
          } else {
            return selection.insertText(selection.getText().split('').reverse().join(''));
          }
        };
      })(this));
    };

    Editor.prototype.upperCase = function() {
      return this.replaceSelectedText({
        selectWordIfEmpty: true
      }, (function(_this) {
        return function(text) {
          return text.toUpperCase();
        };
      })(this));
    };

    Editor.prototype.lowerCase = function() {
      return this.replaceSelectedText({
        selectWordIfEmpty: true
      }, (function(_this) {
        return function(text) {
          return text.toLowerCase();
        };
      })(this));
    };

    Editor.prototype.joinLines = function() {
      return this.mutateSelectedText(function(selection) {
        return selection.joinLines();
      });
    };

    Editor.prototype.selectToBeginningOfWord = function() {
      return this.expandSelectionsBackward((function(_this) {
        return function(selection) {
          return selection.selectToBeginningOfWord();
        };
      })(this));
    };

    Editor.prototype.selectToEndOfWord = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectToEndOfWord();
        };
      })(this));
    };

    Editor.prototype.selectToBeginningOfNextWord = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectToBeginningOfNextWord();
        };
      })(this));
    };

    Editor.prototype.selectWord = function() {
      return this.expandSelectionsForward((function(_this) {
        return function(selection) {
          return selection.selectWord();
        };
      })(this));
    };

    Editor.prototype.selectMarker = function(marker) {
      var range;
      if (marker.isValid()) {
        range = marker.getBufferRange();
        this.setSelectedBufferRange(range);
        return range;
      }
    };

    Editor.prototype.mergeCursors = function() {
      var cursor, position, positions, _i, _len, _ref1, _results;
      positions = [];
      _ref1 = this.getCursors();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        cursor = _ref1[_i];
        position = cursor.getBufferPosition().toString();
        if (__indexOf.call(positions, position) >= 0) {
          _results.push(cursor.destroy());
        } else {
          _results.push(positions.push(position));
        }
      }
      return _results;
    };

    Editor.prototype.expandSelectionsForward = function(fn) {
      return this.mergeIntersectingSelections((function(_this) {
        return function() {
          var selection, _i, _len, _ref1, _results;
          _ref1 = _this.getSelections();
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            selection = _ref1[_i];
            _results.push(fn(selection));
          }
          return _results;
        };
      })(this));
    };

    Editor.prototype.expandSelectionsBackward = function(fn) {
      return this.mergeIntersectingSelections({
        reversed: true
      }, (function(_this) {
        return function() {
          var selection, _i, _len, _ref1, _results;
          _ref1 = _this.getSelections();
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            selection = _ref1[_i];
            _results.push(fn(selection));
          }
          return _results;
        };
      })(this));
    };

    Editor.prototype.finalizeSelections = function() {
      var selection, _i, _len, _ref1, _results;
      _ref1 = this.getSelections();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        selection = _ref1[_i];
        _results.push(selection.finalize());
      }
      return _results;
    };

    Editor.prototype.mergeIntersectingSelections = function() {
      var args, fn, options, reducer, result, _ref1;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (_.isFunction(_.last(args))) {
        fn = args.pop();
      }
      options = (_ref1 = args.pop()) != null ? _ref1 : {};
      if (this.suppressSelectionMerging) {
        return typeof fn === "function" ? fn() : void 0;
      }
      if (fn != null) {
        this.suppressSelectionMerging = true;
        result = fn();
        this.suppressSelectionMerging = false;
      }
      reducer = function(disjointSelections, selection) {
        var intersectingSelection;
        intersectingSelection = _.find(disjointSelections, function(s) {
          return s.intersectsWith(selection);
        });
        if (intersectingSelection != null) {
          intersectingSelection.merge(selection, options);
          return disjointSelections;
        } else {
          return disjointSelections.concat([selection]);
        }
      };
      return _.reduce(this.getSelections(), reducer, []);
    };

    Editor.prototype.preserveCursorPositionOnBufferReload = function() {
      var cursorPosition;
      cursorPosition = null;
      this.subscribe(this.buffer, "will-reload", (function(_this) {
        return function() {
          return cursorPosition = _this.getCursorBufferPosition();
        };
      })(this));
      return this.subscribe(this.buffer, "reloaded", (function(_this) {
        return function() {
          if (cursorPosition) {
            _this.setCursorBufferPosition(cursorPosition);
          }
          return cursorPosition = null;
        };
      })(this));
    };

    Editor.prototype.getGrammar = function() {
      return this.displayBuffer.getGrammar();
    };

    Editor.prototype.setGrammar = function(grammar) {
      return this.displayBuffer.setGrammar(grammar);
    };

    Editor.prototype.reloadGrammar = function() {
      return this.displayBuffer.reloadGrammar();
    };

    Editor.prototype.shouldAutoIndent = function() {
      return atom.config.get("editor.autoIndent");
    };

    Editor.prototype.transact = function(fn) {
      return this.batchUpdates((function(_this) {
        return function() {
          return _this.buffer.transact(fn);
        };
      })(this));
    };

    Editor.prototype.beginTransaction = function() {
      return this.buffer.beginTransaction();
    };

    Editor.prototype.commitTransaction = function() {
      return this.buffer.commitTransaction();
    };

    Editor.prototype.abortTransaction = function() {
      return this.buffer.abortTransaction();
    };

    Editor.prototype.batchUpdates = function(fn) {
      var result;
      this.emit('batched-updates-started');
      result = fn();
      this.emit('batched-updates-ended');
      return result;
    };

    Editor.prototype.inspect = function() {
      return "<Editor " + this.id + ">";
    };

    Editor.prototype.logScreenLines = function(start, end) {
      return this.displayBuffer.logLines(start, end);
    };

    Editor.prototype.handleGrammarChange = function() {
      this.unfoldAll();
      return this.emit('grammar-changed');
    };

    Editor.prototype.handleMarkerCreated = function(marker) {
      if (marker.matchesAttributes(this.getSelectionMarkerAttributes())) {
        return this.addSelection(marker);
      }
    };

    Editor.prototype.getSelectionMarkerAttributes = function() {
      return {
        type: 'selection',
        editorId: this.id,
        invalidate: 'never'
      };
    };

    Editor.prototype.getVerticalScrollMargin = function() {
      return this.displayBuffer.getVerticalScrollMargin();
    };

    Editor.prototype.setVerticalScrollMargin = function(verticalScrollMargin) {
      return this.displayBuffer.setVerticalScrollMargin(verticalScrollMargin);
    };

    Editor.prototype.getHorizontalScrollMargin = function() {
      return this.displayBuffer.getHorizontalScrollMargin();
    };

    Editor.prototype.setHorizontalScrollMargin = function(horizontalScrollMargin) {
      return this.displayBuffer.setHorizontalScrollMargin(horizontalScrollMargin);
    };

    Editor.prototype.getLineHeight = function() {
      return this.displayBuffer.getLineHeight();
    };

    Editor.prototype.setLineHeight = function(lineHeight) {
      return this.displayBuffer.setLineHeight(lineHeight);
    };

    Editor.prototype.getScopedCharWidth = function(scopeNames, char) {
      return this.displayBuffer.getScopedCharWidth(scopeNames, char);
    };

    Editor.prototype.setScopedCharWidth = function(scopeNames, char, width) {
      return this.displayBuffer.setScopedCharWidth(scopeNames, char, width);
    };

    Editor.prototype.getScopedCharWidths = function(scopeNames) {
      return this.displayBuffer.getScopedCharWidths(scopeNames);
    };

    Editor.prototype.clearScopedCharWidths = function() {
      return this.displayBuffer.clearScopedCharWidths();
    };

    Editor.prototype.getDefaultCharWidth = function() {
      return this.displayBuffer.getDefaultCharWidth();
    };

    Editor.prototype.setDefaultCharWidth = function(defaultCharWidth) {
      return this.displayBuffer.setDefaultCharWidth(defaultCharWidth);
    };

    Editor.prototype.setHeight = function(height) {
      return this.displayBuffer.setHeight(height);
    };

    Editor.prototype.getHeight = function() {
      return this.displayBuffer.getHeight();
    };

    Editor.prototype.setWidth = function(width) {
      return this.displayBuffer.setWidth(width);
    };

    Editor.prototype.getWidth = function() {
      return this.displayBuffer.getWidth();
    };

    Editor.prototype.getScrollTop = function() {
      return this.displayBuffer.getScrollTop();
    };

    Editor.prototype.setScrollTop = function(scrollTop) {
      return this.displayBuffer.setScrollTop(scrollTop);
    };

    Editor.prototype.getScrollBottom = function() {
      return this.displayBuffer.getScrollBottom();
    };

    Editor.prototype.setScrollBottom = function(scrollBottom) {
      return this.displayBuffer.setScrollBottom(scrollBottom);
    };

    Editor.prototype.getScrollLeft = function() {
      return this.displayBuffer.getScrollLeft();
    };

    Editor.prototype.setScrollLeft = function(scrollLeft) {
      return this.displayBuffer.setScrollLeft(scrollLeft);
    };

    Editor.prototype.getScrollRight = function() {
      return this.displayBuffer.getScrollRight();
    };

    Editor.prototype.setScrollRight = function(scrollRight) {
      return this.displayBuffer.setScrollRight(scrollRight);
    };

    Editor.prototype.getScrollHeight = function() {
      return this.displayBuffer.getScrollHeight();
    };

    Editor.prototype.getScrollWidth = function(scrollWidth) {
      return this.displayBuffer.getScrollWidth(scrollWidth);
    };

    Editor.prototype.getVisibleRowRange = function() {
      return this.displayBuffer.getVisibleRowRange();
    };

    Editor.prototype.intersectsVisibleRowRange = function(startRow, endRow) {
      return this.displayBuffer.intersectsVisibleRowRange(startRow, endRow);
    };

    Editor.prototype.selectionIntersectsVisibleRowRange = function(selection) {
      return this.displayBuffer.selectionIntersectsVisibleRowRange(selection);
    };

    Editor.prototype.pixelPositionForScreenPosition = function(screenPosition) {
      return this.displayBuffer.pixelPositionForScreenPosition(screenPosition);
    };

    Editor.prototype.pixelPositionForBufferPosition = function(bufferPosition) {
      return this.displayBuffer.pixelPositionForBufferPosition(bufferPosition);
    };

    Editor.prototype.screenPositionForPixelPosition = function(pixelPosition) {
      return this.displayBuffer.screenPositionForPixelPosition(pixelPosition);
    };

    Editor.prototype.pixelRectForScreenRange = function(screenRange) {
      return this.displayBuffer.pixelRectForScreenRange(screenRange);
    };

    Editor.prototype.scrollToScreenRange = function(screenRange) {
      return this.displayBuffer.scrollToScreenRange(screenRange);
    };

    Editor.prototype.scrollToScreenPosition = function(screenPosition) {
      return this.displayBuffer.scrollToScreenPosition(screenPosition);
    };

    Editor.prototype.scrollToBufferPosition = function(bufferPosition) {
      return this.displayBuffer.scrollToBufferPosition(bufferPosition);
    };

    Editor.prototype.joinLine = function() {
      deprecate("Use Editor::joinLines() instead");
      return this.joinLines();
    };

    return Editor;

  })(Model);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwL3NwZWMvZml4dHVyZXMvbGFyZ2UtZmlsZS5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEscUpBQUE7SUFBQTs7Ozt5SkFBQTs7QUFBQSxFQUFBLENBQUEsR0FBSSxPQUFBLENBQVEsaUJBQVIsQ0FBSixDQUFBOztBQUFBLEVBQ0EsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSLENBRFAsQ0FBQTs7QUFBQSxFQUVBLFlBQUEsR0FBZSxPQUFBLENBQVEsY0FBUixDQUZmLENBQUE7O0FBQUEsRUFHQSxTQUFBLEdBQVksT0FBQSxDQUFRLFVBQVIsQ0FIWixDQUFBOztBQUFBLEVBSUMsWUFBYSxPQUFBLENBQVEsTUFBUixFQUFiLFNBSkQsQ0FBQTs7QUFBQSxFQUtDLFFBQVMsT0FBQSxDQUFRLFVBQVIsRUFBVCxLQUxELENBQUE7O0FBQUEsRUFNQSxPQUFpQixPQUFBLENBQVEsYUFBUixDQUFqQixFQUFDLGFBQUEsS0FBRCxFQUFRLGFBQUEsS0FOUixDQUFBOztBQUFBLEVBT0EsWUFBQSxHQUFlLE9BQUEsQ0FBUSxpQkFBUixDQVBmLENBQUE7O0FBQUEsRUFRQSxhQUFBLEdBQWdCLE9BQUEsQ0FBUSxrQkFBUixDQVJoQixDQUFBOztBQUFBLEVBU0EsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSLENBVFQsQ0FBQTs7QUFBQSxFQVdBLFNBQUEsR0FBWSxPQUFBLENBQVEsYUFBUixDQVhaLENBQUE7O0FBQUEsRUFZQSxxQkFBQSxHQUF3QixPQUFBLENBQVEsWUFBUixDQUFxQixDQUFDLGFBWjlDLENBQUE7O0FBQUEsRUFxSUEsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUNKLDZCQUFBLENBQUE7O0FBQUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixNQUF6QixDQUFBLENBQUE7O0FBQUEsSUFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQW5CLENBQXVCLE1BQXZCLENBREEsQ0FBQTs7QUFBQSxJQUVBLFNBQVMsQ0FBQyxXQUFWLENBQXNCLE1BQXRCLENBRkEsQ0FBQTs7QUFBQSxxQkFJQSxhQUFBLEdBQWUsS0FKZixDQUFBOztBQUFBLHFCQUtBLDRCQUFBLEdBQThCLEtBTDlCLENBQUE7O0FBQUEscUJBTUEsY0FBQSxHQUFnQixLQU5oQixDQUFBOztBQUFBLHFCQU9BLE1BQUEsR0FBUSxJQVBSLENBQUE7O0FBQUEscUJBUUEsWUFBQSxHQUFjLElBUmQsQ0FBQTs7QUFBQSxxQkFTQSxPQUFBLEdBQVMsSUFUVCxDQUFBOztBQUFBLHFCQVVBLFVBQUEsR0FBWSxJQVZaLENBQUE7O0FBQUEscUJBV0Esd0JBQUEsR0FBMEIsS0FYMUIsQ0FBQTs7QUFBQSxJQWFBLE1BQUMsQ0FBQSxnQkFBRCxDQUFrQiw2QkFBbEIsRUFBaUQscUJBQWpELEVBQXdFLHNCQUF4RSxFQUNFLGdDQURGLEVBQ29DLCtCQURwQyxFQUNxRSxpQ0FEckUsRUFFRTtBQUFBLE1BQUEsVUFBQSxFQUFZLGNBQVo7S0FGRixDQWJBLENBQUE7O0FBQUEsSUFpQkEsTUFBQyxDQUFBLG1CQUFELENBQXFCLGFBQXJCLEVBQW9DLG1CQUFwQyxFQUF5RCxTQUF6RCxFQUFvRSxRQUFwRSxFQUNFLFlBREYsRUFDZ0IsYUFEaEIsRUFDK0Isc0JBRC9CLEVBQ3VEO0FBQUEsTUFBQSxVQUFBLEVBQVksZUFBWjtLQUR2RCxDQWpCQSxDQUFBOztBQW9CYSxJQUFBLGdCQUFDLElBQUQsR0FBQTtBQUNYLFVBQUEsb0pBQUE7QUFBQSxNQURhLElBQUMsQ0FBQSxnQkFBQSxVQUFVLG1CQUFBLGFBQWEscUJBQUEsZUFBZSxpQkFBQSxXQUFXLGdCQUFBLFVBQVUsSUFBQyxDQUFBLHFCQUFBLGVBQWUsY0FBQSxRQUFRLHNCQUFBLGdCQUFnQiw4QkFBQSxzQkFDakgsQ0FBQTtBQUFBLHVFQUFBLENBQUE7QUFBQSxNQUFBLHlDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsT0FBRCxHQUFXLEVBRlgsQ0FBQTtBQUFBLE1BR0EsSUFBQyxDQUFBLFVBQUQsR0FBYyxFQUhkLENBQUE7O1FBS0EsSUFBQyxDQUFBLGdCQUFxQixJQUFBLGFBQUEsQ0FBYztBQUFBLFVBQUMsUUFBQSxNQUFEO0FBQUEsVUFBUyxXQUFBLFNBQVQ7QUFBQSxVQUFvQixVQUFBLFFBQXBCO1NBQWQ7T0FMdEI7QUFBQSxNQU1BLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLGFBQWEsQ0FBQyxNQU56QixDQUFBO0FBQUEsTUFPQSxJQUFDLENBQUEsUUFBRCxtS0FBc0YsSUFQdEYsQ0FBQTtBQVNBO0FBQUEsV0FBQSw0Q0FBQTsyQkFBQTtBQUNFLFFBQUEsTUFBTSxDQUFDLGFBQVAsQ0FBcUI7QUFBQSxVQUFBLGFBQUEsRUFBZSxJQUFmO1NBQXJCLENBQUEsQ0FBQTtBQUFBLFFBQ0EsSUFBQyxDQUFBLFlBQUQsQ0FBYyxNQUFkLENBREEsQ0FERjtBQUFBLE9BVEE7QUFBQSxNQWFBLElBQUMsQ0FBQSxpQkFBRCxDQUFBLENBYkEsQ0FBQTtBQUFBLE1BY0EsSUFBQyxDQUFBLHdCQUFELENBQUEsQ0FkQSxDQUFBO0FBZ0JBLE1BQUEsSUFBRyxJQUFDLENBQUEsVUFBRCxDQUFBLENBQWEsQ0FBQyxNQUFkLEtBQXdCLENBQXhCLElBQThCLENBQUEsc0JBQWpDO0FBQ0UsUUFBQSxXQUFBLEdBQWMsSUFBSSxDQUFDLEdBQUwsQ0FBUyxRQUFBLENBQVMsV0FBVCxDQUFBLElBQXlCLENBQWxDLEVBQXFDLENBQXJDLENBQWQsQ0FBQTtBQUFBLFFBQ0EsYUFBQSxHQUFnQixJQUFJLENBQUMsR0FBTCxDQUFTLFFBQUEsQ0FBUyxhQUFULENBQUEsSUFBMkIsQ0FBcEMsRUFBdUMsQ0FBdkMsQ0FEaEIsQ0FBQTtBQUFBLFFBRUEsSUFBQyxDQUFBLHlCQUFELENBQTJCLENBQUMsV0FBRCxFQUFjLGFBQWQsQ0FBM0IsQ0FGQSxDQURGO09BaEJBO0FBQUEsTUFxQkEsSUFBQyxDQUFBLFlBQUQsR0FBb0IsSUFBQSxZQUFBLENBQWEsSUFBYixDQXJCcEIsQ0FBQTtBQUFBLE1BdUJBLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLFVBQVosRUFBd0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsU0FBRCxHQUFBO2lCQUFlLEtBQUMsQ0FBQSxJQUFELENBQU0sb0JBQU4sRUFBNEIsU0FBNUIsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhCLENBdkJBLENBQUE7QUFBQSxNQXdCQSxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxXQUFaLEVBQXlCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLFVBQUQsR0FBQTtpQkFBZ0IsS0FBQyxDQUFBLElBQUQsQ0FBTSxxQkFBTixFQUE2QixVQUE3QixFQUFoQjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCLENBeEJBLENBQUE7QUEwQkEsTUFBQSxJQUFxQyxjQUFyQzs7ZUFBYyxDQUFFLFdBQWhCLENBQTRCLElBQTVCO1NBQUE7T0EzQlc7SUFBQSxDQXBCYjs7QUFBQSxxQkFpREEsZUFBQSxHQUFpQixTQUFBLEdBQUE7YUFDZjtBQUFBLFFBQUEsRUFBQSxFQUFJLElBQUMsQ0FBQSxFQUFMO0FBQUEsUUFDQSxRQUFBLEVBQVUsSUFBQyxDQUFBLFFBRFg7QUFBQSxRQUVBLFNBQUEsRUFBVyxJQUFDLENBQUEsU0FGWjtBQUFBLFFBR0EsVUFBQSxFQUFZLElBQUMsQ0FBQSxVQUhiO0FBQUEsUUFJQSxhQUFBLEVBQWUsSUFBQyxDQUFBLGFBQWEsQ0FBQyxTQUFmLENBQUEsQ0FKZjtRQURlO0lBQUEsQ0FqRGpCLENBQUE7O0FBQUEscUJBd0RBLGlCQUFBLEdBQW1CLFNBQUMsTUFBRCxHQUFBO0FBQ2pCLE1BQUEsTUFBTSxDQUFDLGFBQVAsR0FBdUIsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsTUFBTSxDQUFDLGFBQWpDLENBQXZCLENBQUE7QUFBQSxNQUNBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLElBRHhCLENBQUE7YUFFQSxPQUhpQjtJQUFBLENBeERuQixDQUFBOztBQUFBLHFCQTZEQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7QUFDakIsTUFBQSxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsQ0FBQSxDQUFBLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLE1BQVosRUFBb0IsY0FBcEIsRUFBb0MsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUNsQyxVQUFBLElBQU8sOEJBQVA7QUFDRSxZQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBYixDQUFxQixJQUFJLENBQUMsT0FBTCxDQUFhLEtBQUMsQ0FBQSxPQUFELENBQUEsQ0FBYixDQUFyQixDQUFBLENBREY7V0FBQTtBQUFBLFVBRUEsS0FBQyxDQUFBLElBQUQsQ0FBTSxlQUFOLENBRkEsQ0FBQTtpQkFHQSxLQUFDLENBQUEsSUFBRCxDQUFNLGNBQU4sRUFKa0M7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQyxDQURBLENBQUE7QUFBQSxNQU1BLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLE1BQVosRUFBb0IsbUJBQXBCLEVBQXlDLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQUcsS0FBQyxDQUFBLElBQUQsQ0FBTSxtQkFBTixFQUFIO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBekMsQ0FOQSxDQUFBO0FBQUEsTUFPQSxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxNQUFaLEVBQW9CLHFCQUFwQixFQUEyQyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQSxHQUFBO2lCQUFHLEtBQUMsQ0FBQSxJQUFELENBQU0scUJBQU4sRUFBSDtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTNDLENBUEEsQ0FBQTtBQUFBLE1BUUEsSUFBQyxDQUFBLFNBQUQsQ0FBVyxJQUFDLENBQUEsTUFBWixFQUFvQix5QkFBcEIsRUFBK0MsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFBRyxLQUFDLENBQUEsSUFBRCxDQUFNLHlCQUFOLEVBQUg7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEvQyxDQVJBLENBQUE7QUFBQSxNQVNBLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLE1BQVosRUFBb0IsV0FBcEIsRUFBaUMsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFBRyxLQUFDLENBQUEsT0FBRCxDQUFBLEVBQUg7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFqQyxDQVRBLENBQUE7YUFVQSxJQUFDLENBQUEsb0NBQUQsQ0FBQSxFQVhpQjtJQUFBLENBN0RuQixDQUFBOztBQUFBLHFCQTBFQSx3QkFBQSxHQUEwQixTQUFBLEdBQUE7QUFDeEIsTUFBQSxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxhQUFaLEVBQTJCLGdCQUEzQixFQUE2QyxJQUFDLENBQUEsbUJBQTlDLENBQUEsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLFNBQUQsQ0FBVyxJQUFDLENBQUEsYUFBWixFQUEyQixTQUEzQixFQUFzQyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxDQUFELEdBQUE7aUJBQU8sS0FBQyxDQUFBLElBQUQsQ0FBTSxzQkFBTixFQUE4QixDQUE5QixFQUFQO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBdEMsQ0FEQSxDQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxhQUFaLEVBQTJCLGlCQUEzQixFQUE4QyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQSxHQUFBO2lCQUFHLEtBQUMsQ0FBQSwyQkFBRCxDQUFBLEVBQUg7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE5QyxDQUZBLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLGFBQVosRUFBMkIsaUJBQTNCLEVBQThDLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQUcsS0FBQyxDQUFBLG1CQUFELENBQUEsRUFBSDtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTlDLENBSEEsQ0FBQTthQUlBLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLGFBQVosRUFBMkIsbUJBQTNCLEVBQWdELENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7QUFBYSxjQUFBLElBQUE7QUFBQSxVQUFaLDhEQUFZLENBQUE7aUJBQUEsS0FBQyxDQUFBLElBQUQsY0FBTSxDQUFBLG1CQUFxQixTQUFBLGFBQUEsSUFBQSxDQUFBLENBQTNCLEVBQWI7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoRCxFQUx3QjtJQUFBLENBMUUxQixDQUFBOztBQUFBLHFCQWlGQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osTUFBQSxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixxQkFBaEIsQ0FBSDtlQUNFLE9BQUEsQ0FBUSxxQkFBUixFQURGO09BQUEsTUFBQTtlQUdFLE9BQUEsQ0FBUSxlQUFSLEVBSEY7T0FEWTtJQUFBLENBakZkLENBQUE7O0FBQUEscUJBdUZBLFNBQUEsR0FBVyxTQUFBLEdBQUE7QUFDVCxVQUFBLDBCQUFBO0FBQUEsTUFBQSxJQUFDLENBQUEsV0FBRCxDQUFBLENBQUEsQ0FBQTtBQUNBO0FBQUEsV0FBQSw0Q0FBQTs4QkFBQTtBQUFBLFFBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBQSxDQUFBLENBQUE7QUFBQSxPQURBO0FBQUEsTUFFQSxJQUFDLENBQUEsTUFBTSxDQUFDLE9BQVIsQ0FBQSxDQUZBLENBQUE7QUFBQSxNQUdBLElBQUMsQ0FBQSxhQUFhLENBQUMsT0FBZixDQUFBLENBSEEsQ0FBQTthQUlBLElBQUMsQ0FBQSxZQUFZLENBQUMsT0FBZCxDQUFBLEVBTFM7SUFBQSxDQXZGWCxDQUFBOztBQUFBLHFCQStGQSxJQUFBLEdBQU0sU0FBQSxHQUFBO0FBQ0osVUFBQSxzRUFBQTtBQUFBLE1BQUEsU0FBQSxHQUFZLElBQUMsQ0FBQSxZQUFELENBQUEsQ0FBWixDQUFBO0FBQUEsTUFDQSxhQUFBLEdBQWdCLElBQUMsQ0FBQSxhQUFhLENBQUMsSUFBZixDQUFBLENBRGhCLENBQUE7QUFBQSxNQUVBLFFBQUEsR0FBVyxJQUFDLENBQUEsV0FBRCxDQUFBLENBRlgsQ0FBQTtBQUFBLE1BR0EsU0FBQSxHQUFnQixJQUFBLE1BQUEsQ0FBTztBQUFBLFFBQUUsUUFBRCxJQUFDLENBQUEsTUFBRjtBQUFBLFFBQVUsZUFBQSxhQUFWO0FBQUEsUUFBeUIsV0FBQSxTQUF6QjtBQUFBLFFBQW9DLFVBQUEsUUFBcEM7QUFBQSxRQUE4QyxzQkFBQSxFQUF3QixJQUF0RTtBQUFBLFFBQTRFLGNBQUEsRUFBZ0IsSUFBNUY7T0FBUCxDQUhoQixDQUFBO0FBSUE7OztBQUFBLFdBQUEsNENBQUE7MkJBQUE7QUFDRSxRQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVk7QUFBQSxVQUFBLFFBQUEsRUFBVSxTQUFTLENBQUMsRUFBcEI7QUFBQSxVQUF3QixhQUFBLEVBQWUsSUFBdkM7U0FBWixDQUFBLENBREY7QUFBQSxPQUpBO2FBTUEsVUFQSTtJQUFBLENBL0ZOLENBQUE7O0FBQUEscUJBK0dBLFFBQUEsR0FBVSxTQUFBLEdBQUE7QUFDUixVQUFBLFdBQUE7QUFBQSxNQUFBLElBQUcsV0FBQSxHQUFjLElBQUMsQ0FBQSxPQUFELENBQUEsQ0FBakI7ZUFDRSxJQUFJLENBQUMsUUFBTCxDQUFjLFdBQWQsRUFERjtPQUFBLE1BQUE7ZUFHRSxXQUhGO09BRFE7SUFBQSxDQS9HVixDQUFBOztBQUFBLHFCQTRIQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osVUFBQSxnQ0FBQTtBQUFBLE1BQUEsSUFBRyxXQUFBLEdBQWMsSUFBQyxDQUFBLE9BQUQsQ0FBQSxDQUFqQjtBQUNFLFFBQUEsUUFBQSxHQUFXLElBQUksQ0FBQyxRQUFMLENBQWMsV0FBZCxDQUFYLENBQUE7QUFBQSxRQUNBLFNBQUEsR0FBWSxJQUFJLENBQUMsUUFBTCxDQUFjLElBQUksQ0FBQyxPQUFMLENBQWEsV0FBYixDQUFkLENBRFosQ0FBQTtlQUVBLEVBQUEsR0FBRyxRQUFILEdBQVksS0FBWixHQUFpQixVQUhuQjtPQUFBLE1BQUE7ZUFLRSxXQUxGO09BRFk7SUFBQSxDQTVIZCxDQUFBOztBQUFBLHFCQXFJQSxVQUFBLEdBQVksU0FBQyxPQUFELEdBQUE7YUFBYSxJQUFDLENBQUEsYUFBYSxDQUFDLFVBQWYsQ0FBMEIsT0FBMUIsRUFBYjtJQUFBLENBcklaLENBQUE7O0FBQUEscUJBNElBLHFCQUFBLEdBQXVCLFNBQUMsa0JBQUQsR0FBQTthQUNyQixJQUFDLENBQUEsYUFBYSxDQUFDLHFCQUFmLENBQXFDLGtCQUFyQyxFQURxQjtJQUFBLENBNUl2QixDQUFBOztBQUFBLHFCQWdKQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsYUFBYSxDQUFDLGlCQUFmLENBQUEsRUFBSDtJQUFBLENBaEpuQixDQUFBOztBQUFBLHFCQW9KQSxXQUFBLEdBQWEsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLFNBQUo7SUFBQSxDQXBKYixDQUFBOztBQUFBLHFCQXlKQSxXQUFBLEdBQWEsU0FBRSxRQUFGLEdBQUE7QUFBZSxNQUFkLElBQUMsQ0FBQSxXQUFBLFFBQWEsQ0FBQTthQUFBLElBQUMsQ0FBQSxTQUFoQjtJQUFBLENBekpiLENBQUE7O0FBQUEscUJBNEpBLGNBQUEsR0FBZ0IsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLFdBQUQsQ0FBYSxDQUFBLElBQUssQ0FBQSxXQUFELENBQUEsQ0FBakIsRUFBSDtJQUFBLENBNUpoQixDQUFBOztBQUFBLHFCQStKQSxXQUFBLEdBQWEsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLGFBQWEsQ0FBQyxXQUFmLENBQUEsRUFBSDtJQUFBLENBL0piLENBQUE7O0FBQUEscUJBb0tBLFdBQUEsR0FBYSxTQUFDLFFBQUQsR0FBQTthQUFjLElBQUMsQ0FBQSxhQUFhLENBQUMsV0FBZixDQUEyQixRQUEzQixFQUFkO0lBQUEsQ0FwS2IsQ0FBQTs7QUFBQSxxQkF1S0EsY0FBQSxHQUFnQixTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsV0FBRCxDQUFhLENBQUEsSUFBSyxDQUFBLFdBQUQsQ0FBQSxDQUFqQixFQUFIO0lBQUEsQ0F2S2hCLENBQUE7O0FBQUEscUJBK0tBLFVBQUEsR0FBWSxTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsaUJBQUQsQ0FBbUIsQ0FBbkIsRUFBSDtJQUFBLENBL0taLENBQUE7O0FBQUEscUJBb0xBLFlBQUEsR0FBYyxTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsYUFBYSxDQUFDLFlBQWYsQ0FBQSxFQUFIO0lBQUEsQ0FwTGQsQ0FBQTs7QUFBQSxxQkF1TEEsWUFBQSxHQUFjLFNBQUMsU0FBRCxHQUFBO2FBQWUsSUFBQyxDQUFBLGFBQWEsQ0FBQyxZQUFmLENBQTRCLFNBQTVCLEVBQWY7SUFBQSxDQXZMZCxDQUFBOztBQUFBLHFCQXdNQSxrQkFBQSxHQUFvQixTQUFDLGNBQUQsR0FBQTthQUFvQixJQUFDLENBQUEsTUFBTSxDQUFDLFlBQVIsQ0FBcUIsY0FBckIsRUFBcEI7SUFBQSxDQXhNcEIsQ0FBQTs7QUFBQSxxQkFnTkEsZUFBQSxHQUFpQixTQUFDLEtBQUQsR0FBQTthQUFXLElBQUMsQ0FBQSxNQUFNLENBQUMsU0FBUixDQUFrQixLQUFsQixFQUFYO0lBQUEsQ0FoTmpCLENBQUE7O0FBQUEscUJBNE5BLHVCQUFBLEdBQXlCLFNBQUMsU0FBRCxHQUFBO2FBQ3ZCLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixJQUFDLENBQUEsZ0JBQUQsQ0FBa0IsU0FBbEIsQ0FBcEIsRUFEdUI7SUFBQSxDQTVOekIsQ0FBQTs7QUFBQSxxQkEyT0EsMEJBQUEsR0FBNEIsU0FBQyxTQUFELEVBQVksUUFBWixFQUFzQixJQUF0QixHQUFBO0FBQzFCLFVBQUEscURBQUE7QUFBQSxNQURpRCw0Q0FBRCxPQUE0QixJQUEzQix5QkFDakQsQ0FBQTtBQUFBLE1BQUEsSUFBRyx5QkFBSDtBQUNFLFFBQUEsU0FBQSxHQUFZLENBQVosQ0FERjtPQUFBLE1BQUE7QUFHRSxRQUFBLFNBQUEsR0FBWSxJQUFDLENBQUEsZ0JBQUQsQ0FBa0IsU0FBbEIsQ0FBNEIsQ0FBQyxLQUE3QixDQUFtQyxNQUFuQyxDQUEyQyxDQUFBLENBQUEsQ0FBRSxDQUFDLE1BQTFELENBSEY7T0FBQTtBQUFBLE1BSUEsZUFBQSxHQUFrQixJQUFDLENBQUEsaUJBQUQsQ0FBbUIsUUFBbkIsQ0FKbEIsQ0FBQTthQUtBLElBQUMsQ0FBQSxNQUFNLENBQUMsY0FBUixDQUF1QixDQUFDLENBQUMsU0FBRCxFQUFZLENBQVosQ0FBRCxFQUFpQixDQUFDLFNBQUQsRUFBWSxTQUFaLENBQWpCLENBQXZCLEVBQWlFLGVBQWpFLEVBTjBCO0lBQUEsQ0EzTzVCLENBQUE7O0FBQUEscUJBNlBBLGtCQUFBLEdBQW9CLFNBQUMsSUFBRCxHQUFBO2FBQ2xCLElBQUMsQ0FBQSxhQUFhLENBQUMsa0JBQWYsQ0FBa0MsSUFBbEMsRUFEa0I7SUFBQSxDQTdQcEIsQ0FBQTs7QUFBQSxxQkFpUUEsaUJBQUEsR0FBbUIsU0FBQyxNQUFELEdBQUE7QUFDakIsTUFBQSxJQUFHLElBQUMsQ0FBQSxXQUFELENBQUEsQ0FBSDtlQUNFLENBQUMsQ0FBQyxjQUFGLENBQWlCLEdBQWpCLEVBQXNCLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBQSxHQUFTLElBQUMsQ0FBQSxZQUFELENBQUEsQ0FBcEIsQ0FBdEIsRUFERjtPQUFBLE1BQUE7ZUFHRSxDQUFDLENBQUMsY0FBRixDQUFpQixJQUFqQixFQUF1QixJQUFJLENBQUMsS0FBTCxDQUFXLE1BQVgsQ0FBdkIsRUFIRjtPQURpQjtJQUFBLENBalFuQixDQUFBOztBQUFBLHFCQTBRQSxJQUFBLEdBQU0sU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQUEsRUFBSDtJQUFBLENBMVFOLENBQUE7O0FBQUEscUJBaVJBLE1BQUEsR0FBUSxTQUFDLFFBQUQsR0FBQTthQUFjLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixDQUFlLFFBQWYsRUFBZDtJQUFBLENBalJSLENBQUE7O0FBQUEscUJBbVJBLFlBQUEsR0FBYyxTQUFBLEdBQUE7QUFDWixVQUFBLGVBQUE7QUFBQSxNQUFBLElBQUcsUUFBQSxHQUFXLElBQUMsQ0FBQSxPQUFELENBQUEsQ0FBZDsrREFDd0IsQ0FBRSxZQUF4QixDQUFxQyxRQUFyQyxXQURGO09BRFk7SUFBQSxDQW5SZCxDQUFBOztBQUFBLHFCQXdSQSxtQkFBQSxHQUFxQixTQUFBLEdBQUE7QUFDbkIsVUFBQSxRQUFBO0FBQUEsTUFBQSxJQUFHLFFBQUEsR0FBVyxJQUFDLENBQUEsT0FBRCxDQUFBLENBQWQ7ZUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQWYsQ0FBcUIsUUFBckIsRUFERjtPQURtQjtJQUFBLENBeFJyQixDQUFBOztBQUFBLHFCQTZSQSxPQUFBLEdBQVMsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFSLENBQUEsRUFBSDtJQUFBLENBN1JULENBQUE7O0FBQUEscUJBZ1NBLE9BQUEsR0FBUyxTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE9BQVIsQ0FBQSxFQUFIO0lBQUEsQ0FoU1QsQ0FBQTs7QUFBQSxxQkFtU0EsT0FBQSxHQUFTLFNBQUMsSUFBRCxHQUFBO2FBQVUsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFSLENBQWdCLElBQWhCLEVBQVY7SUFBQSxDQW5TVCxDQUFBOztBQUFBLHFCQXdTQSxjQUFBLEdBQWdCLFNBQUMsS0FBRCxHQUFBO2FBQVcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxjQUFSLENBQXVCLEtBQXZCLEVBQVg7SUFBQSxDQXhTaEIsQ0FBQTs7QUFBQSxxQkEyU0EsWUFBQSxHQUFjLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsWUFBUixDQUFBLEVBQUg7SUFBQSxDQTNTZCxDQUFBOztBQUFBLHFCQThTQSxTQUFBLEdBQVcsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLE9BQUo7SUFBQSxDQTlTWCxDQUFBOztBQUFBLHFCQWlUQSxNQUFBLEdBQVEsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFSLENBQUEsRUFBSDtJQUFBLENBalRSLENBQUE7O0FBQUEscUJBb1RBLGdCQUFBLEdBQWtCLFNBQUMsU0FBRCxHQUFBO2FBQWUsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFSLENBQW1CLFNBQW5CLEVBQWY7SUFBQSxDQXBUbEIsQ0FBQTs7QUFBQSxxQkF1VEEsb0JBQUEsR0FBc0IsU0FBQyxTQUFELEdBQUE7QUFDcEIsVUFBQSxhQUFBO0FBQUEsTUFBQSxJQUFHLEtBQUEsR0FBUSxJQUFDLENBQUEsZ0JBQUQsQ0FBa0IsU0FBbEIsQ0FBNEIsQ0FBQyxLQUE3QixDQUFtQyxJQUFuQyxDQUFYO0FBQ0UsUUFBQSxNQUFBLEdBQVMsSUFBQyxDQUFBLHNCQUFELENBQXdCLENBQUMsU0FBRCxFQUFZLEtBQUssQ0FBQyxLQUFsQixDQUF4QixDQUFpRCxDQUFDLE1BQTNELENBQUE7ZUFDSSxJQUFBLHFCQUFBLENBQXNCLFdBQXRCLENBQWtDLENBQUMsT0FBbkMsQ0FBMkMsTUFBM0MsRUFGTjtPQURvQjtJQUFBLENBdlR0QixDQUFBOztBQUFBLHFCQTZUQSxxQkFBQSxHQUF1QixTQUFDLFNBQUQsR0FBQTthQUFlLElBQUMsQ0FBQSxNQUFNLENBQUMsZUFBUixDQUF3QixTQUF4QixFQUFmO0lBQUEsQ0E3VHZCLENBQUE7O0FBQUEscUJBZ1VBLG9CQUFBLEdBQXNCLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsY0FBUixDQUFBLEVBQUg7SUFBQSxDQWhVdEIsQ0FBQTs7QUFBQSxxQkFvVUEsZ0JBQUEsR0FBa0IsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFSLENBQUEsRUFBSDtJQUFBLENBcFVsQixDQUFBOztBQUFBLHFCQTRVQSx1QkFBQSxHQUF5QixTQUFDLEdBQUQsRUFBTSxJQUFOLEdBQUE7QUFBOEIsVUFBQSxjQUFBO0FBQUEsTUFBdkIsaUNBQUQsT0FBaUIsSUFBaEIsY0FBdUIsQ0FBQTthQUFBLElBQUMsQ0FBQSxNQUFNLENBQUMsV0FBUixDQUFvQixHQUFwQixFQUF5QixjQUF6QixFQUE5QjtJQUFBLENBNVV6QixDQUFBOztBQUFBLHFCQWtWQSxnQkFBQSxHQUFrQixTQUFDLEdBQUQsR0FBQTthQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsVUFBUixDQUFtQixHQUFuQixFQUFUO0lBQUEsQ0FsVmxCLENBQUE7O0FBQUEscUJBd1ZBLHNCQUFBLEdBQXdCLFNBQUMsR0FBRCxHQUFBO2FBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxnQkFBUixDQUF5QixHQUF6QixFQUFUO0lBQUEsQ0F4VnhCLENBQUE7O0FBQUEscUJBMlZBLElBQUEsR0FBTSxTQUFBLEdBQUE7QUFBYSxVQUFBLFdBQUE7QUFBQSxNQUFaLDhEQUFZLENBQUE7YUFBQSxTQUFBLElBQUMsQ0FBQSxNQUFELENBQU8sQ0FBQyxJQUFSLGNBQWEsSUFBYixFQUFiO0lBQUEsQ0EzVk4sQ0FBQTs7QUFBQSxxQkE4VkEsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO0FBQWEsVUFBQSxXQUFBO0FBQUEsTUFBWiw4REFBWSxDQUFBO2FBQUEsU0FBQSxJQUFDLENBQUEsTUFBRCxDQUFPLENBQUMsV0FBUixjQUFvQixJQUFwQixFQUFiO0lBQUEsQ0E5Vm5CLENBQUE7O0FBQUEscUJBaVdBLDBCQUFBLEdBQTRCLFNBQUEsR0FBQTtBQUFhLFVBQUEsV0FBQTtBQUFBLE1BQVosOERBQVksQ0FBQTthQUFBLFNBQUEsSUFBQyxDQUFBLE1BQUQsQ0FBTyxDQUFDLG9CQUFSLGNBQTZCLElBQTdCLEVBQWI7SUFBQSxDQWpXNUIsQ0FBQTs7QUFBQSxxQkFvV0EsVUFBQSxHQUFZLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsVUFBUixDQUFBLEVBQUg7SUFBQSxDQXBXWixDQUFBOztBQUFBLHFCQXdXQSxrQkFBQSxHQUFvQixTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsVUFBRCxDQUFBLENBQUEsSUFBa0IsQ0FBQSxJQUFLLENBQUEsTUFBTSxDQUFDLGtCQUFSLENBQUEsRUFBekI7SUFBQSxDQXhXcEIsQ0FBQTs7QUFBQSxxQkFvWEEsK0JBQUEsR0FBaUMsU0FBQyxjQUFELEVBQWlCLE9BQWpCLEdBQUE7YUFBNkIsSUFBQyxDQUFBLGFBQWEsQ0FBQywrQkFBZixDQUErQyxjQUEvQyxFQUErRCxPQUEvRCxFQUE3QjtJQUFBLENBcFhqQyxDQUFBOztBQUFBLHFCQThYQSwrQkFBQSxHQUFpQyxTQUFDLGNBQUQsRUFBaUIsT0FBakIsR0FBQTthQUE2QixJQUFDLENBQUEsYUFBYSxDQUFDLCtCQUFmLENBQStDLGNBQS9DLEVBQStELE9BQS9ELEVBQTdCO0lBQUEsQ0E5WGpDLENBQUE7O0FBQUEscUJBbVlBLHlCQUFBLEdBQTJCLFNBQUMsV0FBRCxHQUFBO2FBQWlCLElBQUMsQ0FBQSxhQUFhLENBQUMseUJBQWYsQ0FBeUMsV0FBekMsRUFBakI7SUFBQSxDQW5ZM0IsQ0FBQTs7QUFBQSxxQkF3WUEseUJBQUEsR0FBMkIsU0FBQyxXQUFELEdBQUE7YUFBaUIsSUFBQyxDQUFBLGFBQWEsQ0FBQyx5QkFBZixDQUF5QyxXQUF6QyxFQUFqQjtJQUFBLENBeFkzQixDQUFBOztBQUFBLHFCQXlaQSxrQkFBQSxHQUFvQixTQUFDLGNBQUQsRUFBaUIsT0FBakIsR0FBQTthQUE2QixJQUFDLENBQUEsYUFBYSxDQUFDLGtCQUFmLENBQWtDLGNBQWxDLEVBQWtELE9BQWxELEVBQTdCO0lBQUEsQ0F6WnBCLENBQUE7O0FBQUEscUJBNFpBLGdCQUFBLEdBQWtCLFNBQUMsR0FBRCxHQUFBO2FBQVMsSUFBQyxDQUFBLGFBQWEsQ0FBQyxVQUFmLENBQTBCLEdBQTFCLEVBQVQ7SUFBQSxDQTVabEIsQ0FBQTs7QUFBQSxxQkErWkEsa0JBQUEsR0FBb0IsU0FBQyxLQUFELEVBQVEsR0FBUixHQUFBO2FBQWdCLElBQUMsQ0FBQSxhQUFhLENBQUMsWUFBZixDQUE0QixLQUE1QixFQUFtQyxHQUFuQyxFQUFoQjtJQUFBLENBL1pwQixDQUFBOztBQUFBLHFCQWthQSxrQkFBQSxHQUFvQixTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsYUFBYSxDQUFDLFlBQWYsQ0FBQSxFQUFIO0lBQUEsQ0FsYXBCLENBQUE7O0FBQUEscUJBcWFBLHNCQUFBLEdBQXdCLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMsZ0JBQWYsQ0FBQSxFQUFIO0lBQUEsQ0FyYXhCLENBQUE7O0FBQUEscUJBd2FBLGdCQUFBLEdBQWtCLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMsVUFBZixDQUFBLEVBQUg7SUFBQSxDQXhhbEIsQ0FBQTs7QUFBQSxxQkEyYUEsdUJBQUEsR0FBeUIsU0FBQyxRQUFELEVBQVcsTUFBWCxHQUFBO2FBQXNCLElBQUMsQ0FBQSxhQUFhLENBQUMsdUJBQWYsQ0FBdUMsUUFBdkMsRUFBaUQsTUFBakQsRUFBdEI7SUFBQSxDQTNhekIsQ0FBQTs7QUFBQSxxQkE2YUEscUJBQUEsR0FBdUIsU0FBQyxHQUFELEdBQUE7YUFBUyxJQUFDLENBQUEsYUFBYSxDQUFDLHFCQUFmLENBQXFDLEdBQXJDLEVBQVQ7SUFBQSxDQTdhdkIsQ0FBQTs7QUFBQSxxQkF5YkEsdUJBQUEsR0FBeUIsU0FBQyxjQUFELEdBQUE7YUFBb0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyx1QkFBZixDQUF1QyxjQUF2QyxFQUFwQjtJQUFBLENBemJ6QixDQUFBOztBQUFBLHFCQWtjQSwyQkFBQSxHQUE2QixTQUFDLFFBQUQsR0FBQTthQUMzQixJQUFDLENBQUEsYUFBYSxDQUFDLDZCQUFmLENBQTZDLFFBQTdDLEVBQXVELElBQUMsQ0FBQSx1QkFBRCxDQUFBLENBQXZELEVBRDJCO0lBQUEsQ0FsYzdCLENBQUE7O0FBQUEscUJBc2NBLHNCQUFBLEdBQXdCLFNBQUMsY0FBRCxHQUFBO2FBQW9CLElBQUMsQ0FBQSxhQUFhLENBQUMsc0JBQWYsQ0FBc0MsY0FBdEMsRUFBcEI7SUFBQSxDQXRjeEIsQ0FBQTs7QUFBQSxxQkE0Y0EsZUFBQSxHQUFpQixTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsU0FBRCxDQUFBLENBQVksQ0FBQyxTQUFiLENBQUEsRUFBSDtJQUFBLENBNWNqQixDQUFBOztBQUFBLHFCQThjQSxjQUFBLEdBQWdCLFNBQUEsR0FBQTthQUNkLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLGVBQUQsQ0FBQSxDQUFaLEVBRGM7SUFBQSxDQTljaEIsQ0FBQTs7QUFBQSxxQkFxZEEsVUFBQSxHQUFZLFNBQUMsSUFBRCxFQUFPLE9BQVAsR0FBQTs7UUFBTyxVQUFRO09BQ3pCOztRQUFBLE9BQU8sQ0FBQyxvQkFBcUIsSUFBQyxDQUFBLGdCQUFELENBQUE7T0FBN0I7O1FBQ0EsT0FBTyxDQUFDLHFCQUFzQixJQUFDLENBQUEsZ0JBQUQsQ0FBQTtPQUQ5QjthQUVBLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixTQUFDLFNBQUQsR0FBQTtlQUFlLFNBQVMsQ0FBQyxVQUFWLENBQXFCLElBQXJCLEVBQTJCLE9BQTNCLEVBQWY7TUFBQSxDQUFwQixFQUhVO0lBQUEsQ0FyZFosQ0FBQTs7QUFBQSxxQkEyZEEsYUFBQSxHQUFlLFNBQUEsR0FBQTthQUNiLElBQUMsQ0FBQSxVQUFELENBQVksSUFBWixFQURhO0lBQUEsQ0EzZGYsQ0FBQTs7QUFBQSxxQkErZEEsa0JBQUEsR0FBb0IsU0FBQSxHQUFBO2FBQ2xCLElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUNSLFVBQUEsS0FBQyxDQUFBLHFCQUFELENBQUEsQ0FBQSxDQUFBO2lCQUNBLEtBQUMsQ0FBQSxhQUFELENBQUEsRUFGUTtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVYsRUFEa0I7SUFBQSxDQS9kcEIsQ0FBQTs7QUFBQSxxQkFxZUEsa0JBQUEsR0FBb0IsU0FBQSxHQUFBO2FBQ2xCLElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUNSLGNBQUEsbUNBQUE7QUFBQSxVQUFBLFNBQUEsR0FBWSxLQUFDLENBQUEsdUJBQUQsQ0FBQSxDQUEwQixDQUFDLEdBQXZDLENBQUE7QUFBQSxVQUNBLFdBQUEsR0FBYyxLQUFDLENBQUEsdUJBQUQsQ0FBeUIsU0FBekIsQ0FEZCxDQUFBO0FBQUEsVUFFQSxXQUFBLEdBQWMsU0FBQSxLQUFhLENBRjNCLENBQUE7QUFBQSxVQUlBLEtBQUMsQ0FBQSwyQkFBRCxDQUFBLENBSkEsQ0FBQTtBQUFBLFVBS0EsS0FBQyxDQUFBLGNBQUQsQ0FBQSxDQUxBLENBQUE7QUFBQSxVQU1BLEtBQUMsQ0FBQSxhQUFELENBQUEsQ0FOQSxDQUFBO0FBUUEsVUFBQSxJQUFHLEtBQUMsQ0FBQSxnQkFBRCxDQUFBLENBQUEsSUFBd0IsS0FBQyxDQUFBLHVCQUFELENBQXlCLFNBQXpCLENBQUEsR0FBc0MsV0FBakU7QUFDRSxZQUFBLEtBQUMsQ0FBQSwwQkFBRCxDQUE0QixTQUE1QixFQUF1QyxXQUF2QyxDQUFBLENBREY7V0FSQTtBQVdBLFVBQUEsSUFBRyxXQUFIO0FBQ0UsWUFBQSxLQUFDLENBQUEsWUFBRCxDQUFBLENBQUEsQ0FBQTttQkFDQSxLQUFDLENBQUEscUJBQUQsQ0FBQSxFQUZGO1dBWlE7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFWLEVBRGtCO0lBQUEsQ0FyZXBCLENBQUE7O0FBQUEscUJBd2ZBLE1BQUEsR0FBUSxTQUFDLE9BQUQsR0FBQTs7UUFBQyxVQUFRO09BQ2Y7O1FBQUEsT0FBTyxDQUFDLGFBQWMsSUFBQyxDQUFBLGdCQUFELENBQUE7T0FBdEI7YUFDQSxJQUFDLENBQUEsa0JBQUQsQ0FBb0IsU0FBQyxTQUFELEdBQUE7ZUFBZSxTQUFTLENBQUMsTUFBVixDQUFpQixPQUFqQixFQUFmO01BQUEsQ0FBcEIsRUFGTTtJQUFBLENBeGZSLENBQUE7O0FBQUEscUJBOGZBLFNBQUEsR0FBVyxTQUFBLEdBQUE7YUFDVCxJQUFDLENBQUEsa0JBQUQsQ0FBb0IsU0FBQyxTQUFELEdBQUE7ZUFBZSxTQUFTLENBQUMsU0FBVixDQUFBLEVBQWY7TUFBQSxDQUFwQixFQURTO0lBQUEsQ0E5ZlgsQ0FBQTs7QUFBQSxxQkFvZ0JBLDBCQUFBLEdBQTRCLFNBQUEsR0FBQTthQUMxQixJQUFDLENBQUEsa0JBQUQsQ0FBb0IsU0FBQyxTQUFELEdBQUE7ZUFBZSxTQUFTLENBQUMsMEJBQVYsQ0FBQSxFQUFmO01BQUEsQ0FBcEIsRUFEMEI7SUFBQSxDQXBnQjVCLENBQUE7O0FBQUEscUJBMGdCQSwwQkFBQSxHQUE0QixTQUFBLEdBQUE7YUFDMUIsSUFBQyxDQUFBLGtCQUFELENBQW9CLFNBQUMsU0FBRCxHQUFBO2VBQWUsU0FBUyxDQUFDLDBCQUFWLENBQUEsRUFBZjtNQUFBLENBQXBCLEVBRDBCO0lBQUEsQ0ExZ0I1QixDQUFBOztBQUFBLHFCQStnQkEsU0FBQSxHQUFRLFNBQUEsR0FBQTthQUNOLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixTQUFDLFNBQUQsR0FBQTtlQUFlLFNBQVMsQ0FBQyxRQUFELENBQVQsQ0FBQSxFQUFmO01BQUEsQ0FBcEIsRUFETTtJQUFBLENBL2dCUixDQUFBOztBQUFBLHFCQXFoQkEsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO2FBQ2pCLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixTQUFDLFNBQUQsR0FBQTtlQUFlLFNBQVMsQ0FBQyxpQkFBVixDQUFBLEVBQWY7TUFBQSxDQUFwQixFQURpQjtJQUFBLENBcmhCbkIsQ0FBQTs7QUFBQSxxQkF5aEJBLFVBQUEsR0FBWSxTQUFBLEdBQUE7YUFDVixJQUFDLENBQUEsa0JBQUQsQ0FBb0IsU0FBQyxTQUFELEdBQUE7ZUFBZSxTQUFTLENBQUMsVUFBVixDQUFBLEVBQWY7TUFBQSxDQUFwQixFQURVO0lBQUEsQ0F6aEJaLENBQUE7O0FBQUEscUJBNmhCQSxrQkFBQSxHQUFvQixTQUFBLEdBQUE7YUFDbEIsSUFBQyxDQUFBLGtCQUFELENBQW9CLFNBQUMsU0FBRCxHQUFBO2VBQWUsU0FBUyxDQUFDLGtCQUFWLENBQUEsRUFBZjtNQUFBLENBQXBCLEVBRGtCO0lBQUEsQ0E3aEJwQixDQUFBOztBQUFBLHFCQWlpQkEsbUJBQUEsR0FBcUIsU0FBQSxHQUFBO2FBQ25CLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixTQUFDLFNBQUQsR0FBQTtlQUFlLFNBQVMsQ0FBQyxtQkFBVixDQUFBLEVBQWY7TUFBQSxDQUFwQixFQURtQjtJQUFBLENBamlCckIsQ0FBQTs7QUFBQSxxQkF5aUJBLDZCQUFBLEdBQStCLFNBQUEsR0FBQTthQUM3QixJQUFDLENBQUEsa0JBQUQsQ0FBb0IsU0FBQyxTQUFELEdBQUE7ZUFBZSxTQUFTLENBQUMsa0JBQVYsQ0FBQSxFQUFmO01BQUEsQ0FBcEIsRUFENkI7SUFBQSxDQXppQi9CLENBQUE7O0FBQUEscUJBOGlCQSxzQkFBQSxHQUF3QixTQUFBLEdBQUE7YUFDdEIsSUFBQyxDQUFBLGtCQUFELENBQW9CLFNBQUMsU0FBRCxHQUFBO2VBQWUsU0FBUyxDQUFDLHNCQUFWLENBQUEsRUFBZjtNQUFBLENBQXBCLEVBRHNCO0lBQUEsQ0E5aUJ4QixDQUFBOztBQUFBLHFCQW1qQkEsMEJBQUEsR0FBNEIsU0FBQyxXQUFELEdBQUE7QUFDMUIsTUFBQSxJQUFBLENBQUEsSUFBZSxDQUFBLFdBQUQsQ0FBQSxDQUFkO0FBQUEsY0FBQSxDQUFBO09BQUE7YUFDQSxJQUFDLENBQUEsaUJBQUQsQ0FBbUIsS0FBbkIsRUFBMEIsV0FBMUIsRUFBdUMsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsSUFBRCxHQUFBO0FBQWUsY0FBQSxPQUFBO0FBQUEsVUFBYixVQUFELEtBQUMsT0FBYSxDQUFBO2lCQUFBLE9BQUEsQ0FBUSxLQUFDLENBQUEsVUFBRCxDQUFBLENBQVIsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXZDLEVBRjBCO0lBQUEsQ0FuakI1QixDQUFBOztBQUFBLHFCQTBqQkEsY0FBQSxHQUFnQixTQUFBLEdBQUE7QUFDZCxVQUFBLGlCQUFBO0FBQUEsTUFBQSxpQkFBQSxHQUFvQixLQUFwQixDQUFBO2FBQ0EsSUFBQyxDQUFBLGtCQUFELENBQW9CLFNBQUMsU0FBRCxHQUFBO0FBQ2xCLFFBQUEsU0FBUyxDQUFDLGNBQVYsQ0FBeUIsaUJBQXpCLENBQUEsQ0FBQTtlQUNBLGlCQUFBLEdBQW9CLEtBRkY7TUFBQSxDQUFwQixFQUZjO0lBQUEsQ0ExakJoQixDQUFBOztBQUFBLHFCQWlrQkEsZUFBQSxHQUFpQixTQUFBLEdBQUE7QUFDZixVQUFBLGlCQUFBO0FBQUEsTUFBQSxpQkFBQSxHQUFvQixLQUFwQixDQUFBO2FBQ0EsSUFBQyxDQUFBLGtCQUFELENBQW9CLFNBQUMsU0FBRCxHQUFBO0FBQ2xCLFFBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxpQkFBZCxDQUFBLENBQUE7ZUFDQSxpQkFBQSxHQUFvQixLQUZGO01BQUEsQ0FBcEIsRUFGZTtJQUFBLENBamtCakIsQ0FBQTs7QUFBQSxxQkF3a0JBLGdCQUFBLEdBQWtCLFNBQUEsR0FBQTtBQUNoQixVQUFBLHVEQUFBO0FBQUEsTUFBQSxpQkFBQSxHQUFvQixLQUFwQixDQUFBO0FBQ0E7QUFBQTtXQUFBLDRDQUFBOzhCQUFBO0FBQ0UsUUFBQSxTQUFTLENBQUMsSUFBVixDQUFlLGlCQUFmLENBQUEsQ0FBQTtBQUFBLHNCQUNBLGlCQUFBLEdBQW9CLEtBRHBCLENBREY7QUFBQTtzQkFGZ0I7SUFBQSxDQXhrQmxCLENBQUE7O0FBQUEscUJBc2xCQSxTQUFBLEdBQVcsU0FBQyxPQUFELEdBQUE7QUFDVCxVQUFBLHVDQUFBOztRQURVLFVBQVE7T0FDbEI7QUFBQSxNQUFBLFFBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWYsQ0FBQSxDQUFuQixFQUFDLGFBQUEsSUFBRCxFQUFPLGlCQUFBLFFBQVAsQ0FBQTtBQUFBLE1BRUEsZ0JBQUEsR0FBbUIsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFiLENBQUEsS0FBd0IsQ0FBQSxDQUYzQyxDQUFBO0FBSUEsTUFBQSxJQUFHLDJEQUFBLElBQTBCLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBcEIsS0FBOEIsSUFBQyxDQUFBLGFBQUQsQ0FBQSxDQUFnQixDQUFDLE1BQTVFO0FBQ0UsUUFBQSxJQUFDLENBQUEsa0JBQUQsQ0FBb0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTtpQkFBQSxTQUFDLFNBQUQsRUFBWSxLQUFaLEdBQUE7QUFDbEIsWUFBQSxJQUFBLEdBQU8sUUFBUSxDQUFDLFVBQVcsQ0FBQSxLQUFBLENBQTNCLENBQUE7bUJBQ0EsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsSUFBckIsRUFBMkIsT0FBM0IsRUFGa0I7VUFBQSxFQUFBO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQixDQUFBLENBQUE7QUFJQSxjQUFBLENBTEY7T0FBQSxNQU9LLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLCtCQUFoQixDQUFBLElBQXFELDREQUF4RDtBQUNILFFBQUEsSUFBRyxDQUFBLElBQUUsQ0FBQSxTQUFELENBQUEsQ0FBWSxDQUFDLDRCQUFiLENBQUEsQ0FBRCxJQUFnRCxnQkFBbkQ7O1lBQ0UsT0FBTyxDQUFDLGNBQWUsUUFBUSxDQUFDO1dBRGxDO1NBREc7T0FYTDthQWVBLElBQUMsQ0FBQSxVQUFELENBQVksSUFBWixFQUFrQixPQUFsQixFQWhCUztJQUFBLENBdGxCWCxDQUFBOztBQUFBLHFCQXltQkEsSUFBQSxHQUFNLFNBQUEsR0FBQTtBQUNKLE1BQUEsSUFBQyxDQUFBLFNBQUQsQ0FBQSxDQUFZLENBQUMsZUFBYixHQUErQixJQUEvQixDQUFBO2FBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBYixFQUZJO0lBQUEsQ0F6bUJOLENBQUE7O0FBQUEscUJBOG1CQSxJQUFBLEdBQU0sU0FBQSxHQUFBO0FBQ0osTUFBQSxJQUFDLENBQUEsU0FBRCxDQUFBLENBQVksQ0FBQyxlQUFiLEdBQStCLElBQS9CLENBQUE7YUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLEVBRkk7SUFBQSxDQTltQk4sQ0FBQTs7QUFBQSxxQkF1bkJBLGNBQUEsR0FBZ0IsU0FBQSxHQUFBO0FBQ2QsVUFBQSxTQUFBO0FBQUEsTUFBQSxTQUFBLEdBQVksSUFBQyxDQUFBLCtCQUFELENBQWlDLElBQUMsQ0FBQSx1QkFBRCxDQUFBLENBQWpDLENBQTRELENBQUMsR0FBekUsQ0FBQTthQUNBLElBQUMsQ0FBQSxhQUFELENBQWUsU0FBZixFQUZjO0lBQUEsQ0F2bkJoQixDQUFBOztBQUFBLHFCQTRuQkEsZ0JBQUEsR0FBa0IsU0FBQSxHQUFBO0FBQ2hCLFVBQUEsU0FBQTtBQUFBLE1BQUEsU0FBQSxHQUFZLElBQUMsQ0FBQSwrQkFBRCxDQUFpQyxJQUFDLENBQUEsdUJBQUQsQ0FBQSxDQUFqQyxDQUE0RCxDQUFDLEdBQXpFLENBQUE7YUFDQSxJQUFDLENBQUEsZUFBRCxDQUFpQixTQUFqQixFQUZnQjtJQUFBLENBNW5CbEIsQ0FBQTs7QUFBQSxxQkFpb0JBLGlCQUFBLEdBQW1CLFNBQUEsR0FBQTtBQUNqQixVQUFBLG9DQUFBO0FBQUE7QUFBQTtXQUFBLDRDQUFBOzhCQUFBO0FBQUEsc0JBQUEsU0FBUyxDQUFDLElBQVYsQ0FBQSxFQUFBLENBQUE7QUFBQTtzQkFEaUI7SUFBQSxDQWpvQm5CLENBQUE7O0FBQUEscUJBcW9CQSxPQUFBLEdBQVMsU0FBQSxHQUFBO2FBQ1AsSUFBQyxDQUFBLFlBQVksQ0FBQyxPQUFkLENBQUEsRUFETztJQUFBLENBcm9CVCxDQUFBOztBQUFBLHFCQXlvQkEsU0FBQSxHQUFXLFNBQUEsR0FBQTthQUNULElBQUMsQ0FBQSxZQUFZLENBQUMsU0FBZCxDQUFBLEVBRFM7SUFBQSxDQXpvQlgsQ0FBQTs7QUFBQSxxQkErb0JBLG9CQUFBLEdBQXNCLFNBQUMsS0FBRCxHQUFBO2FBQ3BCLElBQUMsQ0FBQSxZQUFZLENBQUMsb0JBQWQsQ0FBbUMsS0FBbkMsRUFEb0I7SUFBQSxDQS9vQnRCLENBQUE7O0FBQUEscUJBeXBCQSxhQUFBLEdBQWUsU0FBQyxTQUFELEdBQUE7YUFDYixJQUFDLENBQUEsWUFBWSxDQUFDLGFBQWQsQ0FBNEIsU0FBNUIsRUFEYTtJQUFBLENBenBCZixDQUFBOztBQUFBLHFCQStwQkEsZUFBQSxHQUFpQixTQUFDLFNBQUQsR0FBQTthQUNmLElBQUMsQ0FBQSxhQUFhLENBQUMsZUFBZixDQUErQixTQUEvQixFQURlO0lBQUEsQ0EvcEJqQixDQUFBOztBQUFBLHFCQXlxQkEscUJBQUEsR0FBdUIsU0FBQyxTQUFELEdBQUE7YUFDckIsSUFBQyxDQUFBLFlBQVksQ0FBQyxxQkFBZCxDQUFvQyxTQUFwQyxFQURxQjtJQUFBLENBenFCdkIsQ0FBQTs7QUFBQSxxQkE2cUJBLFVBQUEsR0FBWSxTQUFDLFFBQUQsRUFBVyxNQUFYLEdBQUE7YUFDVixJQUFDLENBQUEsYUFBYSxDQUFDLFVBQWYsQ0FBMEIsUUFBMUIsRUFBb0MsTUFBcEMsRUFEVTtJQUFBLENBN3FCWixDQUFBOztBQUFBLHFCQWlyQkEsaUJBQUEsR0FBbUIsU0FBQyxFQUFELEdBQUE7YUFDakIsSUFBQyxDQUFBLGFBQWEsQ0FBQyxpQkFBZixDQUFpQyxFQUFqQyxFQURpQjtJQUFBLENBanJCbkIsQ0FBQTs7QUFBQSxxQkFxckJBLG1DQUFBLEdBQXFDLFNBQUMsV0FBRCxHQUFBO0FBQ25DLFVBQUEsK0JBQUE7QUFBQTtXQUFXLHFKQUFYLEdBQUE7QUFDRSxzQkFBQSxJQUFDLENBQUEsZUFBRCxDQUFpQixHQUFqQixFQUFBLENBREY7QUFBQTtzQkFEbUM7SUFBQSxDQXJyQnJDLENBQUE7O0FBQUEscUJBMnJCQSxxQkFBQSxHQUF1QixTQUFDLFNBQUQsR0FBQTtBQUNyQixNQUFBLElBQUcsSUFBQyxDQUFBLG1CQUFELENBQXFCLFNBQXJCLENBQUg7ZUFDRSxJQUFDLENBQUEsZUFBRCxDQUFpQixTQUFqQixFQURGO09BQUEsTUFBQTtlQUdFLElBQUMsQ0FBQSxhQUFELENBQWUsU0FBZixFQUhGO09BRHFCO0lBQUEsQ0EzckJ2QixDQUFBOztBQUFBLHFCQW9zQkEsbUJBQUEsR0FBcUIsU0FBQSxHQUFBO2FBQ25CLElBQUMsQ0FBQSxtQkFBRCxDQUFxQixJQUFDLENBQUEsa0JBQUQsQ0FBQSxDQUFyQixFQURtQjtJQUFBLENBcHNCckIsQ0FBQTs7QUFBQSxxQkE0c0JBLG1CQUFBLEdBQXFCLFNBQUMsU0FBRCxHQUFBO2FBQ25CLElBQUMsQ0FBQSxhQUFhLENBQUMsbUJBQWYsQ0FBbUMsU0FBbkMsRUFEbUI7SUFBQSxDQTVzQnJCLENBQUE7O0FBQUEscUJBb3RCQSxtQkFBQSxHQUFxQixTQUFDLFNBQUQsR0FBQTthQUNuQixJQUFDLENBQUEsYUFBYSxDQUFDLG1CQUFmLENBQW1DLFNBQW5DLEVBRG1CO0lBQUEsQ0FwdEJyQixDQUFBOztBQUFBLHFCQXd0QkEsOEJBQUEsR0FBZ0MsU0FBQyxTQUFELEdBQUE7YUFDOUIsSUFBQyxDQUFBLGFBQWEsQ0FBQyw4QkFBZixDQUE4QyxTQUE5QyxFQUQ4QjtJQUFBLENBeHRCaEMsQ0FBQTs7QUFBQSxxQkE0dEJBLDhCQUFBLEdBQWdDLFNBQUMsU0FBRCxHQUFBO2FBQzlCLElBQUMsQ0FBQSxhQUFhLENBQUMsOEJBQWYsQ0FBOEMsU0FBOUMsRUFEOEI7SUFBQSxDQTV0QmhDLENBQUE7O0FBQUEscUJBZ3VCQSw4QkFBQSxHQUFnQyxTQUFDLFFBQUQsRUFBVyxNQUFYLEdBQUE7YUFDOUIsSUFBQyxDQUFBLGFBQWEsQ0FBQyw4QkFBZixDQUE4QyxRQUE5QyxFQUF3RCxNQUF4RCxFQUQ4QjtJQUFBLENBaHVCaEMsQ0FBQTs7QUFBQSxxQkFxdUJBLFVBQUEsR0FBWSxTQUFBLEdBQUE7QUFDVixVQUFBLGtCQUFBO0FBQUEsTUFBQSxTQUFBLEdBQVksSUFBQyxDQUFBLHNCQUFELENBQUEsQ0FBWixDQUFBO0FBQ0EsTUFBQSxJQUFVLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBaEIsS0FBdUIsQ0FBakM7QUFBQSxjQUFBLENBQUE7T0FEQTtBQUFBLE1BRUEsT0FBQSxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsVUFBUixDQUFBLENBRlYsQ0FBQTtBQUdBLE1BQUEsSUFBVSxTQUFTLENBQUMsT0FBVixDQUFBLENBQUEsSUFBd0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFoQixLQUF1QixPQUEvQyxJQUEyRCxJQUFDLENBQUEsTUFBTSxDQUFDLFdBQVIsQ0FBQSxDQUFBLEtBQXlCLEVBQTlGO0FBQUEsY0FBQSxDQUFBO09BSEE7YUFLQSxJQUFDLENBQUEsUUFBRCxDQUFVLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7QUFDUixjQUFBLCtNQUFBO0FBQUEsVUFBQSxVQUFBLEdBQWEsRUFBYixDQUFBO0FBQUEsVUFDQSxJQUFBLEdBQU87Ozs7d0JBRFAsQ0FBQTtBQUVBLFVBQUEsSUFBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQWhCLEtBQXlCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBdkMsSUFBK0MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFkLEtBQXdCLENBQTFFO0FBQ0UsWUFBQSxJQUFBLENBQUEsS0FBbUIsQ0FBQSxtQkFBRCxDQUFxQixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQW5DLENBQWxCO0FBQUEsY0FBQSxJQUFJLENBQUMsR0FBTCxDQUFBLENBQUEsQ0FBQTthQURGO1dBRkE7QUFBQSxVQU1BLGtCQUFBLEdBQXFCLEtBQUMsQ0FBQSwrQkFBRCxDQUFpQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBakIsQ0FBakMsQ0FBdUQsQ0FBQyxTQUF4RCxDQUFrRSxDQUFDLENBQUEsQ0FBRCxDQUFsRSxDQU5yQixDQUFBO0FBQUEsVUFPQSxrQkFBQSxHQUFxQixLQUFDLENBQUEsK0JBQUQsQ0FBaUMsa0JBQWpDLENBQW9ELENBQUMsR0FQMUUsQ0FBQTtBQVFBLFVBQUEsSUFBRyxJQUFBLEdBQU8sS0FBQyxDQUFBLDhCQUFELENBQWdDLGtCQUFoQyxDQUFWO0FBQ0UsWUFBQSxXQUFBLEdBQWMsSUFBSSxDQUFDLGNBQUwsQ0FBQSxDQUFxQixDQUFDLFdBQXRCLENBQUEsQ0FBZCxDQURGO1dBQUEsTUFBQTtBQUdFLFlBQUEsV0FBQSxHQUFjLENBQWQsQ0FIRjtXQVJBO0FBYUEsZUFBQSwyQ0FBQTsyQkFBQTtBQUNFLFlBQUEsSUFBRyxJQUFBLEdBQU8sS0FBQyxDQUFBLGFBQWEsQ0FBQyw4QkFBZixDQUE4QyxHQUE5QyxDQUFWO0FBQ0UsY0FBQSxXQUFBLEdBQWMsSUFBSSxDQUFDLGNBQUwsQ0FBQSxDQUFkLENBQUE7QUFBQSxjQUNBLFFBQUEsR0FBVyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBRDdCLENBQUE7QUFBQSxjQUVBLE1BQUEsR0FBUyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBRnpCLENBQUE7QUFBQSxjQUdBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFFBQUEsR0FBVyxXQUEzQixDQUhBLENBREY7YUFBQSxNQUFBO0FBTUUsY0FBQSxRQUFBLEdBQVcsR0FBWCxDQUFBO0FBQUEsY0FDQSxNQUFBLEdBQVMsR0FEVCxDQU5GO2FBQUE7QUFBQSxZQVNBLGNBQUEsR0FBaUIsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsQ0FBQyxRQUFBLEdBQVcsV0FBWixDQUFqQixDQVRqQixDQUFBO0FBQUEsWUFVQSxXQUFBLEdBQWMsS0FBSyxDQUFDLEdBQU4sQ0FBVSxDQUFDLE1BQUEsR0FBUyxDQUFWLENBQVYsRUFBd0IsS0FBQyxDQUFBLE1BQU0sQ0FBQyxjQUFSLENBQUEsQ0FBeEIsQ0FWZCxDQUFBO0FBQUEsWUFXQSxLQUFBLEdBQVEsS0FBQyxDQUFBLE1BQU0sQ0FBQyxjQUFSLENBQXVCLENBQUMsQ0FBQyxRQUFELENBQUQsRUFBYSxXQUFiLENBQXZCLENBWFIsQ0FBQTtBQVlBLFlBQUEsSUFBRyxXQUFXLENBQUMsR0FBWixLQUFtQixPQUFuQixJQUErQixXQUFXLENBQUMsTUFBWixHQUFxQixDQUFwRCxJQUEwRCxDQUFBLEtBQUssQ0FBQSxNQUFNLENBQUMsZ0JBQVIsQ0FBeUIsV0FBVyxDQUFDLEdBQXJDLENBQWpFO0FBQ0UsY0FBQSxLQUFBLEdBQVEsRUFBQSxHQUFHLEtBQUgsR0FBUyxJQUFqQixDQURGO2FBWkE7QUFBQSxZQWVBLEtBQUMsQ0FBQSxNQUFNLENBQUMsVUFBUixDQUFtQixRQUFuQixFQUE2QixNQUE3QixDQWZBLENBQUE7QUFrQkEsWUFBQSxJQUFHLElBQUEsR0FBTyxLQUFDLENBQUEsYUFBYSxDQUFDLDhCQUFmLENBQThDLGNBQWMsQ0FBQyxHQUE3RCxDQUFWO0FBQ0UsY0FBQSxLQUFDLENBQUEsZUFBRCxDQUFpQixjQUFjLENBQUMsR0FBaEMsQ0FBQSxDQUFBO0FBQUEsY0FDQSxVQUFVLENBQUMsSUFBWCxDQUFnQixjQUFjLENBQUMsR0FBZixHQUFxQixNQUFyQixHQUE4QixRQUE5QixHQUF5QyxJQUFJLENBQUMsY0FBTCxDQUFBLENBQXFCLENBQUMsV0FBdEIsQ0FBQSxDQUF6RCxDQURBLENBREY7YUFsQkE7QUFBQSxZQXNCQSxLQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsQ0FBZSxjQUFmLEVBQStCLEtBQS9CLENBdEJBLENBREY7QUFBQSxXQWJBO0FBdUNBLGVBQUEsbURBQUE7dUNBQUE7Z0JBQWlDLENBQUEsQ0FBQSxJQUFLLFNBQUwsSUFBSyxTQUFMLElBQWtCLEtBQUMsQ0FBQSxnQkFBRCxDQUFBLENBQWxCO0FBQy9CLGNBQUEsS0FBQyxDQUFBLGFBQUQsQ0FBZSxTQUFmLENBQUE7YUFERjtBQUFBLFdBdkNBO2lCQTBDQSxLQUFDLENBQUEsc0JBQUQsQ0FBd0IsU0FBUyxDQUFDLFNBQVYsQ0FBb0IsQ0FBQyxDQUFBLFdBQUQsQ0FBcEIsQ0FBeEIsRUFBNkQ7QUFBQSxZQUFBLGFBQUEsRUFBZSxJQUFmO0FBQUEsWUFBcUIsVUFBQSxFQUFZLElBQWpDO1dBQTdELEVBM0NRO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBVixFQU5VO0lBQUEsQ0FydUJaLENBQUE7O0FBQUEscUJBMHhCQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osVUFBQSxrQkFBQTtBQUFBLE1BQUEsU0FBQSxHQUFZLElBQUMsQ0FBQSxzQkFBRCxDQUFBLENBQVosQ0FBQTtBQUFBLE1BQ0EsT0FBQSxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsVUFBUixDQUFBLENBRFYsQ0FBQTtBQUVBLE1BQUEsSUFBVSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQWQsS0FBcUIsT0FBL0I7QUFBQSxjQUFBLENBQUE7T0FGQTtBQUdBLE1BQUEsSUFBVSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQWQsS0FBcUIsT0FBQSxHQUFVLENBQS9CLElBQXFDLElBQUMsQ0FBQSxNQUFNLENBQUMsV0FBUixDQUFBLENBQUEsS0FBeUIsRUFBeEU7QUFBQSxjQUFBLENBQUE7T0FIQTthQUtBLElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUNSLGNBQUEsK01BQUE7QUFBQSxVQUFBLFVBQUEsR0FBYSxFQUFiLENBQUE7QUFBQSxVQUNBLElBQUEsR0FBTzs7Ozt3QkFEUCxDQUFBO0FBRUEsVUFBQSxJQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBaEIsS0FBeUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUF2QyxJQUErQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQWQsS0FBd0IsQ0FBMUU7QUFDRSxZQUFBLElBQUEsQ0FBQSxLQUFxQixDQUFBLG1CQUFELENBQXFCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBbkMsQ0FBcEI7QUFBQSxjQUFBLElBQUksQ0FBQyxLQUFMLENBQUEsQ0FBQSxDQUFBO2FBREY7V0FGQTtBQUFBLFVBTUEsa0JBQUEsR0FBcUIsS0FBQyxDQUFBLCtCQUFELENBQWlDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFmLENBQWpDLENBQXFELENBQUMsU0FBdEQsQ0FBZ0UsQ0FBQyxDQUFELENBQWhFLENBTnJCLENBQUE7QUFBQSxVQU9BLGtCQUFBLEdBQXFCLEtBQUMsQ0FBQSwrQkFBRCxDQUFpQyxrQkFBakMsQ0FBb0QsQ0FBQyxHQVAxRSxDQUFBO0FBUUEsVUFBQSxJQUFHLElBQUEsR0FBTyxLQUFDLENBQUEsOEJBQUQsQ0FBZ0Msa0JBQWhDLENBQVY7QUFDRSxZQUFBLFdBQUEsR0FBYyxJQUFJLENBQUMsY0FBTCxDQUFBLENBQXFCLENBQUMsV0FBdEIsQ0FBQSxDQUFkLENBREY7V0FBQSxNQUFBO0FBR0UsWUFBQSxXQUFBLEdBQWMsQ0FBZCxDQUhGO1dBUkE7QUFhQSxlQUFBLDJDQUFBOzJCQUFBO0FBQ0UsWUFBQSxJQUFHLElBQUEsR0FBTyxLQUFDLENBQUEsYUFBYSxDQUFDLDhCQUFmLENBQThDLEdBQTlDLENBQVY7QUFDRSxjQUFBLFdBQUEsR0FBYyxJQUFJLENBQUMsY0FBTCxDQUFBLENBQWQsQ0FBQTtBQUFBLGNBQ0EsUUFBQSxHQUFXLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FEN0IsQ0FBQTtBQUFBLGNBRUEsTUFBQSxHQUFTLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FGekIsQ0FBQTtBQUFBLGNBR0EsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsTUFBQSxHQUFTLFdBQXpCLENBSEEsQ0FERjthQUFBLE1BQUE7QUFNRSxjQUFBLFFBQUEsR0FBVyxHQUFYLENBQUE7QUFBQSxjQUNBLE1BQUEsR0FBUyxHQURULENBTkY7YUFBQTtBQVNBLFlBQUEsSUFBRyxNQUFBLEdBQVMsQ0FBVCxLQUFjLE9BQWpCO0FBQ0UsY0FBQSxXQUFBLEdBQWMsQ0FBQyxNQUFELEVBQVMsS0FBQyxDQUFBLE1BQU0sQ0FBQyxnQkFBUixDQUF5QixNQUF6QixDQUFULENBQWQsQ0FERjthQUFBLE1BQUE7QUFHRSxjQUFBLFdBQUEsR0FBYyxDQUFDLE1BQUEsR0FBUyxDQUFWLENBQWQsQ0FIRjthQVRBO0FBQUEsWUFhQSxLQUFBLEdBQVEsS0FBQyxDQUFBLE1BQU0sQ0FBQyxjQUFSLENBQXVCLENBQUMsQ0FBQyxRQUFELENBQUQsRUFBYSxXQUFiLENBQXZCLENBYlIsQ0FBQTtBQUFBLFlBY0EsS0FBQyxDQUFBLE1BQU0sQ0FBQyxVQUFSLENBQW1CLFFBQW5CLEVBQTZCLE1BQTdCLENBZEEsQ0FBQTtBQUFBLFlBZ0JBLGNBQUEsR0FBaUIsS0FBSyxDQUFDLEdBQU4sQ0FBVSxDQUFDLFFBQUEsR0FBVyxXQUFaLENBQVYsRUFBb0MsS0FBQyxDQUFBLE1BQU0sQ0FBQyxjQUFSLENBQUEsQ0FBcEMsQ0FoQmpCLENBQUE7QUFpQkEsWUFBQSxJQUFHLGNBQWMsQ0FBQyxHQUFmLEtBQXNCLEtBQUMsQ0FBQSxNQUFNLENBQUMsVUFBUixDQUFBLENBQXRCLElBQStDLGNBQWMsQ0FBQyxNQUFmLEdBQXdCLENBQTFFO0FBQ0UsY0FBQSxLQUFBLEdBQVMsSUFBQSxHQUFJLEtBQWIsQ0FERjthQWpCQTtBQXFCQSxZQUFBLElBQUcsSUFBQSxHQUFPLEtBQUMsQ0FBQSxhQUFhLENBQUMsOEJBQWYsQ0FBOEMsY0FBYyxDQUFDLEdBQTdELENBQVY7QUFDRSxjQUFBLEtBQUMsQ0FBQSxlQUFELENBQWlCLGNBQWMsQ0FBQyxHQUFoQyxDQUFBLENBQUE7QUFBQSxjQUNBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLGNBQWMsQ0FBQyxHQUFmLEdBQXFCLElBQUksQ0FBQyxjQUFMLENBQUEsQ0FBcUIsQ0FBQyxXQUF0QixDQUFBLENBQXJDLENBREEsQ0FERjthQXJCQTtBQUFBLFlBeUJBLEtBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixDQUFlLGNBQWYsRUFBK0IsS0FBL0IsQ0F6QkEsQ0FERjtBQUFBLFdBYkE7QUEwQ0EsZUFBQSxtREFBQTt1Q0FBQTtnQkFBaUMsQ0FBQSxDQUFBLElBQUssU0FBTCxJQUFLLFNBQUwsSUFBa0IsS0FBQyxDQUFBLGdCQUFELENBQUEsQ0FBbEI7QUFDL0IsY0FBQSxLQUFDLENBQUEsYUFBRCxDQUFlLFNBQWYsQ0FBQTthQURGO0FBQUEsV0ExQ0E7aUJBNkNBLEtBQUMsQ0FBQSxzQkFBRCxDQUF3QixTQUFTLENBQUMsU0FBVixDQUFvQixDQUFDLFdBQUQsQ0FBcEIsQ0FBeEIsRUFBNEQ7QUFBQSxZQUFBLGFBQUEsRUFBZSxJQUFmO0FBQUEsWUFBcUIsVUFBQSxFQUFZLElBQWpDO1dBQTVELEVBOUNRO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBVixFQU5ZO0lBQUEsQ0ExeEJkLENBQUE7O0FBQUEscUJBaTFCQSxjQUFBLEdBQWdCLFNBQUEsR0FBQTthQUNkLElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUNSLGNBQUEsOEtBQUE7QUFBQTtBQUFBO2VBQUEsNENBQUE7a0NBQUE7QUFDRSxZQUFBLG1CQUFBLEdBQXNCLFNBQVMsQ0FBQyxjQUFWLENBQUEsQ0FBdEIsQ0FBQTtBQUNBLFlBQUEsSUFBRyxTQUFTLENBQUMsT0FBVixDQUFBLENBQUg7QUFDRSxjQUFDLFFBQVMsU0FBUyxDQUFDLGNBQVYsQ0FBQSxFQUFULEtBQUQsQ0FBQTtBQUFBLGNBQ0EsU0FBUyxDQUFDLHNCQUFWLENBQWlDLENBQUMsS0FBSyxDQUFDLEdBQU4sR0FBWSxDQUFiLEVBQWdCLENBQWhCLENBQWpDLENBREEsQ0FERjthQURBO0FBQUEsWUFLQSxRQUFxQixTQUFTLENBQUMsaUJBQVYsQ0FBQSxDQUFyQixFQUFDLG1CQUFELEVBQVcsaUJBTFgsQ0FBQTtBQUFBLFlBTUEsTUFBQSxFQU5BLENBQUE7QUFBQSxZQVFBLGVBQUEsR0FDRSxLQUFDLENBQUEsOEJBQUQsQ0FBZ0MsUUFBaEMsRUFBMEMsTUFBMUMsQ0FDRSxDQUFDLEdBREgsQ0FDTyxTQUFDLElBQUQsR0FBQTtxQkFBVSxJQUFJLENBQUMsaUJBQUwsQ0FBQSxFQUFWO1lBQUEsQ0FEUCxDQVRGLENBQUE7QUFBQSxZQVlBLGdCQUFBLEdBQW1CLENBQUMsQ0FBQyxRQUFELEVBQVcsQ0FBWCxDQUFELEVBQWdCLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FBaEIsQ0FabkIsQ0FBQTtBQUFBLFlBYUEsZUFBQSxHQUFrQixLQUFDLENBQUEsb0JBQUQsQ0FBc0IsZ0JBQXRCLENBYmxCLENBQUE7QUFjQSxZQUFBLElBQTRDLE1BQUEsR0FBUyxLQUFDLENBQUEsZ0JBQUQsQ0FBQSxDQUFyRDtBQUFBLGNBQUEsZUFBQSxHQUFrQixJQUFBLEdBQU8sZUFBekIsQ0FBQTthQWRBO0FBQUEsWUFlQSxLQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsQ0FBZSxDQUFDLE1BQUQsRUFBUyxDQUFULENBQWYsRUFBNEIsZUFBNUIsQ0FmQSxDQUFBO0FBQUEsWUFpQkEsS0FBQSxHQUFRLE1BQUEsR0FBUyxRQWpCakIsQ0FBQTtBQUFBLFlBa0JBLFNBQVMsQ0FBQyxjQUFWLENBQXlCLG1CQUFtQixDQUFDLFNBQXBCLENBQThCLENBQUMsS0FBRCxFQUFRLENBQVIsQ0FBOUIsQ0FBekIsQ0FsQkEsQ0FBQTtBQUFBOztBQW1CQTttQkFBQSx3REFBQSxHQUFBO0FBQ0UsNkNBREcseUJBQWMscUJBQ2pCLENBQUE7QUFBQSwrQkFBQSxJQUFDLENBQUEsVUFBRCxDQUFZLFlBQUEsR0FBZSxLQUEzQixFQUFrQyxVQUFBLEdBQWEsS0FBL0MsRUFBQSxDQURGO0FBQUE7OzJCQW5CQSxDQURGO0FBQUE7MEJBRFE7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFWLEVBRGM7SUFBQSxDQWoxQmhCLENBQUE7O0FBQUEscUJBMjJCQSxhQUFBLEdBQWUsU0FBQSxHQUFBO0FBQ2IsTUFBQSxTQUFBLENBQVUsc0NBQVYsQ0FBQSxDQUFBO2FBQ0EsSUFBQyxDQUFBLGNBQUQsQ0FBQSxFQUZhO0lBQUEsQ0EzMkJmLENBQUE7O0FBQUEscUJBcTNCQSxrQkFBQSxHQUFvQixTQUFDLEVBQUQsR0FBQTthQUNsQixJQUFDLENBQUEsUUFBRCxDQUFVLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7QUFBRyxjQUFBLDJDQUFBO0FBQUE7QUFBQTtlQUFBLDREQUFBO3FDQUFBO0FBQUEsMEJBQUEsRUFBQSxDQUFHLFNBQUgsRUFBYSxLQUFiLEVBQUEsQ0FBQTtBQUFBOzBCQUFIO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBVixFQURrQjtJQUFBLENBcjNCcEIsQ0FBQTs7QUFBQSxxQkF3M0JBLG1CQUFBLEdBQXFCLFNBQUMsT0FBRCxFQUFhLEVBQWIsR0FBQTtBQUNuQixVQUFBLGlCQUFBOztRQURvQixVQUFRO09BQzVCO0FBQUEsTUFBQyxvQkFBcUIsUUFBckIsaUJBQUQsQ0FBQTthQUNBLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixTQUFDLFNBQUQsR0FBQTtBQUNsQixZQUFBLFdBQUE7QUFBQSxRQUFBLEtBQUEsR0FBUSxTQUFTLENBQUMsY0FBVixDQUFBLENBQVIsQ0FBQTtBQUNBLFFBQUEsSUFBRyxpQkFBQSxJQUFzQixTQUFTLENBQUMsT0FBVixDQUFBLENBQXpCO0FBQ0UsVUFBQSxTQUFTLENBQUMsVUFBVixDQUFBLENBQUEsQ0FERjtTQURBO0FBQUEsUUFHQSxJQUFBLEdBQU8sU0FBUyxDQUFDLE9BQVYsQ0FBQSxDQUhQLENBQUE7QUFBQSxRQUlBLFNBQVMsQ0FBQyxrQkFBVixDQUFBLENBSkEsQ0FBQTtBQUFBLFFBS0EsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsRUFBQSxDQUFHLElBQUgsQ0FBckIsQ0FMQSxDQUFBO2VBTUEsU0FBUyxDQUFDLGNBQVYsQ0FBeUIsS0FBekIsRUFQa0I7TUFBQSxDQUFwQixFQUZtQjtJQUFBLENBeDNCckIsQ0FBQTs7QUFBQSxxQkFvNEJBLFNBQUEsR0FBVyxTQUFDLEVBQUQsR0FBQTthQUNULElBQUMsQ0FBQSxhQUFhLENBQUMsU0FBZixDQUF5QixFQUF6QixFQURTO0lBQUEsQ0FwNEJYLENBQUE7O0FBQUEscUJBdzRCQSxVQUFBLEdBQVksU0FBQSxHQUFBO2FBQ1YsSUFBQyxDQUFBLGFBQWEsQ0FBQyxVQUFmLENBQUEsRUFEVTtJQUFBLENBeDRCWixDQUFBOztBQUFBLHFCQTg1QkEsV0FBQSxHQUFhLFNBQUMsVUFBRCxHQUFBO2FBQ1gsSUFBQyxDQUFBLGFBQWEsQ0FBQyxXQUFmLENBQTJCLFVBQTNCLEVBRFc7SUFBQSxDQTk1QmIsQ0FBQTs7QUFBQSxxQkF1NkJBLGVBQUEsR0FBaUIsU0FBQSxHQUFBO0FBQ2YsVUFBQSxXQUFBO0FBQUEsTUFEZ0IsOERBQ2hCLENBQUE7YUFBQSxTQUFBLElBQUMsQ0FBQSxhQUFELENBQWMsQ0FBQyxlQUFmLGNBQStCLElBQS9CLEVBRGU7SUFBQSxDQXY2QmpCLENBQUE7O0FBQUEscUJBZzdCQSxlQUFBLEdBQWlCLFNBQUEsR0FBQTtBQUNmLFVBQUEsV0FBQTtBQUFBLE1BRGdCLDhEQUNoQixDQUFBO2FBQUEsU0FBQSxJQUFDLENBQUEsYUFBRCxDQUFjLENBQUMsZUFBZixjQUErQixJQUEvQixFQURlO0lBQUEsQ0FoN0JqQixDQUFBOztBQUFBLHFCQXk3QkEsa0JBQUEsR0FBb0IsU0FBQSxHQUFBO0FBQ2xCLFVBQUEsV0FBQTtBQUFBLE1BRG1CLDhEQUNuQixDQUFBO2FBQUEsU0FBQSxJQUFDLENBQUEsYUFBRCxDQUFjLENBQUMsa0JBQWYsY0FBa0MsSUFBbEMsRUFEa0I7SUFBQSxDQXo3QnBCLENBQUE7O0FBQUEscUJBazhCQSxrQkFBQSxHQUFvQixTQUFBLEdBQUE7QUFDbEIsVUFBQSxXQUFBO0FBQUEsTUFEbUIsOERBQ25CLENBQUE7YUFBQSxTQUFBLElBQUMsQ0FBQSxhQUFELENBQWMsQ0FBQyxrQkFBZixjQUFrQyxJQUFsQyxFQURrQjtJQUFBLENBbDhCcEIsQ0FBQTs7QUFBQSxxQkFzOEJBLGFBQUEsR0FBZSxTQUFBLEdBQUE7QUFDYixVQUFBLFdBQUE7QUFBQSxNQURjLDhEQUNkLENBQUE7YUFBQSxTQUFBLElBQUMsQ0FBQSxhQUFELENBQWMsQ0FBQyxhQUFmLGNBQTZCLElBQTdCLEVBRGE7SUFBQSxDQXQ4QmYsQ0FBQTs7QUFBQSxxQkE0OEJBLGNBQUEsR0FBZ0IsU0FBQSxHQUFBO2FBQ2QsSUFBQyxDQUFBLE1BQU0sQ0FBQyxjQUFSLENBQUEsRUFEYztJQUFBLENBNThCaEIsQ0FBQTs7QUFBQSxxQkFnOUJBLGtCQUFBLEdBQW9CLFNBQUEsR0FBQTthQUNsQixJQUFDLENBQUEsVUFBRCxDQUFBLENBQWEsQ0FBQyxNQUFkLEdBQXVCLEVBREw7SUFBQSxDQWg5QnBCLENBQUE7O0FBQUEscUJBbzlCQSxVQUFBLEdBQVksU0FBQSxHQUFBO2FBQU87Ozs7U0FBQSxLQUFBLEVBQU0sSUFBQyxDQUFBLE9BQVAsZ0JBQVA7SUFBQSxDQXA5QlosQ0FBQTs7QUFBQSxxQkF1OUJBLFNBQUEsR0FBVyxTQUFBLEdBQUE7YUFDVCxDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxPQUFSLEVBRFM7SUFBQSxDQXY5QlgsQ0FBQTs7QUFBQSxxQkE2OUJBLHlCQUFBLEdBQTJCLFNBQUMsY0FBRCxHQUFBO0FBQ3pCLE1BQUEsSUFBQyxDQUFBLGtCQUFELENBQW9CLGNBQXBCLEVBQW9DLElBQUMsQ0FBQSw0QkFBRCxDQUFBLENBQXBDLENBQUEsQ0FBQTthQUNBLElBQUMsQ0FBQSxnQkFBRCxDQUFBLENBQW1CLENBQUMsT0FGSztJQUFBLENBNzlCM0IsQ0FBQTs7QUFBQSxxQkFvK0JBLHlCQUFBLEdBQTJCLFNBQUMsY0FBRCxHQUFBO0FBQ3pCLE1BQUEsSUFBQyxDQUFBLGtCQUFELENBQW9CLGNBQXBCLEVBQW9DLElBQUMsQ0FBQSw0QkFBRCxDQUFBLENBQXBDLENBQUEsQ0FBQTthQUNBLElBQUMsQ0FBQSxnQkFBRCxDQUFBLENBQW1CLENBQUMsT0FGSztJQUFBLENBcCtCM0IsQ0FBQTs7QUFBQSxxQkF5K0JBLFNBQUEsR0FBVyxTQUFDLE1BQUQsR0FBQTtBQUNULFVBQUEsTUFBQTtBQUFBLE1BQUEsTUFBQSxHQUFhLElBQUEsTUFBQSxDQUFPO0FBQUEsUUFBQSxNQUFBLEVBQVEsSUFBUjtBQUFBLFFBQWMsTUFBQSxFQUFRLE1BQXRCO09BQVAsQ0FBYixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxNQUFkLENBREEsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxjQUFOLEVBQXNCLE1BQXRCLENBRkEsQ0FBQTthQUdBLE9BSlM7SUFBQSxDQXorQlgsQ0FBQTs7QUFBQSxxQkFnL0JBLFlBQUEsR0FBYyxTQUFDLE1BQUQsR0FBQTthQUNaLENBQUMsQ0FBQyxNQUFGLENBQVMsSUFBQyxDQUFBLE9BQVYsRUFBbUIsTUFBbkIsRUFEWTtJQUFBLENBaC9CZCxDQUFBOztBQUFBLHFCQXkvQkEsWUFBQSxHQUFjLFNBQUMsTUFBRCxFQUFTLE9BQVQsR0FBQTtBQUNaLFVBQUEsd0RBQUE7O1FBRHFCLFVBQVE7T0FDN0I7QUFBQSxNQUFBLElBQUEsQ0FBQSxNQUFhLENBQUMsYUFBUCxDQUFBLENBQXNCLENBQUMsYUFBOUI7QUFDRSxRQUFBLElBQUMsQ0FBQSxtQ0FBRCxDQUFxQyxNQUFNLENBQUMsY0FBUCxDQUFBLENBQXJDLENBQUEsQ0FERjtPQUFBO0FBQUEsTUFFQSxNQUFBLEdBQVMsSUFBQyxDQUFBLFNBQUQsQ0FBVyxNQUFYLENBRlQsQ0FBQTtBQUFBLE1BR0EsU0FBQSxHQUFnQixJQUFBLFNBQUEsQ0FBVSxDQUFDLENBQUMsTUFBRixDQUFTO0FBQUEsUUFBQyxNQUFBLEVBQVEsSUFBVDtBQUFBLFFBQWUsUUFBQSxNQUFmO0FBQUEsUUFBdUIsUUFBQSxNQUF2QjtPQUFULEVBQXlDLE9BQXpDLENBQVYsQ0FIaEIsQ0FBQTtBQUFBLE1BSUEsSUFBQyxDQUFBLFVBQVUsQ0FBQyxJQUFaLENBQWlCLFNBQWpCLENBSkEsQ0FBQTtBQUFBLE1BS0Esb0JBQUEsR0FBdUIsU0FBUyxDQUFDLGNBQVYsQ0FBQSxDQUx2QixDQUFBO0FBQUEsTUFNQSxJQUFDLENBQUEsMkJBQUQsQ0FBQSxDQU5BLENBQUE7QUFPQSxNQUFBLElBQUcsU0FBUyxDQUFDLFNBQWI7QUFDRTtBQUFBLGFBQUEsNENBQUE7Z0NBQUE7QUFDRSxVQUFBLElBQUcsU0FBUyxDQUFDLHFCQUFWLENBQWdDLG9CQUFoQyxDQUFIO0FBQ0UsbUJBQU8sU0FBUCxDQURGO1dBREY7QUFBQSxTQURGO09BQUEsTUFBQTtBQUtFLFFBQUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxpQkFBTixFQUF5QixTQUF6QixDQUFBLENBQUE7ZUFDQSxVQU5GO09BUlk7SUFBQSxDQXovQmQsQ0FBQTs7QUFBQSxxQkFpaENBLDBCQUFBLEdBQTRCLFNBQUMsV0FBRCxFQUFjLE9BQWQsR0FBQTs7UUFBYyxVQUFRO09BQ2hEO0FBQUEsTUFBQSxJQUFDLENBQUEsZUFBRCxDQUFpQixXQUFqQixFQUE4QixDQUFDLENBQUMsUUFBRixDQUFXLElBQUMsQ0FBQSw0QkFBRCxDQUFBLENBQVgsRUFBNEMsT0FBNUMsQ0FBOUIsQ0FBQSxDQUFBO2FBQ0EsSUFBQyxDQUFBLGdCQUFELENBQUEsRUFGMEI7SUFBQSxDQWpoQzVCLENBQUE7O0FBQUEscUJBNGhDQSxzQkFBQSxHQUF3QixTQUFDLFdBQUQsRUFBYyxPQUFkLEdBQUE7YUFDdEIsSUFBQyxDQUFBLHVCQUFELENBQXlCLENBQUMsV0FBRCxDQUF6QixFQUF3QyxPQUF4QyxFQURzQjtJQUFBLENBNWhDeEIsQ0FBQTs7QUFBQSxxQkFzaUNBLHNCQUFBLEdBQXdCLFNBQUMsV0FBRCxFQUFjLE9BQWQsR0FBQTthQUN0QixJQUFDLENBQUEsc0JBQUQsQ0FBd0IsSUFBQyxDQUFBLHlCQUFELENBQTJCLFdBQTNCLEVBQXdDLE9BQXhDLENBQXhCLEVBQTBFLE9BQTFFLEVBRHNCO0lBQUEsQ0F0aUN4QixDQUFBOztBQUFBLHFCQWdqQ0EsdUJBQUEsR0FBeUIsU0FBQyxZQUFELEVBQWUsT0FBZixHQUFBO0FBQ3ZCLFVBQUEsc0NBQUE7O1FBRHNDLFVBQVE7T0FDOUM7QUFBQSxNQUFBLElBQUEsQ0FBQSxZQUF1RixDQUFDLE1BQXhGO0FBQUEsY0FBVSxJQUFBLEtBQUEsQ0FBTSxrREFBTixDQUFWLENBQUE7T0FBQTtBQUFBLE1BRUEsVUFBQSxHQUFhLElBQUMsQ0FBQSxhQUFELENBQUEsQ0FGYixDQUFBO0FBR0E7QUFBQSxXQUFBLDRDQUFBOzhCQUFBO0FBQUEsUUFBQSxTQUFTLENBQUMsT0FBVixDQUFBLENBQUEsQ0FBQTtBQUFBLE9BSEE7YUFLQSxJQUFDLENBQUEsMkJBQUQsQ0FBNkIsT0FBN0IsRUFBc0MsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUNwQyxjQUFBLG1DQUFBO0FBQUE7ZUFBQSw2REFBQTswQ0FBQTtBQUNFLFlBQUEsV0FBQSxHQUFjLEtBQUssQ0FBQyxVQUFOLENBQWlCLFdBQWpCLENBQWQsQ0FBQTtBQUNBLFlBQUEsSUFBRyxVQUFXLENBQUEsQ0FBQSxDQUFkOzRCQUNFLFVBQVcsQ0FBQSxDQUFBLENBQUUsQ0FBQyxjQUFkLENBQTZCLFdBQTdCLEVBQTBDLE9BQTFDLEdBREY7YUFBQSxNQUFBOzRCQUdFLEtBQUMsQ0FBQSwwQkFBRCxDQUE0QixXQUE1QixFQUF5QyxPQUF6QyxHQUhGO2FBRkY7QUFBQTswQkFEb0M7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF0QyxFQU51QjtJQUFBLENBaGpDekIsQ0FBQTs7QUFBQSxxQkErakNBLGVBQUEsR0FBaUIsU0FBQyxTQUFELEdBQUE7QUFDZixNQUFBLENBQUMsQ0FBQyxNQUFGLENBQVMsSUFBQyxDQUFBLFVBQVYsRUFBc0IsU0FBdEIsQ0FBQSxDQUFBO2FBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxtQkFBTixFQUEyQixTQUEzQixFQUZlO0lBQUEsQ0EvakNqQixDQUFBOztBQUFBLHFCQXFrQ0EsZUFBQSxHQUFpQixTQUFBLEdBQUE7QUFDZixNQUFBLElBQUMsQ0FBQSxxQkFBRCxDQUFBLENBQUEsQ0FBQTthQUNBLElBQUMsQ0FBQSxZQUFELENBQUEsQ0FBZSxDQUFDLEtBQWhCLENBQUEsRUFGZTtJQUFBLENBcmtDakIsQ0FBQTs7QUFBQSxxQkEwa0NBLHFCQUFBLEdBQXVCLFNBQUEsR0FBQTtBQUNyQixVQUFBLHNDQUFBO0FBQUEsTUFBQSxVQUFBLEdBQWEsSUFBQyxDQUFBLGFBQUQsQ0FBQSxDQUFiLENBQUE7QUFDQSxNQUFBLElBQUcsVUFBVSxDQUFDLE1BQVgsR0FBb0IsQ0FBdkI7QUFDRTtBQUFBLGFBQUEsNENBQUE7Z0NBQUE7QUFBQSxVQUFBLFNBQVMsQ0FBQyxPQUFWLENBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQTtlQUNBLEtBRkY7T0FBQSxNQUFBO2VBSUUsTUFKRjtPQUZxQjtJQUFBLENBMWtDdkIsQ0FBQTs7QUFBQSxxQkFrbENBLDJCQUFBLEdBQTZCLFNBQUMsU0FBRCxHQUFBO2FBQzNCLElBQUMsQ0FBQSxJQUFELENBQU0sZ0NBQU4sRUFBd0MsU0FBeEMsRUFEMkI7SUFBQSxDQWxsQzdCLENBQUE7O0FBQUEscUJBd2xDQSxhQUFBLEdBQWUsU0FBQSxHQUFBO2FBQU87Ozs7U0FBQSxLQUFBLEVBQU0sSUFBQyxDQUFBLFVBQVAsZ0JBQVA7SUFBQSxDQXhsQ2YsQ0FBQTs7QUFBQSxxQkFrbUNBLFlBQUEsR0FBYyxTQUFDLEtBQUQsR0FBQTs7UUFDWixRQUFTLElBQUMsQ0FBQSxVQUFVLENBQUMsTUFBWixHQUFxQjtPQUE5QjthQUNBLElBQUMsQ0FBQSxVQUFXLENBQUEsS0FBQSxFQUZBO0lBQUEsQ0FsbUNkLENBQUE7O0FBQUEscUJBeW1DQSxnQkFBQSxHQUFrQixTQUFBLEdBQUE7YUFDaEIsQ0FBQyxDQUFDLElBQUYsQ0FBTyxJQUFDLENBQUEsVUFBUixFQURnQjtJQUFBLENBem1DbEIsQ0FBQTs7QUFBQSxxQkFnbkNBLG9DQUFBLEdBQXNDLFNBQUEsR0FBQTthQUNwQyxJQUFDLENBQUEsYUFBRCxDQUFBLENBQWdCLENBQUMsSUFBakIsQ0FBc0IsU0FBQyxDQUFELEVBQUksQ0FBSixHQUFBO2VBQVUsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLEVBQVY7TUFBQSxDQUF0QixFQURvQztJQUFBLENBaG5DdEMsQ0FBQTs7QUFBQSxxQkFzbkNBLHdCQUFBLEdBQTBCLFNBQUEsR0FBQTthQUN4QixDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxvQ0FBRCxDQUFBLENBQVAsRUFEd0I7SUFBQSxDQXRuQzFCLENBQUE7O0FBQUEscUJBK25DQSw4QkFBQSxHQUFnQyxTQUFDLFdBQUQsR0FBQTthQUM5QixDQUFDLENBQUMsR0FBRixDQUFNLElBQUMsQ0FBQSxhQUFELENBQUEsQ0FBTixFQUF3QixTQUFDLFNBQUQsR0FBQTtlQUN0QixTQUFTLENBQUMscUJBQVYsQ0FBZ0MsV0FBaEMsRUFEc0I7TUFBQSxDQUF4QixFQUQ4QjtJQUFBLENBL25DaEMsQ0FBQTs7QUFBQSxxQkEyb0NBLHVCQUFBLEdBQXlCLFNBQUMsUUFBRCxFQUFXLE9BQVgsR0FBQTthQUN2QixJQUFDLENBQUEsV0FBRCxDQUFhLFNBQUMsTUFBRCxHQUFBO2VBQVksTUFBTSxDQUFDLGlCQUFQLENBQXlCLFFBQXpCLEVBQW1DLE9BQW5DLEVBQVo7TUFBQSxDQUFiLEVBRHVCO0lBQUEsQ0Ezb0N6QixDQUFBOztBQUFBLHFCQWtwQ0EsdUJBQUEsR0FBeUIsU0FBQSxHQUFBO2FBQ3ZCLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBWSxDQUFDLGlCQUFiLENBQUEsRUFEdUI7SUFBQSxDQWxwQ3pCLENBQUE7O0FBQUEscUJBd3BDQSxrQkFBQSxHQUFvQixTQUFBLEdBQUE7YUFDbEIsSUFBQyxDQUFBLFNBQUQsQ0FBQSxDQUFZLENBQUMsWUFBYixDQUFBLEVBRGtCO0lBQUEsQ0F4cENwQixDQUFBOztBQUFBLHFCQW1xQ0EsdUJBQUEsR0FBeUIsU0FBQyxRQUFELEVBQVcsT0FBWCxHQUFBO2FBQ3ZCLElBQUMsQ0FBQSxXQUFELENBQWEsU0FBQyxNQUFELEdBQUE7ZUFBWSxNQUFNLENBQUMsaUJBQVAsQ0FBeUIsUUFBekIsRUFBbUMsT0FBbkMsRUFBWjtNQUFBLENBQWIsRUFEdUI7SUFBQSxDQW5xQ3pCLENBQUE7O0FBQUEscUJBMHFDQSx1QkFBQSxHQUF5QixTQUFBLEdBQUE7YUFDdkIsSUFBQyxDQUFBLFNBQUQsQ0FBQSxDQUFZLENBQUMsaUJBQWIsQ0FBQSxFQUR1QjtJQUFBLENBMXFDekIsQ0FBQTs7QUFBQSxxQkFpckNBLHNCQUFBLEdBQXdCLFNBQUEsR0FBQTthQUN0QixJQUFDLENBQUEsZ0JBQUQsQ0FBQSxDQUFtQixDQUFDLGNBQXBCLENBQUEsRUFEc0I7SUFBQSxDQWpyQ3hCLENBQUE7O0FBQUEscUJBd3JDQSxzQkFBQSxHQUF3QixTQUFBLEdBQUE7YUFDdEIsSUFBQyxDQUFBLGdCQUFELENBQUEsQ0FBbUIsQ0FBQyxjQUFwQixDQUFBLEVBRHNCO0lBQUEsQ0F4ckN4QixDQUFBOztBQUFBLHFCQWdzQ0EsdUJBQUEsR0FBeUIsU0FBQSxHQUFBO0FBQ3ZCLFVBQUEsb0NBQUE7QUFBQTtBQUFBO1dBQUEsNENBQUE7OEJBQUE7QUFBQSxzQkFBQSxTQUFTLENBQUMsY0FBVixDQUFBLEVBQUEsQ0FBQTtBQUFBO3NCQUR1QjtJQUFBLENBaHNDekIsQ0FBQTs7QUFBQSxxQkF3c0NBLHVCQUFBLEdBQXlCLFNBQUEsR0FBQTtBQUN2QixVQUFBLG9DQUFBO0FBQUE7QUFBQTtXQUFBLDRDQUFBOzhCQUFBO0FBQUEsc0JBQUEsU0FBUyxDQUFDLGNBQVYsQ0FBQSxFQUFBLENBQUE7QUFBQTtzQkFEdUI7SUFBQSxDQXhzQ3pCLENBQUE7O0FBQUEscUJBOHNDQSxlQUFBLEdBQWlCLFNBQUEsR0FBQTthQUNmLElBQUMsQ0FBQSxnQkFBRCxDQUFBLENBQW1CLENBQUMsT0FBcEIsQ0FBQSxFQURlO0lBQUEsQ0E5c0NqQixDQUFBOztBQUFBLHFCQXN0Q0Esb0JBQUEsR0FBc0IsU0FBQyxLQUFELEdBQUE7YUFDcEIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxjQUFSLENBQXVCLEtBQXZCLEVBRG9CO0lBQUEsQ0F0dEN0QixDQUFBOztBQUFBLHFCQSt0Q0Esb0JBQUEsR0FBc0IsU0FBQyxLQUFELEVBQVEsSUFBUixHQUFBO2FBQWlCLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBWSxDQUFDLGNBQWIsQ0FBNEIsS0FBNUIsRUFBbUMsSUFBbkMsRUFBakI7SUFBQSxDQS90Q3RCLENBQUE7O0FBQUEscUJBcXVDQSw4QkFBQSxHQUFnQyxTQUFBLEdBQUE7YUFDOUIsSUFBQyxDQUFBLFNBQUQsQ0FBQSxDQUFZLENBQUMsOEJBQWIsQ0FBQSxFQUQ4QjtJQUFBLENBcnVDaEMsQ0FBQTs7QUFBQSxxQkEydUNBLGtCQUFBLEdBQW9CLFNBQUMsT0FBRCxHQUFBO2FBQ2xCLElBQUMsQ0FBQSxvQkFBRCxDQUFzQixJQUFDLENBQUEsU0FBRCxDQUFBLENBQVksQ0FBQyx5QkFBYixDQUF1QyxPQUF2QyxDQUF0QixFQURrQjtJQUFBLENBM3VDcEIsQ0FBQTs7QUFBQSxxQkErdUNBLFlBQUEsR0FBYyxTQUFDLFNBQUQsR0FBQTthQUNaLElBQUMsQ0FBQSxXQUFELENBQWEsU0FBQyxNQUFELEdBQUE7ZUFBWSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQWQsRUFBeUI7QUFBQSxVQUFBLG9CQUFBLEVBQXNCLElBQXRCO1NBQXpCLEVBQVo7TUFBQSxDQUFiLEVBRFk7SUFBQSxDQS91Q2QsQ0FBQTs7QUFBQSxxQkFtdkNBLGNBQUEsR0FBZ0IsU0FBQyxTQUFELEdBQUE7YUFDZCxJQUFDLENBQUEsV0FBRCxDQUFhLFNBQUMsTUFBRCxHQUFBO2VBQVksTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsU0FBaEIsRUFBMkI7QUFBQSxVQUFBLG9CQUFBLEVBQXNCLElBQXRCO1NBQTNCLEVBQVo7TUFBQSxDQUFiLEVBRGM7SUFBQSxDQW52Q2hCLENBQUE7O0FBQUEscUJBdXZDQSxjQUFBLEdBQWdCLFNBQUEsR0FBQTthQUNkLElBQUMsQ0FBQSxXQUFELENBQWEsU0FBQyxNQUFELEdBQUE7ZUFBWSxNQUFNLENBQUMsUUFBUCxDQUFnQjtBQUFBLFVBQUEsb0JBQUEsRUFBc0IsSUFBdEI7U0FBaEIsRUFBWjtNQUFBLENBQWIsRUFEYztJQUFBLENBdnZDaEIsQ0FBQTs7QUFBQSxxQkEydkNBLGVBQUEsR0FBaUIsU0FBQSxHQUFBO2FBQ2YsSUFBQyxDQUFBLFdBQUQsQ0FBYSxTQUFDLE1BQUQsR0FBQTtlQUFZLE1BQU0sQ0FBQyxTQUFQLENBQWlCO0FBQUEsVUFBQSxvQkFBQSxFQUFzQixJQUF0QjtTQUFqQixFQUFaO01BQUEsQ0FBYixFQURlO0lBQUEsQ0EzdkNqQixDQUFBOztBQUFBLHFCQWl3Q0EsZUFBQSxHQUFpQixTQUFBLEdBQUE7YUFDZixJQUFDLENBQUEsV0FBRCxDQUFhLFNBQUMsTUFBRCxHQUFBO2VBQVksTUFBTSxDQUFDLFNBQVAsQ0FBQSxFQUFaO01BQUEsQ0FBYixFQURlO0lBQUEsQ0Fqd0NqQixDQUFBOztBQUFBLHFCQXV3Q0Esa0JBQUEsR0FBb0IsU0FBQSxHQUFBO2FBQ2xCLElBQUMsQ0FBQSxXQUFELENBQWEsU0FBQyxNQUFELEdBQUE7ZUFBWSxNQUFNLENBQUMsWUFBUCxDQUFBLEVBQVo7TUFBQSxDQUFiLEVBRGtCO0lBQUEsQ0F2d0NwQixDQUFBOztBQUFBLHFCQTJ3Q0EsaUNBQUEsR0FBbUMsU0FBQSxHQUFBO2FBQ2pDLElBQUMsQ0FBQSxXQUFELENBQWEsU0FBQyxNQUFELEdBQUE7ZUFBWSxNQUFNLENBQUMsMkJBQVAsQ0FBQSxFQUFaO01BQUEsQ0FBYixFQURpQztJQUFBLENBM3dDbkMsQ0FBQTs7QUFBQSxxQkErd0NBLDJCQUFBLEdBQTZCLFNBQUEsR0FBQTthQUMzQixJQUFDLENBQUEsV0FBRCxDQUFhLFNBQUMsTUFBRCxHQUFBO2VBQVksTUFBTSxDQUFDLHFCQUFQLENBQUEsRUFBWjtNQUFBLENBQWIsRUFEMkI7SUFBQSxDQS93QzdCLENBQUE7O0FBQUEscUJBbXhDQSxnQ0FBQSxHQUFrQyxTQUFBLEdBQUE7YUFDaEMsSUFBQyxDQUFBLFdBQUQsQ0FBYSxTQUFDLE1BQUQsR0FBQTtlQUFZLE1BQU0sQ0FBQywwQkFBUCxDQUFBLEVBQVo7TUFBQSxDQUFiLEVBRGdDO0lBQUEsQ0FueENsQyxDQUFBOztBQUFBLHFCQXV4Q0EsMkJBQUEsR0FBNkIsU0FBQSxHQUFBO2FBQzNCLElBQUMsQ0FBQSxXQUFELENBQWEsU0FBQyxNQUFELEdBQUE7ZUFBWSxNQUFNLENBQUMscUJBQVAsQ0FBQSxFQUFaO01BQUEsQ0FBYixFQUQyQjtJQUFBLENBdnhDN0IsQ0FBQTs7QUFBQSxxQkEyeENBLHFCQUFBLEdBQXVCLFNBQUEsR0FBQTthQUNyQixJQUFDLENBQUEsV0FBRCxDQUFhLFNBQUMsTUFBRCxHQUFBO2VBQVksTUFBTSxDQUFDLGVBQVAsQ0FBQSxFQUFaO01BQUEsQ0FBYixFQURxQjtJQUFBLENBM3hDdkIsQ0FBQTs7QUFBQSxxQkEreENBLDJCQUFBLEdBQTZCLFNBQUEsR0FBQTthQUMzQixJQUFDLENBQUEsV0FBRCxDQUFhLFNBQUMsTUFBRCxHQUFBO2VBQVksTUFBTSxDQUFDLHFCQUFQLENBQUEsRUFBWjtNQUFBLENBQWIsRUFEMkI7SUFBQSxDQS94QzdCLENBQUE7O0FBQUEscUJBbXlDQSxxQkFBQSxHQUF1QixTQUFBLEdBQUE7YUFDckIsSUFBQyxDQUFBLFdBQUQsQ0FBYSxTQUFDLE1BQUQsR0FBQTtlQUFZLE1BQU0sQ0FBQyxlQUFQLENBQUEsRUFBWjtNQUFBLENBQWIsRUFEcUI7SUFBQSxDQW55Q3ZCLENBQUE7O0FBQUEscUJBdXlDQSwrQkFBQSxHQUFpQyxTQUFBLEdBQUE7YUFDL0IsSUFBQyxDQUFBLFdBQUQsQ0FBYSxTQUFDLE1BQUQsR0FBQTtlQUFZLE1BQU0sQ0FBQyx5QkFBUCxDQUFBLEVBQVo7TUFBQSxDQUFiLEVBRCtCO0lBQUEsQ0F2eUNqQyxDQUFBOztBQUFBLHFCQTJ5Q0EsZ0NBQUEsR0FBa0MsU0FBQSxHQUFBO2FBQ2hDLElBQUMsQ0FBQSxXQUFELENBQWEsU0FBQyxNQUFELEdBQUE7ZUFBWSxNQUFNLENBQUMsMEJBQVAsQ0FBQSxFQUFaO01BQUEsQ0FBYixFQURnQztJQUFBLENBM3lDbEMsQ0FBQTs7QUFBQSxxQkEreUNBLDRCQUFBLEdBQThCLFNBQUEsR0FBQTthQUM1QixJQUFDLENBQUEsV0FBRCxDQUFhLFNBQUMsTUFBRCxHQUFBO2VBQVksTUFBTSxDQUFDLHNCQUFQLENBQUEsRUFBWjtNQUFBLENBQWIsRUFENEI7SUFBQSxDQS95QzlCLENBQUE7O0FBQUEscUJBa3pDQSxzQkFBQSxHQUF3QixTQUFBLEdBQUE7YUFDdEIsSUFBQyxDQUFBLFNBQUQsQ0FBQSxDQUFZLENBQUMsVUFBYixDQUFBLEVBRHNCO0lBQUEsQ0FsekN4QixDQUFBOztBQUFBLHFCQXF6Q0EsTUFBQSxHQUFRLFNBQUEsR0FBQTthQUNOLElBQUMsQ0FBQSxZQUFELENBQWMsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUFBLEdBQWtCLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBaEMsRUFETTtJQUFBLENBcnpDUixDQUFBOztBQUFBLHFCQXd6Q0EsUUFBQSxHQUFVLFNBQUEsR0FBQTthQUNSLElBQUMsQ0FBQSxZQUFELENBQWMsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUFBLEdBQWtCLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBaEMsRUFEUTtJQUFBLENBeHpDVixDQUFBOztBQUFBLHFCQTJ6Q0EsV0FBQSxHQUFhLFNBQUMsRUFBRCxHQUFBO0FBQ1gsTUFBQSxJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFqQixDQUFBO2FBQ0EsSUFBQyxDQUFBLFlBQUQsQ0FBYyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQSxHQUFBO0FBQ1osY0FBQSx1QkFBQTtBQUFBO0FBQUEsZUFBQSw0Q0FBQTsrQkFBQTtBQUFBLFlBQUEsRUFBQSxDQUFHLE1BQUgsQ0FBQSxDQUFBO0FBQUEsV0FBQTtBQUFBLFVBQ0EsS0FBQyxDQUFBLFlBQUQsQ0FBQSxDQURBLENBQUE7QUFBQSxVQUVBLEtBQUMsQ0FBQSxhQUFELEdBQWlCLEtBRmpCLENBQUE7aUJBR0EsS0FBQyxDQUFBLElBQUQsQ0FBTSxlQUFOLEVBSlk7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFkLEVBRlc7SUFBQSxDQTN6Q2IsQ0FBQTs7QUFBQSxxQkFtMENBLFdBQUEsR0FBYSxTQUFDLEtBQUQsR0FBQTtBQUNYLE1BQUEsSUFBQyxDQUFBLElBQUQsQ0FBTSxjQUFOLEVBQXNCLEtBQXRCLENBQUEsQ0FBQTtBQUNBLE1BQUEsSUFBQSxDQUFBLElBQThCLENBQUEsYUFBOUI7ZUFBQSxJQUFDLENBQUEsSUFBRCxDQUFNLGVBQU4sRUFBQTtPQUZXO0lBQUEsQ0FuMENiLENBQUE7O0FBQUEscUJBNjBDQSxzQkFBQSxHQUF3QixTQUFDLFFBQUQsR0FBQTtBQUN0QixVQUFBLGFBQUE7QUFBQSxNQUFBLGFBQUEsR0FBZ0IsSUFBQyxDQUFBLGdCQUFELENBQUEsQ0FBaEIsQ0FBQTtBQUFBLE1BQ0EsYUFBYSxDQUFDLHNCQUFkLENBQXFDLFFBQXJDLENBREEsQ0FBQTthQUVBLElBQUMsQ0FBQSwyQkFBRCxDQUE2QjtBQUFBLFFBQUEsUUFBQSxFQUFVLGFBQWEsQ0FBQyxVQUFkLENBQUEsQ0FBVjtPQUE3QixFQUhzQjtJQUFBLENBNzBDeEIsQ0FBQTs7QUFBQSxxQkFzMUNBLFdBQUEsR0FBYSxTQUFBLEdBQUE7YUFDWCxJQUFDLENBQUEsdUJBQUQsQ0FBeUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsU0FBRCxHQUFBO2lCQUFlLFNBQVMsQ0FBQyxXQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCLEVBRFc7SUFBQSxDQXQxQ2IsQ0FBQTs7QUFBQSxxQkE2MUNBLFVBQUEsR0FBWSxTQUFBLEdBQUE7YUFDVixJQUFDLENBQUEsd0JBQUQsQ0FBMEIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsU0FBRCxHQUFBO2lCQUFlLFNBQVMsQ0FBQyxVQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRFU7SUFBQSxDQTcxQ1osQ0FBQTs7QUFBQSxxQkFvMkNBLFFBQUEsR0FBVSxTQUFDLFFBQUQsR0FBQTthQUNSLElBQUMsQ0FBQSx3QkFBRCxDQUEwQixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLFFBQVYsQ0FBbUIsUUFBbkIsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRFE7SUFBQSxDQXAyQ1YsQ0FBQTs7QUFBQSxxQkEyMkNBLFVBQUEsR0FBWSxTQUFDLFFBQUQsR0FBQTthQUNWLElBQUMsQ0FBQSx1QkFBRCxDQUF5QixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsUUFBckIsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCLEVBRFU7SUFBQSxDQTMyQ1osQ0FBQTs7QUFBQSxxQkFrM0NBLFdBQUEsR0FBYSxTQUFBLEdBQUE7YUFDWCxJQUFDLENBQUEsd0JBQUQsQ0FBMEIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsU0FBRCxHQUFBO2lCQUFlLFNBQVMsQ0FBQyxXQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRFc7SUFBQSxDQWwzQ2IsQ0FBQTs7QUFBQSxxQkF3M0NBLFNBQUEsR0FBVyxTQUFBLEdBQUE7YUFDVCxJQUFDLENBQUEsdUJBQUQsQ0FBeUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsU0FBRCxHQUFBO2lCQUFlLFNBQVMsQ0FBQyxTQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCLEVBRFM7SUFBQSxDQXgzQ1gsQ0FBQTs7QUFBQSxxQkErM0NBLGNBQUEsR0FBZ0IsU0FBQSxHQUFBO2FBQ2QsSUFBQyxDQUFBLHVCQUFELENBQXlCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLFNBQUQsR0FBQTtpQkFBZSxTQUFTLENBQUMsY0FBVixDQUFBLEVBQWY7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF6QixFQURjO0lBQUEsQ0EvM0NoQixDQUFBOztBQUFBLHFCQXM0Q0EsdUJBQUEsR0FBeUIsU0FBQSxHQUFBO2FBQ3ZCLElBQUMsQ0FBQSx3QkFBRCxDQUEwQixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLHVCQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRHVCO0lBQUEsQ0F0NEN6QixDQUFBOztBQUFBLHFCQSs0Q0EsNEJBQUEsR0FBOEIsU0FBQSxHQUFBO2FBQzVCLElBQUMsQ0FBQSx3QkFBRCxDQUEwQixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLDRCQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRDRCO0lBQUEsQ0EvNEM5QixDQUFBOztBQUFBLHFCQXM1Q0EsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO2FBQ2pCLElBQUMsQ0FBQSx1QkFBRCxDQUF5QixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLGlCQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCLEVBRGlCO0lBQUEsQ0F0NUNuQixDQUFBOztBQUFBLHFCQTY1Q0EsNEJBQUEsR0FBOEIsU0FBQSxHQUFBO2FBQzVCLElBQUMsQ0FBQSx3QkFBRCxDQUEwQixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLDRCQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRDRCO0lBQUEsQ0E3NUM5QixDQUFBOztBQUFBLHFCQW82Q0Esd0JBQUEsR0FBMEIsU0FBQSxHQUFBO2FBQ3hCLElBQUMsQ0FBQSx1QkFBRCxDQUF5QixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLHdCQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCLEVBRHdCO0lBQUEsQ0FwNkMxQixDQUFBOztBQUFBLHFCQTA2Q0EsVUFBQSxHQUFZLFNBQUEsR0FBQTthQUNWLElBQUMsQ0FBQSx1QkFBRCxDQUF5QixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLFVBQVYsQ0FBQSxFQUFmO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBekIsRUFEVTtJQUFBLENBMTZDWixDQUFBOztBQUFBLHFCQXE3Q0EsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO2FBQ2pCLElBQUMsQ0FBQSx1QkFBRCxDQUF5QixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLGlCQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpCLEVBRGlCO0lBQUEsQ0FyN0NuQixDQUFBOztBQUFBLHFCQWc4Q0EsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO2FBQ2pCLElBQUMsQ0FBQSx3QkFBRCxDQUEwQixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxTQUFELEdBQUE7aUJBQWUsU0FBUyxDQUFDLGlCQUFWLENBQUEsRUFBZjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCLEVBRGlCO0lBQUEsQ0FoOENuQixDQUFBOztBQUFBLHFCQXc4Q0Esd0JBQUEsR0FBMEIsU0FBQSxHQUFBO0FBQ3hCLFVBQUEsNERBQUE7QUFBQTtBQUFBO1dBQUEsNENBQUE7OEJBQUE7QUFDRSxRQUFBLEtBQUEsR0FBUSxTQUFTLENBQUMsY0FBVixDQUFBLENBQVIsQ0FBQTtBQUNBLFFBQUEsSUFBWSxLQUFLLENBQUMsWUFBTixDQUFBLENBQVo7QUFBQSxtQkFBQTtTQURBO0FBQUEsUUFHQSxTQUFTLENBQUMsT0FBVixDQUFBLENBSEEsQ0FBQTtBQUFBLFFBSUMsY0FBQSxLQUFELEVBQVEsWUFBQSxHQUpSLENBQUE7QUFBQSxRQUtBLElBQUMsQ0FBQSwwQkFBRCxDQUE0QixDQUFDLEtBQUQsRUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFQLEVBQVksUUFBWixDQUFSLENBQTVCLENBTEEsQ0FBQTtBQUFBLFFBTUMsTUFBTyxNQUFQLEdBTkQsQ0FBQTtBQU9BLGVBQU0sRUFBQSxHQUFBLEdBQVEsR0FBRyxDQUFDLEdBQWxCLEdBQUE7QUFDRSxVQUFBLElBQUMsQ0FBQSwwQkFBRCxDQUE0QixDQUFDLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FBRCxFQUFXLENBQUMsR0FBRCxFQUFNLFFBQU4sQ0FBWCxDQUE1QixDQUFBLENBREY7UUFBQSxDQVBBO0FBQUEsc0JBU0EsSUFBQyxDQUFBLDBCQUFELENBQTRCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBTCxFQUFVLENBQVYsQ0FBRCxFQUFlLENBQUMsR0FBRyxDQUFDLEdBQUwsRUFBVSxHQUFHLENBQUMsTUFBZCxDQUFmLENBQTVCLEVBVEEsQ0FERjtBQUFBO3NCQUR3QjtJQUFBLENBeDhDMUIsQ0FBQTs7QUFBQSxxQkF5OUNBLFNBQUEsR0FBVyxTQUFBLEdBQUE7YUFDVCxJQUFDLENBQUEsa0JBQUQsQ0FBb0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsU0FBRCxHQUFBO0FBQ2xCLGNBQUEsSUFBQTtBQUFBLFVBQUEsSUFBRyxTQUFTLENBQUMsT0FBVixDQUFBLENBQUg7QUFDRSxZQUFBLFNBQVMsQ0FBQyxXQUFWLENBQUEsQ0FBQSxDQUFBO0FBQUEsWUFDQSxJQUFBLEdBQU8sU0FBUyxDQUFDLE9BQVYsQ0FBQSxDQURQLENBQUE7QUFBQSxZQUVBLFNBQVMsQ0FBQyxRQUFELENBQVQsQ0FBQSxDQUZBLENBQUE7QUFBQSxZQUdBLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBakIsQ0FBQSxDQUhBLENBQUE7bUJBSUEsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsSUFBckIsRUFMRjtXQUFBLE1BQUE7bUJBT0UsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsU0FBUyxDQUFDLE9BQVYsQ0FBQSxDQUFtQixDQUFDLEtBQXBCLENBQTBCLEVBQTFCLENBQTZCLENBQUMsT0FBOUIsQ0FBQSxDQUF1QyxDQUFDLElBQXhDLENBQTZDLEVBQTdDLENBQXJCLEVBUEY7V0FEa0I7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQixFQURTO0lBQUEsQ0F6OUNYLENBQUE7O0FBQUEscUJBdytDQSxTQUFBLEdBQVcsU0FBQSxHQUFBO2FBQ1QsSUFBQyxDQUFBLG1CQUFELENBQXFCO0FBQUEsUUFBQSxpQkFBQSxFQUFrQixJQUFsQjtPQUFyQixFQUE2QyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxJQUFELEdBQUE7aUJBQVUsSUFBSSxDQUFDLFdBQUwsQ0FBQSxFQUFWO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBN0MsRUFEUztJQUFBLENBeCtDWCxDQUFBOztBQUFBLHFCQSsrQ0EsU0FBQSxHQUFXLFNBQUEsR0FBQTthQUNULElBQUMsQ0FBQSxtQkFBRCxDQUFxQjtBQUFBLFFBQUEsaUJBQUEsRUFBa0IsSUFBbEI7T0FBckIsRUFBNkMsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsSUFBRCxHQUFBO2lCQUFVLElBQUksQ0FBQyxXQUFMLENBQUEsRUFBVjtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTdDLEVBRFM7SUFBQSxDQS8rQ1gsQ0FBQTs7QUFBQSxxQkEwL0NBLFNBQUEsR0FBVyxTQUFBLEdBQUE7YUFDVCxJQUFDLENBQUEsa0JBQUQsQ0FBb0IsU0FBQyxTQUFELEdBQUE7ZUFBZSxTQUFTLENBQUMsU0FBVixDQUFBLEVBQWY7TUFBQSxDQUFwQixFQURTO0lBQUEsQ0ExL0NYLENBQUE7O0FBQUEscUJBaWdEQSx1QkFBQSxHQUF5QixTQUFBLEdBQUE7YUFDdkIsSUFBQyxDQUFBLHdCQUFELENBQTBCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLFNBQUQsR0FBQTtpQkFBZSxTQUFTLENBQUMsdUJBQVYsQ0FBQSxFQUFmO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUIsRUFEdUI7SUFBQSxDQWpnRHpCLENBQUE7O0FBQUEscUJBd2dEQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7YUFDakIsSUFBQyxDQUFBLHVCQUFELENBQXlCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLFNBQUQsR0FBQTtpQkFBZSxTQUFTLENBQUMsaUJBQVYsQ0FBQSxFQUFmO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBekIsRUFEaUI7SUFBQSxDQXhnRG5CLENBQUE7O0FBQUEscUJBK2dEQSwyQkFBQSxHQUE2QixTQUFBLEdBQUE7YUFDM0IsSUFBQyxDQUFBLHVCQUFELENBQXlCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLFNBQUQsR0FBQTtpQkFBZSxTQUFTLENBQUMsMkJBQVYsQ0FBQSxFQUFmO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBekIsRUFEMkI7SUFBQSxDQS9nRDdCLENBQUE7O0FBQUEscUJBbWhEQSxVQUFBLEdBQVksU0FBQSxHQUFBO2FBQ1YsSUFBQyxDQUFBLHVCQUFELENBQXlCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLFNBQUQsR0FBQTtpQkFBZSxTQUFTLENBQUMsVUFBVixDQUFBLEVBQWY7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF6QixFQURVO0lBQUEsQ0FuaERaLENBQUE7O0FBQUEscUJBMmhEQSxZQUFBLEdBQWMsU0FBQyxNQUFELEdBQUE7QUFDWixVQUFBLEtBQUE7QUFBQSxNQUFBLElBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBQSxDQUFIO0FBQ0UsUUFBQSxLQUFBLEdBQVEsTUFBTSxDQUFDLGNBQVAsQ0FBQSxDQUFSLENBQUE7QUFBQSxRQUNBLElBQUMsQ0FBQSxzQkFBRCxDQUF3QixLQUF4QixDQURBLENBQUE7ZUFFQSxNQUhGO09BRFk7SUFBQSxDQTNoRGQsQ0FBQTs7QUFBQSxxQkFraURBLFlBQUEsR0FBYyxTQUFBLEdBQUE7QUFDWixVQUFBLHNEQUFBO0FBQUEsTUFBQSxTQUFBLEdBQVksRUFBWixDQUFBO0FBQ0E7QUFBQTtXQUFBLDRDQUFBOzJCQUFBO0FBQ0UsUUFBQSxRQUFBLEdBQVcsTUFBTSxDQUFDLGlCQUFQLENBQUEsQ0FBMEIsQ0FBQyxRQUEzQixDQUFBLENBQVgsQ0FBQTtBQUNBLFFBQUEsSUFBRyxlQUFZLFNBQVosRUFBQSxRQUFBLE1BQUg7d0JBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBQSxHQURGO1NBQUEsTUFBQTt3QkFHRSxTQUFTLENBQUMsSUFBVixDQUFlLFFBQWYsR0FIRjtTQUZGO0FBQUE7c0JBRlk7SUFBQSxDQWxpRGQsQ0FBQTs7QUFBQSxxQkE0aURBLHVCQUFBLEdBQXlCLFNBQUMsRUFBRCxHQUFBO2FBQ3ZCLElBQUMsQ0FBQSwyQkFBRCxDQUE2QixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQSxHQUFBO0FBQzNCLGNBQUEsb0NBQUE7QUFBQTtBQUFBO2VBQUEsNENBQUE7a0NBQUE7QUFBQSwwQkFBQSxFQUFBLENBQUcsU0FBSCxFQUFBLENBQUE7QUFBQTswQkFEMkI7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE3QixFQUR1QjtJQUFBLENBNWlEekIsQ0FBQTs7QUFBQSxxQkFrakRBLHdCQUFBLEdBQTBCLFNBQUMsRUFBRCxHQUFBO2FBQ3hCLElBQUMsQ0FBQSwyQkFBRCxDQUE2QjtBQUFBLFFBQUEsUUFBQSxFQUFVLElBQVY7T0FBN0IsRUFBNkMsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtBQUMzQyxjQUFBLG9DQUFBO0FBQUE7QUFBQTtlQUFBLDRDQUFBO2tDQUFBO0FBQUEsMEJBQUEsRUFBQSxDQUFHLFNBQUgsRUFBQSxDQUFBO0FBQUE7MEJBRDJDO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBN0MsRUFEd0I7SUFBQSxDQWxqRDFCLENBQUE7O0FBQUEscUJBc2pEQSxrQkFBQSxHQUFvQixTQUFBLEdBQUE7QUFDbEIsVUFBQSxvQ0FBQTtBQUFBO0FBQUE7V0FBQSw0Q0FBQTs4QkFBQTtBQUFBLHNCQUFBLFNBQVMsQ0FBQyxRQUFWLENBQUEsRUFBQSxDQUFBO0FBQUE7c0JBRGtCO0lBQUEsQ0F0akRwQixDQUFBOztBQUFBLHFCQTRqREEsMkJBQUEsR0FBNkIsU0FBQSxHQUFBO0FBQzNCLFVBQUEseUNBQUE7QUFBQSxNQUQ0Qiw4REFDNUIsQ0FBQTtBQUFBLE1BQUEsSUFBbUIsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxDQUFDLENBQUMsSUFBRixDQUFPLElBQVAsQ0FBYixDQUFuQjtBQUFBLFFBQUEsRUFBQSxHQUFLLElBQUksQ0FBQyxHQUFMLENBQUEsQ0FBTCxDQUFBO09BQUE7QUFBQSxNQUNBLE9BQUEsMENBQXVCLEVBRHZCLENBQUE7QUFHQSxNQUFBLElBQWdCLElBQUMsQ0FBQSx3QkFBakI7QUFBQSwwQ0FBTyxhQUFQLENBQUE7T0FIQTtBQUtBLE1BQUEsSUFBRyxVQUFIO0FBQ0UsUUFBQSxJQUFDLENBQUEsd0JBQUQsR0FBNEIsSUFBNUIsQ0FBQTtBQUFBLFFBQ0EsTUFBQSxHQUFTLEVBQUEsQ0FBQSxDQURULENBQUE7QUFBQSxRQUVBLElBQUMsQ0FBQSx3QkFBRCxHQUE0QixLQUY1QixDQURGO09BTEE7QUFBQSxNQVVBLE9BQUEsR0FBVSxTQUFDLGtCQUFELEVBQXFCLFNBQXJCLEdBQUE7QUFDUixZQUFBLHFCQUFBO0FBQUEsUUFBQSxxQkFBQSxHQUF3QixDQUFDLENBQUMsSUFBRixDQUFPLGtCQUFQLEVBQTJCLFNBQUMsQ0FBRCxHQUFBO2lCQUFPLENBQUMsQ0FBQyxjQUFGLENBQWlCLFNBQWpCLEVBQVA7UUFBQSxDQUEzQixDQUF4QixDQUFBO0FBQ0EsUUFBQSxJQUFHLDZCQUFIO0FBQ0UsVUFBQSxxQkFBcUIsQ0FBQyxLQUF0QixDQUE0QixTQUE1QixFQUF1QyxPQUF2QyxDQUFBLENBQUE7aUJBQ0EsbUJBRkY7U0FBQSxNQUFBO2lCQUlFLGtCQUFrQixDQUFDLE1BQW5CLENBQTBCLENBQUMsU0FBRCxDQUExQixFQUpGO1NBRlE7TUFBQSxDQVZWLENBQUE7YUFrQkEsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxJQUFDLENBQUEsYUFBRCxDQUFBLENBQVQsRUFBMkIsT0FBM0IsRUFBb0MsRUFBcEMsRUFuQjJCO0lBQUEsQ0E1akQ3QixDQUFBOztBQUFBLHFCQWlsREEsb0NBQUEsR0FBc0MsU0FBQSxHQUFBO0FBQ3BDLFVBQUEsY0FBQTtBQUFBLE1BQUEsY0FBQSxHQUFpQixJQUFqQixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxNQUFaLEVBQW9CLGFBQXBCLEVBQW1DLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQ2pDLGNBQUEsR0FBaUIsS0FBQyxDQUFBLHVCQUFELENBQUEsRUFEZ0I7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFuQyxDQURBLENBQUE7YUFHQSxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxNQUFaLEVBQW9CLFVBQXBCLEVBQWdDLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7QUFDOUIsVUFBQSxJQUE0QyxjQUE1QztBQUFBLFlBQUEsS0FBQyxDQUFBLHVCQUFELENBQXlCLGNBQXpCLENBQUEsQ0FBQTtXQUFBO2lCQUNBLGNBQUEsR0FBaUIsS0FGYTtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWhDLEVBSm9DO0lBQUEsQ0FqbER0QyxDQUFBOztBQUFBLHFCQTBsREEsVUFBQSxHQUFZLFNBQUEsR0FBQTthQUNWLElBQUMsQ0FBQSxhQUFhLENBQUMsVUFBZixDQUFBLEVBRFU7SUFBQSxDQTFsRFosQ0FBQTs7QUFBQSxxQkFpbURBLFVBQUEsR0FBWSxTQUFDLE9BQUQsR0FBQTthQUNWLElBQUMsQ0FBQSxhQUFhLENBQUMsVUFBZixDQUEwQixPQUExQixFQURVO0lBQUEsQ0FqbURaLENBQUE7O0FBQUEscUJBcW1EQSxhQUFBLEdBQWUsU0FBQSxHQUFBO2FBQ2IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxhQUFmLENBQUEsRUFEYTtJQUFBLENBcm1EZixDQUFBOztBQUFBLHFCQXdtREEsZ0JBQUEsR0FBa0IsU0FBQSxHQUFBO2FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixtQkFBaEIsRUFEZ0I7SUFBQSxDQXhtRGxCLENBQUE7O0FBQUEscUJBbW5EQSxRQUFBLEdBQVUsU0FBQyxFQUFELEdBQUE7YUFDUixJQUFDLENBQUEsWUFBRCxDQUFjLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQ1osS0FBQyxDQUFBLE1BQU0sQ0FBQyxRQUFSLENBQWlCLEVBQWpCLEVBRFk7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFkLEVBRFE7SUFBQSxDQW5uRFYsQ0FBQTs7QUFBQSxxQkE2bkRBLGdCQUFBLEdBQWtCLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsZ0JBQVIsQ0FBQSxFQUFIO0lBQUEsQ0E3bkRsQixDQUFBOztBQUFBLHFCQW1vREEsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxpQkFBUixDQUFBLEVBQUg7SUFBQSxDQW5vRG5CLENBQUE7O0FBQUEscUJBdW9EQSxnQkFBQSxHQUFrQixTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLGdCQUFSLENBQUEsRUFBSDtJQUFBLENBdm9EbEIsQ0FBQTs7QUFBQSxxQkF5b0RBLFlBQUEsR0FBYyxTQUFDLEVBQUQsR0FBQTtBQUNaLFVBQUEsTUFBQTtBQUFBLE1BQUEsSUFBQyxDQUFBLElBQUQsQ0FBTSx5QkFBTixDQUFBLENBQUE7QUFBQSxNQUNBLE1BQUEsR0FBUyxFQUFBLENBQUEsQ0FEVCxDQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsSUFBRCxDQUFNLHVCQUFOLENBRkEsQ0FBQTthQUdBLE9BSlk7SUFBQSxDQXpvRGQsQ0FBQTs7QUFBQSxxQkErb0RBLE9BQUEsR0FBUyxTQUFBLEdBQUE7YUFDTixVQUFBLEdBQVUsSUFBQyxDQUFBLEVBQVgsR0FBYyxJQURSO0lBQUEsQ0Evb0RULENBQUE7O0FBQUEscUJBa3BEQSxjQUFBLEdBQWdCLFNBQUMsS0FBRCxFQUFRLEdBQVIsR0FBQTthQUFnQixJQUFDLENBQUEsYUFBYSxDQUFDLFFBQWYsQ0FBd0IsS0FBeEIsRUFBK0IsR0FBL0IsRUFBaEI7SUFBQSxDQWxwRGhCLENBQUE7O0FBQUEscUJBb3BEQSxtQkFBQSxHQUFxQixTQUFBLEdBQUE7QUFDbkIsTUFBQSxJQUFDLENBQUEsU0FBRCxDQUFBLENBQUEsQ0FBQTthQUNBLElBQUMsQ0FBQSxJQUFELENBQU0saUJBQU4sRUFGbUI7SUFBQSxDQXBwRHJCLENBQUE7O0FBQUEscUJBd3BEQSxtQkFBQSxHQUFxQixTQUFDLE1BQUQsR0FBQTtBQUNuQixNQUFBLElBQUcsTUFBTSxDQUFDLGlCQUFQLENBQXlCLElBQUMsQ0FBQSw0QkFBRCxDQUFBLENBQXpCLENBQUg7ZUFDRSxJQUFDLENBQUEsWUFBRCxDQUFjLE1BQWQsRUFERjtPQURtQjtJQUFBLENBeHBEckIsQ0FBQTs7QUFBQSxxQkE0cERBLDRCQUFBLEdBQThCLFNBQUEsR0FBQTthQUM1QjtBQUFBLFFBQUEsSUFBQSxFQUFNLFdBQU47QUFBQSxRQUFtQixRQUFBLEVBQVUsSUFBQyxDQUFBLEVBQTlCO0FBQUEsUUFBa0MsVUFBQSxFQUFZLE9BQTlDO1FBRDRCO0lBQUEsQ0E1cEQ5QixDQUFBOztBQUFBLHFCQStwREEsdUJBQUEsR0FBeUIsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLGFBQWEsQ0FBQyx1QkFBZixDQUFBLEVBQUg7SUFBQSxDQS9wRHpCLENBQUE7O0FBQUEscUJBZ3FEQSx1QkFBQSxHQUF5QixTQUFDLG9CQUFELEdBQUE7YUFBMEIsSUFBQyxDQUFBLGFBQWEsQ0FBQyx1QkFBZixDQUF1QyxvQkFBdkMsRUFBMUI7SUFBQSxDQWhxRHpCLENBQUE7O0FBQUEscUJBa3FEQSx5QkFBQSxHQUEyQixTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsYUFBYSxDQUFDLHlCQUFmLENBQUEsRUFBSDtJQUFBLENBbHFEM0IsQ0FBQTs7QUFBQSxxQkFtcURBLHlCQUFBLEdBQTJCLFNBQUMsc0JBQUQsR0FBQTthQUE0QixJQUFDLENBQUEsYUFBYSxDQUFDLHlCQUFmLENBQXlDLHNCQUF6QyxFQUE1QjtJQUFBLENBbnFEM0IsQ0FBQTs7QUFBQSxxQkFxcURBLGFBQUEsR0FBZSxTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsYUFBYSxDQUFDLGFBQWYsQ0FBQSxFQUFIO0lBQUEsQ0FycURmLENBQUE7O0FBQUEscUJBc3FEQSxhQUFBLEdBQWUsU0FBQyxVQUFELEdBQUE7YUFBZ0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxhQUFmLENBQTZCLFVBQTdCLEVBQWhCO0lBQUEsQ0F0cURmLENBQUE7O0FBQUEscUJBd3FEQSxrQkFBQSxHQUFvQixTQUFDLFVBQUQsRUFBYSxJQUFiLEdBQUE7YUFBc0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxrQkFBZixDQUFrQyxVQUFsQyxFQUE4QyxJQUE5QyxFQUF0QjtJQUFBLENBeHFEcEIsQ0FBQTs7QUFBQSxxQkF5cURBLGtCQUFBLEdBQW9CLFNBQUMsVUFBRCxFQUFhLElBQWIsRUFBbUIsS0FBbkIsR0FBQTthQUE2QixJQUFDLENBQUEsYUFBYSxDQUFDLGtCQUFmLENBQWtDLFVBQWxDLEVBQThDLElBQTlDLEVBQW9ELEtBQXBELEVBQTdCO0lBQUEsQ0F6cURwQixDQUFBOztBQUFBLHFCQTJxREEsbUJBQUEsR0FBcUIsU0FBQyxVQUFELEdBQUE7YUFBZ0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxtQkFBZixDQUFtQyxVQUFuQyxFQUFoQjtJQUFBLENBM3FEckIsQ0FBQTs7QUFBQSxxQkE2cURBLHFCQUFBLEdBQXVCLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMscUJBQWYsQ0FBQSxFQUFIO0lBQUEsQ0E3cUR2QixDQUFBOztBQUFBLHFCQStxREEsbUJBQUEsR0FBcUIsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLGFBQWEsQ0FBQyxtQkFBZixDQUFBLEVBQUg7SUFBQSxDQS9xRHJCLENBQUE7O0FBQUEscUJBZ3JEQSxtQkFBQSxHQUFxQixTQUFDLGdCQUFELEdBQUE7YUFBc0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxtQkFBZixDQUFtQyxnQkFBbkMsRUFBdEI7SUFBQSxDQWhyRHJCLENBQUE7O0FBQUEscUJBa3JEQSxTQUFBLEdBQVcsU0FBQyxNQUFELEdBQUE7YUFBWSxJQUFDLENBQUEsYUFBYSxDQUFDLFNBQWYsQ0FBeUIsTUFBekIsRUFBWjtJQUFBLENBbHJEWCxDQUFBOztBQUFBLHFCQW1yREEsU0FBQSxHQUFXLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMsU0FBZixDQUFBLEVBQUg7SUFBQSxDQW5yRFgsQ0FBQTs7QUFBQSxxQkFxckRBLFFBQUEsR0FBVSxTQUFDLEtBQUQsR0FBQTthQUFXLElBQUMsQ0FBQSxhQUFhLENBQUMsUUFBZixDQUF3QixLQUF4QixFQUFYO0lBQUEsQ0FyckRWLENBQUE7O0FBQUEscUJBc3JEQSxRQUFBLEdBQVUsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLGFBQWEsQ0FBQyxRQUFmLENBQUEsRUFBSDtJQUFBLENBdHJEVixDQUFBOztBQUFBLHFCQXdyREEsWUFBQSxHQUFjLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMsWUFBZixDQUFBLEVBQUg7SUFBQSxDQXhyRGQsQ0FBQTs7QUFBQSxxQkF5ckRBLFlBQUEsR0FBYyxTQUFDLFNBQUQsR0FBQTthQUFlLElBQUMsQ0FBQSxhQUFhLENBQUMsWUFBZixDQUE0QixTQUE1QixFQUFmO0lBQUEsQ0F6ckRkLENBQUE7O0FBQUEscUJBMnJEQSxlQUFBLEdBQWlCLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMsZUFBZixDQUFBLEVBQUg7SUFBQSxDQTNyRGpCLENBQUE7O0FBQUEscUJBNHJEQSxlQUFBLEdBQWlCLFNBQUMsWUFBRCxHQUFBO2FBQWtCLElBQUMsQ0FBQSxhQUFhLENBQUMsZUFBZixDQUErQixZQUEvQixFQUFsQjtJQUFBLENBNXJEakIsQ0FBQTs7QUFBQSxxQkE4ckRBLGFBQUEsR0FBZSxTQUFBLEdBQUE7YUFBRyxJQUFDLENBQUEsYUFBYSxDQUFDLGFBQWYsQ0FBQSxFQUFIO0lBQUEsQ0E5ckRmLENBQUE7O0FBQUEscUJBK3JEQSxhQUFBLEdBQWUsU0FBQyxVQUFELEdBQUE7YUFBZ0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxhQUFmLENBQTZCLFVBQTdCLEVBQWhCO0lBQUEsQ0EvckRmLENBQUE7O0FBQUEscUJBaXNEQSxjQUFBLEdBQWdCLFNBQUEsR0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMsY0FBZixDQUFBLEVBQUg7SUFBQSxDQWpzRGhCLENBQUE7O0FBQUEscUJBa3NEQSxjQUFBLEdBQWdCLFNBQUMsV0FBRCxHQUFBO2FBQWlCLElBQUMsQ0FBQSxhQUFhLENBQUMsY0FBZixDQUE4QixXQUE5QixFQUFqQjtJQUFBLENBbHNEaEIsQ0FBQTs7QUFBQSxxQkFvc0RBLGVBQUEsR0FBaUIsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLGFBQWEsQ0FBQyxlQUFmLENBQUEsRUFBSDtJQUFBLENBcHNEakIsQ0FBQTs7QUFBQSxxQkFxc0RBLGNBQUEsR0FBZ0IsU0FBQyxXQUFELEdBQUE7YUFBaUIsSUFBQyxDQUFBLGFBQWEsQ0FBQyxjQUFmLENBQThCLFdBQTlCLEVBQWpCO0lBQUEsQ0Fyc0RoQixDQUFBOztBQUFBLHFCQXVzREEsa0JBQUEsR0FBb0IsU0FBQSxHQUFBO2FBQUcsSUFBQyxDQUFBLGFBQWEsQ0FBQyxrQkFBZixDQUFBLEVBQUg7SUFBQSxDQXZzRHBCLENBQUE7O0FBQUEscUJBeXNEQSx5QkFBQSxHQUEyQixTQUFDLFFBQUQsRUFBVyxNQUFYLEdBQUE7YUFBc0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyx5QkFBZixDQUF5QyxRQUF6QyxFQUFtRCxNQUFuRCxFQUF0QjtJQUFBLENBenNEM0IsQ0FBQTs7QUFBQSxxQkEyc0RBLGtDQUFBLEdBQW9DLFNBQUMsU0FBRCxHQUFBO2FBQWUsSUFBQyxDQUFBLGFBQWEsQ0FBQyxrQ0FBZixDQUFrRCxTQUFsRCxFQUFmO0lBQUEsQ0Ezc0RwQyxDQUFBOztBQUFBLHFCQTZzREEsOEJBQUEsR0FBZ0MsU0FBQyxjQUFELEdBQUE7YUFBb0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyw4QkFBZixDQUE4QyxjQUE5QyxFQUFwQjtJQUFBLENBN3NEaEMsQ0FBQTs7QUFBQSxxQkErc0RBLDhCQUFBLEdBQWdDLFNBQUMsY0FBRCxHQUFBO2FBQW9CLElBQUMsQ0FBQSxhQUFhLENBQUMsOEJBQWYsQ0FBOEMsY0FBOUMsRUFBcEI7SUFBQSxDQS9zRGhDLENBQUE7O0FBQUEscUJBaXREQSw4QkFBQSxHQUFnQyxTQUFDLGFBQUQsR0FBQTthQUFtQixJQUFDLENBQUEsYUFBYSxDQUFDLDhCQUFmLENBQThDLGFBQTlDLEVBQW5CO0lBQUEsQ0FqdERoQyxDQUFBOztBQUFBLHFCQW10REEsdUJBQUEsR0FBeUIsU0FBQyxXQUFELEdBQUE7YUFBaUIsSUFBQyxDQUFBLGFBQWEsQ0FBQyx1QkFBZixDQUF1QyxXQUF2QyxFQUFqQjtJQUFBLENBbnREekIsQ0FBQTs7QUFBQSxxQkFxdERBLG1CQUFBLEdBQXFCLFNBQUMsV0FBRCxHQUFBO2FBQWlCLElBQUMsQ0FBQSxhQUFhLENBQUMsbUJBQWYsQ0FBbUMsV0FBbkMsRUFBakI7SUFBQSxDQXJ0RHJCLENBQUE7O0FBQUEscUJBdXREQSxzQkFBQSxHQUF3QixTQUFDLGNBQUQsR0FBQTthQUFvQixJQUFDLENBQUEsYUFBYSxDQUFDLHNCQUFmLENBQXNDLGNBQXRDLEVBQXBCO0lBQUEsQ0F2dER4QixDQUFBOztBQUFBLHFCQXl0REEsc0JBQUEsR0FBd0IsU0FBQyxjQUFELEdBQUE7YUFBb0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxzQkFBZixDQUFzQyxjQUF0QyxFQUFwQjtJQUFBLENBenREeEIsQ0FBQTs7QUFBQSxxQkE0dERBLFFBQUEsR0FBVSxTQUFBLEdBQUE7QUFDUixNQUFBLFNBQUEsQ0FBVSxpQ0FBVixDQUFBLENBQUE7YUFDQSxJQUFDLENBQUEsU0FBRCxDQUFBLEVBRlE7SUFBQSxDQTV0RFYsQ0FBQTs7a0JBQUE7O0tBRG1CLE1BdElyQixDQUFBO0FBQUEiCn0=

//# sourceURL=/home/qual/.atom/packages/minimap/spec/fixtures/large-file.coffee
