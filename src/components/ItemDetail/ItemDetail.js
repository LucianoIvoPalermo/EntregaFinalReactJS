

const ItemDetail = ({ productSelected }) => {
  return (
      <div style={{ border:'3px solid black', display:'flex', backgroundColor:'green'}}>
      <img style={{width:'200px', display: 'flex'}} alt={productSelected.name} 
      src={`/images/${productSelected.image}.jpg`}/>
        <div style={{ border:'3px solid blue' }}>
        <h2>{productSelected.name}</h2>
        <h2>Fórmula: {productSelected.formula}</h2>
        <h2>Precio: {productSelected.price}</h2>
        </div>
    </div>
      )
}

export default ItemDetail
