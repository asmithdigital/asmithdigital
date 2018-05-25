---
title: Filter nav
description: Documentation for filter nav.
tags:
  - navigation
static-demo: static-filter-nav
---

## Filter navigation menu

The filter navigation menu sits directly above the filter navigation content. This menu s the filter menu that controls what is filtered within the content when the user clicks a menu item.

The filter nav menu uses jQuery to filter items (if jQuery is present). You can filter items with [jQuery selectors](http://api.jquery.com/category/selectors/). The selector must be placed within the `data-filter=""` attribute, as seen in the example below.

```html_example
<div id="ua-filter-nav" class="c-filter-nav__group">
  <a class="c-filter-nav__button is-checked" data-filter="*">All</a>
  <a class="c-filter-nav__button" data-filter=".first">First</a>
  <a class="c-filter-nav__button" data-filter=".second">Second</a>
  <a class="c-filter-nav__button" data-filter=".first, .second">First & Second</a>
  <a class="c-filter-nav__button" data-filter=":not(.second)">Not second</a>
  <a class="c-filter-nav__button" data-filter=".second:not(.first)">Second but not first</a>
</div>
```

## Load first filter

By default, the filter will load the "all" filter on page load. If you decide that you do not want the all filter and would like to select which filter should load first on page load, you can use the `ua-filter-load-first` class as seen in the demo below. 

Dont forget to also apply the `is-checked` class to the same filter otherwise the style will not reflect the currently checked item and will be confusing to the user.

```html_example
<div id="ua-filter-nav" class="c-filter-nav__group">
  <a class="c-filter-nav__button u-filter-load-first is-checked" data-filter=".first">Load me first</a>
  <a class="c-filter-nav__button" data-filter=".another-filter">Another filter</a>
</div>
```

## Filter navigation content

The filter navigation content is made up of a wrapper element with the modifier class of `has-four-columns`. You may include any number of column element and they will be displayed as four column layout. 
 
Each column item must contain the class name in which you plan to filter, as mentioned in the filter navigation menu example above.

```html_example
<div class="c-filter-nav has-four-columns">
  <div class="c-filter-nav__column second first">
    <a href="#">
      <div class="c-filter-nav__content">
        <h4 class="c-filter-nav__title">Second First</h4>
      </div>
    </a>
  </div>
  <div class="c-filter-nav__column first">
    <a href="#">
      <div class="c-filter-nav__content">
        <h4 class="c-filter-nav__title">First</h4>
      </div>
    </a>
  </div>
  <!-- ... -->
</div>
```

## JavaScript

- `js/plugins/filter-grid.js`
