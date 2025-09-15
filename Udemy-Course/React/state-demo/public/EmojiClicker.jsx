import { useState } from "react"
import { v4 as uuid } from 'uuid'

function EmojiClicker() {
    const Emoji = ["👍", "💕", "🙌", "😊"];
    const randomEmoji = Emoji[Math.floor(Math.random()* Emoji.length)]
    
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji}]);
    const AddEmoji = () => {
        setEmojis(oldEmojis => 
            [...oldEmojis, {id: uuid(), emoji: randomEmoji}]
        );
    };
    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
        return  prevEmojis.filter(e => e.id !== id)
        });
    }
    const makeEverythingHeart = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map(e => {
                return {...e, emoji: '❤️'}
            })
        })
    }
    return (
        <div>
            {emojis.map(e => 
            <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: '4rem'}}>
                {e.emoji}
            </span>
            )}
            <button onClick={AddEmoji}>Add emoji!</button>
            <button onClick={makeEverythingHeart}>Make them all hearts!</button>
        </div>
    )
}

export default EmojiClicker;