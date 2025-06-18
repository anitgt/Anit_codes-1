// function rollDie(numSides) {
    // return Math.floor(Math.random() * numSides) + 1;
// }

// function rollDie(numSides = 6) {
    // return Math.floor(Math.random() * numSides) + 1;
// }
// 
// console.log(rollDie());
// 
// function greet(person, msg = 'Hey there', punc = '!') {
    // console.log( `${msg}, ${person}${punc}`);
// }
// 
// greet("pondu", "hiiii")

const nums = [1,324,2,4,234,23,423,423,42,4,4,43,3,2,45,46,456,535,35,2,52];

// console.log(Math.max(...nums));
// 
// console.log(...nums);
// 
// console.log(...'hello')

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]
// 
// console.log(allPets)

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    isFurry: true,
    family: 'Caninae'
}
// 
// console.log({...feline, color: 'Black'})

const catDog = {...feline, ...canine, family: 'Colty'};
// console.log(catDog);
// 
// console.log({...[1,213,3,13,]})

const dataForm = {
    email: 'heyme@gmail.com',
    password: '123@abc',
    username: 'fumean'
}

const newUser = {...dataForm, id: 7878, isAdmin: false};

console.log(newUser)

