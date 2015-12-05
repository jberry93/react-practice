var express = require("express"),
    server = express(),
    path = require("path");

server.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/index.html"));
});

server.get("/app.js", function(request, response) {
  response.sendFile(path.join(__dirname + "/app.js"));
});

server.get("/api/comments", function(request, response) {
  response.sendFile(path.join(__dirname + "/comments.json"));
});

server.listen(1337);

console.log("Listening on leet http://localhost:1337/api/comments");
