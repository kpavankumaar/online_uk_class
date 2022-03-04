var displayElement = document.getElementById("data");
ajaxCall("https://jsonplaceholder.typicode.com/todos", function(data){
     console.log(data);
});
ajaxCall("https://jsonplaceholder.typicode.com/albums", function(data){
    console.log(data);
});