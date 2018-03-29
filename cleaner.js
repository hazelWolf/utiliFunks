//Removes special characters and numbers from strings in array.
//@hazelWolf
function cleaner(someArray) {
  for (var e of someArray) {
    e.replace(/[^\w\s]/gi, " ");
    e.replace(/[0-9]/g, "");
  }
  console.log("Data is cleansed!");
  return someArray;
}

module.exports = cleaner;
