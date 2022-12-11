import "./Marca.css"
import logo from '../../../assets/Images/logo.png'
import { NavLink } from "react-router-dom"

const Marca = () => {
  return (
    <div className="logo">
      <NavLink to='/'>
        <img className="nav-logo" src={logo} alt="logo farmacia"/>
      </NavLink>
    </div>
  )
}

export default Marca