// async function hello() {

// }

// const sing = async () => {
//     //throw 'Problem'
//     return 'lalala'
// }

// sing()
//     .then((data) => {
//         console.log('Promise is resolved with', data)
//     })
//     .catch((err) => {
//         console.log('Promise rejected');
//         console.log(err);
//         })


const login = async(username, password) => {
    if(!username || !password) throw 'Missing credentials';
    if(password === 123) return 'Welcome!'
    throw 'Invalid Pass'
}

login('', 13)
    .then((msg) => {
        console.log('Logged IN');
        console.log(msg)
    })
    .catch((err) => {
        console.log('Error')
        console.log(err)
    })


const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try{
        let data1 = await fakeRequestPromise('/page1');
        let data2 = await fakeRequestPromise('/page2');
        console.log(data1)
    } 
    catch (e){
        console.log('Caught a error')
        console.log(e)
    }
}