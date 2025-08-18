import "./MainNavBar.css"
import { useState } from "react";

function MainNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
        <div className="container navbar-content">
      {/* Logo lado izquierdo */}
      <div className="navbar-left">
        <span className="logo">🌐</span> 
      </div>

      {/* Secciones del medio */}
      <ul className="navbar-center">
        <li><a href="#">Sección 1</a></li>
        <li><a href="#">Sección 2</a></li>

        {/* Sección con desplegable */}
        <li className="dropdown">
          <button onClick={() => setOpen(!open)}>
            Sección 3 ▾
          </button>
          {open && (
            <ul className="dropdown-menu">
              <li><a href="#">Subsección A</a></li>
              <li><a href="#">Subsección B</a></li>
              <li><a href="#">Subsección C</a></li>
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
