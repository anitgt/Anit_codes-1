import TextField from "@mui/material/TextField";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box"

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
    <Box sx={{border: '1px solid red', p:2, width:300, height:300, margin: "0 auto",}}>
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
    </Box>
  );
}
