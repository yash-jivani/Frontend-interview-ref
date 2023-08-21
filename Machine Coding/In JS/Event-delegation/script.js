// event delegation

const numbers = document.getElementById("numbers");

numbers.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        console.log(e);
        document.getElementById("currClicked").innerText = e.target.textContent;
    }
});
