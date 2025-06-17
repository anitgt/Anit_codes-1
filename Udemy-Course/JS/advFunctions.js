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

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for(let i = 0; i < 10; i++) {
        f()
    }
}

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}



callTwice(rollDice);

callTenTimes(rollDice)