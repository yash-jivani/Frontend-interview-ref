/*
    example: 
    153 = 1*1*1 + 5*5*5 + 3*3*3  ==> true

*/

function isArmstrong(num) {
    const totalDigits = num.toString().split("");
    const power = totalDigits.length;
    let sum = 0;
    for (let i = 0; i < totalDigits.length; i++) {
        sum += Math.pow(parseInt(totalDigits[i]), power);
    }

    if (sum === num) {
        return `${num} is armstrong number`;
    }
    return `${num} is NOT armstrong number`;
}

console.log(isArmstrong(50));
console.log(isArmstrong(84));
console.log(isArmstrong(153));
console.log(isArmstrong(1634));
console.log(isArmstrong(9474));
