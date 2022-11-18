import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <div style={{ border:'3px solid black', display:'flex', backgroundColor:'green'}}>
      <img style={{width:'200px', display: 'flex'}} alt={producto.name} 
      src={`/images/${producto.image}.jpg`}/>
        <div style={{ border:'3px solid blue' }}>
        <h1>Nombre del producto:<Link to={`item/${producto.id}`}>{producto.name}
        </Link>
        </h1>
        <h2>Fórmula: {producto.formula}</h2>
        <h2>Precio: {producto.price}</h2>
        </div>
    </div>
  )
}

export default Item