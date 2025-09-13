import { useState } from 'react'

function generateGameBoard() {
    console.log('Generating game board...')
    return Array(5000)
}

function Practice() {
    const [board, setBoard] = useState(generateGameBoard)
 return (
    <button onClick={() => setBoard("Setted")}>Click Me To Change State</button>
 )
}
 export default Practice