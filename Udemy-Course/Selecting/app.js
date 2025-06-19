const element = document.getElementById('banner');
const element2 = document.getElementById('toc');

// console.log(element2)

const allImages = document.getElementsByTagName('img');

// console.log(allImages);

// for(let image of allImages) {
    // image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }
// 
const classId = document.getElementsByClassName('square');

// for(classes of classId) {
    // classes.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }
// 
// console.log(classId)

const selector = document.querySelector('p');
const byTag = document.getElementsByTagName('p');
const byTagName = document.querySelector('#banner');
const byClass = document.querySelector('.square');
const second = document.querySelector('img:nth-of-type(2)');

// console.log(selector);
// console.log(byTag);
// console.log(byTagName);
// console.log(byClass);
// console.log(second);

const new1 = document.querySelector('a[title="Java"]');

// console.log(new1)

const all = document.querySelectorAll('p');
const all1 = document.querySelectorAll('p a');

// for(let all of all1) {
    // console.log(all.href)
// }
//console.log(all1)

let text = (document.querySelector('p')).innerText;

//console.log(text)

//document.querySelector('p').innerText = 'lolol'
const allLinks = document.querySelectorAll('a');

// for(let links of allLinks) {
    // links.innerText = 'none'
//}

document.querySelector('h1') .innerHTML += '<sup>Hell Nah!</sup>'

document.querySelector('#banner');

//console.log(document.querySelector('#banner').id);

let firstLink = document.querySelector('a');

// console.log(firstLink.getAttribute('href') = 'google.com');

firstLink.setAttribute('href', 'https://google.com');

const input = document.querySelector('input[type="text"]');
input.type = 'password'

// console.log(input.type)

const h1 = document.querySelector('h1');

console.log(h1);

let anchor = document.querySelectorAll('a')

for(let ancho of anchor) {
    ancho.style.color = 'red';
    ancho.style.textDecorationColor = 'black';
    ancho.style.textDecorationStyle = 'wavy'
}