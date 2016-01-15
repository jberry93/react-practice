"use strict"

var gulp = require("gulp"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    reactify = require("reactify"),
    concat = require("gulp-concat");

gulp.task("browserify", function() {
  var bundlify = browserify({
    entries: ["insert/file/here"], // whatever file goes here will have its dependencies included
    transform: [reactify], // JSX => JS
    debug: true,
    // need these next 3 properties are required by 'watchify'
    cache: {}, 
    packageCache: {},
    fullPaths: true
  });

  var stalkify = watchify(bundlify);

  return stalkify.on("update", function() {
    var currentTime = Date.now();
    console.log("Currently updating!");
    stalkify.bundle().pipe(source("insert/fileName/from/entries/here")).pipe(gulp.dest("insert/file/destination/here"));
  });
});
