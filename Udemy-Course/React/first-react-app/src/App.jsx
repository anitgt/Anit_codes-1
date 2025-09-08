import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from "./ListPicker";
import DoubleDice from './DoubleDice';
import Heading from './Heading';

function App() {
  return (
    <>
    <Heading color='Magenta' text="Dice Game!" fontSize='20px'/>
    <Heading color='teal' text="Dice Game!" fontSize='30px'/>
      {/* <Chicken/>
      <Chicken/>
      <Chicken/>
      <Greeter person='Bill' from='Anit'/>
      <Greeter person='Bill' from='Admin'/>
      <Greeter person='Bill' from='Akle'/>
      <Greeter/>
      <Die num={20}/>
      <Die num={30}/>
      <Die num={40}/>
      <Die/> */}
      {/* <ListPicker values={[1,2,3]} />
      <ListPicker values={["a", "b", "c"]} /> */}
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </>
  )
}

export default App
