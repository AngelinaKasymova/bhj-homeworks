let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

function handleClick() {
    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = function () {
            handleClick(i);
        };
    }

    let hole = getHole(index);

    if (hole.className.includes('hole_has-mole')) {
        deadCounter =+1;
        deadCounter.textContent = deadCounter;
        if(deadCounter === 10) {
            alert'Поздравляем! Вы победили!'();
        }
    } else {
        lostCounter =+1;
        lostCounter.textContent = lostCounter;
        if(lostCounter === 5){
            alert('Вы проиграли. Попробуйте еще раз.');
        }

    }
}

handleClick();
