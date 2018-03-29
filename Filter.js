//Data filtering With lodash for specific 
var _ =require('lodash');
function filterData(data, filter) {
    return _.map(data, filter);
    console.log("lodash");
  }

  module.exports = filterData;