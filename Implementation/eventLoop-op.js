// asked in cars24
// output based question on event loop

console.log("a");
setTimeout(() => {
    console.log("Timeout");
}, 0);
Promise.resolve(() => {
    console.log("Promise");
}).then((res) => res());
console.log("b");

/*
* output: 

a                   (as a normal flow)
b                   (as a normal flow)
Promise             (Micro task queue >> Higher priority thn callback queue)
Timeout             (callback queue)

JavaScript Visualizer:
https://www.jsv9000.app/
*/