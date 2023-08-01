const deleteContent = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.setAttribute('title', 'Eliminar');

    i.addEventListener('click', (event) => {
        const element = event.target;
        const task = element.parentElement.parentElement;
        const removeConfirm = document.querySelector('[data-popup]');

        removeConfirm.style.display = "block";
        document.querySelector('.mainCard').classList.add('popup-active');
        confirmDelete(task);
    });
    
    return i;
}

const confirmDelete = (element) =>{
    const confrimButton = document.querySelector('[data-form-confirm]');
    confrimButton.addEventListener('click', () =>{
        const removeConfirm = document.querySelector('[data-popup]');
        removeConfirm.style.display = "none";
        document.querySelector('.mainCard').classList.remove('popup-active');
        element.remove();
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

