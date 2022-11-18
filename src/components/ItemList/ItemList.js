import Item from "../Item/Item"


const ItemList = ({ productList }) => {
  return (
    <>
    {productList.map((product)=> (
        <Item key={product.id} producto={product}></Item>
        ))}
    </>
  )
}

export default ItemList