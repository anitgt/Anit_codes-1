/* for(let i = 1; i <=10 ; i++) { */
/*     console.log('i am in the loop body'); */
/*     console.log(i); */
/* } */


/* for(let i = 1; i <= 20; i += 2 ) { */
/*     console.log(i) */
/* } */

/* for(let i = 10; i <= 1000; i = i * 10) { */
/*     console.log(i) */
/* } */

/* for(let i = 25;i>=0; i= i -5) {
    console.log(i)
} */

/* const animals = ['animalk', 'djasd', 'dadsd', 'dadsad', 'dadadsd', 'dasdasdd', 'd asdioasj dilasuhdjklsahdjoashfdouis','dahujdjkadhksjadha']
 */
/* for(let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
} */

/* for(let i = animals.length -1; i>=0; i--) { */
/*     console.log(i, animals[i]) */
/* } */
/*  */
/*  */

/* for(let i = 1; i <= 10; i++ ) { */
/*     console.log(`i is: ${i}`); */
/*     for(let j = 1; j <= 4; j++) { */
/*         console.log(`     J is: ${j}`) */
/*     } */
/* } */


/* const seatingChart = [ */
/*     ['kristen', 'eric', 'ericka'], */
/*     ['hdhristen', 'esfsic', 'ericsfa'], */
/*     ['kristfssn', 'erifs', 'ericka'], */
/* ]; */
/*  */
/* for(let i = 0; i < seatingChart.length; i++) { */
/*     const row = seatingChart[i]; */
/*     console.log(`Row: ${i + 1}`); */
/*     for(let j = 0; j < row.length; j++) { */
/*         console.log(row[j]) */
/*     } */
/* } */

/* let count = 0; */
/*  */
/* while(count < 10) { */
/*     console.log(count)  */
/*     count++ */
/* } */

/* const secretCode = "me"; */
/*  */
/* let guess = prompt('Enter the code: '); */
/*  */
/* while(guess !== secretCode) { */
/*     guess = prompt('Enter the code: '); */
/* } */
/* console.log("you won!"); */

let input = prompt("enter something: ");

while(true) {
    input = prompt(input);
    if(input === 'stop') {
        break
    }
}

console.log('You win');

for(let i = 0; i <= 999; i++) {
    console.log(i)
    if(i === 100) {break}
}