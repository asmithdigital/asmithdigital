const { src, dest, series, parallel, watch } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function javascript() {
    return src('*.js')
    .pipe(dest('output'));
}

exports.default = function() {
    // You can use a single task
    watch('src/*.css', { ignoreInitial: false, queue: false }, css);
    // Or a composed task
    watch('src/*.js', { ignoreInitial: false, queue: false }, series(clean, javascript));
};

exports.build = series(clean, parallel(css, javascript));

