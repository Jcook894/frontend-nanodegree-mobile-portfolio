
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Minify's and compresses the main.js file
gulp.task('compress', function (cb) {
  pump([
        gulp.src('./views/js/*js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default',['compress']);
