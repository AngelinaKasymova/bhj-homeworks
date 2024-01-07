const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function rotate() {
    setInterval(() => {
        rotatorCases.forEach((rotatorCase, index) => {
            if (currentIndex >= rotatorCases.length) {
                currentIndex = 0;
            }
            
            if(index === currentIndex) {
                rotatorCase.classList.add('rotator__case_active');
            } else {
                rotatorCase.classList.remove('rotator__case_active');
            }
        });
        
        currentIndex = (currentIndex + 1) % rotatorCases.length;

    }, 1000);
}

rotate();
