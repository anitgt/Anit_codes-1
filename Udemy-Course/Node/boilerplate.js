const fs = require('fs');
const folderName = process.argv[2] || 'Project'


//console.log(fs)

// fs.mkdir('Dogs', { recursive: true}, (err) => {
//     console.log('In then callback')
//     if(err) throw err;
// });

// fs.mkdirSync('Cats');
// console.log('I come ater mkdir');
// 

try {
        
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '')
fs.writeFileSync(`${folderName}/app.js`, '')
fs.writeFileSync(`${folderName}/app.css`, '')

}
catch (err) {
    console.log('Something Went wrong!');
    console.log(err)
}