/* const userInput = prompt("Enter a message: ")

if(userInput) {
    console.log("truthy")
} else {
    console.log("falsy")
} */

/*     if(0) {
        console.log("truthy")
    } else {
        console.log("falsy")
    } */

const password = prompt("Enter your password: ");

if(password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid pass")
} else {
    console.log("Incorrect passwrod")
}