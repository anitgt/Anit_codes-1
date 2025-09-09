import"./PropertyList.css"
import Property from "./Property"

export default function PropertyList({array}) {
    return (
        <div className="container">
            {array.map(p =>
             <div className="item" key={p.id}>
            <Property name={p.name} price={p.price} rating={p.rating}/>
            </div>
            )}
        </div>
    )
}