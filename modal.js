(function () {
  var GALLERY_IMAGE_SELECTOR = window.GALLERY_IMAGE_SELECTOR || '.gallery-icon img';
  var OVERLAY_CLASSNAME = window.OVERLAY_CLASSNAME || 'cool-image-overlay';

  function detachOverlay () {
    try {
      document.body.removeChild(
        document.querySelector('.' + OVERLAY_CLASSNAME)
      );
    } catch (e){ /* I don't care if it doesn't work */ }
  }

  function launchOverlay (src) {
    detachOverlay();
    var overlay = document.createElement('div');
    overlay.classList.add(OVERLAY_CLASSNAME);
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.bottom = 0;
    overlay.style.left = 0;
    overlay.style.right = 0;
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    var imageOverlay = document.createElement('div');
    imageOverlay.style.position = 'absolute';
    imageOverlay.style.top = '50%';
    imageOverlay.style.left = '50%';
    imageOverlay.style.transform = 'translate(-50%, -50%)';
    imageOverlay.style.width = '85%';
    imageOverlay.style.height = '85%';

    var image = document.createElement('img');
    image.style.position = 'absolute';
    image.style.maxWidth = '100%';
    image.style.maxHeight = '100%';
    image.style.top = '50%';
    image.style.left = '50%';
    image.style.transform = 'translate(-50%, -50%)';
    image.src = src
      // remove WordPress image size specifier if present
      .replace(/-[0-9]+x[0-9]+/, '');
    image.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    imageOverlay.appendChild(image);
    overlay.appendChild(imageOverlay);
    document.body.appendChild(overlay);
  }

  // attach click listener to body for detaching overlay
  document.addEventListener('click', detachOverlay);

  // attach click listeners to gallery images for launching overlay
  Array.prototype.forEach.call(
    document.querySelectorAll(GALLERY_IMAGE_SELECTOR),
    function (image) {
      image.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        launchOverlay(image.src);
      });
    }
  );
})();
