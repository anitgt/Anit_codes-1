const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    h1.innerText = color;
}); 

function randomColor() {
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    const color = `rgb( ${r}, ${g}, ${b})`;
    return color
}