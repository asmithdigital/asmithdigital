---
title: Image gallery
description: Documentation for the image gallery component.
static-demo: static-image-gallery
---

## Default

To implement the image gallery component simply copy the HTML markup seen below. To add more images to the gallery simply repeat the `c-image-gallery__list-item` element.

Please ensure that each item contains the class `js-image-gallery-item` as well as the attribute `rel="my-gallery` on every list item as seen below. The name used within the rel-* attribute needs to be the exact same name on each item in order for the image gallery to function correctly. 

```html_example
<div class="c-image-gallery">
  <h3 class="c-image-gallery__title">Sample photo gallery</h3>
  <p>Bacon ipsum dolor sit amet salami ham hock biltong ball tip drumstick sirloin pancetta meatball short loin.</p>
  <ul class="c-image-gallery__list has-four-columns">
    <li class="c-image-gallery__list-item">
      <a class="c-image-gallery__list-link js-image-gallery-item" rel="my-gallery" href="http://lorempixel.com/1106/830/" title="Image 1">
        <img class="c-image-gallery__image-thumb" alt="Galley Item 1" src="http://lorempixel.com/1106/830/">
      </a>
    </li>
    <li class="c-image-gallery__list-item">
      <a class="c-image-gallery__list-link js-image-gallery-item" rel="my-gallery" href="http://lorempixel.com/1106/830/" title="Image 2">
        <img class="c-image-gallery__image-thumb" alt="Galley Item 2" src="http://lorempixel.com/1106/830/">
      </a>
    </li>
    <!-- ... -->
  </ul>
</div>
```

## JavaScript

- `js/vendor/jquery.swipebox.min.js`
- `js/plugins/image-gallery.js`
