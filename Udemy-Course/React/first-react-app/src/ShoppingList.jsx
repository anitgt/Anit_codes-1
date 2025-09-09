function ShoppingList({items}) {
return (
    <ul>
        {items.map(i => <li style={{textDecoration: i.completed ? "line-through" : "", color: i.completed ? "grey" : "red" }}>{i.item} - {i.quantity} </li>)}
    </ul>
)
}


export default ShoppingList