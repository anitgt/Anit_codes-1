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
        score: 89
    },
    {
    title: 'amfews',
    score: 49
    },
    {
    title: 'asfvs',
    score: 83
    },
    {
    title: 'afasv',
    score: 74
    },
    {
    title: 'jikl',
    score: 56
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

const id = setInterval(() => console.log(Math.random()), 3000);

//clearInterval(id)