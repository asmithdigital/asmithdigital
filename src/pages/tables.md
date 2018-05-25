---
title: Tables
description: Documentation for tables.
static-demo: static-table
---

## IE9 support

When supporting IE9, you need to wrap the table HTML in the following element.

```html
<div class="c-table">
  <!-- <table> -->
</div>
```

## Native table HTML

Tables are standard native HTML5. Please **DO NOT USE** table attributes which have been deprecated in the HTML5 spec, such as `align`, `bgcolor`, `border`, `cellpadding`, `cellspacing`, `width`, `valign` etc as per the [MDN web docs table reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table). Only use attributes that are not deprecated within HTML5 spec.

```html
<table>
  <thead>
    <tr>
      <th>This is the description!</th>
      <th>One</th>
      <!-- ... -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="display:block; width:400px;">Use inline CSS</td>
      <td>Cool</td>
      <!-- ... -->
    </tr>
    <!-- ... -->
  </tbody>
  <tfoot>
    <tr>
      <td>Here's a footer, just in case</td>
      <td></td>
      <!-- ... -->
    </tr>
  </tfoot>
</table>
```
