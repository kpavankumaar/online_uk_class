var displayElement = document.getElementById("data");
ajaxCall("https://jsonplaceholder.typicode.com/todos", function(data){
     console.log("first api call",data);
});
ajaxCall("https://jsonplaceholder.typicode.com/albums", function(data){
    console.log("second api call ",data);
});