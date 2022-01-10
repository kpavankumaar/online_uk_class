var a = 10;
var b = a;

function one(){
    console.log(a); // undefined
    a = 30;
    console.log(a);// 30
}

one();