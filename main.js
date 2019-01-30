var http = require("http");
var moment = require("moment");

function ping () {
  var currentHour = parseInt(moment().utcOffset(8).format('HH'))
  console.log('currentHour', currentHour);
  if (currentHour >= 8 || currentHour < 2 ) {
    http.get(process.env.URL, function(res) {
      res.on('data', function(chunk) {
        console.log("[" + res.statusCode + "]" + chunk);
      });
    });
  }
}

setInterval(function() {
  ping()
}, 5 * 60 * 1000);

console.log('[Keep alive]' + process.env.URL);
ping()
