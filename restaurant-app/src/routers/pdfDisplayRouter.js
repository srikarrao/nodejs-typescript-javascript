var express = require('express');
var pdfDisplayRouter = express.Router()
var fs = require("fs");
var filename = "file_1.pdf";

pdfDisplayRouter.get('/getPDF/',function (req, res){
  console.log("Inside display pdf!");
  try{

var stream = fs.createReadStream('/files');
filename = encodeURIComponent(filename);
res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
res.setHeader('Content-type', 'application/pdf');
stream.pipe(res);
});

module.exports = pdfDisplayRouter;
