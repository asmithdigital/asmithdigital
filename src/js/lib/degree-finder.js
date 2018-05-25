// Degree finder advanced toggle
let $degreeFinderAdvanced = $('.js-degree-finder-advanced');
let $degreeFinderAdvancedToggle = $('.js-degree-finder-advanced-toggle');

$degreeFinderAdvanced.hide();
$degreeFinderAdvancedToggle.on('click', function(e){
  e.preventDefault();
  $degreeFinderAdvanced.toggle();
});
