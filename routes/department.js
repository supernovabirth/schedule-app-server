/*
 *Routers for department endpoint
 */

var client = require('../lib/postgres');
var express = require('express')
var router = express.Router();


router.route('/:semester/departments')
 .get(function(req,res){
 
   var query = "SELECT d.id, d.name from departments as d inner join semesters as s on s.id = d.semester_id where s.code =" + req.params.semester;
   client.query(query,function(err,result){
     if(err) res.status(400).json(err);
     res.status(200).json(result.rows);
 
   });
 });


//get departments from all semesters
 router.route('/departments')
  .get(function(req,res){
    client.query('SELECT * from departments',function(err,result){
      if(err) res.status(400).json(err);
      res.status(200).json(result.rows);
    
    });
  });


 module.exports = router;

