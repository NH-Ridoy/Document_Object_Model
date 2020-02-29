
let btn = document.querySelector('button');
let colors = ['green', 'red', 'silver', 'orange'];

let value = 0;

btn.addEventListener('click',() =>{
    let h1 = document.querySelector('h1')
    h1.innerText = 'Javascript';

    h1.style.color = colors[value];

    if(value >= colors.length){
        value = 0;
    }else{
        value++;
    }

});