import { NavLink } from "react-router-dom"
import './Item.css'

const Item = ({ producto }) => {
  return (
    <div className="item">
        <img className="productImg" alt={producto.name}
          src={`/images/${producto.imageId}`} />
      <div className="letra">
        <h3>Nombre del producto:
          <NavLink to={`/item/${producto.id}`}>{producto.name}
          </NavLink>
        </h3>
        <h4>Fórmula: {producto.description}</h4>
        <h4>Precio: ${producto.price},00</h4>
      </div>
    </div>
  )
}

export default Item