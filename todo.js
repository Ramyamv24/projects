function addTask(){
var taskInput=document.getElementById("taskInput");
var taskitem=taskInput.value.trim();
if(taskitem==''){
    alert("Please enter the task");
    return;
}


var taskList=document.querySelector(".taskList");
var listtask=document.createElement("li");
var taskspan=document.createElement("span");
taskspan.textContent=taskitem;

var completeButton=document.createElement("button");
completeButton.innerHTML='<h5>✔<h5>';
completeButton.addEventListener("click",function(){
        taskspan.classList.toggle('completed');

})

var removeButton=document.createElement("button");
removeButton.className="remove-btn";
removeButton.textContent="Remove";
removeButton.addEventListener("click",function(){
    taskList.removeChild(listtask);
})

listtask.appendChild(completeButton);
listtask.appendChild(taskspan);
listtask.appendChild(removeButton);

taskList.appendChild(listtask);

taskInput.value='';
}
