(function($) {
  let $accordion = $('.js-accordion');

  // Create new instance of accordion
  let accordionOptions = {
    allowAllClosed: true,
    multiExpand: true,
    deepLink: true
  };

  let accordion = new Foundation.Accordion($accordion, accordionOptions); // eslint-disable-line no-unused-vars

  // Toggle expand or collapse
  let allExpanded = false;
  let $toggleButton = $('[data-expand-all]');

  let expandAccordion = function($a) {
    $a.parent($accordion).find('.c-accordion__title').not('[aria-expanded=true]').click();
    $a.text('Collapse');
    allExpanded = true;
  };

  let contractAccordion = function($a) {
    $a.parent($accordion).find('.c-accordion__title').not('[aria-expanded=false]').click();
    $a.text('Expand');
    allExpanded = false;
  };
  
  $toggleButton.on('click', function() {
    let $a = $(this);
    if (allExpanded === false) {
      expandAccordion($a);
    } else {
      contractAccordion($a);
    }
  });

  $toggleButton.text('Expand');

})(jQuery);
