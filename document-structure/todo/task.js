const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = input.value.trim();
    if (task) {
        createTask(task);
        input.value = '';
    }
});

function createTask(title) {
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${title}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);

    const removeLink = tasksList.querySelector('.task__remove');
    removeLink.addEventListener('click', () => {
        tasksList.removeChild(removeLink.closest('.task'));
    });
}