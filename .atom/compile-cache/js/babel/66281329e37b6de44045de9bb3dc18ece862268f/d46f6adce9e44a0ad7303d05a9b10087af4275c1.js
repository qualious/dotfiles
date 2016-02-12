function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./helpers/workspace');

var _fsPlus = require('fs-plus');

var _fsPlus2 = _interopRequireDefault(_fsPlus);

var _libMinimap = require('../lib/minimap');

var _libMinimap2 = _interopRequireDefault(_libMinimap);

'use babel';

describe('Minimap', function () {
  var _ref = [];
  var editor = _ref[0];
  var editorElement = _ref[1];
  var minimap = _ref[2];
  var largeSample = _ref[3];
  var smallSample = _ref[4];
  var minimapVerticalScaleFactor = _ref[5];
  var minimapHorizontalScaleFactor = _ref[6];

  beforeEach(function () {
    atom.config.set('minimap.charHeight', 4);
    atom.config.set('minimap.charWidth', 2);
    atom.config.set('minimap.interline', 1);

    editor = atom.workspace.buildTextEditor({});

    editorElement = atom.views.getView(editor);
    jasmine.attachToDOM(editorElement);
    editorElement.setHeight(50);
    editorElement.setWidth(200);

    minimapVerticalScaleFactor = 5 / editor.getLineHeightInPixels();
    minimapHorizontalScaleFactor = 2 / editor.getDefaultCharWidth();

    var dir = atom.project.getDirectories()[0];

    minimap = new _libMinimap2['default']({ textEditor: editor });
    largeSample = _fsPlus2['default'].readFileSync(dir.resolve('large-file.coffee')).toString();
    smallSample = _fsPlus2['default'].readFileSync(dir.resolve('sample.coffee')).toString();
  });

  it('has an associated editor', function () {
    expect(minimap.getTextEditor()).toEqual(editor);
  });

  it('returns false when asked if destroyed', function () {
    expect(minimap.isDestroyed()).toBeFalsy();
  });

  it('raise an exception if created without a text editor', function () {
    expect(function () {
      return new _libMinimap2['default']();
    }).toThrow();
  });

  it('measures the minimap size based on the current editor content', function () {
    editor.setText(smallSample);
    expect(minimap.getHeight()).toEqual(editor.getScreenLineCount() * 5);

    editor.setText(largeSample);
    expect(minimap.getHeight()).toEqual(editor.getScreenLineCount() * 5);
  });

  it('measures the scaling factor between the editor and the minimap', function () {
    expect(minimap.getVerticalScaleFactor()).toEqual(minimapVerticalScaleFactor);
    expect(minimap.getHorizontalScaleFactor()).toEqual(minimapHorizontalScaleFactor);
  });

  it('measures the editor visible area size at minimap scale', function () {
    editor.setText(largeSample);
    expect(minimap.getTextEditorScaledHeight()).toEqual(50 * minimapVerticalScaleFactor);
  });

  it('measures the available minimap scroll', function () {
    editor.setText(largeSample);
    var largeLineCount = editor.getScreenLineCount();

    expect(minimap.getMaxScrollTop()).toEqual(largeLineCount * 5 - 50);
    expect(minimap.canScroll()).toBeTruthy();
  });

  it('computes the first visible row in the minimap', function () {
    expect(minimap.getFirstVisibleScreenRow()).toEqual(0);
  });

  it('computes the last visible row in the minimap', function () {
    expect(minimap.getLastVisibleScreenRow()).toEqual(10);
  });

  it('relays change events from the text editor', function () {
    var changeSpy = jasmine.createSpy('didChange');
    minimap.onDidChange(changeSpy);

    editor.setText('foo');

    expect(changeSpy).toHaveBeenCalled();
  });

  it('relays scroll top events from the editor', function () {
    editor.setText(largeSample);

    var scrollSpy = jasmine.createSpy('didScroll');
    minimap.onDidChangeScrollTop(scrollSpy);

    editorElement.setScrollTop(100);

    expect(scrollSpy).toHaveBeenCalled();
  });

  it('relays scroll left events from the editor', function () {
    editor.setText(largeSample);

    var scrollSpy = jasmine.createSpy('didScroll');
    minimap.onDidChangeScrollLeft(scrollSpy);

    // Seems like text without a view aren't able to scroll horizontally
    // even when its width was set.
    spyOn(editorElement, 'getScrollWidth').andReturn(10000);

    editorElement.setScrollLeft(100);

    expect(scrollSpy).toHaveBeenCalled();
  });

  describe('when scrols past end is enabled', function () {
    beforeEach(function () {
      editor.setText(largeSample);
      atom.config.set('editor.scrollPastEnd', true);
    });

    it('adjust the scrolling ratio', function () {
      editorElement.setScrollTop(editorElement.getScrollHeight());

      var maxScrollTop = editorElement.getScrollHeight() - editorElement.getHeight() - (editorElement.getHeight() - 3 * editor.displayBuffer.getLineHeightInPixels());

      expect(minimap.getTextEditorScrollRatio()).toEqual(editorElement.getScrollTop() / maxScrollTop);
    });

    it('lock the minimap scroll top to 1', function () {
      editorElement.setScrollTop(editorElement.getScrollHeight());
      expect(minimap.getScrollTop()).toEqual(minimap.getMaxScrollTop());
    });

    describe('getTextEditorScrollRatio(), when getScrollTop() and maxScrollTop both equal 0', function () {
      beforeEach(function () {
        editor.setText(smallSample);
        editorElement.setHeight(40);
        atom.config.set('editor.scrollPastEnd', true);
      });

      it('returns 0', function () {
        editorElement.setScrollTop(0);
        expect(minimap.getTextEditorScrollRatio()).toEqual(0);
      });
    });
  });

  describe('when soft wrap is enabled', function () {
    beforeEach(function () {
      atom.config.set('editor.softWrap', true);
      atom.config.set('editor.softWrapAtPreferredLineLength', true);
      atom.config.set('editor.preferredLineLength', 2);
    });

    it('measures the minimap using screen lines', function () {
      editor.setText(smallSample);
      expect(minimap.getHeight()).toEqual(editor.getScreenLineCount() * 5);

      editor.setText(largeSample);
      expect(minimap.getHeight()).toEqual(editor.getScreenLineCount() * 5);
    });
  });

  describe('when there is no scrolling needed to display the whole minimap', function () {
    it('returns 0 when computing the minimap scroll', function () {
      expect(minimap.getScrollTop()).toEqual(0);
    });

    it('returns 0 when measuring the available minimap scroll', function () {
      editor.setText(smallSample);

      expect(minimap.getMaxScrollTop()).toEqual(0);
      expect(minimap.canScroll()).toBeFalsy();
    });
  });

  describe('when the editor is scrolled', function () {
    var _ref2 = [];
    var largeLineCount = _ref2[0];
    var editorHeight = _ref2[1];
    var editorScrollRatio = _ref2[2];

    beforeEach(function () {
      // Same here, without a view, the getScrollWidth method always returns 1
      // and the test fails because the capped scroll left value always end up
      // to be 0, inducing errors in computations.
      spyOn(editorElement, 'getScrollWidth').andReturn(10000);

      editor.setText(largeSample);
      editorElement.setScrollTop(1000);
      editorElement.setScrollLeft(200);

      largeLineCount = editor.getScreenLineCount();
      editorHeight = largeLineCount * editor.getLineHeightInPixels();
      editorScrollRatio = editorElement.getScrollTop() / (editorElement.getScrollHeight() - editorElement.getHeight());
    });

    it('scales the editor scroll based on the minimap scale factor', function () {
      expect(minimap.getTextEditorScaledScrollTop()).toEqual(1000 * minimapVerticalScaleFactor);
      expect(minimap.getTextEditorScaledScrollLeft()).toEqual(200 * minimapHorizontalScaleFactor);
    });

    it('computes the offset to apply based on the editor scroll top', function () {
      expect(minimap.getScrollTop()).toEqual(editorScrollRatio * minimap.getMaxScrollTop());
    });

    it('computes the first visible row in the minimap', function () {
      expect(minimap.getFirstVisibleScreenRow()).toEqual(58);
    });

    it('computes the last visible row in the minimap', function () {
      expect(minimap.getLastVisibleScreenRow()).toEqual(69);
    });

    describe('down to the bottom', function () {
      beforeEach(function () {
        editorElement.setScrollTop(editorElement.getScrollHeight());
        editorScrollRatio = editorElement.getScrollTop() / editorElement.getScrollHeight();
      });

      it('computes an offset that scrolls the minimap to the bottom edge', function () {
        expect(minimap.getScrollTop()).toEqual(minimap.getMaxScrollTop());
      });

      it('computes the first visible row in the minimap', function () {
        expect(minimap.getFirstVisibleScreenRow()).toEqual(largeLineCount - 10);
      });

      it('computes the last visible row in the minimap', function () {
        expect(minimap.getLastVisibleScreenRow()).toEqual(largeLineCount);
      });
    });
  });

  describe('destroying the model', function () {
    it('emits a did-destroy event', function () {
      var spy = jasmine.createSpy('destroy');
      minimap.onDidDestroy(spy);

      minimap.destroy();

      expect(spy).toHaveBeenCalled();
    });

    it('returns true when asked if destroyed', function () {
      minimap.destroy();
      expect(minimap.isDestroyed()).toBeTruthy();
    });
  });

  describe('destroying the text editor', function () {
    it('destroys the model', function () {
      spyOn(minimap, 'destroy');

      editor.destroy();

      expect(minimap.destroy).toHaveBeenCalled();
    });
  });

  //    ########  ########  ######   #######
  //    ##     ## ##       ##    ## ##     ##
  //    ##     ## ##       ##       ##     ##
  //    ##     ## ######   ##       ##     ##
  //    ##     ## ##       ##       ##     ##
  //    ##     ## ##       ##    ## ##     ##
  //    ########  ########  ######   #######

  describe('::decorateMarker', function () {
    var _ref3 = [];
    var marker = _ref3[0];
    var decoration = _ref3[1];
    var changeSpy = _ref3[2];

    beforeEach(function () {
      editor.setText(largeSample);

      changeSpy = jasmine.createSpy('didChange');
      minimap.onDidChangeDecorationRange(changeSpy);

      marker = minimap.markBufferRange([[0, 6], [1, 11]]);
      decoration = minimap.decorateMarker(marker, { type: 'highlight', 'class': 'dummy' });
    });

    it('creates a decoration for the given marker', function () {
      expect(minimap.decorationsByMarkerId[marker.id]).toBeDefined();
    });

    it('creates a change corresponding to the marker range', function () {
      expect(changeSpy).toHaveBeenCalled();
      expect(changeSpy.calls[0].args[0].start).toEqual(0);
      expect(changeSpy.calls[0].args[0].end).toEqual(1);
    });

    describe('when the marker range changes', function () {
      beforeEach(function () {
        var markerChangeSpy = jasmine.createSpy('marker-did-change');
        marker.onDidChange(markerChangeSpy);
        marker.setBufferRange([[0, 6], [3, 11]]);

        waitsFor(function () {
          return markerChangeSpy.calls.length > 0;
        });
      });

      it('creates a change only for the dif between the two ranges', function () {
        expect(changeSpy).toHaveBeenCalled();
        expect(changeSpy.calls[1].args[0].start).toEqual(1);
        expect(changeSpy.calls[1].args[0].end).toEqual(3);
      });
    });

    describe('destroying the marker', function () {
      beforeEach(function () {
        marker.destroy();
      });

      it('removes the decoration from the render view', function () {
        expect(minimap.decorationsByMarkerId[marker.id]).toBeUndefined();
      });

      it('creates a change corresponding to the marker range', function () {
        expect(changeSpy.calls[1].args[0].start).toEqual(0);
        expect(changeSpy.calls[1].args[0].end).toEqual(1);
      });
    });

    describe('destroying the decoration', function () {
      beforeEach(function () {
        decoration.destroy();
      });

      it('removes the decoration from the render view', function () {
        expect(minimap.decorationsByMarkerId[marker.id]).toBeUndefined();
      });

      it('creates a change corresponding to the marker range', function () {
        expect(changeSpy.calls[1].args[0].start).toEqual(0);
        expect(changeSpy.calls[1].args[0].end).toEqual(1);
      });
    });

    describe('destroying all the decorations for the marker', function () {
      beforeEach(function () {
        minimap.removeAllDecorationsForMarker(marker);
      });

      it('removes the decoration from the render view', function () {
        expect(minimap.decorationsByMarkerId[marker.id]).toBeUndefined();
      });

      it('creates a change corresponding to the marker range', function () {
        expect(changeSpy.calls[1].args[0].start).toEqual(0);
        expect(changeSpy.calls[1].args[0].end).toEqual(1);
      });
    });

    describe('destroying the minimap', function () {
      beforeEach(function () {
        minimap.destroy();
      });

      it('removes all the previously added decorations', function () {
        expect(minimap.decorationsById).toEqual({});
        expect(minimap.decorationsByMarkerId).toEqual({});
      });

      it('prevents the creation of new decorations', function () {
        marker = editor.markBufferRange([[0, 6], [0, 11]]);
        decoration = minimap.decorateMarker(marker, { type: 'highlight', 'class': 'dummy' });

        expect(decoration).toBeUndefined();
      });
    });
  });

  describe('::decorationsByTypeThenRows', function () {
    var _ref4 = [];
    var decorations = _ref4[0];

    beforeEach(function () {
      editor.setText(largeSample);

      var createDecoration = function createDecoration(type, range) {
        var decoration = undefined;
        var marker = minimap.markBufferRange(range);
        decoration = minimap.decorateMarker(marker, { type: type });
      };

      createDecoration('highlight', [[6, 0], [11, 0]]);
      createDecoration('highlight', [[7, 0], [8, 0]]);
      createDecoration('highlight-over', [[1, 0], [2, 0]]);
      createDecoration('line', [[3, 0], [4, 0]]);
      createDecoration('line', [[12, 0], [12, 0]]);
      createDecoration('highlight-under', [[0, 0], [10, 1]]);

      decorations = minimap.decorationsByTypeThenRows(0, 12);
    });

    it('returns an object whose keys are the decorations types', function () {
      expect(Object.keys(decorations).sort()).toEqual(['highlight-over', 'highlight-under', 'line']);
    });

    it('stores decorations by rows within each type objects', function () {
      expect(Object.keys(decorations['highlight-over']).sort()).toEqual('1 2 6 7 8 9 10 11'.split(' ').sort());

      expect(Object.keys(decorations['line']).sort()).toEqual('3 4 12'.split(' ').sort());

      expect(Object.keys(decorations['highlight-under']).sort()).toEqual('0 1 2 3 4 5 6 7 8 9 10'.split(' ').sort());
    });

    it('stores the decorations spanning a row in the corresponding row array', function () {
      expect(decorations['highlight-over']['7'].length).toEqual(2);

      expect(decorations['line']['3'].length).toEqual(1);

      expect(decorations['highlight-under']['5'].length).toEqual(1);
    });
  });
});

