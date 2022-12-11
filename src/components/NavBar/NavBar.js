import Marca from "./Marca/Marca"
import './NavBar.css'
import "./CartWidget/CartWidget"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Marca></Marca>
        <h1 className="nav-title">Green Cross</h1>
        <ul className="nav-list">
          <li className="nav-items">
          <NavLink to='/'>Inicio</NavLink>
          </li>
          <li className="nav-items">
          <NavLink to='/category/medicamentos'>Medicamentos</NavLink>
          </li>
          <li className="nav-items">
          <NavLink to='/category/insumos'>Insumos</NavLink>
          </li>
          <li className="nav-items">
          <NavLink to='/category/perfumeria'>Perfumes</NavLink>
          </li>
        </ul>
        <NavLink to="/Cart"><CartWidget/></NavLink>
      </div>
    </>
    )
}

export default NavBar