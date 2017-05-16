var express = require('express');
var bookingRouter = express.Router()
var bookingBO = require('../business/bookingBO');

bookingRouter.post('/makeBooking',function (req, res) {
  id = bookingBO.bookTable(req);
  console.log('Message:Booking successfully completed!');
  res.setHeader('Content-Type', 'application/json');
  res.send({'Message':'Booking successfully completed! Track booking using '+id})
});

module.exports = bookingRouter;
