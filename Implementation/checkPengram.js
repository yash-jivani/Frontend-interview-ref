// pengram => string which contains all alphabets (A-Z / a-z)

function checkPengram(str){
    str  = str.toLowerCase();
    const arr = new Array(26).fill(false);

    for(let i=0;i<str.length;i++){
        let index;
        if(str[i] >= 'a' && str[i] <= 'z'){
            index = str.charCodeAt(i) - 'a'.charCodeAt(0);
            // console.log(index);
            arr[index] = true;
        }
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]===false){
            return false;
        }
    }
    return true;
}


const ans = checkPengram('qwertyuiopalksjshdGfvxcBnmz');
console.log(ans);