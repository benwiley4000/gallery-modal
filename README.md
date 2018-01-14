# gallery-modal
Simple script for adding an image popup modal to a gallery (e.g. WordPress). Automatically strips out `-[width]x[height]` size specifiers for WordPress. Clicking on an image will bring up an overlay display, and clicking outside the image will close the overlay.

## use

```html
<!-- ... code with image gallery -->
<script>
  // optional but likely necessary config
  var GALLERY_IMAGE_SELECTOR = '.my-gallery-image-classname img';
  var OVERLAY_CLASSNAME = 'cool-image-overlay';
</script>
<script src="modal.js"></script>
</body>
</html>
```
