// Promise.All polyfill

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

// built-in
Promise.all([showText("hello", 1000), Promise.resolve("world")]).then(
    (value) => {
        console.log(value);
    }
);

// custom
function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((currPromise, index) => {
            currPromise
                .then((res) => {
                    result.push(res);
                    if (index === promises.length - 1) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
}

myPromiseAll([showText("hello", 1000), Promise.resolve("world")]).then(
    (value) => {
        console.log(value); // check output in console (expend array)
    }
);
