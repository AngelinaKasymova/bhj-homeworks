let clickCounter = document.getElementById('clicker__counter');
let clickCounterNumber = parseInt(clickCounter.textContent);
let cookieImage = document.getElementById('cookie');

cookieImage.onclick = function() {
    clickCounterNumber += 1;
    clickCounter.textContent = clickCounterNumber;
    if(clickCounterNumber % 2 === 1) {
        cookieImage.width = 250; 
    } else {
        cookieImage.width = 200;
    }
}
