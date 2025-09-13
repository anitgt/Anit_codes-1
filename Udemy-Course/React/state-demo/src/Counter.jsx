import { use, useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrementBy1() {
        setCount(count + 1);
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
        </div>
    )
}

export default Counter