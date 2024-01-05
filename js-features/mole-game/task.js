const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

holes.forEach((hole) => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
            if (deadCounter.textContent == 10) {
                alert('Поздравляем! Вы победили!');
            }
        } else {
            lostCounter.textContent = Number(lostCounter.textContent) + 1;
            if (lostCounter.textContent == 5) {
                alert('Вы проиграли. Попробуйте еще раз.');
            }
        }
    });
});


