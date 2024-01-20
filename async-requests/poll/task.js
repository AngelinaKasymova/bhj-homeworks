let xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4) {
        let response = JSON.parse(xhr.responseText);
        let title = response.data.title; 
        let answers = response.data.answers;
        pollTitle.textContent = title;
        answers.forEach(answer => {
            pollAnswers.insertAdjacentHTML('beforeend', `
                <button class="poll__answer">${answer}</button>
            `);
        })
        const buttons = document.querySelectorAll('.poll__answer');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        })
    }
})

