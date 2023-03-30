//Const, lets, and var
const form = document.getElementById('todoForm')


//This code only runs on browser
if(typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')
}

//List

let todos = []
//Values


form.addEventListener('submit', event => {
    event.preventDefault()

    saveTodo();
})
//Save todo

function saveTodo() {
    let todoInput = document.getElementById('todoInput')
    const todoValues = todoInput.value;
    

    let values = {
        value: todoValues,
        checked: false,
        color: '#' + Math.floor(Math.random()*16777215).toString(16),
        length: todoValues.length
    }

    todos.push(values)
    addTask()
}

//add task and adds to the list
function addTask() {
    let task = document.getElementById("list");
    task.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
      let li = document.createElement('li')
      li.innerHTML = todos[i].value;
      task.appendChild(li);
    }
}


console.log(todos)

