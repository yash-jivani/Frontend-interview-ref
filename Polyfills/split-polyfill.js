function mySplit(string, delimiter) {
    const result = [];
    if (delimiter === "") {
        return Array.from(string);
    }
    function startSplit(currString, index) {
        if (index >= string.length) {
            return;
        }
        const delimiterIndex = currString.indexOf(delimiter);
        if (delimiterIndex >= 0) {
            result.push(currString.substring(0, delimiterIndex));
            startSplit(
                currString.substring(delimiterIndex + delimiter.length),
                delimiterIndex + delimiter.length
            );
        } else {
            result.push(currString);
        }
    }
    startSplit(string, 0);
    return result;
}

console.log(mySplit("hello world", " "));
