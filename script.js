//Const, lets, and var
const form = document.getElementById('todoForm')
const todoInput = document.getElementById('todoInput')

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

function addTask(values) {
    let newTask = values

    let list = newTask.appendChild(document.createElement('li'));
    document.getElementById('html').appendChild(list);
}


console.log(todos)

