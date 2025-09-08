export default function Die({ num= 6 }) {
    const roll = Math.floor(Math.random() * num) + 1;
    return (
        <>
        <p> {num} sided Die roll: {roll}</p>
        </>
    )
}