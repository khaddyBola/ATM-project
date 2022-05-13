'use strict'
const ATMCard = document.querySelector('.ATMCard')
const overlay = document.querySelector('.overlay');
const btnForm = document.querySelector('.btnForm');



function btnF() {
    ATMCard.classList.add('hidden');
    overlay.classList.add('hidden');
}

function btnFN() {
    ATMCard.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


btnForm.addEventListener('click', () => {
    // console.log('is clicked')
    if (ATMCard.style.display === 'none') {
        ATMCard.style.display = 'block';
        ATMCard.innerHTML = 'hide list'
    } else {
        ATMCard.style.display = 'none'
    }


 
})