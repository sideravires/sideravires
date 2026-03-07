(function () {
  function isMacDesktop() {
    return /Macintosh|Mac OS X/.test(navigator.userAgent) &&
      !/iPhone|iPad|iPod/.test(navigator.userAgent);
  }

  document.querySelectorAll('a[data-app-store-id]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (!isMacDesktop()) return;

      var id = link.getAttribute('data-app-store-id');
      if (!id) return;

      event.preventDefault();
      window.location.href = 'macappstore://itunes.apple.com/app/id' + id + '?mt=12';
    });
  });
})();
