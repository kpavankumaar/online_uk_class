console.log("before block code ");
var user = "pavan";
validate();
function validate(){
    if(user === "ravi"){
        console.log("inside block code ");
        
    }
}
user = "ravi";  
validate()
console.log("after block code ");