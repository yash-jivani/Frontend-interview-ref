const boxContainer = document.querySelector('.box-container')
const boxs = document.querySelectorAll('.box')
const queue = [];

boxContainer.addEventListener('click', function(e){
    const index = e.target.dataset.index;
    if(index !== undefined){
        queue.push(index);
        boxs[index].classList.add('fill')
    }
    if(queue.length === 7){
        let cnt = 0;
        while(queue.length>0){
            let index = queue.shift()
            cnt++;
            setTimeout(()=>{
                boxs[index].classList.remove('fill');    
            },cnt*1000)
        }
    }
})