import "./Button.css"

function Button ({clickFunc}) {
 return <button onClick={clickFunc} className="Button">Click me</button>
}

export default Button;