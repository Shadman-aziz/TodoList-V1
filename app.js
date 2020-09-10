//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

app.get("/", function(req,res){

  // var currentDay = today.getDay();
  // var day = "";
  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend"
  //
  // }
  // else {
  //   day = "Weekday"

  let day = date.getDate();


  res.render("list", {kindOfDay: day, newListItems: items});
});
app.post("/",function(req,res){
  var item = req.body.newItem;
  if (item != ""){
  items.push(item);
  }
  res.redirect("/");
})
app.listen(3000,function(){
  console.log("Server started on port 3000");
})
