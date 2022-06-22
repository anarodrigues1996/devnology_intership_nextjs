import { useState } from 'react'

export default function NavBar() {

    const [menu, setMenu] = useState(true);

    function toogleMenu()
    {
      setMenu(!menu)
    }

    return (
        <nav className="navbar navbar-expand-sm position-absolute w-100">
          <div className="container">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={toogleMenu}>
            {
              !menu &&
              <img src="/img/hamburguer.svg" height="24" />
            }
            {
              menu &&
              <img src="/img/hamburguer-aberto0.svg" height="24" />
            }
          </button>

            <a href="#">
              <img src="/img/logo-in8-dev.svg" height="35" />
            </a>

            {
              menu &&
              <div className="ml-auto myMenu" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#signUp">cadastro</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#list">lista</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#aboutme">sobre mim</a>
                </li>
              </ul>
              </div>
            }

          </div>

        </nav>
    )
}
