let inputTask = document.getElementById('textInput')
let inputDate = document.getElementById('dateInput')
let inputText = document.getElementById('textarea')
let button = document.querySelector('.submit')
let form = document.querySelector('#form')
let tasks = document.getElementById('tasks')
let target,check



let addTask = () => {
    // console.log('added')
    tasks.innerHTML += `<div>
                            <span class="fw-bold">${inputTask.value}</span>
                            <span class="small text-secondary">${inputDate.value}</span>
                            <p>${inputText.value}</p>
                            <span class="options">
                                <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#form"></i>
                                <i class="fas fa-trash-alt"></i>
                            </span>
                        </div>`
    
    resetForm()
}

let resetForm = function () {
    inputTask.value = ''
    inputDate.value = ''
    inputText.value = ''
    button.setAttribute("data-bs-dismiss", "modal")
    button.click();

    (() => {
        button.setAttribute("data-bs-dismiss", "")
    })();
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    tasks.previousElementSibling.innerText = 'Your Tasks:'
    if(check) updateTask(target)
    else addTask()
})



let editTask = (target)=>{
    inputTask.value=target.parentElement.parentElement.children[0].innerHTML
    inputDate.value=target.parentElement.parentElement.children[1].innerHTML
    inputText.value=target.parentElement.parentElement.children[2].innerHTML

    // delTask(target)
    // updateTask(target)
}

let updateTask = (target)=>{
    target.parentElement.parentElement.children[0].innerHTML=inputTask.value
    target.parentElement.parentElement.children[1].innerHTML=inputDate.value
    target.parentElement.parentElement.children[2].innerHTML=inputText.value
    
    check = false
    resetForm()
}

let delTask = (target)=>{
    target.closest('div').remove()
    if(!tasks.childElementCount) tasks.previousElementSibling.innerText = 'Tasks will be displayed below:'
}

tasks.addEventListener('click',function(e){
    target = e.target
    if(target.nodeName === 'I'){
        
        //edit the Task
        if(target.className === 'fas fa-edit'){
            editTask(target)
            check = true
        }
        
        //delete the Task
        else { 
            delTask(target)
        }
    }
})

