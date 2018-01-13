'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./src/components/App.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./src/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
