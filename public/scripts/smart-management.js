document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const eventTitleInput = document.getElementById('eventTitleInput');
    const eventDateInput = document.getElementById('eventDateInput');
    const eventList = document.getElementById('eventList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" onchange="toggleTask(this)">
                <span>${taskText}</span>
                <button onclick="deleteTask(this)" class="text-red-500 ml-2">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function toggleTask(checkbox) {
        const taskText = checkbox.nextElementSibling;
        taskText.classList.toggle('line-through');
    }

    function deleteTask(button) {
        button.parentElement.remove();
    }

    function addEvent() {
        const eventTitle = eventTitleInput.value.trim();
        const eventDate = eventDateInput.value;
        if (eventTitle && eventDate) {
            const listItem = document.createElement('li');
            listItem.textContent = `${eventTitle} - ${eventDate}`;
            eventList.appendChild(listItem);
            eventTitleInput.value = '';
            eventDateInput.value = '';
        }
    }

    window.addTask = addTask;
    window.toggleTask = toggleTask;
    window.deleteTask = deleteTask;
    window.addEvent = addEvent;
});
