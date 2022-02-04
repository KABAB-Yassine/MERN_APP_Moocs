var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

var DB = async function () {
  return await MongoClient.connect(url);
}

module.exports = DB;
   