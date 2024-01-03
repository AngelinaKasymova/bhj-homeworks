let timer = document.getElementById('timer');
let seconds = parseInt(timer.textContent);

function runCountdown() {
    if(seconds > 0) {
        seconds -= 1;
        timer.textContent = seconds;
        setTimeout(runCountdown, 1000);
    } else {
        alert('Вы победили в конкурсе!');
    }
}

runCountdown();