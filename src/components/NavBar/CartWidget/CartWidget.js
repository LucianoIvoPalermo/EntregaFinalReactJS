import cart from '../../../assets/images/carrito.png'
import './CartWidget.css'

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