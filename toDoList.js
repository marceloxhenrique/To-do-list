let input = document.querySelector("#inputTask");
let newTaskSection = document.querySelector(".newTaskSection");       
let counter = 0;

    
function buttonAddTask() {
    counter ++;
    let newInput = input.value;
    newTaskSection.innerHTML +=

    `<div id="${counter}">
        <div class="newTask">
            <div class="newTaskTexto">
                <span class="material-symbols-outlined  unchecked">
                    check
                </span>
                ${newInput}
                ${counter}
            </div>
            <button class="newTaskButton" onclick="deleteTask(${counter})">
                <span class="material-symbols-outlined trash">
                    delete
                </span>
            Deletar</button>
        </div>
    </div>`
    
    input.focus();
    input.value = "";
}

function deleteTask(id) {
    document.getElementById(id).remove()
}

input.addEventListener("keyup", function (event) {
    if(event.keyCode === 13){
        event.preventDefault();
        buttonAddTask();
    }
});


