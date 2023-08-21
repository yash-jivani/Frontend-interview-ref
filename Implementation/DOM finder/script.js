const rootA = document.getElementById("root-A");
const rootB = document.getElementById("root-B");
const rootAText = document.getElementById("text-a");

function getPath(parent, child) {
    let currNode = child;
    let pathArray = [];
    while (currNode !== parent) {
        const parentEle = currNode.parentElement;
        const childArray = Array.from(parentEle.children);
        pathArray.push(childArray.indexOf(currNode));
        currNode = parentEle;
    }
    return pathArray;
}

function printValue(parent, path) {
    let currNode = parent;
    while (path.length) {
        currNode = currNode.children[path.pop()];
    }
    return currNode.innerText;
}

function findTextBValue() {
    const path = getPath(rootA, rootAText);
    const ans = printValue(rootB, path);
    console.log(ans);
}

findTextBValue();
