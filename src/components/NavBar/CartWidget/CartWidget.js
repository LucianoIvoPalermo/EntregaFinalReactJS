import cart from '../../../assets/Images/carrito.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'


const CartWidget = () => {
   
  return (
    <>
      <div className='cart'>
        <img className="nav-cart" src={cart} alt="cart widget"/>
      </div> 
    </>
  )
}

export default CartWidget