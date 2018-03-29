//Places all the values in lex enumeration values array format and returns the array. Can be used to assign same keys to all elements of array.
//@Bhomitb
var enumVals = function(array,key){
    var enumerationValues =[]
    for(el of array){
        enumerationValues.push({key : el})
    }
    return enumerationValues;
}
module.exports = enumVals;