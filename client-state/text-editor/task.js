const textarea = document.getElementById('editor');

const storedText = localStorage.getItem('text');
if (storedText) {
    textarea.value = storedText;
}

textarea.addEventListener('input', () => {
    localStorage.setItem('text', textarea.value);
});