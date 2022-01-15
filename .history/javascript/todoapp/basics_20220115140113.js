// add task action -> 6 elements to be created are div, input type checkbox, lable, input type text, edit-button, delete-button
// completionstatusfn -> move the complete task to opposite section ie from completed section to incomplete section, or from incomplete section to complete section 
// Edit -> requires to display the input type text and hide the label element, 
//      -> after editing hide input text and display label element
// Delete ->  delete the whole task


var addTaskButton = document.getElementById("add");
var checkboxes = document.getElementsByTagName("input[type=checkbox]")

addTaskButton.onclick = addTaskFunction;
function addTaskFunction(){
    console.log("add task");
}
function complestionStatusfn(){

}
function editTask(){

}
function deleteTask(){

}