var postgres = require('../lib/postgres');
var express = require('express');
var router = express.Router();


router.route('/classes')
  .get(function(req,res){
      var results = [];
      postgres.query('SELECT course_title FROM classes', function(err, result) {
      if(err) throw err;

      res.json(result.rows);
  });
});

module.exports = router;
