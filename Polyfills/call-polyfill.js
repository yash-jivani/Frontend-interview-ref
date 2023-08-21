const obj1 = {
    firstName: "yash",
};

function printName(age, lastname) {
    console.log(this.firstName, lastname, age);
}

printName.call(obj1, 17, "jivani");

// custom call method polyfill
Function.prototype.myCall = function (obj, ...args) {
    if (typeof this !== "function") {
        return "not callable";
    }
    obj.func = this;
    obj.func(...args);
    // this(...args) //? <= will not work!! ("THIS" don't know the context)
};

printName.myCall(obj1, 17, "jivani");
