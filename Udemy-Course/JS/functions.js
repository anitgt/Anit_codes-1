 /* function singSong() { */
 /*    console.log('Do') */
 /*    console.log('Re') */
 /*    console.log('Mi') */
 /* } */


 /* singSong() */


 function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName[0]}.`)
 }

 greet('Anit', 'Sarkar')


 function repeat(str, times) {
    let result = ''
    for(let i = 0; i < times; i++) {
        result += str;
    }
    console.log(result)
 }

 repeat('he ', 3)