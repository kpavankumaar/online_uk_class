// add task action -> 6 elements to be created are div, input type checkbox, lable, input type text, edit-button, delete-button
// completionstatusfn -> move the complete task to opposite section ie from completed section to incomplete section, or from incomplete section to complete section 
// Edit -> requires to display the input type text and hide the label element, 
//      -> after editing hide input text and display label element
// Delete ->  delete the whole task


var addTaskButton = document.getElementById("add");
var checkBoxes = document.getElementsByName("checkbox");
var editBtns = document.getElementsByClassName("edit");
var toBeCompleted = document.getElementsByClassName("tobecompleted")[0];
var completed = document.getElementsByClassName("completed")[0];
addTaskButton.onclick = addTaskFunction;
for(var i = 0; i < checkBoxes.length; i = i + 1){
    // var name = "ravi";
    checkBoxes[i].onchange = completionStatusfn;
    editBtns[i].onclick = editTask;
}
// console.log(name);
function addTaskFunction(){
    var task= document.getElementById("task");
    // create parent div, input type checkbox, label, input type text, edit button, delete button
    var parentDiv = document.createElement("div");
    var inputCheck = document.createElement("input");
    var labelEl = document.createElement("label");
    var inputTextEdit = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");


    inputCheck.setAttribute("type","checkbox");
    labelEl.innerText = task.value;
    inputTextEdit.setAttribute("type","text");
    editButton.setAttribute("class","edit");
    deleteButton.setAttribute("class","delete");
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";
    
    parentDiv.appendChild(inputCheck);
    parentDiv.appendChild(labelEl);
    parentDiv.appendChild(inputTextEdit);
    parentDiv.appendChild(editButton);
    parentDiv.appendChild(deleteButton);
    toBeCompleted.appendChild(parentDiv);
}
function completionStatusfn(){
    var divEl = this.parentNode;
    var sectionClass = divEl.parentNode.getAttribute("class");
    if(sectionClass === "selected"){
        toBeCompleted.appendChild(divEl);
    }else{
        // 
    }
    
}

function editTask(){
    console.log("edit btn")
}
function deleteTask(){

}