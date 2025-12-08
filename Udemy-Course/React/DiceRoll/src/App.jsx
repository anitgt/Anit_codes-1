import LuckyN from "./LuckyN";
import { sum } from "./utils" 
import BoxGrid from "./BoxGrid";

function lessThan4(dice) {
  return sum(dice) < 4
}
function allSameValue(dice) {
  return dice.every((v) => v === dice[0])
}

function App() {
  return (
    <>
    <BoxGrid/>
    {/* <LuckyN winCheck={lessThan4} title="Roll Less Than 4"/>
    <LuckyN winCheck={allSameValue} title="Roll the same number"/> */}
    {/* <Box />
    <Box />
    <Box /> */}
    </>
  )
}
export default App;
