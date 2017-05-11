var express = require('express');
var statusRouter = express.Router()

statusRouter.get('/getBookingDetails/:bookingNumber',function (req, res){
    res.send("Booking Number: "+req.params.bookingNumber+" --> Booking at 4 PM in the evening!");
});

module.exports = statusRouter;
