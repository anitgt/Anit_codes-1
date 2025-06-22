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