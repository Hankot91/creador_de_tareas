const deleteContent = (onDelete) => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.setAttribute('title', 'Eliminar');

    i.addEventListener('click', (event) => {
        const element = event.target;
        const task = element.parentElement.parentElement;
        const removeConfirm = document.querySelector('[data-popup]');

        removeConfirm.style.display = "block";
        document.querySelector('.mainCard').classList.add('popup-active');
        confirmDelete(task, onDelete);
    });
    
    return i;
}

const confirmDelete = (element, onDelete) => {
    const oldButton = document.querySelector('[data-form-confirm]');
    const newButton = oldButton.cloneNode(true);
    oldButton.parentNode.replaceChild(newButton, oldButton);

    newButton.addEventListener('click', () => {
        const removeConfirm = document.querySelector('[data-popup]');
        removeConfirm.style.display = "none";
        document.querySelector('.mainCard').classList.remove('popup-active');
        element.remove();
        if (onDelete) onDelete();
    });
}

const deleteCancel = ()=>{
    const cancelButton = document.querySelector('[data-form-cancel]');
    cancelButton.addEventListener('click', () =>{
        const removeConfirm = document.querySelector('[data-popup]');
        document.querySelector('.mainCard').classList.remove('popup-active');
        removeConfirm.style.display = "none";

    });
}

export { deleteContent, deleteCancel };

