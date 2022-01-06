// console.log("before block code ");
// var user = "pavan";
// validate();
// function validate(){
//     if(user === "ravi"){
//         console.log("inside block code ");
        
//     }else{
//         console.log("failed");
//     }
// }
// user = "ravi";  
// validate();
// console.log("after block code ");
// if(10){
//     console.log("data");
// }
// var num = 0;

// while(num <= 10){
//     num = num + 1;
//     console.log("repetative value ", num );
// }
// for(var i=0; i <=10; i = i+1){
//     console.log(i);
// }
// -----------------------------------------------------
// methods
var obj = {
    name: "ravi",
    age: 25,
    run: function(){
        console.log( obj.name +" can run for 10km");
    }
}
obj.run();
obj.cook = function(){
    console.log("can cook sweet");
    return "Note check the taste before you order"
}

