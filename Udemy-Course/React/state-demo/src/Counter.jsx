import { use, useState } from 'react'

function Counter() {
    console.log('Counter rendered')
    const [count, setCount] = useState(0);
    function handleIncrementBy1() {
        setCount(count + 1);
    }
    const setToTen = () => {
        setCount(10)
    }
    function handleIncrementBy3() {
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
    }   
    return (
        <div>
        <p>{count}</p>
        <button onClick={handleIncrementBy1}>Increment +1</button>
        <button onClick={handleIncrementBy3}>Increment +3</button>
        <button onClick={setToTen}>Set to ten!</button>
        </div>
    )
}

export default Counter