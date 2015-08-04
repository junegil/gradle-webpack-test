'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function (cb) {
  webpack({}, function (err, stats) {
    if (err)
      throw new gutil.PluginError('webpack:build', err);

    gutil.log('[webpack:build]', stats.toString());

    cb();
  });
});
