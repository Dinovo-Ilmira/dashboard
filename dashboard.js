document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.querySelector('.task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete-btn">Удалить</button>
        `;
        taskList.appendChild(task);

        const deleteBtn = task.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            task.remove();
        });
    }
});
