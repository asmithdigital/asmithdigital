const { src, dest, series, parallel, watch } = require('gulp');
var sass = require('gulp-sass');
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function clean(cb) {
  // body omitted
  cb();
}

// function css(cb) {
//   return src('./scss/app.scss')
//   .pipe(sass())
//   .pipe(dest('./css'))
// }

function css() {
  return src('./scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    // .pipe($.postcss([
    //   autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
    // ]))
    .pipe(dest('./css'));
};

function javascript(cb) {
    // return src('*.js')
    // .pipe(dest('output'));
    cb();
}

exports.default = function() {
    // You can use a single task
    watch('src/*.css', { ignoreInitial: false, queue: false }, css);
    // Or a composed task
    watch('src/*.js', { ignoreInitial: false, queue: false }, series(clean, javascript));
};

exports.build = series(clean, parallel(css, javascript));
exports.css = series(css);

