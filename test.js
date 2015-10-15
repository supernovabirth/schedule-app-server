var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8080");


describe("GET /api/classes", function(){
 it("should return all classes from a course", function(done){
  
  //calling classes
    server
    .get('/api/2162/CSE 1310/classes')
    .expect(200)
    .expect("Content-type",/json/)
    .end(function(err,res){
      res.status.should.equal(200);
      should.not.exist(err);
      should.notEqual(res.text,null);
      done();
    });
  });
});
describe("GET /api/:semester_id/:department/courses", function(){
it("should return empty array if wrong parameter", function(done){
  //calling classes
    server
    .get('/api/1/2/courses')
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      should.not.exist(err);
      should(res.body == []).be.ok;
      done();
    });
  });



  it("should return all courses from one department from a semester", function(done){
  
  //calling classes
    server
    .get('/api/2126/CSE/courses')
    .expect(200)
    .expect("Content-type",/json/)
    .end(function(err,res){
      res.status.should.equal(200);
      should.not.exist(err);
      should.notEqual(res.text,null);
      done();
    });
  });
});



describe("GET /api/:semester_id/departments",function(){
it("should return empty array if wrong parameter", function(done){
  //calling classes
    server
    .get('/api/1/departments')
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      should.not.exist(err);
      should(res.body == []).be.ok;
      done();
    });
  });



  it("should return a list of departments from a semester", function(done){
  
  //calling classes
    server
    .get('/api/2126/departments')
    .expect(200)
    .expect("Content-type",/json/)
    .end(function(err,res){
      res.status.should.equal(200);
      should.not.exist(err);
      should.notEqual(res,null);
      done();
    });
  });


  });


describe("GET /api/semesters",function(){

it("should return list of available semesters", function(done){
  
  server
  .get('/api/semesters')
  .expect(200)
  .expect("Content-type",/json/)
  .end(function(err,res){
    res.status.should.equal(200);
    should.not.exist(err);
    should.notEqual(res.text,null);
    done();
  });

});

});



