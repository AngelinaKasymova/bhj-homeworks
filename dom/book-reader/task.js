const sizeSelectors = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

sizeSelectors.forEach((sizeSelector) => {
    sizeSelector.addEventListener('click', (event) => {
        event.preventDefault();

        sizeSelectors.forEach((sizeSelector) => {
            sizeSelector.classList.remove('font-size_active');
        })

        sizeSelector.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        if(sizeSelector.dataset.size === "small") {
            book.classList.add('book_fs-small');
        } else if(sizeSelector.dataset.size === "big"){
            book.classList.add('book_fs-big');
        }
    });
});