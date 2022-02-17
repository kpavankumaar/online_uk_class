
for(var i = 0 ; i < 10 ; i++){
    console.log(i)
}
console.log(i);

setTimeout(function(){
    clearInterval(test);
},10000);

var test = setInterval(function() {
    console.log( "set interval")
}, 3000);

clearInterval(test);
