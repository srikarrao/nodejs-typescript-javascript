'use strict';
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const errorDir = './logs/error';
const dataDir = './logs/data';

// Create the log directory if it does not exist
if (!fs.existsSync(errorDir)) {
    fs.mkdirSync(errorDir);
}

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}
const tsFormat = () => (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
  transports: [
    /**new (winston.transports.File)({
      name: 'text',
      filename: `${errorDir}/results.log`,
      timestamp: tsFormat,
      level: 'debug'
    }),**/
    new (winston.transports.File)({
      name: 'text',
      filename: `${dataDir}/info.log`,
      timestamp: tsFormat,
      level: 'error'
    })
  ]
});

// logging levels {error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5}

var logError = function(err, msg){
  if(err){
    console.error('Exception occurred logging in logError');
  }
  logger.error('Exception occurred '+msg);
}

var logWarn = function(err, msg){
  if(err){
    console.error('Exception occurred logging in logWarn');
  }
  logger.warn(msg);
}

var logInfo = function(err, msg){
  if(err){
    console.error('Exception occurred logging in logInfo');
  }
  logger.error('Error '+msg);
  logger.debug('Debug '+msg);
  logger.info(msg);
}

var logDebug = function(err, msg){
  if(err){
    console.error('Exception occurred logging in logDebug');
  }
  logger.debug(msg);
}

module.exports={logError,logWarn,logInfo,logDebug};
