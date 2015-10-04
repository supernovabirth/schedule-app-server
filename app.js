var express = require('express');
var app = express();
var router = express.Router();
var pg = require('pg');

var conString = 'postgres://nhatdao: @localhost:5432/nhatdao';
//app listens on port 8080
var port = process.env.PORT || 8080;

//department endpoint
router.get('/departments',function(req,res){
  var results = [];  
  //Select query data  
  var client = new pg.Client(conString);
 
  client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT course_title FROM classes', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    return res.send(result.rows[0]);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});
});

app.use('/api',router);
app.listen(port);
console.log("Listen on port" + port);
