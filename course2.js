
let btn = $('button');
let colors = ['green', 'red', 'silver', 'orange'];

let value = 0;

btn.addEventListener('click',() =>{
    let h1 = $('h1')
    h1.innerText = 'Javascript';

    h1.style.color = colors[value];

    if(value >= colors.length){
        value = 0;
    }else{
        value++;
    }

});

function $(selector) {
    return document.querySelector(selector);
}



let hStyle = {
    background: 'salmon',
    fontSize: '30px',
    fontFamily: 'Arial',
    textAlign: 'center',
    color: '#222',
    padding: '20px'
}

Object.assign($('h1').style, hStyle);

let pStyle = {
    padding: '10px',
    fontSize: '18px',
    color: '#333333',
    lineHeight: '1.3'
}

Object.assign($('p').style, pStyle);
