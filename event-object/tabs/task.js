const tabs = document.querySelectorAll('.tab');
const texts = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('tab_active'));
        tab.classList.add('tab_active');
        texts.forEach(text => text.classList.remove('tab__content_active'));
        texts[index].classList.add('tab__content_active');
    })
});