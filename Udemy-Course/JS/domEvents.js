const button2 = document.querySelector('#v2');

button2.onclick = function() {
    console.log('You clicked me;')
    console.log('I hope it worked!')
}

function scream() {
    console.log('Ahhhhhh')
    console.log('Stop touching me!')
}

button2.onmouseenter = scream;

document.querySelector('h1') .onclick = function() {
     console.log("i am here");
    }

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', ()=> {
    console.log('Clicked') 
});

function twist() {
    console.log('twist')
} 

function shout() {
    console.log('Shout')
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist
// tasButton.onclick = shout;

// tas.onclick = twist
// tas.onclick = shout

tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout);
