import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <CartProvider className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/'element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>   
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
