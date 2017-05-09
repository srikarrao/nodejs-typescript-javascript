var express = require('express');
var bookingRouter = express.Router()

bookingRouter.post('/makeBooking',function (req, res) {
    console.log("Name in json is: "+req.body.name);
    console.log("Contact in json is: "+req.body.contact);
    res.setHeader('Content-Type', 'application/json');
    res.send({'Message':'Booking successfully completed!'})
});

module.exports = bookingRouter;
