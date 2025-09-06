function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.body;

btnChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();

  body.style.backgroundColor = color;   // змінюємо фон <body>
  spanColor.textContent = color;        // записуємо колір у <span>
});
