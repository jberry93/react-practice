var express = require("express"),
    server = express(),
    request = require("request"),
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

// request.post("http://requestb.in/13y7kny1").form({author: "Tommen", text: "I am a king"});
request({
  method: "POST",
  uri: "http://requestb.in/13y7kny1",
  multipart: [
    {
      "Content-Type": "application/json",
      body: {author: "Tommen", text: "I am a king"}
    }
  ]
}, function(error, response, body) {
  if(error) {
    console.log(error);
  } else {
    console.log("Upload Successful!");
  }
});

server.listen(1337);

console.log("Listening on leet http://localhost:1337/api/comments");
