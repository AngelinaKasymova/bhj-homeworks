let xhr = new XMLHttpRequest();
const items = document.getElementById('items');
const loader = document.getElementById('loader')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === 4) {
        const answer = JSON.parse(xhr.responseText);
        const valutes = answer.response.Valute
        for(let key in valutes) {
            let charCode = valutes[key].CharCode;
            let value = valutes[key].Value;
            items.insertAdjacentHTML('beforeend', `
                <div class = "item">
                    <div class="item__code">${charCode}</div>
                    <div class="item__value">${value}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `)
        }
        loader.classList.remove('loader_active');
    }
})
