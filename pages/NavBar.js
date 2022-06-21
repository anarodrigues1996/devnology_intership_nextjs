
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm position-absolute w-100">
          <div className="container">

            <a href="#">
              <img src="/img/logo-in8-dev.svg" height="35" />
            </a>
            <ul className="navbar-nav ml-auto">
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

        </nav>
    )
}
