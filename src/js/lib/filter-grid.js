import '../../../node_modules/isotope-layout/dist/isotope.pkgd.min.js';

(function($) {

  const $loadFirst = $('.u-filter-load-first');

  // init Isotope
  const $grid = $('.c-filter-nav').isotope({
    itemSelector: '.c-filter-nav__column',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        const weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  if ($loadFirst.length) {
    console.log('has length');
    $grid.isotope({ filter: $loadFirst.attr('data-filter') });
  }

  // bind filter button click
  $('#ua-filter-nav').on( 'click', '.c-filter-nav__button', function() {
    const filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // bind sort button click
  // $('#sorts').on( 'click', '.c-filter-nav__button', function() {
  //   var sortByValue = $(this).attr('data-sort-by');
  //   $grid.isotope({ sortBy: sortByValue });
  // });

  // change is-checked class on buttons
  $('.c-filter-nav__group').each( function( i, buttonGroup ) {
    const $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.c-filter-nav__button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

})(jQuery);
