// execution command: npm run dev
var statusRouter = require('./routers/statusRouter');
var bookingRouter = require('./routers/bookingRouter');
var pdfDisplayRouter = require('./routers/pdfDisplayRouter');
var express = require('express');
var app = express();
var logger = require('./utils/logging.js');
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
app.use(logger.logMessage());
app.use('/table-booking', bookingRouter);
app.use('/booking-details', statusRouter);
app.use('/pdf-details', pdfDisplayRouter);

app.listen(3000);
