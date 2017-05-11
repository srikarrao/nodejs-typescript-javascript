
const myObject = {};

function MyError() {
  Error.captureStackTrace(myObject);
}

var invalidDivison = function(err,input){

  y = 10 / a;
if (err) {
  console.log("Inside err block!!*******************");
    MyError.stack;
  }

console.log("input is "+input);
 console.log("Value is "+y);
}


invalidDivison(null,0);
