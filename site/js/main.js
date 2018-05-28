(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-full-width').cubeportfolio({
        filters: '#js-filters-full-width',
        layoutMode: 'mosaic',
        sortByDimension: true,
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 10,
                gapVertical: 10,
            }
        }],
        caption: 'zoom',
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

        plugins: {
            loadMore: {
                element: '#js-loadMore-full-width',
                action: 'auto',
                loadItems: 3,
            }
        },
    });
})(jQuery, window, document);