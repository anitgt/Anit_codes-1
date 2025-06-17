// try {
    // hello.toUpperCase()
// } catch {
    // console.log("Error occured")
// }
// 
// console.log("After")

function yell(msg) {
    try{
        console.log(msg.toUpperCase().repeat(3));
    } catch (e){
        console.log(e);
        console.log("Number not supported")
    }
    
}

yell("hello");

yell(786)
