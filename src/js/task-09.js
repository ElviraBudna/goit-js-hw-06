function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEL = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const newColor = document.querySelector('.color');

buttonEl.addEventListener('click', onClickButton);

function onClickButton(event) {
  newColor.textContent = getRandomHexColor();
  bodyEL.style.backgroundColor = newColor.textContent;
}