import { Link, NavLink } from 'react-router-dom'
import "./Navbar.scss"
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>

      <div className="items-align">
        <Link to="/" id="brand" className="nav-branding">FOTOGRAFIE OD HANKY</Link>
        <nav className="navbar">

          <ul className={toggleMenu ? "nav-menu active" : "nav-menu"} >
            <li className="nav-item">
              <NavLink className="navbar-link" to="/" onClick={() => setToggleMenu(false)}>Domů</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-link" to="/portfolio" onClick={() => setToggleMenu(false)}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-link" to="/noviky" onClick={() => setToggleMenu(false)}>Novinky</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-link" to="/cenik" onClick={() => setToggleMenu(false)}>Ceník</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-link" to="/o-mne" onClick={() => setToggleMenu(false)}>O mně</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-link" to="/kontakt" onClick={() => setToggleMenu(false)}>Kontakt</NavLink>
            </li>
            <li className="menu-wrap nav-item">
              <ul className="menu">
                <li className="menu-item">
                  <div className='navbar-link navbar-toggle'>Další</div>
                  <ul className="drop-menu">
                    <li className="nav-item drop-menu-item">
                      <NavLink className="navbar-link" to="/clanky" onClick={() => setToggleMenu(false)}>Články</NavLink>
                    </li>
                    <li className="nav-item drop-menu-item">
                      <NavLink className="navbar-link" to="/obchodni-podminky" onClick={() => setToggleMenu(false)}>Obchodní podmínky</NavLink>
                    </li>
                    <li className="nav-item drop-menu-item">
                      <NavLink className="navbar-link" to="/informace-k-foceni" onClick={() => setToggleMenu(false)}>Informace k focení</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <div className="small-size-menu">
              <li className="nav-item drop-menu-item">
                <NavLink className="navbar-link" to="/clanky" onClick={() => setToggleMenu(false)}>Články</NavLink>
              </li>
              <li className="nav-item drop-menu-item">
                <NavLink className="navbar-link" to="/obchodni-podminky" onClick={() => setToggleMenu(false)}>Obchodní podmínky</NavLink>
              </li>
              <li className="nav-item drop-menu-item">
                <NavLink className="navbar-link" to="/informace-k-foceni" onClick={() => setToggleMenu(false)}>Informace k focení</NavLink>
              </li>
            </div>
          </ul>
          <div className={toggleMenu ? "hamburger active" : "hamburger"} onClick={() => setToggleMenu(!toggleMenu)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default Navbar