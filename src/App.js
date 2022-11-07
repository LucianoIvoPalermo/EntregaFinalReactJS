import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <header>
      <NavBar/>
      <ItemListContainer name="Bienvenidos a la nueva experiencia de Green Cross"/>
    </header>
  );
}

export default App;
