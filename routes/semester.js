var client = require('../lib/postgres');
var express = require('express');
var router = express.Router();

router.route('/semesters')
  .get(function(req,res){


    client.query('SELECT * FROM semesters',function(err,result){

      if(err) res.status(400).json(err);

      res.status(200).json(result.rows);
      
      //client.end();
    });

});

module.exports = router;
