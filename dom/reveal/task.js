const divs = document.querySelectorAll('.reveal');

function isVisible() {
    divs.forEach((divReveal) => {
        function handleScroll() {
            const top = divReveal.getBoundingClientRect().top;
            if(top > 0 && top < window.innerHeight) {
                divReveal.classList.add('reveal_active');
            }
        }

        window.addEventListener('scroll', handleScroll);
        
    });
}

isVisible();