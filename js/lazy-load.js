// PolyFill for 'isIntersecting'
// https://github.com/WICG/IntersectionObserver/issues/211#issuecomment-309144669
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
    !('isIntersecting' in IntersectionObserverEntry.prototype)) {

  Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
    get: function () {
      return this.intersectionRatio > 0
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  function intersectionChanged(changes, observer) {
    changes.forEach(function (change) {
      var element, src, background;

      if (!change.isIntersecting) return;

      element = change.target;
      src = element.getAttribute('data-src');
      background = element.getAttribute('data-background');

      if (src) {
        element.src = src;
      } else if (background) {
        element.style.backgroundImage = 'url(' + background + ')';
      }

      observer.unobserve(element);
    });
  }

  var observer = new IntersectionObserver(intersectionChanged, {
    threshold: [ 0.25 ]
  });

  var lazyElements = '[data-src], [data-background]';

  document.querySelectorAll(lazyElements).forEach(function (element) {
    observer.observe(element);
  });
});
