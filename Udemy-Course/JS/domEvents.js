// const button2 = document.querySelector('#v2');

// button2.onclick = function() {
//     console.log('You clicked me;')
//     console.log('I hope it worked!')
// }

// function scream() {
//     console.log('Ahhhhhh')
//     console.log('Stop touching me!')
// }

// button2.onmouseenter = scream;

// document.querySelector('h1') .onclick = function() {
//      console.log("i am here");
//     }

// const btn3 = document.querySelector('#v3');

// btn3.addEventListener('click', ()=> {
//     console.log('Clicked') 
// });

// function twist() {
//     console.log('twist')
// } 

// function shout() {
//     console.log('Shout')
// }

// const tasButton = document.querySelector('#tas');

// // tasButton.onclick = twist
// // tasButton.onclick = shout;

// // tas.onclick = twist
// // tas.onclick = shout

// tasButton.addEventListener('click', twist, {once: true});
// tasButton.addEventListener('click', shout);

// function makeRandomColor() {
    // const r = Math.floor(Math.random() * 255 + 1)
    // const g = Math.floor(Math.random() * 255 + 1)
    // const b = Math.floor(Math.random() * 255 + 1)
    // const color = `rgb( ${r}, ${g}, ${b})`;
    // return color
// }
// 
// const buttons = document.querySelectorAll('button');
// 
// 
// for(let button of buttons) {
    // button.addEventListener('click', colorize)
// }
// 
// const h1s = document.querySelectorAll('h1');
// 
// for(let h1 of h1s) {
    // h1.addEventListener('click', colorize)
// }
// 
// function colorize() {
    // const this1 = this.style.backgroundColor = makeRandomColor();
    // const this2 = this.style.color = makeRandomColor();
    // return this1,  this2
// }
// 

const button = document.querySelector('button');

button.addEventListener('click', function(evt) {
    console.log(evt)
})

const input = document.querySelector('input');

// input.addEventListener('keydown', (e) => {
    // console.log(e.key);
    // console.log(e.code);
// })
// input.addEventListener('keyup', () => console.log('Keyup') )

window.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            console.log('UP');
            break;
        case 'ArrowDown':
            console.log('Down');
            break;
        case 'ArrowLeft':
            console.log('Left');
            break;
        case 'ArrowRight':
            console.log('Right');
            break;
        default: 
            console.log('Ignored')
    }
})