// function rollDie(numSides) {
    // return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie());

function greet(person, msg = 'Hey there', punc = '!') {
    console.log( `${msg}, ${person}!`);
}

greet("pondu", "hiiii", "!!!!")