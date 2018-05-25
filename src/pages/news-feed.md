---
title: News feed
description: Documentation for news feed.
static-demo: static-news-feed
---

## Feed items

Feed items are a feed or loop of post items. Each feed item contains a short intro paragraph and links through to the full single post item page. Each feed item content section is wrapped in a list item `<section>` element which is then repeated for the required news feed items. 

There is a meta component that sits below the `<h2>` element and this `<h2>` element must link through to the particular single post news item page. Each feed item also contains a link at the end of the content to the single post news item with the link text `Full Story`. Finally, each feed item contains an RSS feed icon component which lives directly below the content.

```html
<div class="c-post">
  <section class="c-post__list-item">
    <div class="c-post__content">
      <h2 class="c-post__heading"><a href="#0">Lorem ipsum dolor</a></h2>
      <!-- Post meta -->
      <p>Lorem ipsum dolor sit amet, at eum docendi euripidis sadipscing, dignissim conceptam percipitur nam an, mel te natum illum veritus. Et usu euismod nominati, cu meis habemus laboramus has, est veritus signiferumque ea. Ne ius stet nostro aeterno, facilis albucius definitionem ut mea. [<a href="#0"><em>Full story</em></a>]</p>
    </div>
    <!-- RSS Feed icon -->
  </section>
  <!-- ... -->
</div>
```

## Single post

The single post item is the full news post item and is its own page. It contains the `<h1>` element within the content section and it does not require the list item `<section>` element because it is not a feed or loop of post items but instead a single page.
 
The single post item contains post meta below the heading element in the same way that each feed item does. The single post contains a post utility component that lives below the content in the same place where the feed icon lives in the above post feed item.

```html
<div class="c-post">
  <div class="c-post__content">
    <h1>Lorem ipsum dolor</h1>
    <!-- Post meta -->
    <!-- Post image -->
    <p>Lorem ipsum dolor sit amet, at eum docendi euripidis sadipscing, dignissim conceptam percipitur nam an, mel te natum illum veritus.</p>
  </div>
  <!-- Post utility -->
</div>
```

## Post meta

Used on both the feed item and the single post and lives directly below the heading element.

```html
<div class="c-post__meta">
  <i class="fa fa-clock-o" aria-hidden="true"></i> Posted on <span class="c-post__meta-date"><a href="#0">December 9 2016</a></span> by <span class="c-post__meta-author"><a href="#0">Author Name</a></span>
</div>
```

## Post image

As seen in the "single post" above, a post image may be placed directly below the post meta component. You may place a full width or a floated right image, as seen on the [images page](images.html). The full width image must be `3:1` ratio and the floated right image must be `3:2` ratio.

## RSS feed icon

To be used on each news feed item only and lives directly below the content.

```html
<div class="c-post__feed-icon">
  <a href="/rss/"><img src="//www.adelaide.edu.au/global/images/rss.gif" alt="RSS News Feed" width="44" height="16" border="0" title="RSS News Feed"></a>
</div>
```

## Post utility

To be used on each single news item page only and lives directly below the content.

```html
<div class="c-post__utility">
  <span class="c-post__utility-categories">Posted in </span> <a href="#0">Category</a>, <a href="#0">Category</a> |
  <span class="c-post__utility-tags">Tagged in <a href="#0">tag</a>, <a href="#0">tag</a>, <a href="#0">tag</a></span>
  <span class="c-post__utility-comments"><i class="fa fa-comment" aria-hidden="true"></i> Comments off<span class="c-post--hidden"> on Post Title goes here</span></span>
  <span class="c-post__utility-comments"><i class="fa fa-comment" aria-hidden="true"></i> <a href="#0">Leave a comment<span class="c-post--hidden"> on Post Title goes here</span></a></span>
</div>
```
