import {Link, NavLink} from 'react-router-dom'
import "./Navbar.scss"
import brand from "../images/brand.png"
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return( 
  <header>
    <div className="fixed-top">
      <div className="items-align">
      <Link to="/" id="brand" className="nav-branding"><img src={brand} alt=''/></Link>
        <nav className="navbar">
          
          <ul className={toggleMenu ? "nav-menu active"  : "nav-menu"} >
            <li className="nav-item">
              <NavLink className="nav-link" to="/"onClick={() =>  setToggleMenu(false)}>Domů</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio"onClick={() =>  setToggleMenu(false)}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/noviky" onClick={() =>  setToggleMenu(false)}>Noviky</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cenik" onClick={() =>  setToggleMenu(false)}>Ceník</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/o-mne" onClick={() =>  setToggleMenu(false)}>O mně</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/kontakt" onClick={() =>  setToggleMenu(false)}>Kontakt</NavLink>
            </li>
          </ul>
          <div className={toggleMenu ? "hamburger active"  : "hamburger"} onClick={() =>  setToggleMenu(!toggleMenu)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
        </div>
      </div>
  </header>
  )
}

export default Navbar