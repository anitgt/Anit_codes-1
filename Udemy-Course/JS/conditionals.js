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

/* const password = prompt("Enter your password: ");

if(password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid pass")
} else {
    console.log("Incorrect passwrod")
} */

/* const age = -100;


if(age> 0 && age <5 || age >= 65) {
    console.log('free')
} else if(age>=5 && age <10) {
    console.log("10$")
} else if(age>=10 && age <65) {
    console.log("20$")
} else {
    console.log("invalid")
} */

/* const firstname = prompt("Enter Your first name: ");

 if(!firstname) {
    firstname = prompt("try again");
} */

/* const age = 8;

if(!(age >= 0 && age <5 || age>=65)) {
    console.log("you are not a baby or a senior")
} */



const day = 8;

switch(day) {
    case 1:
        console.log("monday");
        break
    case 2: 
        console.log("tuesday");
        break
    case 3:
        console.log("wednesday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
    case 7:
        console.log("weekend");
        break
    
    default:
        console.log("i dont know")
}