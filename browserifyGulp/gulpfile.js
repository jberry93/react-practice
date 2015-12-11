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

/* Production Tasks */
gulp.task("replaceJS", function() {
  gulp.src("source/index.html")
    .pipe(replaceHTML({ "js": "build/" + "build.min.js" }))
    .pipe(gulp.dest("build.min.js"));
});

gulp.task("build", function() {
  gulp.src("source/js/*.js")
    .pipe(react())
    .pipe(concat("build.min.js"))
    .pipe(uglify("build.min.js"))
    .pipe(gulp.dest("dist/build"));
});

gulp.task("production", ["replaceJS", "build"]);
