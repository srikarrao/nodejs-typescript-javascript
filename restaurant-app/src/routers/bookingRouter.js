var express = require('express');
var bookingRouter = express.Router()
var bookingBO = require('../business/bookingBO');
var logger = require('../utils/logging');

bookingRouter.post('/makeBooking',function (req, res) {
try{
  id = bookingBO.bookTable(req);
  res.setHeader('Content-Type', 'application/json');
  res.send({'Message':'Booking successfully completed! Track booking using '+id})
  }catch(ex){
    logger.logError('Exception occurred in booking router: '+ex.message);
  }
});

module.exports = bookingRouter;
