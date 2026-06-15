const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  heading.style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

btn.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = colors[getRandomNumber()];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}