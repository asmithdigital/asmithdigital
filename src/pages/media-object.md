---
title: Media Object
description: Documentation for media object.
static-demo: static-media-object
---

## Horizontal

Horizontal media objects must contain the class `is-full-width` otherwise they will only expand to 50% width. The class `is-large` will increase the width of the image on horizontal media objects, and is optional.

```html
<div class="c-media-object is-full-width is-large">
  <section class="c-media-object__column">
    <div class="c-media-object__section">
      <div class="c-media-object__image-wrapper">
        <a href="#0" class="c-media-object__image-link">
          <div class="c-media-object__tag"><p>Tag element</p></div>
          <img src="">
        </a>
      </div>
    </div>
    <div class="c-media-object__section c-media-object__section--content">
      <h4 class="c-media-object__heading"><a href="#0">Dreams feel real while we're in them</a></h4>
      <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus.</p>
      <a href="#0" class="c-btn c-btn--hollow">Button</a>
    </div>
  </section>
  <!-- ... -->
</div>
```

## Stacked

As mentioned above, the default media object columns are 50% width (two columns). If however you wish for the stacked media object to fill its container to 100%, then you can apply the class `is-full-width` as per the horizontal example above.

You may also apply three or four column layouts to stacked media objects by adding either `has-three-columns` or `has-four-columns` as seen in the example code below.

```html
<div class="c-media-object is-stacked has-three-columns">
  <section class="c-media-object__column">
    <div class="c-media-object__section">
      <div class="c-media-object__image-wrapper">
        <a href="#0" class="c-media-object__image-link">
          <div class="c-media-object__tag"><p>Tag element</p></div>
          <img src="">
        </a>
      </div>
    </div>
    <div class="c-media-object__section c-media-object__section--content">
      <h4 class="c-media-object__heading"><a href="#0">Dreams feel real while we're in them</a></h4>
      <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus.</p>
      <a href="#0" class="c-btn c-btn--hollow">Button</a>
    </div>
  </section>
  <!-- ... -->
</div>
```

## Image only

The image only media object is the same as the stacked media object except you do not have the content section `c-media-object__section--content`.

The other difference between the image only media object and the stacked and horizontal media object is you replace the  `c-media-object__tag` element with the `c-media-object__title` element.

```html
<div class="c-media-object is-stacked">
  <section class="c-media-object__column">
    <div class="c-media-object__section">
      <div class="c-media-object__image-wrapper">
        <a href="#0" class="c-media-object__image-link">
          <div class="c-media-object__title"><p>Title element</p></div>
          <img src="">
        </a>
      </div>
    </div>
  </section>
  <!-- ... -->
</div>
```

## Equalize height

In order to equalize the height of the stacked media object you need to first apply the class `js-equalize`.

You also need to include the wrapper element with the data attribute `data-equalizer-watch` which wraps both the media object sections.

```html
<div class="c-media-object is-stacked js-equalize">
  <section class="c-media-object__column">
    <div data-equalizer-watch>
      <div class="c-media-object__section"></div>
      <div class="c-media-object__section c-media-object__section--content"></div>
    </div>
  </section>
  <!-- ... -->
</div>
```

## JavaScript

- `js/plugins/media-objects.js`
