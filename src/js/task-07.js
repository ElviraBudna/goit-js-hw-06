const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function onChangeSizeText(event) {
    const newSize = event.currentTarget.value;
    return spanEl.style.fontSize = `${newSize}px`;
}

inputEl.addEventListener('input', onChangeSizeText)