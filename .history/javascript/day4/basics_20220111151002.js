// DOM and todo app
// var 3name   -> not acceptable 
var first_name  = "srk"; // acceptable
// var first1-last1; 
var obj = {
    "first name"  : "test",
    age:25
}
obj["first name"]
obj.age;

var test = function (){}
test();

var ele = document.getElementsByTagName("div")[0];
ele.onclick = function(){
    console.log("data");
    ele.style.backgroundColor = "red";
}
var newElement = document.getElementById("banner");