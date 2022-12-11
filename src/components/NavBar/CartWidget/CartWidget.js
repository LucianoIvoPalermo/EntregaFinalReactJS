import './CartWidget.css'
import carrito from './../../../assets/Images/carrito.png' 
import { useContext } from 'react';
import { cartContext } from '../../../context/CartProvider';

const CartWidget = () => {
   const {cart} = useContext(cartContext);
  return (
    <>
      <div className='cartContainer'>
      <img className="nav-cart" src={carrito} alt="cart widget"/>
      <h5 className='cartLength'>{cart.length > 0 && cart.length}</h5>
      </div> 
    </>
  )
};

export default CartWidget