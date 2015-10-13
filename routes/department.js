/*
 *Routers for department endpoint
 */

var client = require('../lib/postgres');
var express = require('express')
var router = express.Router();

router.route('/:semester/departments')
  .get(function(req,res){
  var semester_id = req.params.semester;

       client.query('SELECT * from departments where semester_id =' + semester_id,function(err,result){

        if(err) throw err;
        res.json(result.rows);
        //client.end();
       });



    });

//get departments from all semesters
router.route('/departments')
  .get(function(req,res){
    client.query('SELECT * from departments',function(err,result){
      if(err) throw err;
      res.json(result.rows);
    
    });
  });
module.exports = router;

