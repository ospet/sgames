var constants = require('./constants');
var fs = require("fs");
  
function getFileContent(filename) {
  var jsonFile = "../" + constants.JSON_DIR + "/" + filename + ".json";
  var fileContents = "";
  try
  {
    fileContents = fs.readFileSync(jsonFile, 'utf8');
  }
  catch (err)
  {
    console.log(err);
  }
  return fileContents;
}

module.exports.getFileContent = getFileContent;
