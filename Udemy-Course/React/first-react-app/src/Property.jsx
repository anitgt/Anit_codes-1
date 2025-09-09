export default function property({name, price, rating}) {
    return (
    <>
    <h2>{name}</h2>
     <h3>${price}</h3>
    <h4>{rating} Star</h4>
    </>
    )
}