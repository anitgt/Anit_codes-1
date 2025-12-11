import { useState } from 'react'

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AlarmIcon  from "@mui/icons-material/Alarm"

function App() {

  return (
    <>
      <div>
        <Button variant="contained"onClick={()=> alert("working")} >Contained</Button>
        <Button variant="text">Contained</Button>
        <Button variant="outlined">Contained</Button>
        <Button color='success' size='small' variant="outlined">Contained</Button>
      
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon/>
        </IconButton>
      </div>
    </>
  )
}

export default App
