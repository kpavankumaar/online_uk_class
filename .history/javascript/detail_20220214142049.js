var createObject = function(){
    console.log( "this is new");
}
console.log(createObject);
for(var i = 0 ; i < 10 ; i++){
}
console.log(i);
function callBackFn(test){
    console.log("data", test);
}
(function(cb){
    var a = 30;
    console.log(a);
})();// iife
// test();
