/* let totalEggs = 0; */
/*  */
/* function collectEggs() { */
/*     totalEggs = 6; */
/* } */
/* console.log(totalEggs) */
/* collectEggs() */
/* console.log(totalEggs) */
/*  */
/*  */
/*  */

/* let bird = 'Scarlet'; */
/*  */
/* function birdWatch() { */
/*     /* let bird = 'Great blue'; */ 
/*     console.log(bird) */
/* } */
/*  */
/* birdWatch() */
/* console.log(bird); */

/* let radius = 8; */
/*  */
/* if (radius > 0) { */
/*     const PI = 3.141; */
/*     let msg = 'HIIII'; */
/* } */
/*  */
/* console.log(radius); */
/* console.log(PI) */

/* for(let i = 0; i < 5; i++) { */
/*     var msg = "that"; */
/*     console.log(msg) */
/* } */
/*  */
/* console.log(msg) */
/* console.log(i) */

/* function bankRobbery() { */
/*     const heroes = ['spiderman', 'wolverine', 'Black Panther']; */
/*     function cryForHelp() { */
/*         function inner() { */
/*             let color = 'purple' */
/*             for (let hero of heroes) { */
/*             console.log(`Please help us ${hero.toUpperCase()}`) */
/*         } */
/*         } */
/*         inner() */
/*     } */
/*  */
/*     cryForHelp() */
/* } */
/*  */
/* bankRobbery() */

/* const add = function(x,y) { */
/*     return x + y */
/* } */
/*  */
/* console.log(add(12,89)) */

/* function callTwice(func) { */
/*     func(); */
/*     func(); */
/* } */
/*  */
/* function callTenTimes(f) { */
/*     for(let i = 0; i < 10; i++) { */
/*         f() */
/*     } */
/* } */
/*  */
/* function rollDice() { */
/*     const roll = Math.floor(Math.random() * 6) + 1 */
/*     console.log(roll) */
/* } */
/*  */
/*  */
/*  */
/* callTwice(rollDice); */
/*  */
/* callTenTimes(rollDice) */

// function makeMysteryFunc() {
    // const rand = Math.random();
    // if(rand > 0.5) {
        // return function () {
            // console.log("Congrats, I am a good function!");
            // console.log("You win a million dollars");
        // }
    // } else {
        // return function() {
            // alert("You have been infected by a computer Virus")
            // alert("Stop trying to close this window")
            // alert("Stop trying to close this window")
            // alert("Stop trying to close this window")
            // alert("Stop trying to close this window")
            // alert("Stop trying to close this window")
            // alert("Stop trying to close this window")
            // alert("Stop trying to close this window")
        // }
    // }
// }
// 
// const func = makeMysteryFunc();

//func()


function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

// console.log(makeBetweenFunc(10, 100))

// const isChild = makeBetweenFunc(0, 18);
// const isSenior = makeBetweenFunc(50, 100);
// const isAdult = makeBetweenFunc(18, 50);
// 
// console.log(isChild(60));
// console.log(isAdult(45));
// console.log(isSenior(60))
// 
// 
// makeBetweenFunc(5,10)

// function isBetweeen(num) {
    // return num >= 50 && num <=100
// }
// 
// function isBetweeen2(num) {
    // return num >= 1 && num <= 10
// }
// 
// console.log(isBetweeen2(10))


// const add = (x,y) => {
    // return x + y;
// }
// 
// const square = x => {
    // return x * x;
// }
// 
// console.log(square(80))
// 
// const rollDie = () => {
    // return Math.floor(Math.random() * 6  +1 )
// }
// 
// console.log(rollDie())

// const rollDie = () => (
    // Math.floor(Math.random() * 6 ) + 1
// )
// 
// console.log(rollDie());
// 
// const add = (a,b) => a + b;
// 
// console.log(add(5,5));

const movies = [
    {
        title: 'amandus',
        score: 89,
        year: 1990
    },
    {
    title: 'amfews',
    score: 49,
    year: 1922
    },
    {
    title: 'asfvs',
    score: 83,
    year: 1995
    },
    {
    title: 'afasv',
    score: 74,
    year: 1912
    },
    {
    title: 'jikl',
    score: 56,
    year: 1989
    },
    ]

// const hello = movies.map(function(movie) {
    // return `${movie.title} - ${movie.score / 10}`
// });

// const hello = movies.map(movie => `${movie.title} - ${movie.score / 10}`
// )
// 
// console.log(hello);
// 
// 

// console.log('Hello');
// setTimeout(() => console.log('Are you still there?'), 3000);
// console.log('GoodBye')

//const id = setInterval(() => console.log(Math.random()), 3000);

//clearInterval(id)

const numbers = [1,34,5,6,67,43,33,56,13,67,13,6];

numbers.filter((n) => {
    return n < 10
})


const goodMovies = movies.filter((m) => m.score > 80).map(m => m.title );
//const goodMovieTitle = goodMovies.map(m => m.title )
const badMovies = movies.filter((m) => m.score < 70);

const recentMovies = movies.filter((m) => m.year > 1990 )
// 
// console.log(goodMovies);
// console.log(badMovies);
// console.log(recentMovies)

//console.log(goodMovieTitle)

const exams = [1,34,5,6,67,43,33,56,13,67,13,6];

exams.every(score => score > 40);

exams.some(score => score > 40)

movies.some(m => m.year > 1990)

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices) {
    // total += price;
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
    // return total + price
//})

const total = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
    if(price < min) {
        return price
    }
    return min
})

// console.log(total)
// console.log(minPrice)

const compare = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie
    } return bestMovie
})

//console.log(compare)

const evens = [2,4,6,8];

evens.reduce((sum, num) => sum + num)
evens.reduce((sum, num) => sum + num, 100)