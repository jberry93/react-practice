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

[1]: http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html "Christian Alfoni's Blog"

[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode "MDN: Strict Mode"

[3]: http://eloquentjavascript.net/1st_edition/chapter5.html "Eloquent JS: Error Handling"

[4]: http://www.w3schools.com/js/js_variables.asp "W3: Variable Declaration"

[5]: https://nodejs.org/api/modules.html#modules_addenda_package_manager_tips "NodeJS: require()"
