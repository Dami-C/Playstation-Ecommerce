import NavBar from "./NavBar"
import Imgbanner from "./images/Hd2.jpg"
import Carousel from "./images/Carousel1.jpg"
import Carousel2 from "./images/Stars1.jpg"
const Header = () => {
  return (
    <div>
        <NavBar/>
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Imgbanner} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Carousel} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Carousel2} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <h1>Tienda Online</h1>
      </div>

    </div>
)
}

export default Header
