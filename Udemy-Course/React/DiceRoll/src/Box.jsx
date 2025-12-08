import "./Box.css"
import { useState } from "react"

function Box({isActive, toggle}) {
  return <div onClick={toggle} className="Box" style={{backgroundColor: isActive? "black" : "red"}}></div>
}

export default Box