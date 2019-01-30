var http = require("http");
var moment = require("moment");

function ping () {
  http.get(process.env.URL, function(res) {
    res.on('data', function(chunk) {
      console.log("[" + res.statusCode + "]" + "[" + moment().format('LLL') + "]" + chunk);
    });
  });
}

setInterval(function() {
  ping()
}, 5 * 60 * 1000);

console.log('[Keep alive]' + process.env.URL);
ping()
