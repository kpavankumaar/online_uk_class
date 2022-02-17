
for(var i = 0 ; i < 10 ; i++){
    console.log(i)
}
console.log(i);

setTimeout(function(){
    console.log("settimeout" ,i)
},0);

var test = setInterval(function() {
    console.log( "set interval",i)
}, 3000);

clearInterval(test);