function main(req,callback){
  callback(req);
  console.log("Callback execution completed!");
};

main(0,function(i){
  for(var x = i; x <100;x++){
    console.log(x);
  }
}
);
