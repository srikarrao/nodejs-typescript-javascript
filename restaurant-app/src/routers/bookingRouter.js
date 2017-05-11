var express = require('express');
var bookingRouter = express.Router()
var bookingBO = require('../business/bookingBO');

bookingRouter.post('/makeBooking',function (req, res) {
  bookingBO.bookTable(req);
  console.log("Name in json is: "+req.body.name);
  res.setHeader('Content-Type', 'application/json');
  res.send({'Message':'Booking successfully completed!'})
});

module.exports = bookingRouter;
