//Function to compare to arrays for similar items.
//@hazelWolf
var _ = require('lodash')
var compare = function(array1, array2, callback){
    var arr = []
    for(var e1 of array1){
        for(var e2 of array2){
            if(e1 === e2){
                arr.push(e1);
            }
        }
    }
    console.log(arr.length + " number of similar names found in first and last. Removing the similarites from last names.....");
    console.log(array2.length)
    array2 = _.difference(array2,arr) //removes duplicates from last name. ** Need to find a workthrough.
    console.log(array2.length + " number of last names left.") 
}

module.exports = compare;