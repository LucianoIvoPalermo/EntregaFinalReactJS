import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/'element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>   
          <Route path='/cart' element={<CartWidget/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
