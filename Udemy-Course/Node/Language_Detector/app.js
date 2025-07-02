const { franc } = require('franc')
const langs = require('langs')
const colors = require('colors')

const userInput = process.argv.slice(2).join(' ');

const langCode = franc(userInput)


// try {
// const langName = conversion.name;
// console.log(langName);
// } catch(e) {
//     console.log('Could not match language, Please try again')
// }

if(langCode === 'und') {
    console.log("Try a longer sentence".red);
} else {
    const conversion = langs.where('3', langCode);
    const langName = conversion.name;
    console.log(`Best Guess is: ${langName}`.green)
}
