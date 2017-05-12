var express = require('express');
var pdfDisplayRouter = express.Router()
var fs = require("fs");
var filename = "file_1.pdf";

pdfDisplayRouter.get('/getPDF/',function (req, res){
  try{
      var stream = fs.createReadStream('././src/routers/files/'+filename);
      // filename = encodeURIComponent(filename);
      res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
      res.setHeader('Content-type', 'application/pdf');
      stream.pipe(res);
    }catch(ex){
      console.log("Error found! "+ex);
    }
});

module.exports = pdfDisplayRouter;
