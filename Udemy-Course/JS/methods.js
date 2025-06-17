const myMath = {
    PI: 3.141,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

console.log(myMath.cube(389));

const cat = {
    name: 'Blue steele',
    color: 'grey',
    breed: "scottish fold",
    meow() {
        console.log(`${this.name} says meow`)
        }
}

const cat2 = cat.meow

console.log(cat);

cat.meow()

cat2()