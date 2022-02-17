
for(var i = 0 ; i < 10 ; i++){
    console.log(i)
}
console.log(i);

setTimeout(function(){
    console.log("settimeout" ,i)
},5000);

setInterval(function() {
    console.log( "set interval",i)
}, 3000);
