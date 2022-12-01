let input = document.querySelector("#inputNewTask")
let newtaskArea = document.querySelector(".newtask-area") 
let counter = 0;
//Adding a new task
function addNewTask() {

    let newInput = input.value;
    if(newInput.length > 0){
        counter ++;
        let task = document.createElement("div")
        task.innerHTML +=
        `
            <div id="${counter}" class="newTask unchecked" >
                <div class="icone-area">
                    <span class="material-symbols-outlined">
                        check
                    </span>
                </div>
                <div class="text-area" onclick="check(${counter})">
                    ${newInput}
                </div>
                <div class="button-area">
                    <button id="buttonDelete" onclick="deleteTask(${counter})">Delete</button>
                </div>
            </div>
        `    

        newtaskArea.appendChild(task)

        //cleaning and fucousing in the input
        input.value = "";
        input.focus()
    } else {
        alert("ENTER A NEW TASK")
    }
    

}

input.addEventListener("keyup", function (event){
    if(event.keyCode == 13){
        event.preventDefault();
        addNewTask();
        
    }
})

function deleteTask(id) {
    let item = document.getElementById(id)
    item.remove()
}

function check(id) {
    let check = document.getElementById(id)
    if(check.classList.contains("unchecked")) {
        check.classList.replace("unchecked", "checked");
        newtaskArea.parentNode.appendChild(check);
    } else {
        check.classList.replace("checked", "unchecked")
        newtaskArea.appendChild(check);
    }
}