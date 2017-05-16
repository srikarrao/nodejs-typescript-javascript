var random = require('../utils/randomIdGenerator');


var bookTable = function(req){
    console.log("Contact in json is: "+req.body.Contact);
    console.log(req.requestTime);
    var bookingId = random.getRandomNumber(null,req.requestTime);
    return bookingId;
};

module.exports={bookTable};
