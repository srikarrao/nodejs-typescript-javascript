module.exports = function(options) {
  return function(req, res, next) {
      req.requestTime = Date.now();
      var jsonBody = JSON.stringify(req.body);
    if(!jsonBody ||2 === jsonBody.length){
        console.log("Request "+req.url+" recieve at: "+req.requestTime);
      }
    else{
        console.log("JSON Body is: "+jsonBody+" recieved at: "+req.requestTime);
      }
    next();
  }
};
