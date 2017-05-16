var Collections = require('typescript-collections');
var idSet = new Collections.Set();

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

var getRandomNumber = function(err,reqTime){
  try{
    var bookingId = formUniqueId(reqTime)
    idSet.add(bookingId);
    return bookingId;
  }catch(ex){
    console.error('Exception occurred generating random number!');
  }
}

var formUniqueId = function(reqTime){
  var serverId =  randomInt(1,5);
  return serverId+""+reqTime+""+1;
}

module.exports = {getRandomNumber};
