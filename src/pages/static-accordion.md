---
title: Accordion
description: Static demonstration of accordion.
layout: static
static: true
---

<ul class="c-accordion js-accordion">
  <a class="c-accordion__toggle" data-expand-all="true"></a>
  <li class="c-accordion__item" data-accordion-item>
    <a href="#accordion-panel1" class="c-accordion__title"><h2 class="c-accordion__heading">Accordion 1</h2></a>
    <div class="c-accordion__content" data-tab-content id="accordion-panel1">
      <ul>
        <li>List item with a much longer description or more content.</li>
        <li>List item</li>
        <li>List item
          <ul>
            <li>Nested list item</li>
            <li>Nested list item</li>
            <li>Nested list item</li>
          </ul>
        </li>
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </ul>
      <ol>
        <li>Cheese (essential)</li>
        <li>Pepperoni</li>
        <li>Bacon
          <ol>
            <li>Normal bacon</li>
            <li>Canadian bacon</li>
          </ol>
        </li>
        <li>Sausage</li>
        <li>Onions</li>
        <li>Mushrooms</li>
      </ol>
      <p>Panel 1. Lorem ipsum dolor</p>
      <a href="#">Nowhere to Go</a>
    </div>
  </li>
  <li class="c-accordion__item" data-accordion-item>
    <a href="#accordion-panel2" class="c-accordion__title"><h3 class="c-accordion__heading">Accordion 2</h2></a>
    <div class="c-accordion__content" data-tab-content id="accordion-panel2">
      <textarea></textarea>
      <button class="button">I do nothing!</button>
    </div>
  </li>
  <li class="c-accordion__item" data-accordion-item>
    <a href="#accordion-panel3" class="c-accordion__title"><h4 class="c-accordion__heading">Accordion 3</h2></a>
    <div class="c-accordion__content" data-tab-content id="accordion-panel3">
      Type your name!
      <input type="text"></input>
    </div>
  </li>
</ul>
