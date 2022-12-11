import { useState, useContext } from "react";
import { cartContext } from '../../context/CartProvider'; 
import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ productSelected }) => {

  const [count, setCount] = useState(1)
  const { cart, addToCart } = useContext (cartContext);
  

  return (
    <div className='iContainer'>
      <div>
        <img className='detailImage' 
          alt={productSelected.name}
          src={`/images/${productSelected.imageId}`}
        />
      </div>
      <div className='iLetra'>
        <h3>{productSelected.name}</h3>
        <h3>Descripción: {productSelected.description}</h3>
        <h3>Precio: ${productSelected.price},00</h3>
        <h5>Categoría: {productSelected.categoryId}</h5>
        <h4>En stock: {productSelected.stock}</h4>
        <h3>Cantidad de productos seleccionados: {count}</h3>
        <ItemCount setCount={setCount}></ItemCount>
        <button onClick={()=> addToCart(productSelected, count)}>Agregar al carrito</button>
        <NavLink to="/cart"><h4>Ir a mis compras</h4></NavLink>
      </div>
    </div>
  )
}

export default ItemDetail
