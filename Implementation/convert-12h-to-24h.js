/**
 * input: 1:02 PM
 * output: 13:02
 *
 */

function convert12hto24h(time12h) {
    const [time, modifier] = time12h.split(" ");
    let [hours, mits] = time.split(":");

    if (hours === "12") {
        hours = "00";
    }
    if (modifier === "PM") {
        hours = parseInt(hours) + 12;
    }
    return `${hours}:${mits}`;
}

console.log(convert12hto24h("12:02 AM"));''
console.log(convert12hto24h("1:02 AM"));
console.log(convert12hto24h("3:02 PM"));
console.log(convert12hto24h("11:02 PM"));
