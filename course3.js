
let div1 = document.querySelector('#div1');
let btn = document.querySelector('button');

let isShow = false;

btn.addEventListener('click', () => {

    if(isShow) {
        btn.innerText = 'show'
        div1.style.visibility = 'hidden'
        isShow = false;
    }else{
        div1.style.visibility = 'visible'
        btn.innerText = 'hidden'
        isShow = true;
    }

});




// function show() {

//     if(isShow) {
//         btn.innerText = 'show'
//         div1.style.visibility = 'hidden'
//         isShow = false;
//     }else{
//         div1.style.visibility = 'visible'
//         btn.innerText = 'hidden'
//         isShow = true;
//     }

// }


