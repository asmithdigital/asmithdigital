import '../ES5/ua-audio-playlist';

(function ($) {
  var $audioPlaylist = $('.js-audio-playlist');
  var $audioMediaElement = $('.js-mediaelementplayer');

  var loadCSS = function(href) {

    var cssLink = $("<link>");
    $("head").append(cssLink); //IE hack: append before setting href

    cssLink.attr({
      rel:  "stylesheet",
      type: "text/css",
      href: href
    });

  };

  $audioPlaylist.ua_audioplaylist();

  if ($audioPlaylist.length && !Modernizr.audio.mp3) { // eslint-disable-line no-undef
    loadCSS("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/mediaelementplayer.css");

    $.getScript("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/mediaelement-and-player.js", function(){
      $audioMediaElement.mediaelementplayer();
    });
  }
})(jQuery);
