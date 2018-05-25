(function($) {
  let $equializer = $('.js-equalize');

  // Create new instance of equalizer
  let equalizerOptions = {
    equalizeByRow: true,
    equalizeOn: 'medium'
  };

  let equalizer = new Foundation.Equalizer($equializer, equalizerOptions); // eslint-disable-line no-unused-vars

})(jQuery);
