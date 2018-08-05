var express=require("express");
var app=express();
var formidable =require("formidable");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo");
var Todo = require("./models/Todo.js");

app.use(express.static("www"));

//查
app.get("/todos" , function(req,res){
  Todo.find({},function(err,results){
    res.json({"results" : results});
  });
});
//增
app.post("/todos" , function(req,res){
     var form = new formidable.IncomingForm();
     form.parse(req,function(err,fileds){
       Todo.create({
         "title":fileds.title,
         "done":false
       },function(err,todo){
         res.json({"result":todo});
     });
     });
});

//删
app.delete("/todos/:id",function(req,res){
  var _id=req.params.id;
  Todo.remove({"_id":_id},function(err){
    res.json({"result":1});
  });
});

//改
app.post("/todos/:id",function(req,res){
   var _id=req.params.id;
   var form = new formidable.IncomingForm();
   form.parse(req,function(err,fileds){
     var k=fileds.k;
     var v=fileds.v;
     Todo.update({"_id":_id},{"$set":{[k]:v}},function(err){
       res.json({"result":1});
     });
   });
});
app.listen(3000);
