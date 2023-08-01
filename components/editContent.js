const editContent = () => {
    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-pen-to-square', 'iconEdit');
    i.setAttribute('title', 'Editar');
    
    i.addEventListener('click', (event) => {
        const element = event.target;
        element.classList.toggle('completeIcon');
        
        if (element.classList.contains('completeIcon')) {
            const span = element.parentNode.previousElementSibling.querySelector('.task');
            const spanText = span.textContent;

            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('editInput');
            input.value = spanText;

            const div = span.parentNode;
            div.replaceChild(input, span);
        } else {
            const input = element.parentNode.previousElementSibling.querySelector('.editInput');
            const inputValue = input.value;

            const span = document.createElement('span');
            span.classList.add('task');
            span.textContent = inputValue;

            const div = input.parentNode;
            div.replaceChild(span, input);
        }
    });

    return i;
}


export default editContent;