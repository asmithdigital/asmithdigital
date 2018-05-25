(function($) {
  let $tabsElement = $('.js-tabs');

  let tabsOptions = {
    activeCollapse: true,
    linkClass: 'c-tabs__title',
    panelClass: 'c-tabs__panel',
    deepLink: true,
    deepLinkSmudge: true,
    linkActiveClass: 'is-active-item',
    panelActiveClass: 'is-active-panel'
  };

  if ($tabsElement.length) {
    let $tabs = new Foundation.Tabs($tabsElement, tabsOptions); // eslint-disable-line no-unused-vars
  }

})(jQuery);
