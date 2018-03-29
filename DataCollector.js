//Takes excel xls and converts it to JSON
//@hazelWolf
var xls2JSON = function (callback) {
  node_xj = require("xls-to-json");
  node_xj({
      input: process.argv[2], // input xls
      output: null // output json
    },
    function (err, result) {
      if (err) {
        callback(null)
        console.log(err);
      } else {
        console.log("completed!")
       callback(result);
      }
    }
  );
};

module.exports = xls2JSON;