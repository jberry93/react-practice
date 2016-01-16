"use strict"

var gulp = require("gulp"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    reactify = require("reactify"),
    concat = require("gulp-concat"),
    source = require("vinyl-source-stream");

gulp.task("browserify", function() {
  var bundlify = browserify({
    entries: ["app.js"], // whatever file goes here will have its dependencies included
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
    stalkify.bundle().pipe(source("./")).pipe(gulp.dest("build/app.js"));
    console.log("Update complete @ " + (Date.now() - currentTime) + " milliseconds!");
  }).bundle().pipe(source("./")).pipe(gulp.dest("build/app.js"));
});

// Create more gulp tasks as needed...

gulp.task("default", ["browserify"]);
