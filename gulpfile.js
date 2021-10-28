const { src, dest, series, parallel, watch } = require('gulp');
var sass = require('gulp-sass');
var $             = require('gulp-load-plugins')();

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function css() {
  return src('./scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe(dest('./css'));
};

function javascript() {
    return src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/foundation-sites/dist/js/foundation.min.js',
        './js/jquery.cubeportfolio.min.js',
        './js/main.js',
        './js/app.js'
      ])
    .pipe($.concat('app.jquery.js'))
    // .pipe($.uglify()
    //     .on('error', e => {
    //       console.log(e);
    //     })
    // )
    .pipe(dest('./js'));
}

exports.default = function() {
    watch('scss/*.scss', css);
    watch('js/*.js', javascript);
};

exports.build = parallel(css, javascript);
