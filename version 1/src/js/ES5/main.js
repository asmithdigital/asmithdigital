(function($, window, document, undefined) {
  'use strict';

  // init cubeportfolio
  $('#js-grid-lightbox-gallery').cubeportfolio({
    filters: '#js-filters-juicy-projects',
    layoutMode: 'grid',
    mediaQueries: [{
      width: 1500,
      cols: 4,
    }, {
      width: 1100,
      cols: 3,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
      options: {
        caption: '',
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    caption: 'overlayBottomPush',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    // singlePage popup
    singlePageDelegate: '.cbp-singlePage',
    singlePageDeeplinking: true,
    singlePageStickyNavigation: true,
    singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
    singlePageCallback: function(url, element) {
      // to update singlePage content use the following method: this.updateSinglePage(yourContent)
      var t = this;

      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        timeout: 30000
      })
        .done(function(result) {
          t.updateSinglePage(result);
        })
        .fail(function() {
          t.updateSinglePage('AJAX Error! Please refresh the page!');
        });
    },

    // singlePageInline
    singlePageInlineDelegate: '.cbp-singlePageInline',
    singlePageInlinePosition: 'below',
    singlePageInlineInFocus: true,
    singlePageInlineCallback: function(url, element) {
      // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
      var t = this;

      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        timeout: 30000
      })
        .done(function(result) {

          t.updateSinglePageInline(result);

        })
        .fail(function() {
          t.updateSinglePageInline('AJAX Error! Please refresh the page!');
        });
    },

    plugins: {
      loadMore: {
        element: '#js-loadMore-lightbox-gallery',
        action: 'click',
        loadItems: 3,
      }
    },
  });
})(jQuery, window, document);