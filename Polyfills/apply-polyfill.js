const obj1 = {
    firstName: "yash",
};

function printName(age, lastname) {
    console.log(this.firstName, lastname, age);
}

printName.apply(obj1, [17, "jivani"]);

// custom call method polyfill
Function.prototype.myApply = function (obj, arr) {
    if (typeof this !== "function") {
        console.log("not callable");
        return;
    }
    if (!Array.isArray(arr)) {
        console.log("Please Provies args in Array");
        return;
    }
    obj.func = this;
    obj.func(...arr);
    // this.call(obj, ...arr);  //? <= 👈 will also work
};

printName.myApply(obj1, [17, "jivani"]);
