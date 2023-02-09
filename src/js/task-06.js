const inputEl = document.querySelector('#validation-input');
const lengthValidation = inputEl.dataset.length;

function onValidationInput(event) {
    const eventValueLength = event.currentTarget.value.trim().length
    if (eventValueLength >= lengthValidation) {
        return inputEl.classList.add('valid');
    } else
        return inputEl.classList.add('invalid');
}
inputEl.addEventListener('blur', onValidationInput);

