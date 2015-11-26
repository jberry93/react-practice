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
