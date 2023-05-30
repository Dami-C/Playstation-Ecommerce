import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"
import Logo from "./images/logoplaystation.svg"
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
return (
    <Nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-light">
        <div id="nav-modif" className="container-fluid">
            <div className="container">
                <NavLink className="navbar-brand" to={"/"}>
                    <img className="" src={Logo} alt="logo" width="35px" height="35px" />
                </NavLink>
            </div>
            <Button className="bg-dark navbar-toggler collapsed" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="text-center collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="text-bg-light nav-link" aria-current="page" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="text-bg-light nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={"/category/consolas"}>Consolas</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/category/accesorios"}>Accesorios</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/category/indumentaria"}>Indumentaria</NavLink></li>
                            </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="text-bg-light nav-link" aria-current="page" to={"/"}>Nosotros</NavLink>
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