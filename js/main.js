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
      cols: 1,
      options: {
        caption: '',
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 20,
    gapVertical: 20,
    gridAdjustment: 'responsive',
    caption: 'fadeIn',
    displayType: 'fadeIn',
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

  // init cubeportfolio
  $('#js-grid-lightbox-gallery2').cubeportfolio({
    filters: '#js-filters-juicy-projects2',
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
      cols: 1,
      options: {
        caption: '',
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 20,
    gapVertical: 20,
    gridAdjustment: 'responsive',
    caption: 'fadeIn',
    displayType: 'fadeIn',
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

  // init cubeportfolio
  // $('#js-grid-lightbox-gallery3').cubeportfolio({
  //   filters: '#js-filters-juicy-projects2',
  //   layoutMode: 'grid',
  //   mediaQueries: [{
  //     width: 1500,
  //     cols: 1,
  //   }, {
  //     width: 1100,
  //     cols: 1,
  //   }, {
  //     width: 800,
  //     cols: 1,
  //   }, {
  //     width: 480,
  //     cols: 1,
  //     options: {
  //       caption: '',
  //     }
  //   }],
  //   defaultFilter: '*',
  //   animationType: 'quicksand',
  //   gapHorizontal: 30,
  //   gapVertical: 20,
  //   gridAdjustment: 'responsive',
  //   caption: 'fadeIn',
  //   displayType: 'fadeIn',
  //   displayTypeSpeed: 100,

  //   // lightbox
  //   lightboxDelegate: '.cbp-lightbox',
  //   lightboxGallery: true,
  //   lightboxTitleSrc: 'data-title',
  //   lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

  //   // singlePage popup
  //   singlePageDelegate: '.cbp-singlePage',
  //   singlePageDeeplinking: true,
  //   singlePageStickyNavigation: true,
  //   singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
  //   singlePageCallback: function(url, element) {
  //     // to update singlePage content use the following method: this.updateSinglePage(yourContent)
  //     var t = this;

  //     $.ajax({
  //       url: url,
  //       type: 'GET',
  //       dataType: 'html',
  //       timeout: 30000
  //     })
  //       .done(function(result) {
  //         t.updateSinglePage(result);
  //       })
  //       .fail(function() {
  //         t.updateSinglePage('AJAX Error! Please refresh the page!');
  //       });
  //   },

  //   // singlePageInline
  //   singlePageInlineDelegate: '.cbp-singlePageInline',
  //   singlePageInlinePosition: 'below',
  //   singlePageInlineInFocus: true,
  //   singlePageInlineCallback: function(url, element) {
  //     // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
  //     var t = this;

  //     $.ajax({
  //       url: url,
  //       type: 'GET',
  //       dataType: 'html',
  //       timeout: 30000
  //     })
  //       .done(function(result) {

  //         t.updateSinglePageInline(result);

  //       })
  //       .fail(function() {
  //         t.updateSinglePageInline('AJAX Error! Please refresh the page!');
  //       });
  //   },

  //   plugins: {
  //     loadMore: {
  //       element: '#js-loadMore-lightbox-gallery',
  //       action: 'click',
  //       loadItems: 3,
  //     }
  //   },
  // });


// init cubeportfolio
    // $('#js-grid-mosaic').cubeportfolio({
    //     filters: '#js-filters-mosaic, #js-filters-mosaic-cat1, #js-filters-mosaic-cat2, #js-filters-mosaic-cat3, #js-filters-mosaic-cat4, #js-filters-mosaic-cat5',
    //     layoutMode: 'mosaic',
    //     sortByDimension: true,
    //     mediaQueries: [{
    //         width: 1500,
    //         cols: 5,
    //     }, {
    //         width: 1100,
    //         cols: 4,
    //     }, {
    //         width: 800,
    //         cols: 3,
    //     }, {
    //         width: 480,
    //         cols: 2,
    //         options: {
    //             caption: '',
    //             gapHorizontal: 15,
    //             gapVertical: 15,
    //         }
    //     }],
    //     defaultFilter: '*',
    //     animationType: 'quicksand',
    //     gapHorizontal: 0,
    //     gapVertical: 0,
    //     gridAdjustment: 'responsive',
    //     caption: 'zoom',
    //     displayType: 'sequentially',
    //     displayTypeSpeed: 100,

    //     // lightbox
    //     lightboxDelegate: '.cbp-lightbox',
    //     lightboxGallery: true,
    //     lightboxTitleSrc: 'data-title',
    //     lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    //     plugins: {
    //         loadMore: {
    //             element: '#js-loadMore-mosaic',
    //             action: 'click',
    //             loadItems: 3,
    //         }
    //     },
    // });

})(jQuery, window, document);