//     ######  ########    ###    ##    ## ########
//    ##    ##    ##      ## ##   ###   ## ##     ##
//    ##          ##     ##   ##  ####  ## ##     ##
//     ######     ##    ##     ## ## ## ## ##     ##
//          ##    ##    ######### ##  #### ##     ##
//    ##    ##    ##    ##     ## ##   ### ##     ##
//     ######     ##    ##     ## ##    ## ########
//
//       ###    ##        #######  ##    ## ########
//      ## ##   ##       ##     ## ###   ## ##
//     ##   ##  ##       ##     ## ####  ## ##
//    ##     ## ##       ##     ## ## ## ## ######
//    ######### ##       ##     ## ##  #### ##
//    ##     ## ##       ##     ## ##   ### ##
//    ##     ## ########  #######  ##    ## ########

describe('Stand alone minimap', function () {
  var _ref5 = [];
  var editor = _ref5[0];
  var editorElement = _ref5[1];
  var minimap = _ref5[2];
  var largeSample = _ref5[3];
  var smallSample = _ref5[4];

  beforeEach(function () {
    atom.config.set('minimap.charHeight', 4);
    atom.config.set('minimap.charWidth', 2);
    atom.config.set('minimap.interline', 1);

    editor = atom.workspace.buildTextEditor({});
    editorElement = atom.views.getView(editor);
    jasmine.attachToDOM(editorElement);
    editorElement.setHeight(50);
    editorElement.setWidth(200);
    editor.setLineHeightInPixels(10);

    var dir = atom.project.getDirectories()[0];

    minimap = new _libMinimap2['default']({
      textEditor: editor,
      standAlone: true
    });

    largeSample = _fsPlus2['default'].readFileSync(dir.resolve('large-file.coffee')).toString();
    smallSample = _fsPlus2['default'].readFileSync(dir.resolve('sample.coffee')).toString();
  });

  it('has an associated editor', function () {
    expect(minimap.getTextEditor()).toEqual(editor);
  });

  it('measures the minimap size based on the current editor content', function () {
    editor.setText(smallSample);
    expect(minimap.getHeight()).toEqual(editor.getScreenLineCount() * 5);

    editor.setText(largeSample);
    expect(minimap.getHeight()).toEqual(editor.getScreenLineCount() * 5);
  });

  it('measures the scaling factor between the editor and the minimap', function () {
    expect(minimap.getVerticalScaleFactor()).toEqual(0.5);
    expect(minimap.getHorizontalScaleFactor()).toEqual(2 / editor.getDefaultCharWidth());
  });

  it('measures the editor visible area size at minimap scale', function () {
    editor.setText(largeSample);
    expect(minimap.getTextEditorScaledHeight()).toEqual(25);
  });

  it('has a visible height based on the passed-in options', function () {
    expect(minimap.getVisibleHeight()).toEqual(5);

    editor.setText(smallSample);
    expect(minimap.getVisibleHeight()).toEqual(20);

    editor.setText(largeSample);
    expect(minimap.getVisibleHeight()).toEqual(editor.getScreenLineCount() * 5);

    minimap.height = 100;
    expect(minimap.getVisibleHeight()).toEqual(100);
  });

  it('has a visible width based on the passed-in options', function () {
    expect(minimap.getVisibleWidth()).toEqual(0);

    editor.setText(smallSample);
    expect(minimap.getVisibleWidth()).toEqual(36);

    editor.setText(largeSample);
    expect(minimap.getVisibleWidth()).toEqual(editor.getMaxScreenLineLength() * 2);

    minimap.width = 50;
    expect(minimap.getVisibleWidth()).toEqual(50);
  });

  it('measures the available minimap scroll', function () {
    editor.setText(largeSample);
    var largeLineCount = editor.getScreenLineCount();

    expect(minimap.getMaxScrollTop()).toEqual(0);
    expect(minimap.canScroll()).toBeFalsy();

    minimap.height = 100;

    expect(minimap.getMaxScrollTop()).toEqual(largeLineCount * 5 - 100);
    expect(minimap.canScroll()).toBeTruthy();
  });

  it('computes the first visible row in the minimap', function () {
    expect(minimap.getFirstVisibleScreenRow()).toEqual(0);
  });

  it('computes the last visible row in the minimap', function () {
    editor.setText(largeSample);

    expect(minimap.getLastVisibleScreenRow()).toEqual(editor.getScreenLineCount());

    minimap.height = 100;
    expect(minimap.getLastVisibleScreenRow()).toEqual(20);
  });

  it('does not relay scroll top events from the editor', function () {
    editor.setText(largeSample);

    var scrollSpy = jasmine.createSpy('didScroll');
    minimap.onDidChangeScrollTop(scrollSpy);

    editorElement.setScrollTop(100);

    expect(scrollSpy).not.toHaveBeenCalled();
  });

  it('does not relay scroll left events from the editor', function () {
    editor.setText(largeSample);

    var scrollSpy = jasmine.createSpy('didScroll');
    minimap.onDidChangeScrollLeft(scrollSpy);

    // Seems like text without a view aren't able to scroll horizontally
    // even when its width was set.
    spyOn(editorElement, 'getScrollWidth').andReturn(10000);

    editorElement.setScrollLeft(100);

    expect(scrollSpy).not.toHaveBeenCalled();
  });

  it('has a scroll top that is not bound to the text editor', function () {
    var scrollSpy = jasmine.createSpy('didScroll');
    minimap.onDidChangeScrollTop(scrollSpy);

    editor.setText(largeSample);
    editorElement.setScrollTop(1000);

    expect(minimap.getScrollTop()).toEqual(0);
    expect(scrollSpy).not.toHaveBeenCalled();

    minimap.setScrollTop(10);

    expect(minimap.getScrollTop()).toEqual(10);
    expect(scrollSpy).toHaveBeenCalled();
  });

  it('has rendering properties that can overrides the config values', function () {
    minimap.setCharWidth(8.5);
    minimap.setCharHeight(10.2);
    minimap.setInterline(10.6);

    expect(minimap.getCharWidth()).toEqual(8);
    expect(minimap.getCharHeight()).toEqual(10);
    expect(minimap.getInterline()).toEqual(10);
    expect(minimap.getLineHeight()).toEqual(20);
  });

  it('emits a config change event when a value is changed', function () {
    var changeSpy = jasmine.createSpy('did-change');
    minimap.onDidChangeConfig(changeSpy);

    minimap.setCharWidth(8.5);
    minimap.setCharHeight(10.2);
    minimap.setInterline(10.6);

    expect(changeSpy.callCount).toEqual(3);
  });

  it('returns the rounding number of devicePixelRatio', function () {
    devicePixelRatio = 1.25;

    minimap.setDevicePixelRatioRounding(true);

    expect(minimap.getDevicePixelRatioRounding()).toEqual(true);
    expect(minimap.getDevicePixelRatio()).toEqual(1);
  });

  it('prevents the rounding number of devicePixelRatio', function () {
    devicePixelRatio = 1.25;

    minimap.setDevicePixelRatioRounding(false);

    expect(minimap.getDevicePixelRatioRounding()).toEqual(false);
    expect(minimap.getDevicePixelRatio()).toEqual(1.25);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9zcGVjL21pbmltYXAtc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUVPLHFCQUFxQjs7c0JBRWIsU0FBUzs7OzswQkFDSixnQkFBZ0I7Ozs7QUFMcEMsV0FBVyxDQUFBOztBQU9YLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBTTthQUNtRyxFQUFFO01BQXhILE1BQU07TUFBRSxhQUFhO01BQUUsT0FBTztNQUFFLFdBQVc7TUFBRSxXQUFXO01BQUUsMEJBQTBCO01BQUUsNEJBQTRCOztBQUV2SCxZQUFVLENBQUMsWUFBTTtBQUNmLFFBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3hDLFFBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3ZDLFFBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFBOztBQUV2QyxVQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7O0FBRTNDLGlCQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUMsV0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNsQyxpQkFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMzQixpQkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFM0IsOEJBQTBCLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0FBQy9ELGdDQUE0QixHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTs7QUFFL0QsUUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFMUMsV0FBTyxHQUFHLDRCQUFZLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7QUFDM0MsZUFBVyxHQUFHLG9CQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUMxRSxlQUFXLEdBQUcsb0JBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtHQUN2RSxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLDBCQUEwQixFQUFFLFlBQU07QUFDbkMsVUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtHQUNoRCxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLHVDQUF1QyxFQUFFLFlBQU07QUFDaEQsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0dBQzFDLENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMscURBQXFELEVBQUUsWUFBTTtBQUM5RCxVQUFNLENBQUMsWUFBTTtBQUFFLGFBQU8sNkJBQWEsQ0FBQTtLQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtHQUNqRCxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLCtEQUErRCxFQUFFLFlBQU07QUFDeEUsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMzQixVQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBOztBQUVwRSxVQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLFVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7R0FDckUsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyxnRUFBZ0UsRUFBRSxZQUFNO0FBQ3pFLFVBQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVFLFVBQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0dBQ2pGLENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMsd0RBQXdELEVBQUUsWUFBTTtBQUNqRSxVQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLFVBQU0sQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsMEJBQTBCLENBQUMsQ0FBQTtHQUNyRixDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLHVDQUF1QyxFQUFFLFlBQU07QUFDaEQsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMzQixRQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTs7QUFFaEQsVUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBQ2xFLFVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtHQUN6QyxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLCtDQUErQyxFQUFFLFlBQU07QUFDeEQsVUFBTSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQ3RELENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMsOENBQThDLEVBQUUsWUFBTTtBQUN2RCxVQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7R0FDdEQsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQywyQ0FBMkMsRUFBRSxZQUFNO0FBQ3BELFFBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDOUMsV0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTs7QUFFOUIsVUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFckIsVUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUE7R0FDckMsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQywwQ0FBMEMsRUFBRSxZQUFNO0FBQ25ELFVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7O0FBRTNCLFFBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDOUMsV0FBTyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFBOztBQUV2QyxpQkFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFL0IsVUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUE7R0FDckMsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQywyQ0FBMkMsRUFBRSxZQUFNO0FBQ3BELFVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7O0FBRTNCLFFBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDOUMsV0FBTyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFBOzs7O0FBSXhDLFNBQUssQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7O0FBRXZELGlCQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUVoQyxVQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtHQUNyQyxDQUFDLENBQUE7O0FBRUYsVUFBUSxDQUFDLGlDQUFpQyxFQUFFLFlBQU07QUFDaEQsY0FBVSxDQUFDLFlBQU07QUFDZixZQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLFVBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFBO0tBQzlDLENBQUMsQ0FBQTs7QUFFRixNQUFFLENBQUMsNEJBQTRCLEVBQUUsWUFBTTtBQUNyQyxtQkFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTs7QUFFM0QsVUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLGVBQWUsRUFBRSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQSxBQUFDLENBQUE7O0FBRS9KLFlBQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUE7S0FDaEcsQ0FBQyxDQUFBOztBQUVGLE1BQUUsQ0FBQyxrQ0FBa0MsRUFBRSxZQUFNO0FBQzNDLG1CQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO0FBQzNELFlBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUE7S0FDbEUsQ0FBQyxDQUFBOztBQUVGLFlBQVEsQ0FBQywrRUFBK0UsRUFBRSxZQUFNO0FBQzlGLGdCQUFVLENBQUMsWUFBTTtBQUNmLGNBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDM0IscUJBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDM0IsWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUE7T0FDOUMsQ0FBQyxDQUFBOztBQUVGLFFBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBTTtBQUNwQixxQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM3QixjQUFNLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FDdEQsQ0FBQyxDQUFBO0tBQ0gsQ0FBQyxDQUFBO0dBQ0gsQ0FBQyxDQUFBOztBQUVGLFVBQVEsQ0FBQywyQkFBMkIsRUFBRSxZQUFNO0FBQzFDLGNBQVUsQ0FBQyxZQUFNO0FBQ2YsVUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDeEMsVUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDN0QsVUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLENBQUE7S0FDakQsQ0FBQyxDQUFBOztBQUVGLE1BQUUsQ0FBQyx5Q0FBeUMsRUFBRSxZQUFNO0FBQ2xELFlBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDM0IsWUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTs7QUFFcEUsWUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMzQixZQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0tBQ3JFLENBQUMsQ0FBQTtHQUNILENBQUMsQ0FBQTs7QUFFRixVQUFRLENBQUMsZ0VBQWdFLEVBQUUsWUFBTTtBQUMvRSxNQUFFLENBQUMsNkNBQTZDLEVBQUUsWUFBTTtBQUN0RCxZQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzFDLENBQUMsQ0FBQTs7QUFFRixNQUFFLENBQUMsdURBQXVELEVBQUUsWUFBTTtBQUNoRSxZQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBOztBQUUzQixZQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzVDLFlBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtLQUN4QyxDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7O0FBRUYsVUFBUSxDQUFDLDZCQUE2QixFQUFFLFlBQU07Z0JBQ1ksRUFBRTtRQUFyRCxjQUFjO1FBQUUsWUFBWTtRQUFFLGlCQUFpQjs7QUFFcEQsY0FBVSxDQUFDLFlBQU07Ozs7QUFJZixXQUFLLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBOztBQUV2RCxZQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLG1CQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2hDLG1CQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUVoQyxvQkFBYyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0FBQzVDLGtCQUFZLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0FBQzlELHVCQUFpQixHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxhQUFhLENBQUMsZUFBZSxFQUFFLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFBLEFBQUMsQ0FBQTtLQUNqSCxDQUFDLENBQUE7O0FBRUYsTUFBRSxDQUFDLDREQUE0RCxFQUFFLFlBQU07QUFDckUsWUFBTSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pGLFlBQU0sQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsNEJBQTRCLENBQUMsQ0FBQTtLQUM1RixDQUFDLENBQUE7O0FBRUYsTUFBRSxDQUFDLDZEQUE2RCxFQUFFLFlBQU07QUFDdEUsWUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtLQUN0RixDQUFDLENBQUE7O0FBRUYsTUFBRSxDQUFDLCtDQUErQyxFQUFFLFlBQU07QUFDeEQsWUFBTSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0tBQ3ZELENBQUMsQ0FBQTs7QUFFRixNQUFFLENBQUMsOENBQThDLEVBQUUsWUFBTTtBQUN2RCxZQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7S0FDdEQsQ0FBQyxDQUFBOztBQUVGLFlBQVEsQ0FBQyxvQkFBb0IsRUFBRSxZQUFNO0FBQ25DLGdCQUFVLENBQUMsWUFBTTtBQUNmLHFCQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO0FBQzNELHlCQUFpQixHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUE7T0FDbkYsQ0FBQyxDQUFBOztBQUVGLFFBQUUsQ0FBQyxnRUFBZ0UsRUFBRSxZQUFNO0FBQ3pFLGNBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUE7T0FDbEUsQ0FBQyxDQUFBOztBQUVGLFFBQUUsQ0FBQywrQ0FBK0MsRUFBRSxZQUFNO0FBQ3hELGNBQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUE7T0FDeEUsQ0FBQyxDQUFBOztBQUVGLFFBQUUsQ0FBQyw4Q0FBOEMsRUFBRSxZQUFNO0FBQ3ZELGNBQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtPQUNsRSxDQUFDLENBQUE7S0FDSCxDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7O0FBRUYsVUFBUSxDQUFDLHNCQUFzQixFQUFFLFlBQU07QUFDckMsTUFBRSxDQUFDLDJCQUEyQixFQUFFLFlBQU07QUFDcEMsVUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN0QyxhQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUV6QixhQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7O0FBRWpCLFlBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0tBQy9CLENBQUMsQ0FBQTs7QUFFRixNQUFFLENBQUMsc0NBQXNDLEVBQUUsWUFBTTtBQUMvQyxhQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDakIsWUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0tBQzNDLENBQUMsQ0FBQTtHQUNILENBQUMsQ0FBQTs7QUFFRixVQUFRLENBQUMsNEJBQTRCLEVBQUUsWUFBTTtBQUMzQyxNQUFFLENBQUMsb0JBQW9CLEVBQUUsWUFBTTtBQUM3QixXQUFLLENBQUMsT0FBTyxFQUFDLFNBQVMsQ0FBQyxDQUFBOztBQUV4QixZQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7O0FBRWhCLFlBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtLQUMzQyxDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7Ozs7Ozs7Ozs7QUFVRixVQUFRLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtnQkFDSyxFQUFFO1FBQW5DLE1BQU07UUFBRSxVQUFVO1FBQUUsU0FBUzs7QUFFbEMsY0FBVSxDQUFDLFlBQU07QUFDZixZQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBOztBQUUzQixlQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMxQyxhQUFPLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUE7O0FBRTdDLFlBQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pELGdCQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQU8sT0FBTyxFQUFDLENBQUMsQ0FBQTtLQUNqRixDQUFDLENBQUE7O0FBRUYsTUFBRSxDQUFDLDJDQUEyQyxFQUFFLFlBQU07QUFDcEQsWUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtLQUMvRCxDQUFDLENBQUE7O0FBRUYsTUFBRSxDQUFDLG9EQUFvRCxFQUFFLFlBQU07QUFDN0QsWUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUE7QUFDcEMsWUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNuRCxZQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2xELENBQUMsQ0FBQTs7QUFFRixZQUFRLENBQUMsK0JBQStCLEVBQUUsWUFBTTtBQUM5QyxnQkFBVSxDQUFDLFlBQU07QUFDZixZQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUE7QUFDNUQsY0FBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUNuQyxjQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUV0QyxnQkFBUSxDQUFDLFlBQU07QUFBRSxpQkFBTyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7U0FBRSxDQUFDLENBQUE7T0FDNUQsQ0FBQyxDQUFBOztBQUVGLFFBQUUsQ0FBQywwREFBMEQsRUFBRSxZQUFNO0FBQ25FLGNBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0FBQ3BDLGNBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbkQsY0FBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUNsRCxDQUFDLENBQUE7S0FDSCxDQUFDLENBQUE7O0FBRUYsWUFBUSxDQUFDLHVCQUF1QixFQUFFLFlBQU07QUFDdEMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO09BQ2pCLENBQUMsQ0FBQTs7QUFFRixRQUFFLENBQUMsNkNBQTZDLEVBQUUsWUFBTTtBQUN0RCxjQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFBO09BQ2pFLENBQUMsQ0FBQTs7QUFFRixRQUFFLENBQUMsb0RBQW9ELEVBQUUsWUFBTTtBQUM3RCxjQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ25ELGNBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FDbEQsQ0FBQyxDQUFBO0tBQ0gsQ0FBQyxDQUFBOztBQUVGLFlBQVEsQ0FBQywyQkFBMkIsRUFBRSxZQUFNO0FBQzFDLGdCQUFVLENBQUMsWUFBTTtBQUNmLGtCQUFVLENBQUMsT0FBTyxFQUFFLENBQUE7T0FDckIsQ0FBQyxDQUFBOztBQUVGLFFBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxZQUFNO0FBQ3RELGNBQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUE7T0FDakUsQ0FBQyxDQUFBOztBQUVGLFFBQUUsQ0FBQyxvREFBb0QsRUFBRSxZQUFNO0FBQzdELGNBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbkQsY0FBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUNsRCxDQUFDLENBQUE7S0FDSCxDQUFDLENBQUE7O0FBRUYsWUFBUSxDQUFDLCtDQUErQyxFQUFFLFlBQU07QUFDOUQsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsZUFBTyxDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFBO09BQzlDLENBQUMsQ0FBQTs7QUFFRixRQUFFLENBQUMsNkNBQTZDLEVBQUUsWUFBTTtBQUN0RCxjQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFBO09BQ2pFLENBQUMsQ0FBQTs7QUFFRixRQUFFLENBQUMsb0RBQW9ELEVBQUUsWUFBTTtBQUM3RCxjQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ25ELGNBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FDbEQsQ0FBQyxDQUFBO0tBQ0gsQ0FBQyxDQUFBOztBQUVGLFlBQVEsQ0FBQyx3QkFBd0IsRUFBRSxZQUFNO0FBQ3ZDLGdCQUFVLENBQUMsWUFBTTtBQUNmLGVBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtPQUNsQixDQUFDLENBQUE7O0FBRUYsUUFBRSxDQUFDLDhDQUE4QyxFQUFFLFlBQU07QUFDdkQsY0FBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDM0MsY0FBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtPQUNsRCxDQUFDLENBQUE7O0FBRUYsUUFBRSxDQUFDLDBDQUEwQyxFQUFFLFlBQU07QUFDbkQsY0FBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDaEQsa0JBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBTyxPQUFPLEVBQUMsQ0FBQyxDQUFBOztBQUVoRixjQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUE7T0FDbkMsQ0FBQyxDQUFBO0tBQ0gsQ0FBQyxDQUFBO0dBQ0gsQ0FBQyxDQUFBOztBQUVGLFVBQVEsQ0FBQyw2QkFBNkIsRUFBRSxZQUFNO2dCQUN4QixFQUFFO1FBQWpCLFdBQVc7O0FBRWhCLGNBQVUsQ0FBQyxZQUFNO0FBQ2YsWUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTs7QUFFM0IsVUFBSSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBZ0IsQ0FBWSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQzNDLFlBQUksVUFBVSxZQUFBLENBQUE7QUFDZCxZQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzNDLGtCQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUosSUFBSSxFQUFDLENBQUMsQ0FBQTtPQUNwRCxDQUFBOztBQUVELHNCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNoRCxzQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDL0Msc0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbkQsc0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3hDLHNCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMxQyxzQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFcEQsaUJBQVcsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0tBQ3ZELENBQUMsQ0FBQTs7QUFFRixNQUFFLENBQUMsd0RBQXdELEVBQUUsWUFBTTtBQUNqRSxZQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7S0FDL0YsQ0FBQyxDQUFBOztBQUVGLE1BQUUsQ0FBQyxxREFBcUQsRUFBRSxZQUFNO0FBQzlELFlBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FDeEQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBOztBQUUvQyxZQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUM5QyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBOztBQUVwQyxZQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQ3pELE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtLQUNyRCxDQUFDLENBQUE7O0FBRUYsTUFBRSxDQUFDLHNFQUFzRSxFQUFFLFlBQU07QUFDL0UsWUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFNUQsWUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRWxELFlBQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDOUQsQ0FBQyxDQUFBO0dBQ0gsQ0FBQyxDQUFBO0NBQ0gsQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkYsUUFBUSxDQUFDLHFCQUFxQixFQUFFLFlBQU07Y0FDNkIsRUFBRTtNQUE5RCxNQUFNO01BQUUsYUFBYTtNQUFFLE9BQU87TUFBRSxXQUFXO01BQUUsV0FBVzs7QUFFN0QsWUFBVSxDQUFDLFlBQU07QUFDZixRQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN4QyxRQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN2QyxRQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQTs7QUFFdkMsVUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzNDLGlCQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUMsV0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNsQyxpQkFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMzQixpQkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMzQixVQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUE7O0FBRWhDLFFBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRTFDLFdBQU8sR0FBRyw0QkFBWTtBQUNwQixnQkFBVSxFQUFFLE1BQU07QUFDbEIsZ0JBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQTs7QUFFRixlQUFXLEdBQUcsb0JBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQzFFLGVBQVcsR0FBRyxvQkFBRyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0dBQ3ZFLENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMsMEJBQTBCLEVBQUUsWUFBTTtBQUNuQyxVQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0dBQ2hELENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMsK0RBQStELEVBQUUsWUFBTTtBQUN4RSxVQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLFVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7O0FBRXBFLFVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDM0IsVUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtHQUNyRSxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLGdFQUFnRSxFQUFFLFlBQU07QUFDekUsVUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3JELFVBQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQTtHQUNyRixDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLHdEQUF3RCxFQUFFLFlBQU07QUFDakUsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMzQixVQUFNLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7R0FDeEQsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyxxREFBcUQsRUFBRSxZQUFNO0FBQzlELFVBQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFN0MsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMzQixVQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7O0FBRTlDLFVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDM0IsVUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBOztBQUUzRSxXQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtBQUNwQixVQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7R0FDaEQsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyxvREFBb0QsRUFBRSxZQUFNO0FBQzdELFVBQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRTVDLFVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDM0IsVUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTs7QUFFN0MsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUMzQixVQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBOztBQUU5RSxXQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtBQUNsQixVQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0dBQzlDLENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMsdUNBQXVDLEVBQUUsWUFBTTtBQUNoRCxVQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLFFBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFBOztBQUVoRCxVQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzVDLFVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTs7QUFFdkMsV0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7O0FBRXBCLFVBQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtBQUNuRSxVQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7R0FDekMsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQywrQ0FBK0MsRUFBRSxZQUFNO0FBQ3hELFVBQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtHQUN0RCxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLDhDQUE4QyxFQUFFLFlBQU07QUFDdkQsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTs7QUFFM0IsVUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUE7O0FBRTlFLFdBQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0FBQ3BCLFVBQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtHQUN0RCxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLGtEQUFrRCxFQUFFLFlBQU07QUFDM0QsVUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTs7QUFFM0IsUUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUM5QyxXQUFPLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUE7O0FBRXZDLGlCQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUUvQixVQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7R0FDekMsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyxtREFBbUQsRUFBRSxZQUFNO0FBQzVELFVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7O0FBRTNCLFFBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDOUMsV0FBTyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFBOzs7O0FBSXhDLFNBQUssQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7O0FBRXZELGlCQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUVoQyxVQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7R0FDekMsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyx1REFBdUQsRUFBRSxZQUFNO0FBQ2hFLFFBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDOUMsV0FBTyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFBOztBQUV2QyxVQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLGlCQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBOztBQUVoQyxVQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3pDLFVBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTs7QUFFeEMsV0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTs7QUFFeEIsVUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMxQyxVQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtHQUNyQyxDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLCtEQUErRCxFQUFFLFlBQU07QUFDeEUsV0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN6QixXQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzNCLFdBQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7O0FBRTFCLFVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDekMsVUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMzQyxVQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzFDLFVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7R0FDNUMsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyxxREFBcUQsRUFBRSxZQUFNO0FBQzlELFFBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDL0MsV0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBOztBQUVwQyxXQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3pCLFdBQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDM0IsV0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTs7QUFFMUIsVUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FDdkMsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyxpREFBaUQsRUFBRSxZQUFNO0FBQzFELG9CQUFnQixHQUFHLElBQUksQ0FBQTs7QUFFdkIsV0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFBOztBQUV6QyxVQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDM0QsVUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQ2pELENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMsa0RBQWtELEVBQUUsWUFBTTtBQUMzRCxvQkFBZ0IsR0FBRyxJQUFJLENBQUE7O0FBRXZCLFdBQU8sQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFMUMsVUFBTSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzVELFVBQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtHQUNwRCxDQUFDLENBQUE7Q0FDSCxDQUFDLENBQUEiLCJmaWxlIjoiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwL3NwZWMvbWluaW1hcC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0ICcuL2hlbHBlcnMvd29ya3NwYWNlJ1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMtcGx1cydcbmltcG9ydCBNaW5pbWFwIGZyb20gJy4uL2xpYi9taW5pbWFwJ1xuXG5kZXNjcmliZSgnTWluaW1hcCcsICgpID0+IHtcbiAgbGV0IFtlZGl0b3IsIGVkaXRvckVsZW1lbnQsIG1pbmltYXAsIGxhcmdlU2FtcGxlLCBzbWFsbFNhbXBsZSwgbWluaW1hcFZlcnRpY2FsU2NhbGVGYWN0b3IsIG1pbmltYXBIb3Jpem9udGFsU2NhbGVGYWN0b3JdID0gW11cblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBhdG9tLmNvbmZpZy5zZXQoJ21pbmltYXAuY2hhckhlaWdodCcsIDQpXG4gICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmNoYXJXaWR0aCcsIDIpXG4gICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmludGVybGluZScsIDEpXG5cbiAgICBlZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5idWlsZFRleHRFZGl0b3Ioe30pXG5cbiAgICBlZGl0b3JFbGVtZW50ID0gYXRvbS52aWV3cy5nZXRWaWV3KGVkaXRvcilcbiAgICBqYXNtaW5lLmF0dGFjaFRvRE9NKGVkaXRvckVsZW1lbnQpXG4gICAgZWRpdG9yRWxlbWVudC5zZXRIZWlnaHQoNTApXG4gICAgZWRpdG9yRWxlbWVudC5zZXRXaWR0aCgyMDApXG5cbiAgICBtaW5pbWFwVmVydGljYWxTY2FsZUZhY3RvciA9IDUgLyBlZGl0b3IuZ2V0TGluZUhlaWdodEluUGl4ZWxzKClcbiAgICBtaW5pbWFwSG9yaXpvbnRhbFNjYWxlRmFjdG9yID0gMiAvIGVkaXRvci5nZXREZWZhdWx0Q2hhcldpZHRoKClcblxuICAgIGxldCBkaXIgPSBhdG9tLnByb2plY3QuZ2V0RGlyZWN0b3JpZXMoKVswXVxuXG4gICAgbWluaW1hcCA9IG5ldyBNaW5pbWFwKHt0ZXh0RWRpdG9yOiBlZGl0b3J9KVxuICAgIGxhcmdlU2FtcGxlID0gZnMucmVhZEZpbGVTeW5jKGRpci5yZXNvbHZlKCdsYXJnZS1maWxlLmNvZmZlZScpKS50b1N0cmluZygpXG4gICAgc21hbGxTYW1wbGUgPSBmcy5yZWFkRmlsZVN5bmMoZGlyLnJlc29sdmUoJ3NhbXBsZS5jb2ZmZWUnKSkudG9TdHJpbmcoKVxuICB9KVxuXG4gIGl0KCdoYXMgYW4gYXNzb2NpYXRlZCBlZGl0b3InLCAoKSA9PiB7XG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0VGV4dEVkaXRvcigpKS50b0VxdWFsKGVkaXRvcilcbiAgfSlcblxuICBpdCgncmV0dXJucyBmYWxzZSB3aGVuIGFza2VkIGlmIGRlc3Ryb3llZCcsICgpID0+IHtcbiAgICBleHBlY3QobWluaW1hcC5pc0Rlc3Ryb3llZCgpKS50b0JlRmFsc3koKVxuICB9KVxuXG4gIGl0KCdyYWlzZSBhbiBleGNlcHRpb24gaWYgY3JlYXRlZCB3aXRob3V0IGEgdGV4dCBlZGl0b3InLCAoKSA9PiB7XG4gICAgZXhwZWN0KCgpID0+IHsgcmV0dXJuIG5ldyBNaW5pbWFwKCkgfSkudG9UaHJvdygpXG4gIH0pXG5cbiAgaXQoJ21lYXN1cmVzIHRoZSBtaW5pbWFwIHNpemUgYmFzZWQgb24gdGhlIGN1cnJlbnQgZWRpdG9yIGNvbnRlbnQnLCAoKSA9PiB7XG4gICAgZWRpdG9yLnNldFRleHQoc21hbGxTYW1wbGUpXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0SGVpZ2h0KCkpLnRvRXF1YWwoZWRpdG9yLmdldFNjcmVlbkxpbmVDb3VudCgpICogNSlcblxuICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuICAgIGV4cGVjdChtaW5pbWFwLmdldEhlaWdodCgpKS50b0VxdWFsKGVkaXRvci5nZXRTY3JlZW5MaW5lQ291bnQoKSAqIDUpXG4gIH0pXG5cbiAgaXQoJ21lYXN1cmVzIHRoZSBzY2FsaW5nIGZhY3RvciBiZXR3ZWVuIHRoZSBlZGl0b3IgYW5kIHRoZSBtaW5pbWFwJywgKCkgPT4ge1xuICAgIGV4cGVjdChtaW5pbWFwLmdldFZlcnRpY2FsU2NhbGVGYWN0b3IoKSkudG9FcXVhbChtaW5pbWFwVmVydGljYWxTY2FsZUZhY3RvcilcbiAgICBleHBlY3QobWluaW1hcC5nZXRIb3Jpem9udGFsU2NhbGVGYWN0b3IoKSkudG9FcXVhbChtaW5pbWFwSG9yaXpvbnRhbFNjYWxlRmFjdG9yKVxuICB9KVxuXG4gIGl0KCdtZWFzdXJlcyB0aGUgZWRpdG9yIHZpc2libGUgYXJlYSBzaXplIGF0IG1pbmltYXAgc2NhbGUnLCAoKSA9PiB7XG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0VGV4dEVkaXRvclNjYWxlZEhlaWdodCgpKS50b0VxdWFsKDUwICogbWluaW1hcFZlcnRpY2FsU2NhbGVGYWN0b3IpXG4gIH0pXG5cbiAgaXQoJ21lYXN1cmVzIHRoZSBhdmFpbGFibGUgbWluaW1hcCBzY3JvbGwnLCAoKSA9PiB7XG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG4gICAgbGV0IGxhcmdlTGluZUNvdW50ID0gZWRpdG9yLmdldFNjcmVlbkxpbmVDb3VudCgpXG5cbiAgICBleHBlY3QobWluaW1hcC5nZXRNYXhTY3JvbGxUb3AoKSkudG9FcXVhbChsYXJnZUxpbmVDb3VudCAqIDUgLSA1MClcbiAgICBleHBlY3QobWluaW1hcC5jYW5TY3JvbGwoKSkudG9CZVRydXRoeSgpXG4gIH0pXG5cbiAgaXQoJ2NvbXB1dGVzIHRoZSBmaXJzdCB2aXNpYmxlIHJvdyBpbiB0aGUgbWluaW1hcCcsICgpID0+IHtcbiAgICBleHBlY3QobWluaW1hcC5nZXRGaXJzdFZpc2libGVTY3JlZW5Sb3coKSkudG9FcXVhbCgwKVxuICB9KVxuXG4gIGl0KCdjb21wdXRlcyB0aGUgbGFzdCB2aXNpYmxlIHJvdyBpbiB0aGUgbWluaW1hcCcsICgpID0+IHtcbiAgICBleHBlY3QobWluaW1hcC5nZXRMYXN0VmlzaWJsZVNjcmVlblJvdygpKS50b0VxdWFsKDEwKVxuICB9KVxuXG4gIGl0KCdyZWxheXMgY2hhbmdlIGV2ZW50cyBmcm9tIHRoZSB0ZXh0IGVkaXRvcicsICgpID0+IHtcbiAgICBsZXQgY2hhbmdlU3B5ID0gamFzbWluZS5jcmVhdGVTcHkoJ2RpZENoYW5nZScpXG4gICAgbWluaW1hcC5vbkRpZENoYW5nZShjaGFuZ2VTcHkpXG5cbiAgICBlZGl0b3Iuc2V0VGV4dCgnZm9vJylcblxuICAgIGV4cGVjdChjaGFuZ2VTcHkpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxuXG4gIGl0KCdyZWxheXMgc2Nyb2xsIHRvcCBldmVudHMgZnJvbSB0aGUgZWRpdG9yJywgKCkgPT4ge1xuICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuXG4gICAgbGV0IHNjcm9sbFNweSA9IGphc21pbmUuY3JlYXRlU3B5KCdkaWRTY3JvbGwnKVxuICAgIG1pbmltYXAub25EaWRDaGFuZ2VTY3JvbGxUb3Aoc2Nyb2xsU3B5KVxuXG4gICAgZWRpdG9yRWxlbWVudC5zZXRTY3JvbGxUb3AoMTAwKVxuXG4gICAgZXhwZWN0KHNjcm9sbFNweSkudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG5cbiAgaXQoJ3JlbGF5cyBzY3JvbGwgbGVmdCBldmVudHMgZnJvbSB0aGUgZWRpdG9yJywgKCkgPT4ge1xuICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuXG4gICAgbGV0IHNjcm9sbFNweSA9IGphc21pbmUuY3JlYXRlU3B5KCdkaWRTY3JvbGwnKVxuICAgIG1pbmltYXAub25EaWRDaGFuZ2VTY3JvbGxMZWZ0KHNjcm9sbFNweSlcblxuICAgIC8vIFNlZW1zIGxpa2UgdGV4dCB3aXRob3V0IGEgdmlldyBhcmVuJ3QgYWJsZSB0byBzY3JvbGwgaG9yaXpvbnRhbGx5XG4gICAgLy8gZXZlbiB3aGVuIGl0cyB3aWR0aCB3YXMgc2V0LlxuICAgIHNweU9uKGVkaXRvckVsZW1lbnQsICdnZXRTY3JvbGxXaWR0aCcpLmFuZFJldHVybigxMDAwMClcblxuICAgIGVkaXRvckVsZW1lbnQuc2V0U2Nyb2xsTGVmdCgxMDApXG5cbiAgICBleHBlY3Qoc2Nyb2xsU3B5KS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcblxuICBkZXNjcmliZSgnd2hlbiBzY3JvbHMgcGFzdCBlbmQgaXMgZW5hYmxlZCcsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuICAgICAgYXRvbS5jb25maWcuc2V0KCdlZGl0b3Iuc2Nyb2xsUGFzdEVuZCcsIHRydWUpXG4gICAgfSlcblxuICAgIGl0KCdhZGp1c3QgdGhlIHNjcm9sbGluZyByYXRpbycsICgpID0+IHtcbiAgICAgIGVkaXRvckVsZW1lbnQuc2V0U2Nyb2xsVG9wKGVkaXRvckVsZW1lbnQuZ2V0U2Nyb2xsSGVpZ2h0KCkpXG5cbiAgICAgIGxldCBtYXhTY3JvbGxUb3AgPSBlZGl0b3JFbGVtZW50LmdldFNjcm9sbEhlaWdodCgpIC0gZWRpdG9yRWxlbWVudC5nZXRIZWlnaHQoKSAtIChlZGl0b3JFbGVtZW50LmdldEhlaWdodCgpIC0gMyAqIGVkaXRvci5kaXNwbGF5QnVmZmVyLmdldExpbmVIZWlnaHRJblBpeGVscygpKVxuXG4gICAgICBleHBlY3QobWluaW1hcC5nZXRUZXh0RWRpdG9yU2Nyb2xsUmF0aW8oKSkudG9FcXVhbChlZGl0b3JFbGVtZW50LmdldFNjcm9sbFRvcCgpIC8gbWF4U2Nyb2xsVG9wKVxuICAgIH0pXG5cbiAgICBpdCgnbG9jayB0aGUgbWluaW1hcCBzY3JvbGwgdG9wIHRvIDEnLCAoKSA9PiB7XG4gICAgICBlZGl0b3JFbGVtZW50LnNldFNjcm9sbFRvcChlZGl0b3JFbGVtZW50LmdldFNjcm9sbEhlaWdodCgpKVxuICAgICAgZXhwZWN0KG1pbmltYXAuZ2V0U2Nyb2xsVG9wKCkpLnRvRXF1YWwobWluaW1hcC5nZXRNYXhTY3JvbGxUb3AoKSlcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ2dldFRleHRFZGl0b3JTY3JvbGxSYXRpbygpLCB3aGVuIGdldFNjcm9sbFRvcCgpIGFuZCBtYXhTY3JvbGxUb3AgYm90aCBlcXVhbCAwJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGVkaXRvci5zZXRUZXh0KHNtYWxsU2FtcGxlKVxuICAgICAgICBlZGl0b3JFbGVtZW50LnNldEhlaWdodCg0MClcbiAgICAgICAgYXRvbS5jb25maWcuc2V0KCdlZGl0b3Iuc2Nyb2xsUGFzdEVuZCcsIHRydWUpXG4gICAgICB9KVxuXG4gICAgICBpdCgncmV0dXJucyAwJywgKCkgPT4ge1xuICAgICAgICBlZGl0b3JFbGVtZW50LnNldFNjcm9sbFRvcCgwKVxuICAgICAgICBleHBlY3QobWluaW1hcC5nZXRUZXh0RWRpdG9yU2Nyb2xsUmF0aW8oKSkudG9FcXVhbCgwKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCd3aGVuIHNvZnQgd3JhcCBpcyBlbmFibGVkJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgYXRvbS5jb25maWcuc2V0KCdlZGl0b3Iuc29mdFdyYXAnLCB0cnVlKVxuICAgICAgYXRvbS5jb25maWcuc2V0KCdlZGl0b3Iuc29mdFdyYXBBdFByZWZlcnJlZExpbmVMZW5ndGgnLCB0cnVlKVxuICAgICAgYXRvbS5jb25maWcuc2V0KCdlZGl0b3IucHJlZmVycmVkTGluZUxlbmd0aCcsIDIpXG4gICAgfSlcblxuICAgIGl0KCdtZWFzdXJlcyB0aGUgbWluaW1hcCB1c2luZyBzY3JlZW4gbGluZXMnLCAoKSA9PiB7XG4gICAgICBlZGl0b3Iuc2V0VGV4dChzbWFsbFNhbXBsZSlcbiAgICAgIGV4cGVjdChtaW5pbWFwLmdldEhlaWdodCgpKS50b0VxdWFsKGVkaXRvci5nZXRTY3JlZW5MaW5lQ291bnQoKSAqIDUpXG5cbiAgICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuICAgICAgZXhwZWN0KG1pbmltYXAuZ2V0SGVpZ2h0KCkpLnRvRXF1YWwoZWRpdG9yLmdldFNjcmVlbkxpbmVDb3VudCgpICogNSlcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCd3aGVuIHRoZXJlIGlzIG5vIHNjcm9sbGluZyBuZWVkZWQgdG8gZGlzcGxheSB0aGUgd2hvbGUgbWluaW1hcCcsICgpID0+IHtcbiAgICBpdCgncmV0dXJucyAwIHdoZW4gY29tcHV0aW5nIHRoZSBtaW5pbWFwIHNjcm9sbCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChtaW5pbWFwLmdldFNjcm9sbFRvcCgpKS50b0VxdWFsKDApXG4gICAgfSlcblxuICAgIGl0KCdyZXR1cm5zIDAgd2hlbiBtZWFzdXJpbmcgdGhlIGF2YWlsYWJsZSBtaW5pbWFwIHNjcm9sbCcsICgpID0+IHtcbiAgICAgIGVkaXRvci5zZXRUZXh0KHNtYWxsU2FtcGxlKVxuXG4gICAgICBleHBlY3QobWluaW1hcC5nZXRNYXhTY3JvbGxUb3AoKSkudG9FcXVhbCgwKVxuICAgICAgZXhwZWN0KG1pbmltYXAuY2FuU2Nyb2xsKCkpLnRvQmVGYWxzeSgpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgnd2hlbiB0aGUgZWRpdG9yIGlzIHNjcm9sbGVkJywgKCkgPT4ge1xuICAgIGxldCBbbGFyZ2VMaW5lQ291bnQsIGVkaXRvckhlaWdodCwgZWRpdG9yU2Nyb2xsUmF0aW9dID0gW11cblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgLy8gU2FtZSBoZXJlLCB3aXRob3V0IGEgdmlldywgdGhlIGdldFNjcm9sbFdpZHRoIG1ldGhvZCBhbHdheXMgcmV0dXJucyAxXG4gICAgICAvLyBhbmQgdGhlIHRlc3QgZmFpbHMgYmVjYXVzZSB0aGUgY2FwcGVkIHNjcm9sbCBsZWZ0IHZhbHVlIGFsd2F5cyBlbmQgdXBcbiAgICAgIC8vIHRvIGJlIDAsIGluZHVjaW5nIGVycm9ycyBpbiBjb21wdXRhdGlvbnMuXG4gICAgICBzcHlPbihlZGl0b3JFbGVtZW50LCAnZ2V0U2Nyb2xsV2lkdGgnKS5hbmRSZXR1cm4oMTAwMDApXG5cbiAgICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuICAgICAgZWRpdG9yRWxlbWVudC5zZXRTY3JvbGxUb3AoMTAwMClcbiAgICAgIGVkaXRvckVsZW1lbnQuc2V0U2Nyb2xsTGVmdCgyMDApXG5cbiAgICAgIGxhcmdlTGluZUNvdW50ID0gZWRpdG9yLmdldFNjcmVlbkxpbmVDb3VudCgpXG4gICAgICBlZGl0b3JIZWlnaHQgPSBsYXJnZUxpbmVDb3VudCAqIGVkaXRvci5nZXRMaW5lSGVpZ2h0SW5QaXhlbHMoKVxuICAgICAgZWRpdG9yU2Nyb2xsUmF0aW8gPSBlZGl0b3JFbGVtZW50LmdldFNjcm9sbFRvcCgpIC8gKGVkaXRvckVsZW1lbnQuZ2V0U2Nyb2xsSGVpZ2h0KCkgLSBlZGl0b3JFbGVtZW50LmdldEhlaWdodCgpKVxuICAgIH0pXG5cbiAgICBpdCgnc2NhbGVzIHRoZSBlZGl0b3Igc2Nyb2xsIGJhc2VkIG9uIHRoZSBtaW5pbWFwIHNjYWxlIGZhY3RvcicsICgpID0+IHtcbiAgICAgIGV4cGVjdChtaW5pbWFwLmdldFRleHRFZGl0b3JTY2FsZWRTY3JvbGxUb3AoKSkudG9FcXVhbCgxMDAwICogbWluaW1hcFZlcnRpY2FsU2NhbGVGYWN0b3IpXG4gICAgICBleHBlY3QobWluaW1hcC5nZXRUZXh0RWRpdG9yU2NhbGVkU2Nyb2xsTGVmdCgpKS50b0VxdWFsKDIwMCAqIG1pbmltYXBIb3Jpem9udGFsU2NhbGVGYWN0b3IpXG4gICAgfSlcblxuICAgIGl0KCdjb21wdXRlcyB0aGUgb2Zmc2V0IHRvIGFwcGx5IGJhc2VkIG9uIHRoZSBlZGl0b3Igc2Nyb2xsIHRvcCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChtaW5pbWFwLmdldFNjcm9sbFRvcCgpKS50b0VxdWFsKGVkaXRvclNjcm9sbFJhdGlvICogbWluaW1hcC5nZXRNYXhTY3JvbGxUb3AoKSlcbiAgICB9KVxuXG4gICAgaXQoJ2NvbXB1dGVzIHRoZSBmaXJzdCB2aXNpYmxlIHJvdyBpbiB0aGUgbWluaW1hcCcsICgpID0+IHtcbiAgICAgIGV4cGVjdChtaW5pbWFwLmdldEZpcnN0VmlzaWJsZVNjcmVlblJvdygpKS50b0VxdWFsKDU4KVxuICAgIH0pXG5cbiAgICBpdCgnY29tcHV0ZXMgdGhlIGxhc3QgdmlzaWJsZSByb3cgaW4gdGhlIG1pbmltYXAnLCAoKSA9PiB7XG4gICAgICBleHBlY3QobWluaW1hcC5nZXRMYXN0VmlzaWJsZVNjcmVlblJvdygpKS50b0VxdWFsKDY5KVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnZG93biB0byB0aGUgYm90dG9tJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGVkaXRvckVsZW1lbnQuc2V0U2Nyb2xsVG9wKGVkaXRvckVsZW1lbnQuZ2V0U2Nyb2xsSGVpZ2h0KCkpXG4gICAgICAgIGVkaXRvclNjcm9sbFJhdGlvID0gZWRpdG9yRWxlbWVudC5nZXRTY3JvbGxUb3AoKSAvIGVkaXRvckVsZW1lbnQuZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdjb21wdXRlcyBhbiBvZmZzZXQgdGhhdCBzY3JvbGxzIHRoZSBtaW5pbWFwIHRvIHRoZSBib3R0b20gZWRnZScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KG1pbmltYXAuZ2V0U2Nyb2xsVG9wKCkpLnRvRXF1YWwobWluaW1hcC5nZXRNYXhTY3JvbGxUb3AoKSlcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdjb21wdXRlcyB0aGUgZmlyc3QgdmlzaWJsZSByb3cgaW4gdGhlIG1pbmltYXAnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChtaW5pbWFwLmdldEZpcnN0VmlzaWJsZVNjcmVlblJvdygpKS50b0VxdWFsKGxhcmdlTGluZUNvdW50IC0gMTApXG4gICAgICB9KVxuXG4gICAgICBpdCgnY29tcHV0ZXMgdGhlIGxhc3QgdmlzaWJsZSByb3cgaW4gdGhlIG1pbmltYXAnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChtaW5pbWFwLmdldExhc3RWaXNpYmxlU2NyZWVuUm93KCkpLnRvRXF1YWwobGFyZ2VMaW5lQ291bnQpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ2Rlc3Ryb3lpbmcgdGhlIG1vZGVsJywgKCkgPT4ge1xuICAgIGl0KCdlbWl0cyBhIGRpZC1kZXN0cm95IGV2ZW50JywgKCkgPT4ge1xuICAgICAgbGV0IHNweSA9IGphc21pbmUuY3JlYXRlU3B5KCdkZXN0cm95JylcbiAgICAgIG1pbmltYXAub25EaWREZXN0cm95KHNweSlcblxuICAgICAgbWluaW1hcC5kZXN0cm95KClcblxuICAgICAgZXhwZWN0KHNweSkudG9IYXZlQmVlbkNhbGxlZCgpXG4gICAgfSlcblxuICAgIGl0KCdyZXR1cm5zIHRydWUgd2hlbiBhc2tlZCBpZiBkZXN0cm95ZWQnLCAoKSA9PiB7XG4gICAgICBtaW5pbWFwLmRlc3Ryb3koKVxuICAgICAgZXhwZWN0KG1pbmltYXAuaXNEZXN0cm95ZWQoKSkudG9CZVRydXRoeSgpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgnZGVzdHJveWluZyB0aGUgdGV4dCBlZGl0b3InLCAoKSA9PiB7XG4gICAgaXQoJ2Rlc3Ryb3lzIHRoZSBtb2RlbCcsICgpID0+IHtcbiAgICAgIHNweU9uKG1pbmltYXAsJ2Rlc3Ryb3knKVxuXG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGV4cGVjdChtaW5pbWFwLmRlc3Ryb3kpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gICAgIyMjIyMjIyMgICMjIyMjIyMjICAjIyMjIyMgICAjIyMjIyMjXG4gIC8vICAgICMjICAgICAjIyAjIyAgICAgICAjIyAgICAjIyAjIyAgICAgIyNcbiAgLy8gICAgIyMgICAgICMjICMjICAgICAgICMjICAgICAgICMjICAgICAjI1xuICAvLyAgICAjIyAgICAgIyMgIyMjIyMjICAgIyMgICAgICAgIyMgICAgICMjXG4gIC8vICAgICMjICAgICAjIyAjIyAgICAgICAjIyAgICAgICAjIyAgICAgIyNcbiAgLy8gICAgIyMgICAgICMjICMjICAgICAgICMjICAgICMjICMjICAgICAjI1xuICAvLyAgICAjIyMjIyMjIyAgIyMjIyMjIyMgICMjIyMjIyAgICMjIyMjIyNcblxuICBkZXNjcmliZSgnOjpkZWNvcmF0ZU1hcmtlcicsICgpID0+IHtcbiAgICBsZXQgW21hcmtlciwgZGVjb3JhdGlvbiwgY2hhbmdlU3B5XSA9IFtdXG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuXG4gICAgICBjaGFuZ2VTcHkgPSBqYXNtaW5lLmNyZWF0ZVNweSgnZGlkQ2hhbmdlJylcbiAgICAgIG1pbmltYXAub25EaWRDaGFuZ2VEZWNvcmF0aW9uUmFuZ2UoY2hhbmdlU3B5KVxuXG4gICAgICBtYXJrZXIgPSBtaW5pbWFwLm1hcmtCdWZmZXJSYW5nZShbWzAsNl0sIFsxLDExXV0pXG4gICAgICBkZWNvcmF0aW9uID0gbWluaW1hcC5kZWNvcmF0ZU1hcmtlcihtYXJrZXIsIHt0eXBlOiAnaGlnaGxpZ2h0JywgY2xhc3M6ICdkdW1teSd9KVxuICAgIH0pXG5cbiAgICBpdCgnY3JlYXRlcyBhIGRlY29yYXRpb24gZm9yIHRoZSBnaXZlbiBtYXJrZXInLCAoKSA9PiB7XG4gICAgICBleHBlY3QobWluaW1hcC5kZWNvcmF0aW9uc0J5TWFya2VySWRbbWFya2VyLmlkXSkudG9CZURlZmluZWQoKVxuICAgIH0pXG5cbiAgICBpdCgnY3JlYXRlcyBhIGNoYW5nZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBtYXJrZXIgcmFuZ2UnLCAoKSA9PiB7XG4gICAgICBleHBlY3QoY2hhbmdlU3B5KS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgICAgIGV4cGVjdChjaGFuZ2VTcHkuY2FsbHNbMF0uYXJnc1swXS5zdGFydCkudG9FcXVhbCgwKVxuICAgICAgZXhwZWN0KGNoYW5nZVNweS5jYWxsc1swXS5hcmdzWzBdLmVuZCkudG9FcXVhbCgxKVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnd2hlbiB0aGUgbWFya2VyIHJhbmdlIGNoYW5nZXMnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgbGV0IG1hcmtlckNoYW5nZVNweSA9IGphc21pbmUuY3JlYXRlU3B5KCdtYXJrZXItZGlkLWNoYW5nZScpXG4gICAgICAgIG1hcmtlci5vbkRpZENoYW5nZShtYXJrZXJDaGFuZ2VTcHkpXG4gICAgICAgIG1hcmtlci5zZXRCdWZmZXJSYW5nZShbWzAsNl0sIFszLDExXV0pXG5cbiAgICAgICAgd2FpdHNGb3IoKCkgPT4geyByZXR1cm4gbWFya2VyQ2hhbmdlU3B5LmNhbGxzLmxlbmd0aCA+IDAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdjcmVhdGVzIGEgY2hhbmdlIG9ubHkgZm9yIHRoZSBkaWYgYmV0d2VlbiB0aGUgdHdvIHJhbmdlcycsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGNoYW5nZVNweSkudG9IYXZlQmVlbkNhbGxlZCgpXG4gICAgICAgIGV4cGVjdChjaGFuZ2VTcHkuY2FsbHNbMV0uYXJnc1swXS5zdGFydCkudG9FcXVhbCgxKVxuICAgICAgICBleHBlY3QoY2hhbmdlU3B5LmNhbGxzWzFdLmFyZ3NbMF0uZW5kKS50b0VxdWFsKDMpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnZGVzdHJveWluZyB0aGUgbWFya2VyJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIG1hcmtlci5kZXN0cm95KClcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdyZW1vdmVzIHRoZSBkZWNvcmF0aW9uIGZyb20gdGhlIHJlbmRlciB2aWV3JywgKCkgPT4ge1xuICAgICAgICBleHBlY3QobWluaW1hcC5kZWNvcmF0aW9uc0J5TWFya2VySWRbbWFya2VyLmlkXSkudG9CZVVuZGVmaW5lZCgpXG4gICAgICB9KVxuXG4gICAgICBpdCgnY3JlYXRlcyBhIGNoYW5nZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBtYXJrZXIgcmFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChjaGFuZ2VTcHkuY2FsbHNbMV0uYXJnc1swXS5zdGFydCkudG9FcXVhbCgwKVxuICAgICAgICBleHBlY3QoY2hhbmdlU3B5LmNhbGxzWzFdLmFyZ3NbMF0uZW5kKS50b0VxdWFsKDEpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBkZXNjcmliZSgnZGVzdHJveWluZyB0aGUgZGVjb3JhdGlvbicsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBkZWNvcmF0aW9uLmRlc3Ryb3koKVxuICAgICAgfSlcblxuICAgICAgaXQoJ3JlbW92ZXMgdGhlIGRlY29yYXRpb24gZnJvbSB0aGUgcmVuZGVyIHZpZXcnLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChtaW5pbWFwLmRlY29yYXRpb25zQnlNYXJrZXJJZFttYXJrZXIuaWRdKS50b0JlVW5kZWZpbmVkKClcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdjcmVhdGVzIGEgY2hhbmdlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1hcmtlciByYW5nZScsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGNoYW5nZVNweS5jYWxsc1sxXS5hcmdzWzBdLnN0YXJ0KS50b0VxdWFsKDApXG4gICAgICAgIGV4cGVjdChjaGFuZ2VTcHkuY2FsbHNbMV0uYXJnc1swXS5lbmQpLnRvRXF1YWwoMSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdkZXN0cm95aW5nIGFsbCB0aGUgZGVjb3JhdGlvbnMgZm9yIHRoZSBtYXJrZXInLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgbWluaW1hcC5yZW1vdmVBbGxEZWNvcmF0aW9uc0Zvck1hcmtlcihtYXJrZXIpXG4gICAgICB9KVxuXG4gICAgICBpdCgncmVtb3ZlcyB0aGUgZGVjb3JhdGlvbiBmcm9tIHRoZSByZW5kZXIgdmlldycsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KG1pbmltYXAuZGVjb3JhdGlvbnNCeU1hcmtlcklkW21hcmtlci5pZF0pLnRvQmVVbmRlZmluZWQoKVxuICAgICAgfSlcblxuICAgICAgaXQoJ2NyZWF0ZXMgYSBjaGFuZ2UgY29ycmVzcG9uZGluZyB0byB0aGUgbWFya2VyIHJhbmdlJywgKCkgPT4ge1xuICAgICAgICBleHBlY3QoY2hhbmdlU3B5LmNhbGxzWzFdLmFyZ3NbMF0uc3RhcnQpLnRvRXF1YWwoMClcbiAgICAgICAgZXhwZWN0KGNoYW5nZVNweS5jYWxsc1sxXS5hcmdzWzBdLmVuZCkudG9FcXVhbCgxKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ2Rlc3Ryb3lpbmcgdGhlIG1pbmltYXAnLCAoKSA9PiB7XG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgbWluaW1hcC5kZXN0cm95KClcbiAgICAgIH0pXG5cbiAgICAgIGl0KCdyZW1vdmVzIGFsbCB0aGUgcHJldmlvdXNseSBhZGRlZCBkZWNvcmF0aW9ucycsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KG1pbmltYXAuZGVjb3JhdGlvbnNCeUlkKS50b0VxdWFsKHt9KVxuICAgICAgICBleHBlY3QobWluaW1hcC5kZWNvcmF0aW9uc0J5TWFya2VySWQpLnRvRXF1YWwoe30pXG4gICAgICB9KVxuXG4gICAgICBpdCgncHJldmVudHMgdGhlIGNyZWF0aW9uIG9mIG5ldyBkZWNvcmF0aW9ucycsICgpID0+IHtcbiAgICAgICAgbWFya2VyID0gZWRpdG9yLm1hcmtCdWZmZXJSYW5nZShbWzAsNl0sIFswLDExXV0pXG4gICAgICAgIGRlY29yYXRpb24gPSBtaW5pbWFwLmRlY29yYXRlTWFya2VyKG1hcmtlciwge3R5cGU6ICdoaWdobGlnaHQnLCBjbGFzczogJ2R1bW15J30pXG5cbiAgICAgICAgZXhwZWN0KGRlY29yYXRpb24pLnRvQmVVbmRlZmluZWQoKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKCc6OmRlY29yYXRpb25zQnlUeXBlVGhlblJvd3MnLCAoKSA9PiB7XG4gICAgbGV0IFtkZWNvcmF0aW9uc10gPSBbXVxuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBlZGl0b3Iuc2V0VGV4dChsYXJnZVNhbXBsZSlcblxuICAgICAgbGV0IGNyZWF0ZURlY29yYXRpb24gPSBmdW5jdGlvbih0eXBlLCByYW5nZSkge1xuICAgICAgICBsZXQgZGVjb3JhdGlvblxuICAgICAgICBsZXQgbWFya2VyID0gbWluaW1hcC5tYXJrQnVmZmVyUmFuZ2UocmFuZ2UpXG4gICAgICAgIGRlY29yYXRpb24gPSBtaW5pbWFwLmRlY29yYXRlTWFya2VyKG1hcmtlciwge3R5cGV9KVxuICAgICAgfVxuXG4gICAgICBjcmVhdGVEZWNvcmF0aW9uKCdoaWdobGlnaHQnLCBbWzYsIDBdLCBbMTEsIDBdXSlcbiAgICAgIGNyZWF0ZURlY29yYXRpb24oJ2hpZ2hsaWdodCcsIFtbNywgMF0sIFs4LCAwXV0pXG4gICAgICBjcmVhdGVEZWNvcmF0aW9uKCdoaWdobGlnaHQtb3ZlcicsIFtbMSwgMF0sIFsyLDBdXSlcbiAgICAgIGNyZWF0ZURlY29yYXRpb24oJ2xpbmUnLCBbWzMsMF0sIFs0LDBdXSlcbiAgICAgIGNyZWF0ZURlY29yYXRpb24oJ2xpbmUnLCBbWzEyLDBdLCBbMTIsMF1dKVxuICAgICAgY3JlYXRlRGVjb3JhdGlvbignaGlnaGxpZ2h0LXVuZGVyJywgW1swLDBdLCBbMTAsMV1dKVxuXG4gICAgICBkZWNvcmF0aW9ucyA9IG1pbmltYXAuZGVjb3JhdGlvbnNCeVR5cGVUaGVuUm93cygwLCAxMilcbiAgICB9KVxuXG4gICAgaXQoJ3JldHVybnMgYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBkZWNvcmF0aW9ucyB0eXBlcycsICgpID0+IHtcbiAgICAgIGV4cGVjdChPYmplY3Qua2V5cyhkZWNvcmF0aW9ucykuc29ydCgpKS50b0VxdWFsKFsnaGlnaGxpZ2h0LW92ZXInLCAnaGlnaGxpZ2h0LXVuZGVyJywgJ2xpbmUnXSlcbiAgICB9KVxuXG4gICAgaXQoJ3N0b3JlcyBkZWNvcmF0aW9ucyBieSByb3dzIHdpdGhpbiBlYWNoIHR5cGUgb2JqZWN0cycsICgpID0+IHtcbiAgICAgIGV4cGVjdChPYmplY3Qua2V5cyhkZWNvcmF0aW9uc1snaGlnaGxpZ2h0LW92ZXInXSkuc29ydCgpKVxuICAgICAgLnRvRXF1YWwoJzEgMiA2IDcgOCA5IDEwIDExJy5zcGxpdCgnICcpLnNvcnQoKSlcblxuICAgICAgZXhwZWN0KE9iamVjdC5rZXlzKGRlY29yYXRpb25zWydsaW5lJ10pLnNvcnQoKSlcbiAgICAgIC50b0VxdWFsKCczIDQgMTInLnNwbGl0KCcgJykuc29ydCgpKVxuXG4gICAgICBleHBlY3QoT2JqZWN0LmtleXMoZGVjb3JhdGlvbnNbJ2hpZ2hsaWdodC11bmRlciddKS5zb3J0KCkpXG4gICAgICAudG9FcXVhbCgnMCAxIDIgMyA0IDUgNiA3IDggOSAxMCcuc3BsaXQoJyAnKS5zb3J0KCkpXG4gICAgfSlcblxuICAgIGl0KCdzdG9yZXMgdGhlIGRlY29yYXRpb25zIHNwYW5uaW5nIGEgcm93IGluIHRoZSBjb3JyZXNwb25kaW5nIHJvdyBhcnJheScsICgpID0+IHtcbiAgICAgIGV4cGVjdChkZWNvcmF0aW9uc1snaGlnaGxpZ2h0LW92ZXInXVsnNyddLmxlbmd0aCkudG9FcXVhbCgyKVxuXG4gICAgICBleHBlY3QoZGVjb3JhdGlvbnNbJ2xpbmUnXVsnMyddLmxlbmd0aCkudG9FcXVhbCgxKVxuXG4gICAgICBleHBlY3QoZGVjb3JhdGlvbnNbJ2hpZ2hsaWdodC11bmRlciddWyc1J10ubGVuZ3RoKS50b0VxdWFsKDEpXG4gICAgfSlcbiAgfSlcbn0pXG5cbi8vICAgICAjIyMjIyMgICMjIyMjIyMjICAgICMjIyAgICAjIyAgICAjIyAjIyMjIyMjI1xuLy8gICAgIyMgICAgIyMgICAgIyMgICAgICAjIyAjIyAgICMjIyAgICMjICMjICAgICAjI1xuLy8gICAgIyMgICAgICAgICAgIyMgICAgICMjICAgIyMgICMjIyMgICMjICMjICAgICAjI1xuLy8gICAgICMjIyMjIyAgICAgIyMgICAgIyMgICAgICMjICMjICMjICMjICMjICAgICAjI1xuLy8gICAgICAgICAgIyMgICAgIyMgICAgIyMjIyMjIyMjICMjICAjIyMjICMjICAgICAjI1xuLy8gICAgIyMgICAgIyMgICAgIyMgICAgIyMgICAgICMjICMjICAgIyMjICMjICAgICAjI1xuLy8gICAgICMjIyMjIyAgICAgIyMgICAgIyMgICAgICMjICMjICAgICMjICMjIyMjIyMjXG4vL1xuLy8gICAgICAgIyMjICAgICMjICAgICAgICAjIyMjIyMjICAjIyAgICAjIyAjIyMjIyMjI1xuLy8gICAgICAjIyAjIyAgICMjICAgICAgICMjICAgICAjIyAjIyMgICAjIyAjI1xuLy8gICAgICMjICAgIyMgICMjICAgICAgICMjICAgICAjIyAjIyMjICAjIyAjI1xuLy8gICAgIyMgICAgICMjICMjICAgICAgICMjICAgICAjIyAjIyAjIyAjIyAjIyMjIyNcbi8vICAgICMjIyMjIyMjIyAjIyAgICAgICAjIyAgICAgIyMgIyMgICMjIyMgIyNcbi8vICAgICMjICAgICAjIyAjIyAgICAgICAjIyAgICAgIyMgIyMgICAjIyMgIyNcbi8vICAgICMjICAgICAjIyAjIyMjIyMjIyAgIyMjIyMjIyAgIyMgICAgIyMgIyMjIyMjIyNcblxuZGVzY3JpYmUoJ1N0YW5kIGFsb25lIG1pbmltYXAnLCAoKSA9PiB7XG4gIGxldCBbZWRpdG9yLCBlZGl0b3JFbGVtZW50LCBtaW5pbWFwLCBsYXJnZVNhbXBsZSwgc21hbGxTYW1wbGVdID0gW11cblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBhdG9tLmNvbmZpZy5zZXQoJ21pbmltYXAuY2hhckhlaWdodCcsIDQpXG4gICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmNoYXJXaWR0aCcsIDIpXG4gICAgYXRvbS5jb25maWcuc2V0KCdtaW5pbWFwLmludGVybGluZScsIDEpXG5cbiAgICBlZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5idWlsZFRleHRFZGl0b3Ioe30pXG4gICAgZWRpdG9yRWxlbWVudCA9IGF0b20udmlld3MuZ2V0VmlldyhlZGl0b3IpXG4gICAgamFzbWluZS5hdHRhY2hUb0RPTShlZGl0b3JFbGVtZW50KVxuICAgIGVkaXRvckVsZW1lbnQuc2V0SGVpZ2h0KDUwKVxuICAgIGVkaXRvckVsZW1lbnQuc2V0V2lkdGgoMjAwKVxuICAgIGVkaXRvci5zZXRMaW5lSGVpZ2h0SW5QaXhlbHMoMTApXG5cbiAgICBsZXQgZGlyID0gYXRvbS5wcm9qZWN0LmdldERpcmVjdG9yaWVzKClbMF1cblxuICAgIG1pbmltYXAgPSBuZXcgTWluaW1hcCh7XG4gICAgICB0ZXh0RWRpdG9yOiBlZGl0b3IsXG4gICAgICBzdGFuZEFsb25lOiB0cnVlXG4gICAgfSlcblxuICAgIGxhcmdlU2FtcGxlID0gZnMucmVhZEZpbGVTeW5jKGRpci5yZXNvbHZlKCdsYXJnZS1maWxlLmNvZmZlZScpKS50b1N0cmluZygpXG4gICAgc21hbGxTYW1wbGUgPSBmcy5yZWFkRmlsZVN5bmMoZGlyLnJlc29sdmUoJ3NhbXBsZS5jb2ZmZWUnKSkudG9TdHJpbmcoKVxuICB9KVxuXG4gIGl0KCdoYXMgYW4gYXNzb2NpYXRlZCBlZGl0b3InLCAoKSA9PiB7XG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0VGV4dEVkaXRvcigpKS50b0VxdWFsKGVkaXRvcilcbiAgfSlcblxuICBpdCgnbWVhc3VyZXMgdGhlIG1pbmltYXAgc2l6ZSBiYXNlZCBvbiB0aGUgY3VycmVudCBlZGl0b3IgY29udGVudCcsICgpID0+IHtcbiAgICBlZGl0b3Iuc2V0VGV4dChzbWFsbFNhbXBsZSlcbiAgICBleHBlY3QobWluaW1hcC5nZXRIZWlnaHQoKSkudG9FcXVhbChlZGl0b3IuZ2V0U2NyZWVuTGluZUNvdW50KCkgKiA1KVxuXG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0SGVpZ2h0KCkpLnRvRXF1YWwoZWRpdG9yLmdldFNjcmVlbkxpbmVDb3VudCgpICogNSlcbiAgfSlcblxuICBpdCgnbWVhc3VyZXMgdGhlIHNjYWxpbmcgZmFjdG9yIGJldHdlZW4gdGhlIGVkaXRvciBhbmQgdGhlIG1pbmltYXAnLCAoKSA9PiB7XG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0VmVydGljYWxTY2FsZUZhY3RvcigpKS50b0VxdWFsKDAuNSlcbiAgICBleHBlY3QobWluaW1hcC5nZXRIb3Jpem9udGFsU2NhbGVGYWN0b3IoKSkudG9FcXVhbCgyIC8gZWRpdG9yLmdldERlZmF1bHRDaGFyV2lkdGgoKSlcbiAgfSlcblxuICBpdCgnbWVhc3VyZXMgdGhlIGVkaXRvciB2aXNpYmxlIGFyZWEgc2l6ZSBhdCBtaW5pbWFwIHNjYWxlJywgKCkgPT4ge1xuICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuICAgIGV4cGVjdChtaW5pbWFwLmdldFRleHRFZGl0b3JTY2FsZWRIZWlnaHQoKSkudG9FcXVhbCgyNSlcbiAgfSlcblxuICBpdCgnaGFzIGEgdmlzaWJsZSBoZWlnaHQgYmFzZWQgb24gdGhlIHBhc3NlZC1pbiBvcHRpb25zJywgKCkgPT4ge1xuICAgIGV4cGVjdChtaW5pbWFwLmdldFZpc2libGVIZWlnaHQoKSkudG9FcXVhbCg1KVxuXG4gICAgZWRpdG9yLnNldFRleHQoc21hbGxTYW1wbGUpXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0VmlzaWJsZUhlaWdodCgpKS50b0VxdWFsKDIwKVxuXG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0VmlzaWJsZUhlaWdodCgpKS50b0VxdWFsKGVkaXRvci5nZXRTY3JlZW5MaW5lQ291bnQoKSAqIDUpXG5cbiAgICBtaW5pbWFwLmhlaWdodCA9IDEwMFxuICAgIGV4cGVjdChtaW5pbWFwLmdldFZpc2libGVIZWlnaHQoKSkudG9FcXVhbCgxMDApXG4gIH0pXG5cbiAgaXQoJ2hhcyBhIHZpc2libGUgd2lkdGggYmFzZWQgb24gdGhlIHBhc3NlZC1pbiBvcHRpb25zJywgKCkgPT4ge1xuICAgIGV4cGVjdChtaW5pbWFwLmdldFZpc2libGVXaWR0aCgpKS50b0VxdWFsKDApXG5cbiAgICBlZGl0b3Iuc2V0VGV4dChzbWFsbFNhbXBsZSlcbiAgICBleHBlY3QobWluaW1hcC5nZXRWaXNpYmxlV2lkdGgoKSkudG9FcXVhbCgzNilcblxuICAgIGVkaXRvci5zZXRUZXh0KGxhcmdlU2FtcGxlKVxuICAgIGV4cGVjdChtaW5pbWFwLmdldFZpc2libGVXaWR0aCgpKS50b0VxdWFsKGVkaXRvci5nZXRNYXhTY3JlZW5MaW5lTGVuZ3RoKCkgKiAyKVxuXG4gICAgbWluaW1hcC53aWR0aCA9IDUwXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0VmlzaWJsZVdpZHRoKCkpLnRvRXF1YWwoNTApXG4gIH0pXG5cbiAgaXQoJ21lYXN1cmVzIHRoZSBhdmFpbGFibGUgbWluaW1hcCBzY3JvbGwnLCAoKSA9PiB7XG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG4gICAgbGV0IGxhcmdlTGluZUNvdW50ID0gZWRpdG9yLmdldFNjcmVlbkxpbmVDb3VudCgpXG5cbiAgICBleHBlY3QobWluaW1hcC5nZXRNYXhTY3JvbGxUb3AoKSkudG9FcXVhbCgwKVxuICAgIGV4cGVjdChtaW5pbWFwLmNhblNjcm9sbCgpKS50b0JlRmFsc3koKVxuXG4gICAgbWluaW1hcC5oZWlnaHQgPSAxMDBcblxuICAgIGV4cGVjdChtaW5pbWFwLmdldE1heFNjcm9sbFRvcCgpKS50b0VxdWFsKGxhcmdlTGluZUNvdW50ICogNSAtIDEwMClcbiAgICBleHBlY3QobWluaW1hcC5jYW5TY3JvbGwoKSkudG9CZVRydXRoeSgpXG4gIH0pXG5cbiAgaXQoJ2NvbXB1dGVzIHRoZSBmaXJzdCB2aXNpYmxlIHJvdyBpbiB0aGUgbWluaW1hcCcsICgpID0+IHtcbiAgICBleHBlY3QobWluaW1hcC5nZXRGaXJzdFZpc2libGVTY3JlZW5Sb3coKSkudG9FcXVhbCgwKVxuICB9KVxuXG4gIGl0KCdjb21wdXRlcyB0aGUgbGFzdCB2aXNpYmxlIHJvdyBpbiB0aGUgbWluaW1hcCcsICgpID0+IHtcbiAgICBlZGl0b3Iuc2V0VGV4dChsYXJnZVNhbXBsZSlcblxuICAgIGV4cGVjdChtaW5pbWFwLmdldExhc3RWaXNpYmxlU2NyZWVuUm93KCkpLnRvRXF1YWwoZWRpdG9yLmdldFNjcmVlbkxpbmVDb3VudCgpKVxuXG4gICAgbWluaW1hcC5oZWlnaHQgPSAxMDBcbiAgICBleHBlY3QobWluaW1hcC5nZXRMYXN0VmlzaWJsZVNjcmVlblJvdygpKS50b0VxdWFsKDIwKVxuICB9KVxuXG4gIGl0KCdkb2VzIG5vdCByZWxheSBzY3JvbGwgdG9wIGV2ZW50cyBmcm9tIHRoZSBlZGl0b3InLCAoKSA9PiB7XG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG5cbiAgICBsZXQgc2Nyb2xsU3B5ID0gamFzbWluZS5jcmVhdGVTcHkoJ2RpZFNjcm9sbCcpXG4gICAgbWluaW1hcC5vbkRpZENoYW5nZVNjcm9sbFRvcChzY3JvbGxTcHkpXG5cbiAgICBlZGl0b3JFbGVtZW50LnNldFNjcm9sbFRvcCgxMDApXG5cbiAgICBleHBlY3Qoc2Nyb2xsU3B5KS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG5cbiAgaXQoJ2RvZXMgbm90IHJlbGF5IHNjcm9sbCBsZWZ0IGV2ZW50cyBmcm9tIHRoZSBlZGl0b3InLCAoKSA9PiB7XG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG5cbiAgICBsZXQgc2Nyb2xsU3B5ID0gamFzbWluZS5jcmVhdGVTcHkoJ2RpZFNjcm9sbCcpXG4gICAgbWluaW1hcC5vbkRpZENoYW5nZVNjcm9sbExlZnQoc2Nyb2xsU3B5KVxuXG4gICAgLy8gU2VlbXMgbGlrZSB0ZXh0IHdpdGhvdXQgYSB2aWV3IGFyZW4ndCBhYmxlIHRvIHNjcm9sbCBob3Jpem9udGFsbHlcbiAgICAvLyBldmVuIHdoZW4gaXRzIHdpZHRoIHdhcyBzZXQuXG4gICAgc3B5T24oZWRpdG9yRWxlbWVudCwgJ2dldFNjcm9sbFdpZHRoJykuYW5kUmV0dXJuKDEwMDAwKVxuXG4gICAgZWRpdG9yRWxlbWVudC5zZXRTY3JvbGxMZWZ0KDEwMClcblxuICAgIGV4cGVjdChzY3JvbGxTcHkpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcblxuICBpdCgnaGFzIGEgc2Nyb2xsIHRvcCB0aGF0IGlzIG5vdCBib3VuZCB0byB0aGUgdGV4dCBlZGl0b3InLCAoKSA9PiB7XG4gICAgbGV0IHNjcm9sbFNweSA9IGphc21pbmUuY3JlYXRlU3B5KCdkaWRTY3JvbGwnKVxuICAgIG1pbmltYXAub25EaWRDaGFuZ2VTY3JvbGxUb3Aoc2Nyb2xsU3B5KVxuXG4gICAgZWRpdG9yLnNldFRleHQobGFyZ2VTYW1wbGUpXG4gICAgZWRpdG9yRWxlbWVudC5zZXRTY3JvbGxUb3AoMTAwMClcblxuICAgIGV4cGVjdChtaW5pbWFwLmdldFNjcm9sbFRvcCgpKS50b0VxdWFsKDApXG4gICAgZXhwZWN0KHNjcm9sbFNweSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXG4gICAgbWluaW1hcC5zZXRTY3JvbGxUb3AoMTApXG5cbiAgICBleHBlY3QobWluaW1hcC5nZXRTY3JvbGxUb3AoKSkudG9FcXVhbCgxMClcbiAgICBleHBlY3Qoc2Nyb2xsU3B5KS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcblxuICBpdCgnaGFzIHJlbmRlcmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIG92ZXJyaWRlcyB0aGUgY29uZmlnIHZhbHVlcycsICgpID0+IHtcbiAgICBtaW5pbWFwLnNldENoYXJXaWR0aCg4LjUpXG4gICAgbWluaW1hcC5zZXRDaGFySGVpZ2h0KDEwLjIpXG4gICAgbWluaW1hcC5zZXRJbnRlcmxpbmUoMTAuNilcblxuICAgIGV4cGVjdChtaW5pbWFwLmdldENoYXJXaWR0aCgpKS50b0VxdWFsKDgpXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0Q2hhckhlaWdodCgpKS50b0VxdWFsKDEwKVxuICAgIGV4cGVjdChtaW5pbWFwLmdldEludGVybGluZSgpKS50b0VxdWFsKDEwKVxuICAgIGV4cGVjdChtaW5pbWFwLmdldExpbmVIZWlnaHQoKSkudG9FcXVhbCgyMClcbiAgfSlcblxuICBpdCgnZW1pdHMgYSBjb25maWcgY2hhbmdlIGV2ZW50IHdoZW4gYSB2YWx1ZSBpcyBjaGFuZ2VkJywgKCkgPT4ge1xuICAgIGxldCBjaGFuZ2VTcHkgPSBqYXNtaW5lLmNyZWF0ZVNweSgnZGlkLWNoYW5nZScpXG4gICAgbWluaW1hcC5vbkRpZENoYW5nZUNvbmZpZyhjaGFuZ2VTcHkpXG5cbiAgICBtaW5pbWFwLnNldENoYXJXaWR0aCg4LjUpXG4gICAgbWluaW1hcC5zZXRDaGFySGVpZ2h0KDEwLjIpXG4gICAgbWluaW1hcC5zZXRJbnRlcmxpbmUoMTAuNilcblxuICAgIGV4cGVjdChjaGFuZ2VTcHkuY2FsbENvdW50KS50b0VxdWFsKDMpXG4gIH0pXG5cbiAgaXQoJ3JldHVybnMgdGhlIHJvdW5kaW5nIG51bWJlciBvZiBkZXZpY2VQaXhlbFJhdGlvJywgKCkgPT4ge1xuICAgIGRldmljZVBpeGVsUmF0aW8gPSAxLjI1XG5cbiAgICBtaW5pbWFwLnNldERldmljZVBpeGVsUmF0aW9Sb3VuZGluZyh0cnVlKVxuXG4gICAgZXhwZWN0KG1pbmltYXAuZ2V0RGV2aWNlUGl4ZWxSYXRpb1JvdW5kaW5nKCkpLnRvRXF1YWwodHJ1ZSlcbiAgICBleHBlY3QobWluaW1hcC5nZXREZXZpY2VQaXhlbFJhdGlvKCkpLnRvRXF1YWwoMSlcbiAgfSlcblxuICBpdCgncHJldmVudHMgdGhlIHJvdW5kaW5nIG51bWJlciBvZiBkZXZpY2VQaXhlbFJhdGlvJywgKCkgPT4ge1xuICAgIGRldmljZVBpeGVsUmF0aW8gPSAxLjI1XG5cbiAgICBtaW5pbWFwLnNldERldmljZVBpeGVsUmF0aW9Sb3VuZGluZyhmYWxzZSlcblxuICAgIGV4cGVjdChtaW5pbWFwLmdldERldmljZVBpeGVsUmF0aW9Sb3VuZGluZygpKS50b0VxdWFsKGZhbHNlKVxuICAgIGV4cGVjdChtaW5pbWFwLmdldERldmljZVBpeGVsUmF0aW8oKSkudG9FcXVhbCgxLjI1KVxuICB9KVxufSlcbiJdfQ==
//# sourceURL=/home/qual/.atom/packages/minimap/spec/minimap-spec.js
