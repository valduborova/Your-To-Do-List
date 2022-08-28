const todosNode = document.querySelector(".js-todos");
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
let todos = [];
let done = [];

function addToDo (text) {
    const ToDo = {
        text,
        done: false,
        id: `${Math.random()}`
    };
    todos.push(ToDo);
}

function deleteToDo (id) {
    todos.forEach(ToDo => {
        if (ToDo.id === id) {
        ToDo.done = true;
        }
    }
    ) 
}

function render() {
    console.log(todos);
    let html = '';
    
    todos.forEach(todo => {
        if (todo.done) {
            html += `
            <div>
                ${todo.text.strike()} 
            </div>
        `;
;
        } else {
        html += `
            <div>
                ${todo.text} 
                <button data-id=${todo.id}>I Did It!</button>
            </div>
        `;
        }
    })
    done.forEach(todo => {
        if (todo) {
        html += `
            <div>
                ${todo.text.strike()} 
            </div>
        `;
        }
    })

    todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () => { 
    const text = inputNode.value;
    addToDo(text);
    render();
});
render();

todosNode.addEventListener('click', (event) => { 
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;
    deleteToDo(id);
    

    render();
});

function addDone (text) {
    done.push(text);
}

render();