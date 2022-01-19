console.log(arguments);
test(30);
var arguments;
function test(num, val){
    var run = 10;
    console.log("write");
    console.log(arguments);
}

console.log(arguments);
test(10, "ravi", "pavan");
console.log(run);