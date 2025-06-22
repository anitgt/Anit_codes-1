// const multiply = (x, y) => x * y;

// const square = x => multiply(x ,x);

// const isRightTriangle = (a,b,c) => {
//     return square(a) + square(b) === square(c);
// }

// console.log('Before')

// isRightTriangle(3,4,5);

// console.log('Done')

// console.log('Sending request to server!');

// setTimeout(() => {
//     console.log('Here is a data from your server')
// }, 3000);

// console.log('I am at the end of the file')

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'blue';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'yellow';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// const delayedColorChange = (newColor, delay, doNext) => {
//    setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext()
//     }, delay) ;
// }

// delayedColorChange('blue', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow',1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('red', 1000)
//             })
//         })
//     })
// })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('red', 1000))
//     .then(() => delayedColorChange('cyan', 1000))


async function rainbow () {
    await delayedColorChange('red', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('violet', 1000);
    await delayedColorChange('orange', 1000);
    return 'Done'
}

// rainbow() .then((succ) => {
//     console.log('Its working');
//     console.log(succ)
// })

async function printRainbow() {
    await rainbow();
    console.log('End of rainbow')
}

printRainbow();