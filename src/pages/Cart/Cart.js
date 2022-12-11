import { useContext, useState, useEffect } from 'react'
import { cartContext } from '../../context/CartProvider'
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore'
import moment from 'moment/moment'
import './Cart.css'

const Cart = () => {
    const { cart, clearCart } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState ({
        name:'',
        phone:'',
        email:'',

    })

    const getTotalPrice = () => {
        setTotal (
            cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
            );
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'Orders');
        const newOrder = {
            buyer: {
                name: 'Mario',
                phone: '123456789',
                email: 'mario@hotmail.com',
            },
            date: moment().format('DD/MM/YYYY'),
            items: cart,
            total: total,
        };
        addDoc(query, newOrder)
        .then((response)=> {
            alert(`Orden creada con el id ${response.id}`)
            return(response)
        })
        .then((res)=> {
            cart.forEach((product)=>{
                const query = doc(db, 'products', product.id);
                updateDoc(query, {
                    stock: product.stock - product.quantity,
                });
            });
        })
        .catch((error) => console.log(error));
    };
    useEffect(()=>{
        getTotalPrice();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const handleInputChage = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className='saleContainer'>
            {cart.map((product) => (
                <div className='productBuy' key={product.id}>
                    <img
                        alt={product.name}
                        src={`/images/${product.imageId}`}
                    />
                    <h3>{product.name}</h3>
                    <h3>Descripción: {product.description}</h3>
                    <h3>Precio: ${product.price},00</h3>
                    <h5>Categoría: {product.categoryId}</h5>
                    <h5>Cantidad de productos: {product.quantity}</h5>
                </div>
            ))}
            <div className='dataBuy'>
                <button onClick={clearCart}>Vaciar el carrito</button>
                <h2>Cantidad de productos: {cart.length}</h2>
                <h2>Total: {total} </h2>
                <button onClick={createOrder}>Finalizar compra</button>
                <h2>Formulario</h2>
                <input name='name' type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChage}></input>
                <input name='phone' type="text" placeholder="Teléfono" value={formValues.phone} onChange={handleInputChage}></input>
                <input name='email' type="text" placeholder="Email" value={formValues.email} onChange={handleInputChage}></input>
            </div>
        </div>
    )
}

export default Cart