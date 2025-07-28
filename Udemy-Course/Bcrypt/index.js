const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(hash)
//     console.log(salt)
// };

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash)
};



const login = async (pw, hashedpw) => {
   const result =  await bcrypt.compare(pw, hashedpw);
   if(result) {
    console.log('Logged you in')
   } else {
    console.log('Incorrect')
   }
}

hashPassword('monkey');

login('monkey', '$2b$12$akndHmYH.Bo.m00.ubUp.e8VBsnV8LzG1oH2tSsuJuW4RHe73SgKa')
