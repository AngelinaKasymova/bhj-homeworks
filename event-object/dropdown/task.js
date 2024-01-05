const mainButton = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__link');


mainButton.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
});

items.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        mainButton.textContent = item.textContent;
        list.classList.remove('dropdown__list_active');
    });
});

