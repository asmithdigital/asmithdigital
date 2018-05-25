---
title: Content layouts
description: Documentation for standard and campaign content layouts.
static-demo: static-standard-layout
---

## Content layouts

You can implement either the standard layout or the campaign layout HTML within the base grid where you see the HTML comment `<!-- Main content layouts go here -->`, as seen on the [base grids page](grid.html).

Please also review the section titled **[Semantic meaning](#semantic-meaning)** seen below, which discusses why we use certain HTML5 elements such as `<section>` and `<article>` and also how you may combine both the standard and campaign layouts into your application.

### Standard layout

The standard layout is comprised of a layout container which wraps both the main nav and the main content elements.

```html
<div class="o-layout__container">
  <div class="o-layout__main-nav">
    <!-- Site menu -->
  </div>
  <article class="o-layout__main-content" id="ua-main-content" role="main">
    <!-- Breadcrumb, Headings, paragraph, components etc -->
  </article>
</div>
```

### Campaign layout

The campaign layout differs from the standard layout in that it does not contain a layout container wrapper, it does not include a main nav element `o-layout__main-nav`, and the `<article>` element does not contain the main content class `o-layout__main-content`.

The campaign layout is made up of a single `<article>` element which wraps a series of `<section>` elements. Each `<section>` element contains a nested layout container element `o-layout__container` which wraps each of the sections children elements. 

**Campaign layout section children elements**

The section childer elements are comprised of content wrappers. This can contain any content (`<h1>`, `<h2>`, `<p>`, etc) as well as any component that suits a full width layout, such as RSS Feed or media object.

** Campaign layout section utility classes **

The `.is-dark` utility class will apply a black background color to the section and will update all content within the section to be white. The `.is-pulled-up` utility class will pull the contents of the section up. This is reserved when the first element in the section is a row of media objects.

```html
<article id="ua-main-content" role="main">
  <section class="o-layout__section">
    <div class="o-layout__container">
      <div class="o-layout__section-content"></div>
      <div class="o-layout__section-content is-centered"></div>
    </div>
  </section>
  <section class="o-layout__section is-dark is-pulled-up">
    <div class="o-layout__container">
      <!-- Section children elements -->
    </div>
  </section>
  <!-- ... -->
</article>
```


## Semantic meaning

The use and placement of the `<article>` and `<section>` HTML5 elements is entirely dependant upon the context and semantic meaning of the page you are creating.

As you can see above, the standard and full width layouts contain a single `<article>` element which wraps the content (`<h1>`, `<h2>`, `<p>` etc) of the page. However the campaign layout contains a single `<article>` element which wraps a series of `<section>` elements. 

These HTML5 elements are used for semantic meaning. If the element does not add meaning to the page and is there for CSS style purposes only then a `<div>` must be used.

Please review the following information to determine the correct markup for your template/application: http://html5doctor.com/the-article-element/

** Combine campaign with standard layout ** 

If you need a combination of standard and campaign layouts you could do something like the following example. Notice the change of HTML elements to maintain semantic meaning.

```html
<article id="ua-main-content" role="main">
  <section class="o-layout__section">
    <div class="o-layout__container">
      <!-- Campaign content: .o-layout__section-content -->
    </div>
  </section>
  <section class="o-layout__section">
    <div class="o-layout__container">
      <div class="o-layout__main-nav">
        <!-- Site menu -->
      </div>
      <div class="o-layout__main-content">
        <!-- Breadcrumb, Headings, paragraph, components etc -->
      </div>
    </div>
  </section>
  <!-- ... -->
</article>
```
