import { useState } from "react"
import { v4 as uuid } from 'uuid'

function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "😁"}]);
    const AddEmoji = () => {
        setEmojis(oldEmojis => 
            [...oldEmojis, {id: uuid(), emoji: "😒"}]
        )
    }
    return (
        <div>
            {emojis.map(e => 
            <span key={e.id} style={{fontSize: '4rem'}}>{e.emoji}</span>
            )}
            <button onClick={AddEmoji}>Add emoji!</button>
        </div>
    )
}

export default EmojiClicker;