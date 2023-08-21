// known as method borrowing

const obj1 = {
    firstName: "yash",
    lastName: "jivani",
    printFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

const func2 = function (arg1, arg2) {
    console.log(`${this.firstName} ${arg1} ${arg2}`);
};

const obj2 = {
    firstName: "kali",
    lastName: "linux",
};

// CALL
console.log("\n\nCALL METHOD::");
obj1.printFullName();
obj1.printFullName.call(obj2);
func2.call(obj1, "this is obj1 arg1", "this is obj1 arg2");
func2.call(obj2, "this is obj2 arg1", "this is obj2 arg2");

// APPLY
// (only the diff. b/w call and apply method is to way to how we pass arguments)
// in call method we pass args. as  comma seprated value but in apply method we pass args. as [array of args]
console.log("\n\nAPPLY METHOD::");
obj1.printFullName();
obj1.printFullName.apply(obj2);
func2.apply(obj1, ["this is obj1 arg1", "this is obj1 arg2"]);
func2.apply(obj2, ["this is obj2 arg1", "this is obj2 arg2"]);

// BIND
// set "THIS" value and return function
console.log("\n\nBIND METHOD::");
let myInfo = func2.bind(obj1, "yash-bind", "yash2-bind");
let myInfo2 = obj1.printFullName.bind(obj2, "yash-bind", "yash2-bind");
// console.log(myInfo);  // function
myInfo();
myInfo2();
