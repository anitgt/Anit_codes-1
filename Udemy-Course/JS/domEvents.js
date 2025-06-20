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

