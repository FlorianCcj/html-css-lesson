var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build-flex', function() {
  gulp.src('wesbos-flexbox/lessons.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('wesbos-flexbox/build'))
  ;
});

gulp.task('watch', function() {
  gulp.watch('wesbos-flexbox/lessons.css', ['build-flex']);
});
