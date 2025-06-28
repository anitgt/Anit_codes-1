//prototype syntax

// String.prototype.yell = function() {
//     return `${(this.toUpperCase())} !!!!`;
// }

// Array.prototype.pop = function () {
//     return 'Sorry i want that element, i will never pop it off'
// }

//OOP:

//factory functions:-

// rgbToHex(255,100,225);
// rgb(255,100,225);

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     color.hex = function() {
//         const { r, g, b } = this;
//         return "#" + [r, g, b].map(function(x) {
//             return x.toString(16).padStart(2, '0');
//         }).join('');
//     };

//     return color;
// }

// const firstColor = makeColor(122, 112, 154);

//constructor functions:- 

// function Color(r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
    
// }

// Color.prototype.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//         }

// Color.prototype.hex = function() {
//          const { r, g, b } = this;
//          return "#" + [r, g, b].map(function(x) {
//              return x.toString(16).padStart(2, '0');
//          }).join('');
//      };

// Color.prototype.rgba = function(a = 1.0) {
//     const { r,g,b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})` 
// }


// const color1 = new Color (49,12,12)
// const color2 = new Color (49,11,14)


// console.log(color1)
// console.log(color2)
// console.log(color2.hex())
// console.log(color1.hex())

// document.body.style.backgroundColor = color1.rgba(0.5)

//Classes:- 

// class Color {
//     constructor(r,g,b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     // greet() {
//     //     return `Hello From ${this.name}`
//     // }

//     innerRGB() {
//         const { r, g, b } = this;
//          return `${r}, ${g}, ${b}`;
//     }

//     hex() {
//         const { r, g, b } = this;
//           return "#" + [r, g, b].map(function(x) {
//               return x.toString(16).padStart(2, '0');
//        }).join('');
//     };

//     rgb() {
//         return `rgb(${this.innerRGB()}`; 
//     }

//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`; 
//     }
// }

// const c1 = new Color(122,222,111, 'Tomato');
// const white = new Color(255,255,255, 'White');

// document.body.style.backgroundColor = c1.rgb()
//
//  7document.body.style.backgroundColor = c1.rgba(0.4);


// classes practice:- 


class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL(); // Precompute and store h, s, l
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    hex() {
        const { r, g, b } = this;
        return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360 ;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }

    fullySaturated() {
        const { h,l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    calcHSL() {
        let r = this.r / 255;
        let g = this.g / 255;
        let b = this.b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        this.h = Math.round(h * 360);
        this.s = Math.round(s * 100);
        this.l = Math.round(l * 100);
    }
}

const tomato = new Color(122,222,111, 'Tomato');
const white = new Color(255,255,255, 'White');

console.log(tomato.hsl())
console.log(white.hsl())

document.body.style.backgroundColor = tomato.opposite()
document.body.style.backgroundColor = tomato.fullySaturated()

console.log(tomato.fullySaturated())
