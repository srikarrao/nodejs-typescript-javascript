var statusRouter = require('./statusRouter');
var bookingRouter = require('./bookingRouter');
var express = require('express');
var app = express();
var logger = require('./logging.js');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var session = require('cookie-session');
var expiryDate = new Date(Date.now() + 60 * 60 * 1000);

app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'example.com',
    path: 'foo/bar',
    expires: expiryDate
  }
}));
app.use(helmet());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger());
app.use('/table-booking', bookingRouter);
app.use('/booking-details', statusRouter);

// app.listen(3000);

exports.appServer = Server;
