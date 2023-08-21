const p1 = () => {
    return new Promise((resolve, reject)=>{
        resolve('hello')
    })
}

function p2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('world')
        },1000)
    })
}

const p3 = Promise.resolve('yash');

Promise.all([p1, p2, p3]).then((value)=>{
    console.log(value)
})