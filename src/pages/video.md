---
title: Video
description: Documentation for videos.
static-demo: static-video
---

## Responsive video

The video grid uses a JavaScript plugin to ensure that the `<iframe>` element is responsive.  The class `js-responsive-video-embed` must be applied to the `<iframe>` wrapper element, as seen in the examples below. Currently supported players for responsive video are Youtube and Vimeo.


## Video grid

By default the `c-video` component will be styled as a two column video grid. By adding the class `has-three-columns` as seen in the example below, the video grid will become three column. 

```html
<div class="c-video has-three-columns">
  <section class="c-video__column">
    <div class="js-responsive-video-embed">
      <iframe width="560" height="320" src="//www.youtube.com/embed/TadTb5iuSDg" frameborder="0" title="YouTube Video" allowfullscreen></iframe>
    </div>
  </section>
  <!-- ... -->
</div>
```

## Full width video

When using a stand alone single video you **must** include the following markup which includes the class `is-full-width` applied to the `c-video` wrapper element.

```html
<div class="c-video is-full-width">
  <section class="c-video__column">
    <div class="js-responsive-video-embed">
      <iframe width="560" height="320" src="//www.youtube.com/embed/TadTb5iuSDg" frameborder="0" title="YouTube Video" allowfullscreen></iframe>
    </div>
  </section>
</div>
```

## JavaScript

- `js/plugins/responsive-video.js`
