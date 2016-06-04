# gulpPerfection

I will go through the example posted [here][1] to show what each line of code does and why it is so awesome! The reasons why are already written out in the summary at the end of the blog post but rest assured, I will go through each line in as much detail as possible.

Here is my version of the code rewritten with my personal flair:

```JavaScript
"use strict";
var gulp = require("gulp"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    reactify = require("reactify"),
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

---

Now for the first line:

```JavaScript
"use strict";
```

What happens when we use this?
- We enter into something called [strict mode][2]
- 3 changes to JavaScript (JS) semantics occur:
  - 1) Throws an error in place of a [silent error][3]
  - 2) Makes it easier for JS engines to perform optimizations
  - 3) Prohibit the use of potential future JS syntax that may or may not work when executed

Why use this?
- I prefer this mode mostly because of the first 2 changes to JS semantics but use it at your own discretion

---

Next few lines:

```JavaScript
var gulp = require("gulp"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    reactify = require("reactify"),
    source = require("vinyl-source-stream");
```

What is going on here?
- I am `require`-ing different packages that I brought in using *npm*
- This is also [another way][4] of creating variables using only one statement of `var` and commas

What is `require`? What does it do?
- Firstly, `require` is a [NodeJS function][5]
- Secondly, `require` allows us to use modules (or packages is what I have been calling them) containing different methods that we need for later use
  - For example, `gulp` has a method `task()` which we need to use to create new tasks in gulp to automate our workflow

English translation:
- We are creating several new variables and setting each variable equal to a module containing an object full of methods and properties which we will be using later on

---

Now for our first task:

```JavaScript
gulp.task("browserify", function() { /* Logic */ });
```

English translation:
- We are invoking a method `task()` from object `gulp` and giving it 2 arguments:
  - The first argument is a string `browserify` which gives the gulp task a name
  - The second argument is an anonymous function containing the logic of the gulp task `browserify`

---

```JavaScript
gulp.task("browserify", function() {
  var bundlify = browserify({ /* Browserify properties */ });
});
```

English translation:
- Created a new variable called `bundlify` and set it equal to a method called `browserify` which takes in one argument that is an object containing a number of properties

---

```JavaScript
gulp.task("browserify", function() {
  var bundlify = browserify({
    entries: ["app.js"],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {},
    fullPaths: true
  });
});
```

What do each of the [properties][6] of the `browserify` object do?
- `entries` = Can take in a string, object, or array containing file names (in string form) that will be used for later manipulation via `browserify`. Any dependencies (meaning anything that is brought into the js file using `require`) will also be included automatically
- `transform` = Takes in an array of functions or modules that will literally transform the code in the files from `entries` using the functions or modules before they are parsed or analyzed
- `debug` = If `true` a source map is needed at the end of the bundle to make debugging easier
  - [**Source Map**][7] = A *map* of a combined/minified file leading back to its pre-combined/minified state
- `cache` and `packageCache` = When using [`watchify`][8], it is a requirement of the [`watchify`][8] plugin to set the `cache` and `packageCache` properties or else `watchify` will not work
- `fullPaths` = Preserves all the original paths a bundle was generated with. If `false`, the module ids would be converted to numerals which may lead to some confusion (better to stick with original paths in my opinion)

---

Now let's move on to the `watchify` portion of the gulp task:

```JavaScript
gulp.task("browserify", function() {
  /* browserify code */
  var stalkify = watchify(bundlify);
});
```

English translation:
- We create a new variable `stalkify` and set it equal to a method `watchify` which takes in one argument which is the variable `bundlify` defined above. This will allow us to *watch* the bundle of code after it is created and do something upon an event which will be defined next!

---

```JavaScript
gulp.task("browserify", function() {
  /* browserify code */
  var stalkify = watchify(bundlify);
  return stalkify.on("update", function() { ... });
});
```

English translation:
- When the `browserify` task is executed, we will return the object `stalkify` and invoke its method `on()` which contains 2 arguments:
  - First argument is a string containing a name of an event which in this case is `update`
  - Second argument is a function to call upon the occurrence of the event
---

```JavaScript
gulp.task("browserify", function() {
  /* browserify code */
  var stalkify = watchify(bundlify);
  return stalkify.on("update", function() {
    var currentTime = Date.now();
    console.log("Currently updating!");
    /* bundling/piping here */
    console.log("Update complete in " + (Date.now() - currentTime) + " milliseconds");
  });
});
```

English translation:
- So whenever an update occurs (Whenever you save a file within `entries`), we are going to set a new variable `currentTime` equal to a new instance (New instance because the first letter is capitalized) of a `Date` object and calling its `now()` method to get the exact time. We are also logging a few statements in the console to let us know at what point the bundling finishes

---

```JavaScript
gulp.task("browserify", function() {
  /* browserify code */
  var stalkify = watchify(bundlify);
  return stalkify.on("update", function() {
    var currentTime = Date.now();
    console.log("Currently updating!");

    stalkify.bundle().pipe(source("./")).pipe(gulp.dest("build/app.js"));

    console.log("Update complete in " + (Date.now() - currentTime) + " milliseconds");
  });
});
```

English translation:
- There is a few things going on here so let's first go through the methods in order from left to right:
  - `bundle()` = We are first bundling all the files in `entries` and their dependencies into one file
  - [`pipe()`][9] = Create a data stream, pull data from the stream, and write it to a destination
    - `source()` = Giving the location of where the data stream is located (Meaning anything in root directory)
  - `pipe()` = This next pipe will read the data from the previous data stream and write it to the destination described in the `dest()` method
    - [`dest()`][10] = A gulp method indicating where a readable stream should be written to. If a directory is not present, it will be made

---

Finally we reached the last part of the gulp task!

```JavaScript
gulp.task("browserify", function() {
  /* browserify code */
  var stalkify = watchify(bundlify);
  return stalkify.on("update", function() {
    /* update event logic */
  }).bundle().pipe(source("./")).pipe(gulp.dest("build/app.js"));
});
```

I removed the `update` event logic so it was easier to see the next line of code which are the same methods we just went over

Why do we need to have these methods called a second time?
- This is so that the process of bundling and piping occurs right when the gulp task is fired

---

Now for the last line of code:

```JavaScript
gulp.task("default", ["browserify"]);
```

English translation:
- We created another gulp task called `default` and gave it an array containing our first gulp task `browserify`
- This is so that we can call more than one gulp task by typing `gulp` in the command line
- Here is what it looks like when I call it:

```BASH
$ gulp
[19:26:08] Using gulpfile ~/GitHub/react-practice/gulpPerfection/gulpfile.js
[19:26:08] Starting 'browserify'...
[19:26:11] Finished 'browserify' after 2.36 s
[19:26:11] Starting 'default'...
[19:26:11] Finished 'default' after 14 μs
```

## That's All Folks!

[1]: http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html "Christian Alfoni's Blog"

[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode "MDN: Strict Mode"

[3]: http://eloquentjavascript.net/1st_edition/chapter5.html "Eloquent JS: Error Handling"

[4]: http://www.w3schools.com/js/js_variables.asp "W3: Variable Declaration"

[5]: https://nodejs.org/api/modules.html#modules_addenda_package_manager_tips "NodeJS: require()"

[6]: https://github.com/substack/node-browserify#usage "Browserify Documentation"

[7]: http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/ "HTML5 Rocks: Source Maps"

[8]: https://github.com/substack/watchify "Watchify Documentation"

[9]: https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options "NodeJS: pipe method"

[10]: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath-options "Gulp Documentation: gulp.dest()"
