console.log(arguments);
// anonymousFn();
test();
var arguments;
function test(num, val){
    console.log(num);
    console.log(val);
    console.log(run);
    var run = 10;
    console.log("write");
    console.log(arguments);
    function test1(){
        console.log("data");
    }
}
var anonymousFn = function(){
    console.log("Anonymous function ");
}
anonymousFn();
console.log(arguments);
test(10, "ravi", "pavan");
// console.log(run);