import CartWidget from "./CartWidget"
import Logo from "./images/logoplaystation.svg"
import Button from 'react-bootstrap/Button';

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-light">
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
            <li className="nav-item">
                <a className="text-bg-light nav-link" aria-current="page" href="index.html">Productos</a>
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
</nav>
)
}

export default NavBar


/* <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-light">
        <div className="navbarcontainer container-fluid">
            <div></div>
            <div className="container container__logo">
                <a href="index.html">
                    <img className="anim__logo" src={Logo} alt="logo" width="35px" height="35px" />
                </a>
            </div>
                <Button className="bg-dark navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
            <div className="container text-center navbar-collapse collapse" id="navbarText">
                <div className="me-auto navbar-nav mb-2 mb-lg-0">
                    <a className="text-decoration-none p-3 nav-link" aria-current="page" href="../../index.html">Home</a>
                    <a className="text-decoration-none p-3 nav-link" aria-current="page" href="../../index.html">Productos</a>
                    <a className="text-decoration-none p-3 nav-link" aria-current="page" href="../../index.html">Nosotros</a>
                </div>
            </div>             
        </div>    
        <div className="container col-1">
            <CartWidget className=""/>
        </div>           
    </nav> */