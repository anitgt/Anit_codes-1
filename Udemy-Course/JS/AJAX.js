//Json api file here

//const api = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd'

//Json file here 

// const data = '{"bitcoin": { "usd": 65890 }, "ethereum": { "usd": 3500 }}';


//json to js object 

// const newData = JSON.parse(data)

//js object  to JSON 

// const dog = {
//     breed: 'lab',
//     color: 'black',
//     isAlive: true,
//     owner: 'Not Me'
// }

// const newJSON = JSON.stringify(dog);

//Making XHRs

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log('It loaded');
//     // console.log(this.responseText)

//     const jsObject = JSON.parse(this.responseText)
//     //console.log(jsObject);
//     console.log(jsObject.name, jsObject.height)
// }

// req.onerror = function() {
//     console.log('Error');
//     console.log(this)
// }
// req.open("GET", 'https://swapi.info/api/people/1');
// req.send();


//using fetch :-
// fetch('https://swapi.info/api/people/1')
//     .then(res => {
//         console.log('resolved', res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//         console.log(data.height)
//         return fetch('https://swapi.info/api/people/2')     
//     })

//     .then((res2) => {
//         console.log('Second req done!')
//         console.log(res2);
//         return res2.json()
//     })

//     .then((data) => console.log(data))

//     .catch((e) => {
//         console.log('Error', e)
//     })

//using async function :-
// 
// const loadStarWarsPeople = async () => {
//     try {
//         const res = await fetch('https://swapi.info/api/people/1');
//         const data = await res.json();
//         console.log(data);

//         const res2 = await fetch('https://swapi.info/api/people/2');
//         const data2 = await res2.json();
//         console.log(data2)
//     }

//     catch (e) {
//         console.log('Error');
//         console.log(e);
//     }
    
// }

// loadStarWarsPeople()


//Axios :-
// 
// axios.get('https://swapi.info/api/psgsgffdrfveople/1')
//     .then((res) => {
//         console.log('Data:',res)
//     })
//     .catch((e) => {
//         console.log('Error');
//         console.log(e)
//     })

//axio in async function :- 

// const loadStarWarData = async (id) => {
//     try {
//     const data = await axios.get(`https://swapi.info/api/people/${id}`);
//     console.log(data.data);
//     }

//     catch(e) {
//         console.log('Error', e)
//     }
// }

// loadStarWarData(99)
// loadStarWarData(10)
// loadStarWarData(5)
// loadStarWarData(5)
// loadStarWarData(55)
// loadStarWarData(33)

//Headers with axios:- 

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    //console.log(jokeText)
    const newLi = document.createElement('Li');
    newLi.innerText = jokeText;
    jokes.append(newLi);
}


const getDadJoke = async () => {
    try {
        const config = {headers: { Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke
    }
    catch(e){
        console.log(e.message)
        return 'No jokes available sorry'
        
    }
    
}

button.addEventListener('click', addNewJoke);

