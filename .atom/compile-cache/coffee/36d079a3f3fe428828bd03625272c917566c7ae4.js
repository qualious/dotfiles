
/*
Language Support and default options.
 */

(function() {
  "use strict";
  var Languages, extend, _;

  _ = require('lodash');

  extend = null;

  module.exports = Languages = (function() {
    Languages.prototype.languageNames = ["arduino", "c-sharp", "c", "coffeescript", "cpp", "css", "csv", "d", "ejs", "elm", "erb", "gherkin", "go", "fortran", "handlebars", "haskell", "html", "java", "javascript", "json", "jsx", "less", "markdown", 'marko', "mustache", "objective-c", "pawn", "perl", "php", "puppet", "python", "ruby", "rust", "sass", "scss", "spacebars", "sql", "svg", "swig", "tss", "twig", "typescript", "vala", "visualforce", "xml"];


    /*
    Languages
     */

    Languages.prototype.languages = null;


    /*
    Namespaces
     */

    Languages.prototype.namespaces = null;


    /*
    Constructor
     */

    function Languages() {
      this.languages = _.map(this.languageNames, function(name) {
        return require("./" + name);
      });
      this.namespaces = _.map(this.languages, function(language) {
        return language.namespace;
      });
    }


    /*
    Get language for grammar and extension
     */

    Languages.prototype.getLanguages = function(_arg) {
      var extension, grammar, name, namespace;
      name = _arg.name, namespace = _arg.namespace, grammar = _arg.grammar, extension = _arg.extension;
      return _.union(_.filter(this.languages, function(language) {
        return _.isEqual(language.name, name);
      }), _.filter(this.languages, function(language) {
        return _.isEqual(language.namespace, namespace);
      }), _.filter(this.languages, function(language) {
        return _.contains(language.grammars, grammar);
      }), _.filter(this.languages, function(language) {
        return _.contains(language.extensions, extension);
      }));
    };

    return Languages;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9hdG9tLWJlYXV0aWZ5L3NyYy9sYW5ndWFnZXMvaW5kZXguY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQTs7R0FBQTtBQUFBO0FBQUE7QUFBQSxFQUdBLFlBSEEsQ0FBQTtBQUFBLE1BQUEsb0JBQUE7O0FBQUEsRUFLQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FMSixDQUFBOztBQUFBLEVBTUEsTUFBQSxHQUFTLElBTlQsQ0FBQTs7QUFBQSxFQVNBLE1BQU0sQ0FBQyxPQUFQLEdBQXVCO0FBSXJCLHdCQUFBLGFBQUEsR0FBZSxDQUNiLFNBRGEsRUFFYixTQUZhLEVBR2IsR0FIYSxFQUliLGNBSmEsRUFLYixLQUxhLEVBTWIsS0FOYSxFQU9iLEtBUGEsRUFRYixHQVJhLEVBU2IsS0FUYSxFQVViLEtBVmEsRUFXYixLQVhhLEVBWWIsU0FaYSxFQWFiLElBYmEsRUFjYixTQWRhLEVBZWIsWUFmYSxFQWdCYixTQWhCYSxFQWlCYixNQWpCYSxFQWtCYixNQWxCYSxFQW1CYixZQW5CYSxFQW9CYixNQXBCYSxFQXFCYixLQXJCYSxFQXNCYixNQXRCYSxFQXVCYixVQXZCYSxFQXdCYixPQXhCYSxFQXlCYixVQXpCYSxFQTBCYixhQTFCYSxFQTJCYixNQTNCYSxFQTRCYixNQTVCYSxFQTZCYixLQTdCYSxFQThCYixRQTlCYSxFQStCYixRQS9CYSxFQWdDYixNQWhDYSxFQWlDYixNQWpDYSxFQWtDYixNQWxDYSxFQW1DYixNQW5DYSxFQW9DYixXQXBDYSxFQXFDYixLQXJDYSxFQXNDYixLQXRDYSxFQXVDYixNQXZDYSxFQXdDYixLQXhDYSxFQXlDYixNQXpDYSxFQTBDYixZQTFDYSxFQTJDYixNQTNDYSxFQTRDYixhQTVDYSxFQTZDYixLQTdDYSxDQUFmLENBQUE7O0FBZ0RBO0FBQUE7O09BaERBOztBQUFBLHdCQW1EQSxTQUFBLEdBQVcsSUFuRFgsQ0FBQTs7QUFxREE7QUFBQTs7T0FyREE7O0FBQUEsd0JBd0RBLFVBQUEsR0FBWSxJQXhEWixDQUFBOztBQTBEQTtBQUFBOztPQTFEQTs7QUE2RGEsSUFBQSxtQkFBQSxHQUFBO0FBQ1gsTUFBQSxJQUFDLENBQUEsU0FBRCxHQUFhLENBQUMsQ0FBQyxHQUFGLENBQU0sSUFBQyxDQUFBLGFBQVAsRUFBc0IsU0FBQyxJQUFELEdBQUE7ZUFDakMsT0FBQSxDQUFTLElBQUEsR0FBSSxJQUFiLEVBRGlDO01BQUEsQ0FBdEIsQ0FBYixDQUFBO0FBQUEsTUFHQSxJQUFDLENBQUEsVUFBRCxHQUFjLENBQUMsQ0FBQyxHQUFGLENBQU0sSUFBQyxDQUFBLFNBQVAsRUFBa0IsU0FBQyxRQUFELEdBQUE7ZUFBYyxRQUFRLENBQUMsVUFBdkI7TUFBQSxDQUFsQixDQUhkLENBRFc7SUFBQSxDQTdEYjs7QUFtRUE7QUFBQTs7T0FuRUE7O0FBQUEsd0JBc0VBLFlBQUEsR0FBYyxTQUFDLElBQUQsR0FBQTtBQUVaLFVBQUEsbUNBQUE7QUFBQSxNQUZjLFlBQUEsTUFBTSxpQkFBQSxXQUFXLGVBQUEsU0FBUyxpQkFBQSxTQUV4QyxDQUFBO2FBQUEsQ0FBQyxDQUFDLEtBQUYsQ0FDRSxDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsQ0FBQSxTQUFWLEVBQXFCLFNBQUMsUUFBRCxHQUFBO2VBQWMsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxRQUFRLENBQUMsSUFBbkIsRUFBeUIsSUFBekIsRUFBZDtNQUFBLENBQXJCLENBREYsRUFFRSxDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsQ0FBQSxTQUFWLEVBQXFCLFNBQUMsUUFBRCxHQUFBO2VBQWMsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxRQUFRLENBQUMsU0FBbkIsRUFBOEIsU0FBOUIsRUFBZDtNQUFBLENBQXJCLENBRkYsRUFHRSxDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsQ0FBQSxTQUFWLEVBQXFCLFNBQUMsUUFBRCxHQUFBO2VBQWMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxRQUFRLENBQUMsUUFBcEIsRUFBOEIsT0FBOUIsRUFBZDtNQUFBLENBQXJCLENBSEYsRUFJRSxDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsQ0FBQSxTQUFWLEVBQXFCLFNBQUMsUUFBRCxHQUFBO2VBQWMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxRQUFRLENBQUMsVUFBcEIsRUFBZ0MsU0FBaEMsRUFBZDtNQUFBLENBQXJCLENBSkYsRUFGWTtJQUFBLENBdEVkLENBQUE7O3FCQUFBOztNQWJGLENBQUE7QUFBQSIKfQ==

//# sourceURL=/home/qual/.atom/packages/atom-beautify/src/languages/index.coffee
