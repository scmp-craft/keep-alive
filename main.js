var http = require("http");

setInterval(function() {
  var html = http.get(process.env.URL);
  console.log(html);
}, 5 * 60 * 1000);
