var obj = {}
function multiply(a){
    var c = 50;
    return function(b){
        console.log(a * b);
    }

}

var multipleOf10 = multiply(10);
multipleOf10(5);
multipleOf10(2);
multipleOf10(2);
