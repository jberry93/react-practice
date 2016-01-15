"use strict"

var gulp = require("gulp"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    reactify = require("reactify"),
    concat = require("gulp-concat");

gulp.task("browserify", function() {
  var bundlify = browserify({
    entries: [],
    transform: [reactify],
    debug: true,
    // need these next 3 properties to enable 'watchify'
    cache: {}, 
    packageCache: {},
    fullPaths: true
  });

  var stalkify = watchify(bundlify);
});
