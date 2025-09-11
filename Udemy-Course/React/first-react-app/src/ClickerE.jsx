export default function ClickerE({message, buttonText}) {
    return (
        <div>
            <button onClick={() => alert(message)}>{buttonText}</button>
        </div>
    )
}