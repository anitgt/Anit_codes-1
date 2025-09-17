import { useState } from "react"


function ScoreKeep({numPlayers, target = 10}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    const increment = (indx) => {
        setScores(prevScores => {
            const copy = [...prevScores];
            copy[indx] += 1;
            return copy
        })
    }
    const reset = () =>  {
        setScores(new Array(numPlayers).fill(0))
    }
    
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((scores, indx) => {
                    return <li key={indx}> 
                    Player{indx +1}: {scores}
                    <button onClick={() => increment(indx)}>1</button>
                {scores >= target && 'Winner'}
                    </li>
                })}
                <button onClick={reset}>Reset</button>
            </ul>
        </div>
    )
}

export default ScoreKeep