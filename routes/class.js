var postgres = require('../lib/postgres');
var express = require('express');
var router = express.Router();


/*
 * Get a schedule from specific class
 * Params[:semester_code,course name] 
 */
router.route('/:semester/:course/classes')
  .get(function(req,res){
      var course = req.params.course.split('-');
      course = course.join(' ');
      var query = "select schedules.* from schedules join classes on classes.id = schedules.course_id join departments on departments.id = classes.department_id join semesters on semesters.id = departments.semester_id where semesters.code =" +req.params.semester + " and classes.course_id = " + "'"+  course + "'";
      postgres.query(query, function(err, result) {
      if(err) res.status(400).json(err);

      res.status(200).json(result.rows);
  });
});


/*
 * Get all course names from a department
 *  @param[:department_name] 
 */

router.route('/:semester_id/:department/courses')
  .get(function(req,res){


    var query = "SELECT c.course_id, c.course_title from classes as c inner join departments as d on c.department_id = d.id where d.name = "+"'" + req.params.department + "'" + "and d.semester_id = " + req.params.semester_id;

    postgres.query(query,function(err,result){
      if(err) res.status(400).json(err);

      res.status(200).json(result.rows);
    });
    
  });

module.exports = router;
