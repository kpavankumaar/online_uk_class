var obj = {}
function multiply(a){
    return function(b){
        console.log(a * b);
    }

}

var multipleOf10 = multiply(10);
multipleOf10(5);
multipleOf10(2);
multipleOf10(2);
