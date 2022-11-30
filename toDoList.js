let input = document.querySelector(".task")
let taskSection = document.querySelector(".taskSection")
let newTask = document.querySelector(".newTask")
let taskNumber = 0;

function add() {
    
    let newInput = input.value;

    if(newInput.length != 0){
        ++taskNumber;
        let novaTarefa =
        `<div id="${taskNumber}">
        <div class="newTask">
            <div class="newTaskText" onclick="newTaskDone()">
                <span class="material-symbols-outlined unchecked ">
                    done
                </span>
                ${newInput}
            </div>
            <button class="newTaskButton" onclick="deletar(${taskNumber})">delete</button>
        </div>
    </div>`
        





        taskSection.innerHTML += novaTarefa;

        input.value = "";
        input.focus()
    // } else {
    //     alert("Enter a new task")
        
    }

    
}



function deletar(id) {
    let task = document.getElementById(id);
    task.remove();
    
}




