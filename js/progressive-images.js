(function () {
  function markLoaded(wrap) {
    wrap.classList.add('is-loaded');
  }

  function watchFull(wrap, full) {
    if (full.complete && full.naturalWidth > 0) {
      markLoaded(wrap);
      return;
    }

    full.addEventListener('load', function () {
      markLoaded(wrap);
    }, { once: true });

    full.addEventListener('error', function () {
      wrap.classList.add('is-preview-only');
    }, { once: true });
  }

  // Chrome skips loading=lazy for images that stay invisible (opacity 0 / clipped).
  // Start the PNG fetch when the preview block enters (or nears) the viewport.
  function startFull(wrap) {
    var full = wrap.querySelector('.progressive-media__full');
    if (!full || full.dataset.progressiveStarted) return;
    full.dataset.progressiveStarted = '1';

    var src = full.getAttribute('src');
    if (!src) return;

    full.removeAttribute('loading');
    full.loading = 'eager';

    if (!full.complete || full.naturalWidth === 0) {
      full.src = src;
    }

    watchFull(wrap, full);
  }

  var wraps = document.querySelectorAll('.progressive-media');
  if (!wraps.length) return;

  if (!('IntersectionObserver' in window)) {
    wraps.forEach(startFull);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      startFull(entry.target);
      io.unobserve(entry.target);
    });
  }, { rootMargin: '240px 0px', threshold: 0.01 });

  wraps.forEach(function (wrap) {
    io.observe(wrap);
  });
})();
