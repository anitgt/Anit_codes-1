import TextField from "@mui/material/TextField";
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function FormDemo() {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState(50);
    const updateName = (e) => {
        setName(e.target.value)
    }
    const handleVolume = (e, newVal) => {
        setVolume(newVal)
    }
  return (
    <div>
        <h1>Name: {name}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Fido"
        label="Outlined"
        variant="outlined"
        value={name}
        onChange={updateName}
      ></TextField>
       <h2>Volume is: {volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={handleVolume}/>
    </div>
  );
}
