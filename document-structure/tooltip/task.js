const links = document.querySelectorAll('.has-tooltip');
const body = document.querySelector('body');
body.insertAdjacentHTML('beforeEnd', '<div class ="tooltip"></div>');
const tooltipDiv = document.querySelector('.tooltip');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const linkTitle = link.getAttribute('title');
        if(tooltipDiv.classList.contains('tooltip_active')){
            tooltipDiv.classList.remove("tooltip_active");
        } else {
            tooltipDiv.classList.add("tooltip_active");
            tooltipDiv.textContent = linkTitle;
            let left = link.getBoundingClientRect().x;
            let top = link.getBoundingClientRect().y + link.getBoundingClientRect().height;
            tooltipDiv.setAttribute('style', `left: ${left}px; top: ${top}px;`);
        }
    })
})
