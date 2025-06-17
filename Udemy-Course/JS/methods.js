// const myMath = {
    // PI: 3.141,
    // square(num) {
        // return num * num;
    // },
    // cube(num) {
        // return num ** 3;
    // }
// }
// 
// console.log(myMath.cube(389));
// 
// const cat = {
    // name: 'Blue steele',
    // color: 'grey',
    // breed: "scottish fold",
    // meow() {
        // console.log(`${this.name} says meow`)
        // }
// }
// 
// const cat2 = cat.meow
// 
// console.log(cat);
// 
// cat.meow()
// 
// cat2()

const numbers = [1,3,45,67,8,,5,5,5,345345,5,345,345,34,5,534,5,5];

numbers.forEach(function(el) {
    if(el % 2 === 0) {
        console.log(el);
    } 
})