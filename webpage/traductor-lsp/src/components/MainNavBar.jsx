import "./MainNavBar.css"
import { useState } from "react";

function MainNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main-nav-bar">
      <div className="container navbar-content">
        {/* Logo lado izquierdo */}
        <div className="navbar-left">
          <span className="logo">🌐</span>
        </div>

        {/* Secciones del medio */}
        <ul className="navbar-center">
          <li><a href="#">Diccionario</a></li>
          <li><a href="#">Traductor</a></li>

          {/* Sección con desplegable */}
          <li className="dropdown">
            <a href="#" onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
              Aprender LSP ▾
            </a>
            {open && (
              <ul className="dropdown-menu">
                <li><a href="#">Abecedario</a></li>
                <li><a href="#">Palabras</a></li>
                <li><a href="#">Oraciones</a></li>
                <li><a href="#">Práctica Real</a></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Botones lado derecho */}
        <div className="navbar-right">
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
