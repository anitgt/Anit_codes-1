function handleClick() {
    console.log("Clicked the button!")
}

function handleHover() {
    console.log('Hovered over paragraph!')
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover Over Me!</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}