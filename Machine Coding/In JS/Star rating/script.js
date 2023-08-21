const starContainer = document.querySelector(".star-container");
const star = document.querySelectorAll(".star");
const count = document.querySelector(".count");
let filledStar = 0;

starContainer.addEventListener("click", function (e) {
    let currClicked = e.target.dataset.index;
    // console.log(currClicked);

    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("star-filled");
    }

    for (let i = 0; i < currClicked; i++) {
        star[i].classList.add("star-filled");
    }

    filledStar = currClicked;
    count.textContent = currClicked;
});

starContainer.addEventListener("mouseover", function (e) {
    let currHover = e.target.dataset.index;
    // console.log(currClicked);

    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("star-filled");
    }

    for (let i = 0; i < currHover; i++) {
        star[i].classList.add("star-filled");
    }
});

starContainer.addEventListener("mouseleave", function (e) {
    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("star-filled");
    }

    for (let i = 0; i < filledStar; i++) {
        star[i].classList.add("star-filled");
    }
});
