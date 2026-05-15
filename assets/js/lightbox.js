(function () {
  var overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Image enlarged view');
  overlay.setAttribute('aria-modal', 'true');
  overlay.style.cssText =
    'display:none;position:fixed;top:0;left:0;width:100%;height:100%;' +
    'background:rgba(0,0,0,0.55);z-index:9999;cursor:pointer;' +
    'align-items:center;justify-content:center;';

  var img = document.createElement('img');
  img.id = 'lightbox-image';
  img.style.cssText =
    'max-width:92vw;max-height:92vh;border-radius:4px;' +
    'box-shadow:0 8px 40px rgba(0,0,0,0.5);display:block;';

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src) {
    img.src = src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    img.src = '';
  }

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.style.display === 'flex') close();
  });

  var imgs = document.querySelectorAll(
    '.research-figure img, .header-figure img, .page img, .post-content img, .home img'
  );

  for (var i = 0; i < imgs.length; i++) {
    (function (el) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        open(el.src);
      });
    })(imgs[i]);
  }
})();
