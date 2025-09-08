export default function Die({ num }) {
    const roll = Math.floor(Math.random() * num) + 1;
    return (
        <>
        <p> {num} sided Die roll: {roll}</p>
        </>
    )
}