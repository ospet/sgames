var fs = require("fs");
var https = require("https");
var constants = require("./constants");
var _ = require("underscore")

var refreshIntervals = {};

function updateJsonFile(fileid) {
  var jsonFile = "../" + constants.JSON_DIR + "/" + fileid + ".json";
  var jsonContent = "";
  var options = {
    hostname: 'www.googleapis.com',
    port: 443,
    path: '/drive/v2/files/' + fileid + '?key=AIzaSyBIOC-10DHqU6VhngiG3WIx67eNeOlQdq4&alt=media',
    method: 'GET'
  };
  var req = https.request(options, function(res) {
    console.log("Processing response: " + res.statusCode);
    res.on('data', function (data) {
      jsonContent += data;
    });
    res.on('end', function () {
      try
      {
        fs.writeFileSync(jsonFile, jsonContent, 'utf8');
      }
      catch(err)
      {
        console.log(err);
      }
    });
  })
  req.end();
  req.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

/*
Refresh all json files that are used in the API
*/
function refreshGDocs() {
  _.each(Object.keys(refreshIntervals), function(key){
    clearInterval(refreshIntervals[key]);
  });

  _.each(constants.GDOCS, function(gdoc) {
    console.log("Refreshing " + gdoc.key);
    // update gdoc on init
    updateJsonFile(gdoc.gid);
    // call for update periodically
    refreshIntervals[gdoc.key] = setInterval( function() {
      console.log('Calling for update ' + gdoc.key );
      updateJsonFile(gdoc.gid);
    }, gdoc.ttl);
  });
}

module.exports.refreshGDocs = refreshGDocs;
