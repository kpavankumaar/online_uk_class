
for(var i = 0 ; i < 10 ; i++){
    console.log(i)
}
console.log(i);

setTimeout(function(){
    clearInterval(test);
},10000);
var i = 0;
var test = setInterval(function() {
    console.log( "set interval", i+=3)
}, 3000);


