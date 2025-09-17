import './App.css'
import Counter from './Counter'
import Practice from './practice'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from '../public/EmojiClicker'
import ScoreKeep from './ScoreKeep'

function App() {
  return (
    <>
     {/* <h1>State Demo</h1> */}
      {/* <Counter /> */}
      {/* <Practice /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker/> */}
      <ScoreKeep numPlayers={10}/>
    </>
  )
}

export default App
