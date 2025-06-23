// Initialize tasks array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');

// Display tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    updateCounter();
});

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({
            id: Date.now(),
            text: taskText,
            completed: false
        });
        saveTasks();
        taskInput.value = '';
        renderTasks();
        updateCounter();
    }
}
