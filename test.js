var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8080");


describe("/classes", function(){
   it("should return json data", function(done){
  
  //calling classes
    server
    .get('/api/classes')
    .expect(200)
    .expect("Content-type",/json/)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
});

describe("/departments",function(){

it("should return json data", function(done){
  
  //calling classes
    server
    .get('/api/departments')
    .expect(200)
    .expect("Content-type",/json/)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });


  });


describe("/semesters",function(){

it("should return json data", function(done){
  
  server
  .get('/api/semesters')
  .expect(200)
  .expect("Content-type",/json/)
  .end(function(err,res){
    res.status.should.equal(200);
    done();
  });

});

});
