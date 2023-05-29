import CartWidget from "./CartWidget"
import Logo from "./images/logoplaystation.svg"
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
return (
    <Nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-light">
        <div id="nav-modif" className="container-fluid">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img className="" src={Logo} alt="logo" width="35px" height="35px" />
                </a>
            </div>
            <Button className="bg-dark navbar-toggler collapsed" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="text-center collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="text-bg-light nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="text-bg-light nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="index.html">Consolas</a></li>
                                <li><a class="dropdown-item" href="index.html">Accesorios</a></li>
                                <li><a class="dropdown-item" href="index.html">Indumentaria</a></li>
                            </ul>
                    </li>
                    <li className="nav-item">
                        <a className="text-bg-light nav-link" aria-current="page" href="index.html">Nosotros</a>
                    </li>            
                </ul>
            </div>
            <div className="container col-1">
                <CartWidget className=""/>
            </div>
        </div>
    </Nav>
)
}

export default NavBar