// How to compare 2 objects OR polyfill for loadsh.isEqual()

const a = {
    one: { x: 1 },
    two: 5,
    three: {
        y: {
            z: 2,
        },
    },
};

const b = {
    two: 5,
    one: { x: 1 },
    // two: 5,
    three: {
        y: {
            z: 2,
            // z: 3,
        },
    },
};

// method 1:
// JSON.stringify method
// PROBLEM => if position chng thn it returns false | uncommnet any of "two" property at a time
console.log(JSON.stringify(a) === JSON.stringify(b));

// custom polyfill for loadash.isEqual()
function isObject(obj) {
    return typeof obj === "object" && obj !== null;
}

function compareObjs(obj1, obj2) {
    const keyArr1 = Object.keys(obj1);
    const keyArr2 = Object.keys(obj2);
    if (keyArr1.length !== keyArr2.length) {
        return false;
    }
    for (let key of keyArr1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        const isObjects = isObject(value1) && isObject(value2);
        if (!isObjects && value1 !== value2) {
            return false;
        }
        if (isObjects && !compareObjs(value1, value2)) {
            return false;
        }
    }
    return true;
}

console.log(compareObjs(b, a));
