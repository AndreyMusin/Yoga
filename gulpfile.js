'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");


sass.compiler = require('node-sass');

gulp.task('build:sass', function () {
    return gulp.src('./yogaPublic/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie10'}))
        .pipe(rename("all.min.css"))
        .pipe(gulp.dest('yogaPublic/css/'));
});

gulp.task('sass', function () {
    return gulp.src('./yogaPublic/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('yogaPublic/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./yogaPublic/**/*.sass', gulp.series('sass'));
});

gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./yogaPublic/"
        }
    });
    browserSync.watch('./yogaPublic/**/*.sass', browserSync.reload);
    browserSync.watch('index.html', browserSync.reload);
    browserSync.watch('/js/index.js', browserSync.reload);

});

gulp.task('default', gulp.parallel('sass:watch', 'bs'));