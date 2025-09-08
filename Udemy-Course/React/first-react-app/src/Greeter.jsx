export default function Greeter({ person='admin', from='anon' }) {
    return (
        <>
    <h1>hI THERE, {person}!</h1>
    <h2>-{from}</h2>
    </>
    )
}