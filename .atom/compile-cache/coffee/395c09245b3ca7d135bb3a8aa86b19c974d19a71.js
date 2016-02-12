(function() {
  "use strict";
  var $, Beautifiers, CompositeDisposable, LoadingView, Promise, async, beautifier, beautify, beautifyDirectory, beautifyFile, beautifyFilePath, debug, defaultLanguageOptions, dir, fs, getCursors, handleSaveEvent, loadingView, logger, path, pkg, plugin, setCursors, showError, strip, yaml, _;

  pkg = require('../package.json');

  plugin = module.exports;

  CompositeDisposable = require('event-kit').CompositeDisposable;

  _ = require("lodash");

  Beautifiers = require("./beautifiers");

  beautifier = new Beautifiers();

  defaultLanguageOptions = beautifier.options;

  logger = require('./logger')(__filename);

  Promise = require('bluebird');

  fs = null;

  path = require("path");

  strip = null;

  yaml = null;

  async = null;

  dir = null;

  LoadingView = null;

  loadingView = null;

  $ = null;

  getCursors = function(editor) {
    var bufferPosition, cursor, cursors, posArray, _i, _len;
    cursors = editor.getCursors();
    posArray = [];
    for (_i = 0, _len = cursors.length; _i < _len; _i++) {
      cursor = cursors[_i];
      bufferPosition = cursor.getBufferPosition();
      posArray.push([bufferPosition.row, bufferPosition.column]);
    }
    return posArray;
  };

  setCursors = function(editor, posArray) {
    var bufferPosition, i, _i, _len;
    for (i = _i = 0, _len = posArray.length; _i < _len; i = ++_i) {
      bufferPosition = posArray[i];
      if (i === 0) {
        editor.setCursorBufferPosition(bufferPosition);
        continue;
      }
      editor.addCursorAtBufferPosition(bufferPosition);
    }
  };

  beautifier.on('beautify::start', function() {
    if (LoadingView == null) {
      LoadingView = require("./views/loading-view");
    }
    if (loadingView == null) {
      loadingView = new LoadingView();
    }
    return loadingView.show();
  });

  beautifier.on('beautify::end', function() {
    return loadingView != null ? loadingView.hide() : void 0;
  });

  showError = function(error) {
    var detail, stack, _ref;
    if (!atom.config.get("atom-beautify.muteAllErrors")) {
      stack = error.stack;
      detail = error.description || error.message;
      return (_ref = atom.notifications) != null ? _ref.addError(error.message, {
        stack: stack,
        detail: detail,
        dismissable: true
      }) : void 0;
    }
  };

  beautify = function(_arg) {
    var allOptions, beautifyCompleted, detail, e, editedFilePath, editor, forceEntireFile, grammarName, isSelection, oldText, onSave, text;
    onSave = _arg.onSave;
    if (atom.config.get("atom-beautify.beautifyOnSave") === true) {
      detail = "See issue https://github.com/Glavin001/atom-beautify/issues/308\n\nTo stop seeing this message:\n- Uncheck (disable) the deprecated \"Beautify On Save\" option\n\nTo enable Beautify on Save for a particular language:\n- Go to Atom Beautify's package settings\n- Find option for \"Language Config - <Your Language> - Beautify On Save\"\n- Check (enable) Beautify On Save option for that particular language\n";
      if (typeof atom !== "undefined" && atom !== null) {
        atom.notifications.addWarning("The option \"atom-beautify.beautifyOnSave\" has been deprecated", {
          detail: detail,
          dismissable: true
        });
      }
    }
    if (path == null) {
      path = require("path");
    }
    forceEntireFile = onSave && atom.config.get("atom-beautify.beautifyEntireFileOnSave");
    beautifyCompleted = function(text) {
      var origScrollTop, posArray, selectedBufferRange;
      if (text == null) {

      } else if (text instanceof Error) {
        showError(text);
      } else if (typeof text === "string") {
        if (oldText !== text) {
          posArray = getCursors(editor);
          origScrollTop = editor.getScrollTop();
          if (!forceEntireFile && isSelection) {
            selectedBufferRange = editor.getSelectedBufferRange();
            editor.setTextInBufferRange(selectedBufferRange, text);
          } else {
            editor.setText(text);
          }
          setCursors(editor, posArray);
          setTimeout((function() {
            editor.setScrollTop(origScrollTop);
          }), 0);
        }
      } else {
        showError(new Error("Unsupported beautification result '" + text + "'."));
      }
    };
    editor = atom.workspace.getActiveTextEditor();
    if (editor == null) {
      return showError(new Error("Active Editor not found. ", "Please select a Text Editor first to beautify."));
    }
    isSelection = !!editor.getSelectedText();
    editedFilePath = editor.getPath();
    allOptions = beautifier.getOptionsForPath(editedFilePath, editor);
    text = void 0;
    if (!forceEntireFile && isSelection) {
      text = editor.getSelectedText();
    } else {
      text = editor.getText();
    }
    oldText = text;
    grammarName = editor.getGrammar().name;
    try {
      beautifier.beautify(text, allOptions, grammarName, editedFilePath, {
        onSave: onSave
      }).then(beautifyCompleted)["catch"](beautifyCompleted);
    } catch (_error) {
      e = _error;
      showError(e);
    }
  };

  beautifyFilePath = function(filePath, callback) {
    var $el, cb;
    if ($ == null) {
      $ = require("atom-space-pen-views").$;
    }
    $el = $(".icon-file-text[data-path=\"" + filePath + "\"]");
    $el.addClass('beautifying');
    cb = function(err, result) {
      $el = $(".icon-file-text[data-path=\"" + filePath + "\"]");
      $el.removeClass('beautifying');
      return callback(err, result);
    };
    if (fs == null) {
      fs = require("fs");
    }
    return fs.readFile(filePath, function(err, data) {
      var allOptions, completionFun, e, grammar, grammarName, input;
      if (err) {
        return cb(err);
      }
      input = data != null ? data.toString() : void 0;
      grammar = atom.grammars.selectGrammar(filePath, input);
      grammarName = grammar.name;
      allOptions = beautifier.getOptionsForPath(filePath);
      completionFun = function(output) {
        if (output instanceof Error) {
          return cb(output, null);
        } else if (typeof output === "string") {
          if (output === '') {
            return cb(null, output);
          }
          return fs.writeFile(filePath, output, function(err) {
            if (err) {
              return cb(err);
            }
            return cb(null, output);
          });
        } else {
          return cb(new Error("Unknown beautification result " + output + "."), output);
        }
      };
      try {
        return beautifier.beautify(input, allOptions, grammarName, filePath).then(completionFun)["catch"](completionFun);
      } catch (_error) {
        e = _error;
        return cb(e);
      }
    });
  };

  beautifyFile = function(_arg) {
    var filePath, target;
    target = _arg.target;
    filePath = target.dataset.path;
    if (!filePath) {
      return;
    }
    beautifyFilePath(filePath, function(err, result) {
      if (err) {
        return showError(err);
      }
    });
  };

  beautifyDirectory = function(_arg) {
    var $el, dirPath, target;
    target = _arg.target;
    dirPath = target.dataset.path;
    if (!dirPath) {
      return;
    }
    if ((typeof atom !== "undefined" && atom !== null ? atom.confirm({
      message: "This will beautify all of the files found recursively in this directory, '" + dirPath + "'. Do you want to continue?",
      buttons: ['Yes, continue!', 'No, cancel!']
    }) : void 0) !== 0) {
      return;
    }
    if ($ == null) {
      $ = require("atom-space-pen-views").$;
    }
    $el = $(".icon-file-directory[data-path=\"" + dirPath + "\"]");
    $el.addClass('beautifying');
    if (dir == null) {
      dir = require("node-dir");
    }
    if (async == null) {
      async = require("async");
    }
    dir.files(dirPath, function(err, files) {
      if (err) {
        return showError(err);
      }
      return async.each(files, function(filePath, callback) {
        return beautifyFilePath(filePath, function() {
          return callback();
        });
      }, function(err) {
        $el = $(".icon-file-directory[data-path=\"" + dirPath + "\"]");
        return $el.removeClass('beautifying');
      });
    });
  };

  debug = function() {
    var addHeader, addInfo, allOptions, beautifiers, codeBlockSyntax, debugInfo, editor, filePath, grammarName, headers, language, linkifyTitle, selectedBeautifier, text, tocEl, _ref;
    editor = atom.workspace.getActiveTextEditor();
    linkifyTitle = function(title) {
      var p, sep;
      title = title.toLowerCase();
      p = title.split(/[\s,+#;,\/?:@&=+$]+/);
      sep = "-";
      return p.join(sep);
    };
    if (editor == null) {
      return confirm("Active Editor not found.\n" + "Please select a Text Editor first to beautify.");
    }
    if (!confirm('Are you ready to debug Atom Beautify?\n\n' + 'Warning: This will change your current clipboard contents.')) {
      return;
    }
    debugInfo = "";
    headers = [];
    tocEl = "<TABLEOFCONTENTS/>";
    addInfo = function(key, val) {
      if (key != null) {
        return debugInfo += "**" + key + "**: " + val + "\n\n";
      } else {
        return debugInfo += "" + val + "\n\n";
      }
    };
    addHeader = function(level, title) {
      debugInfo += "" + (Array(level + 1).join('#')) + " " + title + "\n\n";
      return headers.push({
        level: level,
        title: title
      });
    };
    addHeader(1, "Atom Beautify - Debugging information");
    debugInfo += "The following debugging information was " + ("generated by `Atom Beautify` on `" + (new Date()) + "`.") + "\n\n---\n\n" + tocEl + "\n\n---\n\n";
    addInfo('Platform', process.platform);
    addHeader(2, "Versions");
    addInfo('Atom Version', atom.appVersion);
    addInfo('Atom Beautify Version', pkg.version);
    addHeader(2, "Original file to be beautified");
    filePath = editor.getPath();
    addInfo('Original File Path', "`" + filePath + "`");
    grammarName = editor.getGrammar().name;
    addInfo('Original File Grammar', grammarName);
    language = beautifier.getLanguage(grammarName, filePath);
    addInfo('Original File Language', language != null ? language.name : void 0);
    addInfo('Language namespace', language != null ? language.namespace : void 0);
    beautifiers = beautifier.getBeautifiers(language.name);
    addInfo('Supported Beautifiers', _.map(beautifiers, 'name').join(', '));
    selectedBeautifier = beautifier.getBeautifierForLanguage(language);
    addInfo('Selected Beautifier', selectedBeautifier.name);
    text = editor.getText();
    codeBlockSyntax = ((_ref = language != null ? language.name : void 0) != null ? _ref : grammarName).toLowerCase().split(' ')[0];
    addHeader(3, 'Original File Contents');
    addInfo(null, "\n```" + codeBlockSyntax + "\n" + text + "\n```");
    addHeader(3, 'Package Settings');
    addInfo(null, "The raw package settings options\n" + ("```json\n" + (JSON.stringify(atom.config.get('atom-beautify'), void 0, 4)) + "\n```"));
    addHeader(2, "Beautification options");
    allOptions = beautifier.getOptionsForPath(filePath, editor);
    return Promise.all(allOptions).then(function(allOptions) {
      var cb, configOptions, e, editorConfigOptions, editorOptions, finalOptions, homeOptions, logFilePathRegex, logs, preTransformedOptions, projectOptions, subscription;
      editorOptions = allOptions[0], configOptions = allOptions[1], homeOptions = allOptions[2], editorConfigOptions = allOptions[3];
      projectOptions = allOptions.slice(4);
      preTransformedOptions = beautifier.getOptionsForLanguage(allOptions, language);
      if (selectedBeautifier) {
        finalOptions = beautifier.transformOptions(selectedBeautifier, language.name, preTransformedOptions);
      }
      addInfo('Editor Options', "\n" + "Options from Atom Editor settings\n" + ("```json\n" + (JSON.stringify(editorOptions, void 0, 4)) + "\n```"));
      addInfo('Config Options', "\n" + "Options from Atom Beautify package settings\n" + ("```json\n" + (JSON.stringify(configOptions, void 0, 4)) + "\n```"));
      addInfo('Home Options', "\n" + ("Options from `" + (path.resolve(beautifier.getUserHome(), '.jsbeautifyrc')) + "`\n") + ("```json\n" + (JSON.stringify(homeOptions, void 0, 4)) + "\n```"));
      addInfo('EditorConfig Options', "\n" + "Options from [EditorConfig](http://editorconfig.org/) file\n" + ("```json\n" + (JSON.stringify(editorConfigOptions, void 0, 4)) + "\n```"));
      addInfo('Project Options', "\n" + ("Options from `.jsbeautifyrc` files starting from directory `" + (path.dirname(filePath)) + "` and going up to root\n") + ("```json\n" + (JSON.stringify(projectOptions, void 0, 4)) + "\n```"));
      addInfo('Pre-Transformed Options', "\n" + "Combined options before transforming them given a beautifier's specifications\n" + ("```json\n" + (JSON.stringify(preTransformedOptions, void 0, 4)) + "\n```"));
      if (selectedBeautifier) {
        addHeader(3, 'Final Options');
        addInfo(null, "Final combined and transformed options that are used\n" + ("```json\n" + (JSON.stringify(finalOptions, void 0, 4)) + "\n```"));
      }
      logs = "";
      logFilePathRegex = new RegExp('\\: \\[(.*)\\]');
      subscription = logger.onLogging(function(msg) {
        var sep;
        sep = path.sep;
        return logs += msg.replace(logFilePathRegex, function(a, b) {
          var i, p, s;
          s = b.split(sep);
          i = s.indexOf('atom-beautify');
          p = s.slice(i + 2).join(sep);
          return ': [' + p + ']';
        });
      });
      cb = function(result) {
        var JsDiff, bullet, diff, header, indent, indentNum, toc, _i, _len;
        subscription.dispose();
        addHeader(2, "Results");
        addInfo('Beautified File Contents', "\n```" + codeBlockSyntax + "\n" + result + "\n```");
        JsDiff = require('diff');
        diff = JsDiff.createPatch(filePath, text, result, "original", "beautified");
        addInfo('Original vs. Beautified Diff', "\n```" + codeBlockSyntax + "\n" + diff + "\n```");
        addHeader(3, "Logs");
        addInfo(null, "```\n" + logs + "\n```");
        toc = "## Table Of Contents\n";
        for (_i = 0, _len = headers.length; _i < _len; _i++) {
          header = headers[_i];

          /*
          - Heading 1
            - Heading 1.1
           */
          indent = "  ";
          bullet = "-";
          indentNum = header.level - 2;
          if (indentNum >= 0) {
            toc += "" + (Array(indentNum + 1).join(indent)) + bullet + " [" + header.title + "](\#" + (linkifyTitle(header.title)) + ")\n";
          }
        }
        debugInfo = debugInfo.replace(tocEl, toc);
        atom.clipboard.write(debugInfo);
        return confirm('Atom Beautify debugging information is now in your clipboard.\n' + 'You can now paste this into an Issue you are reporting here\n' + 'https://github.com/Glavin001/atom-beautify/issues/\n\n' + 'Please follow the contribution guidelines found at\n' + 'https://github.com/Glavin001/atom-beautify/blob/master/CONTRIBUTING.md\n\n' + 'Warning: Be sure to look over the debug info before you send it, ' + 'to ensure you are not sharing undesirable private information.');
      };
      try {
        return beautifier.beautify(text, allOptions, grammarName, filePath).then(cb)["catch"](cb);
      } catch (_error) {
        e = _error;
        return cb(e);
      }
    });
  };

  handleSaveEvent = function() {
    return atom.workspace.observeTextEditors(function(editor) {
      var buffer, disposable;
      buffer = editor.getBuffer();
      disposable = buffer.onDidSave(function(_arg) {
        var beautifyOnSave, fileExtension, filePath, grammar, key, language, languages, origScrollTop, posArray;
        filePath = _arg.path;
        if (path == null) {
          path = require('path');
        }
        grammar = editor.getGrammar().name;
        fileExtension = path.extname(filePath);
        fileExtension = fileExtension.substr(1);
        languages = beautifier.languages.getLanguages({
          grammar: grammar,
          extension: fileExtension
        });
        if (languages.length < 1) {
          return;
        }
        language = languages[0];
        key = "atom-beautify.language_" + language.namespace + "_beautify_on_save";
        beautifyOnSave = atom.config.get(key);
        logger.verbose('save editor positions', key, beautifyOnSave);
        if (beautifyOnSave) {
          posArray = getCursors(editor);
          origScrollTop = editor.getScrollTop();
          return beautifyFilePath(filePath, function() {
            if (editor.isAlive() === true) {
              buffer.reload();
              logger.verbose('restore editor positions', posArray, origScrollTop);
              return setTimeout((function() {
                setCursors(editor, posArray);
                editor.setScrollTop(origScrollTop);
              }), 0);
            }
          });
        }
      });
      return plugin.subscriptions.add(disposable);
    });
  };

  plugin.config = _.merge(require('./config.coffee'), defaultLanguageOptions);

  plugin.activate = function() {
    this.subscriptions = new CompositeDisposable;
    this.subscriptions.add(handleSaveEvent());
    this.subscriptions.add(atom.config.observe("atom-beautify.beautifyOnSave", handleSaveEvent));
    this.subscriptions.add(atom.commands.add("atom-workspace", "atom-beautify:beautify-editor", beautify));
    this.subscriptions.add(atom.commands.add("atom-workspace", "atom-beautify:help-debug-editor", debug));
    this.subscriptions.add(atom.commands.add(".tree-view .file .name", "atom-beautify:beautify-file", beautifyFile));
    return this.subscriptions.add(atom.commands.add(".tree-view .directory .name", "atom-beautify:beautify-directory", beautifyDirectory));
  };

  plugin.deactivate = function() {
    return this.subscriptions.dispose();
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9hdG9tLWJlYXV0aWZ5L3NyYy9iZWF1dGlmeS5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFDQTtBQUFBLEVBQUEsWUFBQSxDQUFBO0FBQUEsTUFBQSw2UkFBQTs7QUFBQSxFQUNBLEdBQUEsR0FBTSxPQUFBLENBQVEsaUJBQVIsQ0FETixDQUFBOztBQUFBLEVBSUEsTUFBQSxHQUFTLE1BQU0sQ0FBQyxPQUpoQixDQUFBOztBQUFBLEVBS0Msc0JBQXVCLE9BQUEsQ0FBUSxXQUFSLEVBQXZCLG1CQUxELENBQUE7O0FBQUEsRUFNQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FOSixDQUFBOztBQUFBLEVBT0EsV0FBQSxHQUFjLE9BQUEsQ0FBUSxlQUFSLENBUGQsQ0FBQTs7QUFBQSxFQVFBLFVBQUEsR0FBaUIsSUFBQSxXQUFBLENBQUEsQ0FSakIsQ0FBQTs7QUFBQSxFQVNBLHNCQUFBLEdBQXlCLFVBQVUsQ0FBQyxPQVRwQyxDQUFBOztBQUFBLEVBVUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSLENBQUEsQ0FBb0IsVUFBcEIsQ0FWVCxDQUFBOztBQUFBLEVBV0EsT0FBQSxHQUFVLE9BQUEsQ0FBUSxVQUFSLENBWFYsQ0FBQTs7QUFBQSxFQWNBLEVBQUEsR0FBSyxJQWRMLENBQUE7O0FBQUEsRUFlQSxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVIsQ0FmUCxDQUFBOztBQUFBLEVBZ0JBLEtBQUEsR0FBUSxJQWhCUixDQUFBOztBQUFBLEVBaUJBLElBQUEsR0FBTyxJQWpCUCxDQUFBOztBQUFBLEVBa0JBLEtBQUEsR0FBUSxJQWxCUixDQUFBOztBQUFBLEVBbUJBLEdBQUEsR0FBTSxJQW5CTixDQUFBOztBQUFBLEVBb0JBLFdBQUEsR0FBYyxJQXBCZCxDQUFBOztBQUFBLEVBcUJBLFdBQUEs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

//# sourceURL=/home/qual/.atom/packages/atom-beautify/src/beautify.coffee
