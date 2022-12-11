import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ productList }) => {
  return (
    <div className="productBox">
    {productList.map((product)=> (
        <Item key={product.id} producto={product}></Item>
        ))}
    </div>
  )
}

export default ItemList