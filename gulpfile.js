var gulp = require('gulp'),
runSequence = require('run-sequence'),
sass = require('gulp-sass'),
babel = require('gulp-babel'),
browserSync = require('browser-sync').create();

gulp.task('default', function(done) { runSequence('styles','babel','launch_server'); });

gulp.task('watch', function() {
  gulp.start('styles');
  gulp.start('babel');
  gulp.start('launch_server');
  gulp.watch('src/sass/*.scss',['styles', 'sass-pagereload']);
  gulp.watch('src/js/*.js', ['babel-watch']);
});

gulp.task('sass-pagereload', ['styles'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('babel-watch', ['babel'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('babel', function () {
  return gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./js/'));
});

gulp.task('styles', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('launch_server', function(callback) {
    browserSync.init({
    server: {
      baseDir: './'
    },
    startPath: '/index.html',
    ghostMode: false
  });
  gulp.watch('./*').on('change', browserSync.reload);
});