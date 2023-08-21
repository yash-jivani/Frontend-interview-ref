const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todo = document.querySelector("#todos");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop default reloading

    let todoText = form.querySelector("input").value; // getting value of input field

    if (todoText) {
        const createdEle = document.createElement("li");
        createdEle.innerHTML = `
        ${todoText} <span><img src="./img-etc/done.png" class="doneImg" alt=""><img src="./img-etc/delete.png" class="deleteImg" alt=""></span>
        `;
        todo.appendChild(createdEle);
        input.value = "";

        const doneImg = createdEle.querySelector(".doneImg");
        const deleteImg = createdEle.querySelector(".deleteImg");
        // console.log(doneImg,deleteImg);

        doneImg.addEventListener("click", (e) => {
            createdEle.style.textDecoration = "line-through";
            createdEle.style.color = "grey";
        });

        deleteImg.addEventListener("click", (e) => {
            createdEle.remove();
        });
    }
});
