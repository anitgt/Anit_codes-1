//Json api file here

const api = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd'

//Json file here 

const data = '{"bitcoin": { "usd": 65890 }, "ethereum": { "usd": 3500 }}';


//json to js object 

const newData = JSON.parse(data)

//js object  to JSON 

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: 'Not Me'
}

const newJSON = JSON.stringify(dog);

//Making XHRs

const req = new XMLHttpRequest();

req.onload = function () {
    console.log('It loaded');
    // console.log(this.responseText)

    const jsObject = JSON.parse(this.responseText)
    //console.log(jsObject);
    console.log(jsObject.name, jsObject.height)
}

req.onerror = function() {
    console.log('Error');
    console.log(this)
}

req.open("GET", 'https://swapi.info/api/people/1');
req.send();



