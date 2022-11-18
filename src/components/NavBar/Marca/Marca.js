import "./Marca.css"
import logo from '../../../assets/Images/logo.png'
import { Link } from "react-router-dom"

const Marca = () => {
  return (
    <div className="logo">
      <Link to='/'>
        <img className="nav-logo" src={logo} alt="logo farmacia"/>
      </Link>
    </div>
  )
}

export default Marca