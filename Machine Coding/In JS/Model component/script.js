const model = document.querySelector(".model");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", function () {
    model.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    model.style.display = "none";
});
