---
title: RSS feed
description: Documentation for RSS feeds.
static-demo: static-rss-feed
---

## RSS feed 

By default, the RSS feed is full width. If you require the two column RSS feed grid layout then please review the section below titled [two columns](#two-columns).

When displaying news RSS feeds then you must use the class `is-news` as seen in the example beow. If you are displaying events RSS feeds then you must replace this class with `is-events`.

```html
<div class="c-rss-feed is-news">
  <h4 class="c-rss-feed__heading"><a href="#0">News</a></h4>
  <section class="c-rss-feed__item">
    <div class="c-rss-feed__section">
      <div class="c-rss-feed__date">
        <p>11</p>
        <p>Oct</p>
      </div>
    </div>
    <div class="c-rss-feed__section">
      <p class="c-rss-feed__title"><a href="#0">Events place Uni of Adelaide at heart of OzAsia</a></p>
      <p>I'm going to improvise. Listen, there's something you should know about me...</p>
    </div>
  </section>
  <!-- ... -->
  <a href="#0" class="c-rss-feed__more">more...</a>
</div>
```

## Two columns

The two column RSS feed requires the following additional wrapper markup. Each column will display 50% width of the page. You must not add more than 2 columns.

```html
<div class="c-rss-feed__row">
  <div class="c-rss-feed__column">
  <!-- RSS feed -->
  </div>
  <div class="c-rss-feed__column">
  <!-- RSS feed -->
  </div>
</div>
```
