'use strict'
const firstName = document.getElementById('FirstName')
const lastName = document.getElementById('LastName');
const accountType = document.getElementById('account-type');
const submitBtn = document.getElementById('submit')


const accountTypeText = document.querySelector('.account-type');
const cardDigit = document.querySelector('.card-digit');
const expDate = document.querySelector('.expiry-date');
const firstNameText = document.querySelector('.firstname');
const lastNameText = document.querySelector('.lastname');

const atmExc = document.querySelector('.atm-Exc');
const atmBox = document.querySelector('.atmBox')



//Function
const genCardDigit = () => {
    const randomNum = Math.trunc(Math.random() * 1000000000000000) + '';
    const lastFour = randomNum.slice(-4);
    const getNum = lastFour.padStart(randomNum.length, '*')
    return getNum;

}


const genFirstName = (nameStr) => {
    const [firstXter, ...otherXter] = nameStr;
    return [firstXter.toUpperCase(), ...otherXter].join('');
}

const genLastName = (nameStr) => {
    return nameStr.toUpperCase();
}


const genExpDate = () => {
    const d = new Date();
    const month =d.getMonth() +1;
    const fixMonth = month < 10 ? '0' + month : month;
    const year = (d.getFullYear() + 3)+'';
    return `${fixMonth}/${year.slice(-2)}`

}



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('submit button')
    // Display ATM
    atmExc.classList.add('hidden');
    atmBox.classList.remove('hidden')

    // Display Account type
    accountTypeText.textContent = accountType.value;

    // Display the card digit
    cardDigit.textContent = genCardDigit();

    //Display EXpire Date
    expDate.textContent = genExpDate();

    //Display first and lastname
    firstNameText.textContent = genFirstName(firstName.value)
    lastNameText.textContent = genLastName(lastName.value)
})










