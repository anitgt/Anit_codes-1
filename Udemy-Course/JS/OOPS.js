//prototype syntax

// String.prototype.yell = function() {
//     return `${(this.toUpperCase())} !!!!`;
// }

// Array.prototype.pop = function () {
//     return 'Sorry i want that element, i will never pop it off'
// }

//OOP:




// rgbToHex(255,100,225);
// rgb(255,100,225);

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function() {
        const { r, g, b } = this;
        return "#" + [r, g, b].map(function(x) {
            return x.toString(16).padStart(2, '0');
        }).join('');
    };

    return color;
}

const firstColor = makeColor(122, 112, 154);


