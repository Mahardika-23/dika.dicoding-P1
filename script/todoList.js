const taskList = document.getElementById("taskList");
const completedTaskList = document.getElementById("completedTaskList");
const taskInput = document.getElementById("taskInput");
const taskCount = document.getElementById("taskCount");

let tasks = [];
let completedTasks = [];

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tolong masukkan tugas!");
        return;
    }

    tasks.push({ text: taskText, completed: false });

    renderTasks();
    taskInput.value = "";
    updateTaskCount();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        completedTasks.push(tasks[index]);
        tasks.splice(index, 1);
    }
    renderTasks();
    renderCompletedTasks();
    updateTaskCount();
}

function removeTask(index, isCompleted) {
    if (isCompleted) {
        completedTasks.splice(index, 1);
    } else {
        tasks.splice(index, 1);
    }
    renderTasks();
    renderCompletedTasks();
    updateTaskCount();
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTask(${index})">${task.completed ? 'Belum Selesai' : 'Selesai'}</button>
            <button onclick="removeTask(${index}, false)">Hapus</button>
        `;
        taskList.appendChild(li);
    });
}

function renderCompletedTasks() {
    completedTaskList.innerHTML = "";
    completedTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="completed">${task.text}</span>
            <button onclick="removeTask(${index}, true)">Hapus</button>
        `;
        completedTaskList.appendChild(li);
    });
}

function updateTaskCount() {
    const unfinishedTasks = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `Tugas yang belum selesai: ${unfinishedTasks}`;
}