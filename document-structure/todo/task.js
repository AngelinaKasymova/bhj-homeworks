const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    const task = input.value;
    if(task) {
        createTask(task);
        input.value = '';
    }
})

function createTask(task) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    tasksList.appendChild(taskDiv);

    const taskTitleDiv = document.createElement('div');
    taskTitleDiv.classList.add('task__title');
    taskTitleDiv.textContent = task;
    taskDiv.appendChild(taskTitleDiv);

    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.classList.add('task__remove');
    removeLink.innerHTML = '&times;';
    taskDiv.appendChild(removeLink);

    removeLink.addEventListener('click', () => {
        tasksList.removeChild(taskDiv);
    });
}