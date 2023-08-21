const inputRange = document.getElementById("inputRange");
const pieChart = document.querySelector(".piechart");

inputRange.addEventListener('input', (e)=>{
    pieChart.style = `--percentage: ${e.target.value}%`
})