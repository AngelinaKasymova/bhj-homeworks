const links = document.querySelectorAll('.has-tooltip');

links.forEach(link => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const tooltipDiv = document.createElement('div');
        link.insertAdjacentElement('afterEnd', tooltipDiv);
        tooltipDiv.classList.add('tooltip');
        const linkTitle = link.getAttribute('title');
        tooltipDiv.textContent = linkTitle;
        
        let left = link.getBoundingClientRect().x;
        let top = link.getBoundingClientRect().y + link.getBoundingClientRect().height;
        tooltipDiv.setAttribute('style', `left: ${left}px; top: ${top}px;`);

        tooltipDiv.classList.toggle('tooltip_active');
    })
})