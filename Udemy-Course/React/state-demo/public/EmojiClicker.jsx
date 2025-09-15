import { useState } from "react"

function EmojiClicker() {
    const [emojis, setEmojis] = useState(["😁"]);
    const AddEmoji = () => {
        setEmojis(oldEmojis => 
            [...oldEmojis, "👌"]
        )
    } 
    return (
        <div>
            {emojis.map(e => 
            <span style={{fontSize: '4rem'}}>{e}</span>
            )}
            <button onClick={AddEmoji}>Add emoji!</button>
        </div>
    )
}

export default EmojiClicker;