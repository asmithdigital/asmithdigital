import 'foundation-sites/js/entries/foundation';
import 'what-input';
// import '../../node_modules/motion-ui/dist/motion-ui.js';
import '../../src/assets/js/vendor/modernizr.js';

// app.js only imports and code goes here
import './plugins';

// Temporarily use foundation
$(document).foundation();

// Scroll class toggle
$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
      $("#sp-header").addClass("menu-fixed");
    } else {
      $("#sp-header").removeClass("menu-fixed");
    }
  });
});


// Auto change the hero image
$(document).ready(function() {
  setInterval(function () {
    var $element = $('.hero');
    $element.css('background-image', 'url("https://picsum.photos/1405/1053?random&time=' + (+new Date()) + '")');
  }, 1000 * 15);
});


