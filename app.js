var express = require('express');
var app = express();
var router = express.Router();
var pg = require('pg');
var _ = require('underscore');
var conString = 'postgres://nhatdao: @localhost:5432/nhatdao';
//app listens on port 8080
var port = process.env.PORT || 8080;
var client = new pg.Client(conString);

//classes endpoint
router.get('/classes',function(req,res){
  var results = [];  
  //Select query data    
  client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT course_title FROM classes', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }

    return res.send(result.rows);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});
});

/**
/* Semester endpoints
/* get list of current active semesters
*/
router.get('/semesters',function(req,res){

  client.connect(function(err){
    if(err){
      return console.log('could not connect to postgres', err); 
    }

    client.query('SELECT * FROM semesters',function(err,result){

      if(err){return console.log('error running query',err); }

      return res.send(result.rows);
      client.end();
    });
  });

});


/**
* Departments endpoints
* Get list of departments in a selected semester
*/

router.get('/:semester/departments',function(req,res){
  var semester_id = req.params.semester;
  console.log(semester_id);
  client.connect(function(err){
    if(err){return console.log('could not connect to postgres', err);}
    var query_s = 'SELECT * from departments where semester_id =' + semester_id;
    console.log(query_s);
    client.query('SELECT * from departments where semester_id =' + semester_id,function(err,result){
        if(err){
          return console.log('error running query',err); }
        console.log(result);
        return res.send(result.rows);
        client.end();  
    });
  });



});

//prefix /api in the link

app.use('/api',router);

app.listen(port);
console.log("Listen on port" + port);
