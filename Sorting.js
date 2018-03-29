//Filters the first name and last name from JSON and removes duplicate.
//@hazelWolf
var filterData = require("./Filter");
var _ = require('lodash');
//####Sorting Data##//
var sort = function(data) {
  var FIRST_NAME = filterData(data, "FIRST_NAME"); //Getting only the first names
  var LAST_NAME = filterData(data, "LAST_NAME");  //Getting only the last names
  var firstName = _.uniq(FIRST_NAME); //Removing duplicates
  var lastName = _.uniq(LAST_NAME);   
  console.log(firstName.length + " unique FIRST_NAMES");
  console.log(lastName.length + " unique LAST_NAMES");
  return {
      FIRST_NAME : firstName,
      LAST_NAME : lastName
  }
};

module.exports = sort;

