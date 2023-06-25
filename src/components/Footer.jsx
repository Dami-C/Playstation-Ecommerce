import fbIcon from "../components/images/facebook.svg";
import twIcon from "../components/images/twitter.svg";
import igIcon from "../components/images/instagram.svg";
import ytIcon from "../components/images/youtube.svg";
import LiIcon from "../components/images/linkedin.svg";
import GHIcon from "./images/github.svg";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container-fluid bg-primary text-white">
        <div className="row mx-auto d-flex justify-content-center footer-list__items pt-4">
            <div className="col col-md-4">
                <ul>
                    <li><h5>Compra Online</h5></li>
                    <li>Centro de ayuda</li>
                    <li>Cambios y Devoluciones</li>
                    <li>Defensa al Consumidor</li>
                    <li>Soporte y Garantía</li>
                </ul>
            </div>
            <div className="col col-md-4">
                <ul>
                    <li><h5>Noticias e Informacion</h5></li>
                    <li>Acerca de Sony</li>
                    <li>Informacion Corporativa</li>
                    <li>Sony y el Medio Ambiente</li>
                </ul>
            </div>
            <div className="col col-md-4">
                <ul>
                    <li><h5>Ventas Corporativas</h5></li>
                    <li>Para Profesionales</li>
                    <li>Contacto</li>
                </ul>
            </div>
            </div>
        <div className="d-flex">
          <a href="https://www.facebook.com/Latam.PlayStation/?locale=es_LA" target="_blank" rel="noreferrer">
            <img className="m-3" src={fbIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com/PlayStation_LA" target="_blank" rel="noreferrer">
            <img className="m-3" src={twIcon} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/playstation_la/?hl=es-la" target="_blank" rel="noreferrer">
            <img className="m-3" src={igIcon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/latamplaystation" target="_blank" rel="noreferrer">
            <img className="m-3" src={ytIcon} alt="YouTube" />
          </a>
        </div>
        <div className="row footer-text__items ">
          <div className="col-12 m-2">
            <ul className="d-flex flex-wrap justify-content-start ps-0 mb-0">
              <li className="m-3">Privacy Policy</li>
              <li className="m-3">ADA Compliance</li>
              <li className="m-3">Terms of Sale </li>
              <li className="m-3">Return Policy</li>
              <li className="m-3">Sitemap</li>
              <li className="m-3">Do Not Sell My Personal Information</li>
            </ul>
          </div>
        </div>
        <div className="d-column pb-2">
          <hr />
          <span className="fs-6"><span className="text-decoration-underline fs-6">Descargo de Responsabilidad:</span> Este sitio web es parte de una tarea práctica para un curso en  <Link to="https://www.coderhouse.com/" className="bg-dark text-warning" target="_blank" rel="noreferrer">CoderHouse</Link>  y fue creado con fines educativos. El contenido y las características se presentan para demostrar las habilidades adquiridas durante el curso. No debe considerarse como un sitio web real ni utilizarse con fines comerciales. La información puede no estar actualizada o precisa, y no se garantiza su disponibilidad o funcionalidad continua. El autor y Coder House no se hacen responsables del mal uso, daños o consecuencias derivadas del uso de este sitio web. Úselo únicamente con fines educativos y no tome decisiones basadas en la información proporcionada.</span>
          <span></span>
          <div className="d-flex justify-content-end gap-3">
            <span>Developed by <Link to="https://www.linkedin.com/in/damian-cordeiro-0b312a208/" className="bg-dark text-light" target="_blank" rel="noreferrer">Damian Cordeiro</Link></span>
            <Link to="https://www.linkedin.com/in/damian-cordeiro-0b312a208/" target="_blank" rel="noreferrer"><img src={LiIcon} alt="linkedin.com/in/DamianCordeiro" width={24} /></Link><Link to="https://github.com/Dami-C" target="_blank" rel="noreferrer"><img src={GHIcon} alt="GitHub Damian Cordeiro" width={24} /></Link>
          </div>
        </div>
      </div>
    )
}
export default Footer