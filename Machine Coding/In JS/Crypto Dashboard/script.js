const cardContainer = document.querySelector(".card-container");
let dataArr = [];

async function getData() {
    let data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    data = await data.json();
    dataArr = data;
    console.log("if error code: 429 => api exceeded the Rate Limit.");
}

document.addEventListener("DOMContentLoaded", getData);

for (let i = 0; i < dataArr.length; i++) {
    cardContainer.innerHTML += `<div class="card flex gap-4">
    <div class="img">
    <img src="${dataArr[i].image}" alt="img" />
    </div>
    <div class="info">
    <span>${dataArr[i].name}</span>
    <span>${dataArr[i].current_price}</span>
    </div>
    </div>`;
}
