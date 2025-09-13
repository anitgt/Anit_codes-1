import ColorBoxes from "./ColorBoxes"
import './ColorBoxGrid.css'

function ColorBoxGrid({ colors }) {
    const boxes = [];
    for (let i =0; i < 25; i++) {
        boxes.push(<ColorBoxes colors= {colors} />
        )
    }
    console.log(boxes)
        return (
        <div className="color-box-grid">
            {boxes}
        </div>
    )
}


export default ColorBoxGrid