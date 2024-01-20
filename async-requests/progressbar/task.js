const progress = document.getElementById( 'progress' );
const form = document.getElementById('form')

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let formData = new FormData(form); 
    let xhr =  new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function (e) {
            const progressValue = (e.loaded / e.total) * 100;
            progress.value = progressValue.toFixed(2);
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formData);
})



