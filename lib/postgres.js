'use strict'

var pg = require('pg');
var conString = 'postgres://nhatdao: @localhost:5432/nhatdao';
var client = new pg.Client(conString);

client.connect(function(err){
    if(err) throw err;
});

module.exports = client;

