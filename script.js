
import checkContent from "./components/checkContent.js";
import { deleteContent, deleteCancel } from './components/deleteContent.js';
import editContent from "./components/editContent.js";

(() => {


    const buttonForm = document.querySelector('[data-form-btn]');

    const createTask = (event) => {
        event.preventDefault();
        const textForm = document.querySelector('[data-form-text]');
        const taskList = document.querySelector('[data-task-list]');

        if (textForm.value.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('card');


            const div = document.createElement('div');
            div.classList.add('contentTask');
            const taskSpan = document.createElement('span');
            taskSpan.classList.add('task');
            taskSpan.textContent = textForm.value;
            div.appendChild(taskSpan);
            
            const div2 = document.createElement('div');
            div2.classList.add('actionIcons')
            div2.appendChild(editContent());
            div2.appendChild(deleteContent());

            listItem.appendChild(checkContent());
            listItem.appendChild(div);
            listItem.appendChild(div2);

            taskList.appendChild(listItem);
        }

        textForm.value = '';
    };


    deleteCancel();
    buttonForm.addEventListener('click', createTask);

})();