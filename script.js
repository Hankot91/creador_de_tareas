import checkContent from "./components/checkContent.js";
import { deleteContent, deleteCancel } from "./components/deleteContent.js";
import editContent from "./components/editContent.js";

const saveTasks = () => {
    const taskList = document.querySelector("[data-task-list]");
    const tasks = [];
    taskList.querySelectorAll(".card").forEach((card) => {
        tasks.push({
            text:
                card.querySelector(".task")?.textContent ||
                card.querySelector(".editInput")?.value ||
                "",
            completed: card.classList.contains("green"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const buildTask = (text, completed = false) => {
    const taskList = document.querySelector("[data-task-list]");
    const listItem = document.createElement("li");
    listItem.classList.add("card");
    if (completed) listItem.classList.add("green");

    const div = document.createElement("div");
    div.classList.add("contentTask");
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task");
    taskSpan.textContent = text;
    div.appendChild(taskSpan);

    const div2 = document.createElement("div");
    div2.classList.add("actionIcons");
    div2.appendChild(editContent(saveTasks));
    div2.appendChild(deleteContent(saveTasks));

    const check = checkContent(saveTasks);
    if (completed) {
        check.classList.replace("far", "fas");
        check.classList.add("completeIcon");
    }

    listItem.appendChild(check);
    listItem.appendChild(div);
    listItem.appendChild(div2);
    taskList.appendChild(listItem);
};

const loadTasks = () => {
    const saved = localStorage.getItem("tasks");
    if (!saved) return;
    JSON.parse(saved).forEach((task) => {
        buildTask(task.text, task.completed);
    });
};

(() => {
    const buttonForm = document.querySelector("[data-form-btn]");

    const createTask = (event) => {
        event.preventDefault();
        const textForm = document.querySelector("[data-form-text]");
        if (textForm.value.trim() !== "") {
            buildTask(textForm.value.trim());
            saveTasks();
        }
        textForm.value = "";
    };

    deleteCancel();
    buttonForm.addEventListener("click", createTask);
    loadTasks();
})();