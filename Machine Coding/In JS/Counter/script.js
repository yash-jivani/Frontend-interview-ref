const input = document.querySelector("input");
const plusBtn = document.querySelector(".increment");
const minusBtn = document.querySelector(".decrement");
let total = 0;
let operationBy = 1;

input.addEventListener("change", function (e) {
    operationBy = parseInt(e.target.value);
});

plusBtn.addEventListener("click", function () {
    let currValue = document.querySelector(".count");
    currValue.textContent = parseInt(currValue.textContent) + operationBy;
});

minusBtn.addEventListener("click", function () {
    let currValue = document.querySelector(".count");
    currValue.textContent = parseInt(currValue.textContent) - operationBy;
});
