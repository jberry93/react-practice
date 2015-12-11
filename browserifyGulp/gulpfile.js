var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    react = require("gulp-react"),
    replaceHTML = require("gulp-html-replace");

/* Development Tasks */
gulp.task("jsx2js", function() {
  gulp.src("source/js/*.js")
    .pipe(react())
    .pipe(gulp.dest("dist/source"));
});

gulp.task("move2dist", function() {
  gulp.src("source/index.html").pipe(gulp.dest("dist"));
});

gulp.task("watcher", function() {
  gulp.watch(["source/js/*.js", "source/index.html"], ["jsx2js", "move2dist"]);
});

gulp.task("default", ["watcher"]);
