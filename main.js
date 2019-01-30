var http = require("http");

function ping () {
  var html = http.get(process.env.URL);
  console.log(html);
}

setInterval(function() {
  ping()
}, 5 * 60 * 1000);

console.log('Keep alive - Hello world');
ping()
