console.log("before block code ");
var user = "pavan";
validate();
function validate(){
    if(user === "ravi"){
        console.log("inside block code ");
        
    }else{
        console.log("failed");
    }
}
user = "ravi";  
validate();
console.log("after block code ");
if(10){
    console.log("data");
}
var num = 0;

while(num <= 10){
    num = num + 1;
    console.log("repetative value ", num );
}
