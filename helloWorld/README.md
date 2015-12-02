## Notes on `helloWorld`

#### `package.json`
```json
{
  "name": "helloworld",
  "version": "1.0.0",
  "description": "First React page",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Jeffrey Berry",
  "license": "ISC",
  "dependencies": {
    "babelify": "^7.2.0",
    "express": "^4.13.3",
    "react": "^0.14.3",
    "react-dom": "^0.14.3"
  }
}
```
With the `package.json` file, I wanted to show which packages were used for the `helloWorld` example:
- [`babelify`](https://www.npmjs.com/package/babelify) = If you are using `browserify` to bundle your packages together into one file, you would need to use `babelify` to compile files using ES6
- [`express`](http://expressjs.com/) = All `express` does is provide the MVC architecture for my web application. It allowed me to route my dependencies!
- [`react`](https://www.npmjs.com/package/react) = This is the file that contains the `react` library
- [`react-dom`](https://www.npmjs.com/package/react-dom) = This package allowed me to interact with the DOM. I would not be able to place `Hello World` into `index.html` without it

#### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React Hello World!</title>
    <meta charset="utf-8">
    <script src="node_modules/react/dist/react.min.js"></script>
    <script src="node_modules/react-dom/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script type="text/babel" src="app.js"></script>
  </head>
  <body>
    <div id="hi"></div>
  </body>
</html>
```
Simply put, here's the `index.html` file. The most important parts are the 4 script tags in `<head>` and the `<div>` with `id="hi"`. I need to use React to reference an element from this HTML file in order to display `Hello World`. What better way than a `<div>` with an `id`?

#### `app.js`
```JavaScript
"use strict";
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("hi"));
```

#### `server.js`
```JavaScript
"use strict";
var express = require("express"),
    server = express(),
    path = require("path");
server.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/index.html"));
});
server.get("/node_modules/react/dist/react.min.js", function(request, response) {
  response.sendFile(path.join(__dirname + "/node_modules/react/dist/react.min.js"));
});
server.get("/node_modules/react-dom/dist/react-dom.min.js", function(request, response) {
  response.sendFile(path.join(__dirname + "/node_modules/react-dom/dist/react-dom.min.js"));
});
server.get("/app.js", function(request, response) {
  response.sendFile(path.join(__dirname + "/app.js"));
});
server.listen(8080);
console.log("Server running on http://localhost:8080");
```
