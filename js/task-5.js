//Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

const color = document.querySelector(".color")
const button = document.querySelector(".change-color")
const body = document.querySelector("body")

button.addEventListener("click", () => {
  const result = getRandomHexColor();

  body.style.backgroundColor = result;
  color.textContent = result;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
