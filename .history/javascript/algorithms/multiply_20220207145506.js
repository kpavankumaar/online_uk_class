function multiply(a,b){
    return function(){
        console.log(a * b);
    }

}

var multipleOf10 = multiply(10);
multipleOf10(5)