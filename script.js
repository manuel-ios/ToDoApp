let taskInput = document.getElementById("new-task")
let addButton = document.getElementById("add-task")
let taskList = document.getElementById("task-list")

addButton.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("Estoy dentro de la funcion")
    if(taskInput.value == "") return
    let task = document.createElement("li")
    task.innerHTML = `<span>${taskInput.value}</span>`

    // creating th delete button
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML  = "Delete"
    deleteBtn.classList.add("delete-task")
    task.appendChild(deleteBtn)

    taskList.prepend(task)
    taskInput.value=""

    deleteBtn.addEventListener("click",function (e){
        if(e.target.classList.contains("delete-task"))
        e.target.parentNode.remove()
    })
})