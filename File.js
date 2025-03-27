document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.enter').forEach(button =>{
        button.addEventListener('click', function(){
            const divisor = this.closest('.Divisor');
            const input = divisor.querySelector('.numero');
            const inputValue = Number(input.value);
            const resultadiv =  divisor.querySelector('.resultado');
            const randomNumber = Math.floor(Math.random() * inputValue) + 1;
            resultadiv.textContent = randomNumber;
        });
    });
});


