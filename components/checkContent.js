const checkContent = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.setAttribute('title', 'Completada');

    i.addEventListener('click', (event) => {
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
        const card = element.closest('.card');
        card.classList.toggle('green');
    });

    return i;
}


export default checkContent;