var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var webserver = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');

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

//Minify's pizza html.
gulp.task('minify', function() {
  return gulp.src('./views/pizza.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});



//still working on webserver task
gulp.task('serve', function() {
  gulp.src('dist')
    .pipe(webserver({
      port:'9090',
      livereload: true,
      open: true
    }));
});
