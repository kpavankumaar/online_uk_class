console.log(arguments);
// anonymousFn();
test();
var arguments;
function test(num, val){
    var run = 10;
    console.log("write");
    console.log(arguments);
}
var anonymousFn = function(){
    console.log("Anonymous function ");
}
anonymousFn();
console.log(arguments);
test(10, "ravi", "pavan");
// console.log(run);