var express = require("express"),
    server = express(),
    path = require("path");

server.get("/api/comments", function(request, response) {
  response.sendFile(path.join(__dirname + "/comments.json"));
});

server.listen(1337);

console.log("Listening on leet http://localhost:1337/api/comments");
