let user = {
    name: "yash",
    age: 17,
};

function printInfo(hometown, state, country) {
    console.log(`${this.name} ${this.age} ${hometown} ${state} ${country}`);
}

const printMyInfo = printInfo.bind(user, "Bvn");
printMyInfo("Guj", "India");

// method 1:
Function.prototype.myBind = function (obj, ...args1) {
    if (typeof this !== "function") {
        return "not callable";
    }
    obj.func = this;
    return function (...args2) {
        obj.func(...args1, ...args2);
    };
};
const printMyInfo2 = printInfo.myBind(user, "Bvn");
printMyInfo2("Guj", "India");

// method 2:
Function.prototype.myBindMethod = function (obj, ...args1) {
    const context = this;
    return function (...args2) {
        context.apply(obj, [...args1, ...args2]);
    };
};
const printMyInfo3 = printInfo.myBindMethod(user, "Bvn");
printMyInfo3("Guj", "India");
