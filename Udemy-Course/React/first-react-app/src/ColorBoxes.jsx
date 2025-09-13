import { useState } from 'react'
import './ColorBoxes.css'

function randomChoice(arr) {
    const randomIndx = Math.floor(Math.random() * arr.length) + 1;
    return arr[randomIndx];
}

function ColorBoxes({ colors }) {
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors)
        setColor(randomColor);
    }
    return ( <>
        <div className="color-boxes" onClick={changeColor} style={{backgroundColor: color}}>
        </div>
        
    </>
    )
}

export default ColorBoxes