let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = e.currentTarget.id;
    if (id === "decrease") {
      count -= 7;
    } else if (id === "increase") {
      count += 7;
    } else {
      count = 0;
    }
    function updateCount() {
      if (count > 0) {
        value.style.color = "green";
      } else if (count < 0) {
        value.style.color = "red";
      } else {
        value.style.color = "#222";
      }
      value.textContent = count;
    }
    updateCount(); 
  });
});