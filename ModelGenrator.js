//### Lex Bot  Model ##//
//@hazelWolf
//Generate custom lex slot type. 
function lexSlotTypeGen (enumVals, name, desc){
var lexsSlotModel = {
    "enumerationValues": enumVals,
    "name": name,
    "description": desc
  }
  return lexsSlotModel;
}

  module.exports = lexSlotTypeGen;