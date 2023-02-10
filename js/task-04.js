const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

const handleClickButtonDecrement = () => {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
}

buttonDecrement.addEventListener('click', handleClickButtonDecrement);



const handleClickButtonIncrement = () => {
    counterValue += 1;
    return valueEl.textContent = counterValue;
}

buttonIncrement.addEventListener('click', handleClickButtonIncrement);

