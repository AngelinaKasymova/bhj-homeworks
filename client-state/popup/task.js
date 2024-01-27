const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (getCookie('status') === 'closed'){
    modal.classList.remove('modal_active');
} else {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('status', 'closed');
    console.log(document.cookie);
})

function setCookie(name, value){
    document.cookie = name + '=' + value; 
}

function getCookie(name){
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    }
}

