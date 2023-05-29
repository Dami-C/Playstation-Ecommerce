import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import Imgbanner from "./images/header.png"
import Imgvr2 from "./images/section3b-headset.png"

const Header = () => {
  return (
    <div>
        <NavBar/>

        <div className="container-fluid p-0 position-relative d-flex">

            <img className="w-100 d-flex container-fluid position-absolut" src={Imgbanner} alt="banner" />

          <div className="d-flex row container container-fluid position-absolute top-50 start-50 translate-middle ">

            <div className="d-flex container flex-column col-5">
              <h1 className="col-12 bg-light ">Playstation VR2 Sense</h1>
              <p className="col-12 bg-light">Experimenta la nueva generacion de juegos de realidad virtual con impresionantes efectos visuales 4K HDR,
              juegos que definen el género y sensaciones únicas gracias al casco Playstation VR2 y al control Playstation VR Sense</p>
            </div>

            <div className="d-flex col-7"> 
              <img className="col end" width={`100%`} src={Imgvr2} alt="Playstation VR2 Sense" />
            </div>

            <p className="position-absolute align-self-end col-12">Haz Click para ver todos nuestros productos</p>

          </div>
          
        </div>  

        <ItemListContainer greeting={'Bienvenidos'}/>

    </div>
  )
}

export default Header
