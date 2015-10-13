var express = require('express');
var router = express.Router();
var pg = require('pg');
var _ = require('underscore');
var conString = 'postgres://nhatdao: @localhost:5432/nhatdao';
var client = new pg.Client(conString);

//classes endpoint
router.route('/classes')
  .get(function(req,res){
    var results = [];
    
    client.connect(function(err) {
      if(err) {throw err;}

      client.query('SELECT course_title FROM classes', function(err, result) {
      if(err) throw err;
      res.json(result.rows);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});
});

/**
/* Semester endpoints
/* get list of current active semesters
*/
router.route('/semesters')
  .get(function(req,res){

  client.connect(function(err){
    if(err) throw err;

    client.query('SELECT * FROM semesters',function(err,result){

      if(err){throw err; }

      res.json(result.rows);
      client.end();
    });
  });

});


/**
* Departments endpoints
* Get list of departments in a selected semester
*/

router.route('/:semester/departments')
  .get(function(req,res){
  var semester_id = req.params.semester;

  client.connect(function(err){
    
    if(err) { throw err;}
    
    client.query('SELECT * from departments where semester_id =' + semester_id,function(err,result){
        
        if(err) throw err;

        res.json(result.rows);
        client.end();  
    });
  });



});

module.exports = router;
//prefix /api in the link

//app.use('/api',router);

//app.listen(port);
//console.log("Listen on port" + port);
