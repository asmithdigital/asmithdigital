---
title: Tabs
description: Static demonstration of tabs.
layout: static
static: true
---

<div class="c-tabs__container">
  <ul class="c-tabs js-tabs" data-tabs id="collapsing-tabs">
    <li class="c-tabs__title is-active-item"><a href="#tab-panel1" aria-selected="true">Tab 1</a></li>
    <li class="c-tabs__title"><a href="#tab-panel2">Tab 2</a></li>
    <li class="c-tabs__title"><a href="#tab-panel3">Tab 3</a></li>
    <li class="c-tabs__title"><a href="#tab-panel4">Tab 4</a></li>
  </ul>
  
  <div class="c-tabs__content" data-tabs-content="collapsing-tabs">
    <div class="c-tabs__panel is-active-panel" id="tab-panel1">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="c-tabs__panel" id="tab-panel2">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="c-tabs__panel" id="tab-panel3">
      <img src="assets/img/generic/rectangle-3.jpg">
    </div>
    <div class="c-tabs__panel" id="tab-panel4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>
