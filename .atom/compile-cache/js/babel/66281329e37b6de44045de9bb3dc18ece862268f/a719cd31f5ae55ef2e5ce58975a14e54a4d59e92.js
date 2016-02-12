Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = element;

var _atomUtils = require('atom-utils');

/**
 * Generates a decorator function to convert a class into a custom element
 * through the `registerOrUpdateElement` method from `atom-utils`.
 *
 * The decorator will take care to return the generated element class so that
 * you can just export it directly as demonstrated below.
 *
 * As supported by the `registerOrUpdateElement` method, static member will
 * be available on the new class.
 *
 * **Note: As there's some limitations when modifying the prototype
 * of a custom element, if you need to inject element callbacks (like
 * `createdCallback`) through a mixin, the mixins should be included before
 * converting the class as a custom element. You'll be able to achieve that by
 * placing the `include` decorator after the `element` one as shown in the
 * second example.**
 *
 * @param  {string} elementName the node name of the element to register
 * @return {Function} the element class as returned by
 *                    `document.registerElement`
 * @example
 * @element('dummy-element-name')
 * export default class SomeClass {
 *   // ...
 * }
 *
 * @element('dummy-element-with-mixin')
 * @include(SomeMixin)
 * export default class SomeClass {
 *   // ...
 * }
 */
'use babel';

function element(elementName) {
  return function (cls) {
    var elementClass = (0, _atomUtils.registerOrUpdateElement)(elementName, {
      'class': cls
    });
    return elementClass;
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1YWwvLmF0b20vcGFja2FnZXMvbWluaW1hcC9saWIvZGVjb3JhdG9ycy9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFvQ3dCLE9BQU87O3lCQWxDTyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRmxELFdBQVcsQ0FBQTs7QUFvQ0ksU0FBUyxPQUFPLENBQUUsV0FBVyxFQUFFO0FBQzVDLFNBQU8sVUFBVSxHQUFHLEVBQUU7QUFDcEIsUUFBSSxZQUFZLEdBQUcsd0NBQXdCLFdBQVcsRUFBRTtBQUN0RCxlQUFPLEdBQUc7S0FDWCxDQUFDLENBQUE7QUFDRixXQUFPLFlBQVksQ0FBQTtHQUNwQixDQUFBO0NBQ0YiLCJmaWxlIjoiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9taW5pbWFwL2xpYi9kZWNvcmF0b3JzL2VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQge3JlZ2lzdGVyT3JVcGRhdGVFbGVtZW50fSBmcm9tICdhdG9tLXV0aWxzJ1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGRlY29yYXRvciBmdW5jdGlvbiB0byBjb252ZXJ0IGEgY2xhc3MgaW50byBhIGN1c3RvbSBlbGVtZW50XG4gKiB0aHJvdWdoIHRoZSBgcmVnaXN0ZXJPclVwZGF0ZUVsZW1lbnRgIG1ldGhvZCBmcm9tIGBhdG9tLXV0aWxzYC5cbiAqXG4gKiBUaGUgZGVjb3JhdG9yIHdpbGwgdGFrZSBjYXJlIHRvIHJldHVybiB0aGUgZ2VuZXJhdGVkIGVsZW1lbnQgY2xhc3Mgc28gdGhhdFxuICogeW91IGNhbiBqdXN0IGV4cG9ydCBpdCBkaXJlY3RseSBhcyBkZW1vbnN0cmF0ZWQgYmVsb3cuXG4gKlxuICogQXMgc3VwcG9ydGVkIGJ5IHRoZSBgcmVnaXN0ZXJPclVwZGF0ZUVsZW1lbnRgIG1ldGhvZCwgc3RhdGljIG1lbWJlciB3aWxsXG4gKiBiZSBhdmFpbGFibGUgb24gdGhlIG5ldyBjbGFzcy5cbiAqXG4gKiAqKk5vdGU6IEFzIHRoZXJlJ3Mgc29tZSBsaW1pdGF0aW9ucyB3aGVuIG1vZGlmeWluZyB0aGUgcHJvdG90eXBlXG4gKiBvZiBhIGN1c3RvbSBlbGVtZW50LCBpZiB5b3UgbmVlZCB0byBpbmplY3QgZWxlbWVudCBjYWxsYmFja3MgKGxpa2VcbiAqIGBjcmVhdGVkQ2FsbGJhY2tgKSB0aHJvdWdoIGEgbWl4aW4sIHRoZSBtaXhpbnMgc2hvdWxkIGJlIGluY2x1ZGVkIGJlZm9yZVxuICogY29udmVydGluZyB0aGUgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC4gWW91J2xsIGJlIGFibGUgdG8gYWNoaWV2ZSB0aGF0IGJ5XG4gKiBwbGFjaW5nIHRoZSBgaW5jbHVkZWAgZGVjb3JhdG9yIGFmdGVyIHRoZSBgZWxlbWVudGAgb25lIGFzIHNob3duIGluIHRoZVxuICogc2Vjb25kIGV4YW1wbGUuKipcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVsZW1lbnROYW1lIHRoZSBub2RlIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gcmVnaXN0ZXJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgZWxlbWVudCBjbGFzcyBhcyByZXR1cm5lZCBieVxuICogICAgICAgICAgICAgICAgICAgIGBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnRgXG4gKiBAZXhhbXBsZVxuICogQGVsZW1lbnQoJ2R1bW15LWVsZW1lbnQtbmFtZScpXG4gKiBleHBvcnQgZGVmYXVsdCBjbGFzcyBTb21lQ2xhc3Mge1xuICogICAvLyAuLi5cbiAqIH1cbiAqXG4gKiBAZWxlbWVudCgnZHVtbXktZWxlbWVudC13aXRoLW1peGluJylcbiAqIEBpbmNsdWRlKFNvbWVNaXhpbilcbiAqIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbWVDbGFzcyB7XG4gKiAgIC8vIC4uLlxuICogfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50IChlbGVtZW50TmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNscykge1xuICAgIGxldCBlbGVtZW50Q2xhc3MgPSByZWdpc3Rlck9yVXBkYXRlRWxlbWVudChlbGVtZW50TmFtZSwge1xuICAgICAgY2xhc3M6IGNsc1xuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnRDbGFzc1xuICB9XG59XG4iXX0=
//# sourceURL=/home/qual/.atom/packages/minimap/lib/decorators/element.js
