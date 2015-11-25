"use strict";
var express = require("express"),
    server = express(),
    path = require("path");
server.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/index.html"));
});
server.listen(8080);
console.log("Server running on http://localhost:8080");
