'use babel';

/**
 * Generates a decorator function to includes many `mixto` mixins into a class.
 *
 * @param  {...Mixin} mixins the mixins to include in the class
 * @return {function(cls:Function):Function} the decorator function that will
 *                                           include the specified mixins
 * @example
 * @include(SomeMixin)
 * export default class SomeClass {
 *   // ...
 * }
 */
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = include;

function include() {
  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  return function performInclusion(cls) {
    mixins.forEach(function (mixin) {
      mixin.includeInto(cls);
    });
    return cls;
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvZGVjb3JhdG9ycy9pbmNsdWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBY2EsT0FBTzs7QUFBaEIsU0FBUyxPQUFPLEdBQWE7b0NBQVIsTUFBTTtBQUFOLFVBQU07OztBQUN4QyxTQUFPLFNBQVMsZ0JBQWdCLENBQUUsR0FBRyxFQUFFO0FBQ3JDLFVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUs7QUFBRSxXQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQUUsQ0FBQyxDQUFBO0FBQ3JELFdBQU8sR0FBRyxDQUFBO0dBQ1gsQ0FBQTtDQUNGIiwiZmlsZSI6Ii9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvZGVjb3JhdG9ycy9pbmNsdWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBkZWNvcmF0b3IgZnVuY3Rpb24gdG8gaW5jbHVkZXMgbWFueSBgbWl4dG9gIG1peGlucyBpbnRvIGEgY2xhc3MuXG4gKlxuICogQHBhcmFtICB7Li4uTWl4aW59IG1peGlucyB0aGUgbWl4aW5zIHRvIGluY2x1ZGUgaW4gdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbihjbHM6RnVuY3Rpb24pOkZ1bmN0aW9ufSB0aGUgZGVjb3JhdG9yIGZ1bmN0aW9uIHRoYXQgd2lsbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSB0aGUgc3BlY2lmaWVkIG1peGluc1xuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlKFNvbWVNaXhpbilcbiAqIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbWVDbGFzcyB7XG4gKiAgIC8vIC4uLlxuICogfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmNsdWRlICguLi5taXhpbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHBlcmZvcm1JbmNsdXNpb24gKGNscykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4geyBtaXhpbi5pbmNsdWRlSW50byhjbHMpIH0pXG4gICAgcmV0dXJuIGNsc1xuICB9XG59XG4iXX0=
//# sourceURL=/home/qual/.atom/packages/minimap/lib/decorators/include.js
