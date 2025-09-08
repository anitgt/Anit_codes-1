export default function DoubleDice() {
    const num1 = Math.floor(Math.random() *3) + 1;
    const num2 = Math.floor(Math.random() *3) + 1;
    const isWinner = num1 === num2
    const styles = {color: isWinner? "green" : "red" }
    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice:</h2>
            {isWinner && <h3>You Win!</h3>}
            <p>Number 1: {num1} & Number 2: {num2}</p>
        </div>
    )
}


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() *3) + 1;
//     const num2 = Math.floor(Math.random() *3) + 1;
//     return (
//         <div>
//             <h2>Double Dice:</h2>
//             {num1 === num2 ? <h3>You Win!</h3> : null}
//             <p>Number 1: {num1} & Number 2: {num2}</p>
//         </div>
//     )
// }


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() *3) + 1;
//     const num2 = Math.floor(Math.random() *3) + 1;
//     return (
//         <div>
//             <h2>{ num1 === num2 ? "You Win!" : "You Loose!"}</h2>
//             <p>Number 1: {num1} & Number 2: {num2}</p>
//         </div>
//     )
// }


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() *3) + 1;
//     const num2 = Math.floor(Math.random() *3) + 1;
//     const result = num1 === num2 ? "You Win!" : "You Loose!"
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>Number 1: {num1} & Number 2: {num2}</p>
//         </div>
//     )
// }