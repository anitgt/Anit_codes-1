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

// console.log(newUser)
// 

// function sum(){
    // return arguments.reduce((total, el) => total + el)
// };

// function sum(...nums) {
    // return nums.reduce((total, el) => total + el)
// }
// 
// console.log(sum(2423,42,34,2))

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to ${gold}`)
    console.log(`Gold medal goes to ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse}`)
};

// raceResults('adas', 'dadasd', 'adsaknjdiluahd', 'fsaf','afaf')


const scores = [13,13,12,3,123,123,12,312,31,2312,3];

const [gold, silver, bronze, ...everyoneElse] = scores;
// 
// console.log(gold)
// console.log(everyoneElse)

const user = {
    email: 'abc@gmail.com',
    password: 123,
    firstName: 'abc',
    lastName: 'xyz',
    born: 2004,
    died: 2012,
    bio: 'he was a very nice person,',
    city: 'Francisco',
    state: 'Calafornia'
}

const { email, password } = user

const { born: birthYear, died: deathYear , status = 'positive'} = user

// function fullName(user) {
    // const {firstName , lastName} = user;
    // return `${firstName} ${lastName}`
// }

function fullName({firstName , lastName}) {
    return `${firstName} ${lastName}`
}

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

    movies.filter((movie) => movie.score > 9);

    movies.filter(({score}) => score >= 9)

    movies.map((movie) => {
        return `${movie.title} ${movie.year} is rated ${movie.score}`
    })

    movies.map(({title, score, year}) => {
        return `${title} ${year} is rated ${score}`
    })