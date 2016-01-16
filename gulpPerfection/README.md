# gulpPerfection

I will go through the example posted [here][1] to show what each line of code does and why it is so awesome! The reasons why are already written out in the summary at the end of the blog post but rest assured, I will go through each line in as much detail as possible.

Here is my version of the code rewritten with an added package:

```JavaScript
"use strict"
var gulp = require("gulp"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    reactify = require("reactify"),
    concat = require("gulp-concat"),
    source = require("vinyl-source-stream");
gulp.task("browserify", function() {
  var bundlify = browserify({
    entries: ["app.js"],
    transform: [reactify],
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
gulp.task("default", ["browserify"]);
```

[1]: http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html "Christian Alfoni's Blog"
