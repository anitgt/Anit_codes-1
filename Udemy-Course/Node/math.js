const add = (x,y) => x + y; 

const PI = 3.141;

const square =  x => x * x;

const math = {
    add: add,
    PI: PI,
    square: square
}

exports.square = square

//module.exports = math

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;