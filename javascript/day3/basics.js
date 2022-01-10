// call by value
var a = 10;
var b = a;

b = 20;
console.log(a); // 10

// call by reference
var obj = {
    name:"ravi"
};

var obj1 = obj;

obj1.name = "pavan";
console.log(obj.name); // ravi