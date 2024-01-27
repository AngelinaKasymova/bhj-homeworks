const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const welcomeUserId = document.getElementById('user_id');

document.addEventListener('DOMContentLoaded', () => {
    const storedUserId = localStorage.getItem('userId')
    if(storedUserId) {
        showWelcome(storedUserId);
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form); 
    const xhr =  new XMLHttpRequest();

    xhr.addEventListener('load', () => {{}
        const response = JSON.parse(xhr.responseText);

        if(response.success) {
            const userId = response.user_id
            localStorage.userId = userId;
            showWelcome(userId);
        } else {
            alert('Неверный логин/пароль')
        }
    })

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);
})

function showWelcome(userId) {
    welcomeUserId.textContent = userId;
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
}