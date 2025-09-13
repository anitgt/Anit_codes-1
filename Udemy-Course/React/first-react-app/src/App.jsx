import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from "./ListPicker";
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots'
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import ShoppingList from './ShoppingList';
import Form from './Form';
import ClickerE from './ClickerE';
import Counter from './Counter';
import Toggler from './Toggler';
import ToggleCounter from './ToggleCounter';
import ColorBoxes from './ColorBoxes';
import ColorBoxGrid from './ColorBoxGrid';


// const data = [
//   {id: 1, item: 'eggs', quantity: 12, completed: false},
//   {id: 2, item: 'milk', quantity: 1, completed: true},
//   {id:3, item: 'toast', quantity: 4, completed: false},
// ];

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
//];


function App() {
  return (
    <>
    {/* <Heading color='Magenta' text="Dice Game!" fontSize='20px'/>
    <Heading color='teal' text="Dice Game!" fontSize='30px'/> */}
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
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "brown", "black"]}/>
      <ColorList colors={["teal", "aqua", "blue"]}/> */}
      {/* <Slots val1="Hello1" val2="Hi" val3="Hey"/>
      <Slots val1="Hello" val2="Hello" val3="Hello"/> */}
      {/* <ShoppingList items = {data}/> */}
      {/* <PropertyList array={properties}/> */}
      {/* <Clicker /> */}
      {/* <Form/> */}
      {/* <ClickerE message="Hi!" buttonText={"please click me!"}/>
      <ClickerE message="please stop clicking me!" buttonText="Do not Click"/> */}
      {/* <Counter /> */}
      {/* <Toggler /> */}
      {/* <ToggleCounter /> */}
      {/* <ColorBoxes colors = {[
        "#E88AB3", // Soft Pink
  "#3D9CF5", // Sky Blue
  "#6CCF7E", // Fresh Green
  "#F6D64A", // Warm Yellow
  "#8C5A32", // Earthy Brown
  "#392D73", // Deep Indigo
  "#FF7F4F", // Orange Coral
  "#7BE1E7", // Icy Cyan
  "#9E59B2", // Royal Purple
  "#2A2A2A"
      ]}/> */}
      <ColorBoxGrid colors = {[
        "#E88AB3", // Soft Pink
  "#3D9CF5", // Sky Blue
  "#6CCF7E", // Fresh Green
  "#F6D64A", // Warm Yellow
  "#8C5A32", // Earthy Brown
  "#392D73", // Deep Indigo
  "#FF7F4F", // Orange Coral
  "#7BE1E7", // Icy Cyan
  "#9E59B2", // Royal Purple
  "#2A2A2A"
      ]}/>  
    </>
  )
}

export default App
