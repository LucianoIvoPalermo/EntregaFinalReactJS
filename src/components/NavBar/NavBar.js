import Marca from "./Marca/Marca"
import Category from "./Category/Category"
import './NavBar.css'
import "./CartWidget/CartWidget"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Marca></Marca>
        <h1 className="nav-title">Green Cross</h1>
        <Category></Category>
        <CartWidget></CartWidget>
      </div>
    </>
    )
}

export default NavBar