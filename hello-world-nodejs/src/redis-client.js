var redis = require('redis');
var client = redis.createClient();

// var client = redis.createClient(6739, '127.0.0.1');

client.on('connect', function() {
    console.log('connected');
});

client.set('framework', 'AngularJS', function(err, reply) {
  console.log(reply);
});

client.get('framework', function(err, reply) {
    console.log(reply);
});
