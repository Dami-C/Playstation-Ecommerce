import { Link, useParams } from "react-router-dom";
import Apu from "../images/Apu.jpg"
import Wsp from "../images/Wsp.jpg"

const ThankYou = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-light p-4" role="alert">
                        <img src={Apu} width={350} alt="Gracias por su compra" />
                        <h1 className="fs-1 text">Gracias por tu Compra!</h1>
                        <p className="fs-5">Tu Orden de Compra es: <b>{orderId}</b> puedes enviarla por:</p><Link target="_blank" to={"https://api.whatsapp.com/send/?phone=5491130271606&text=Hola%20Playstation%20mi%20n%C3%BAmero%20de%20Orden%20es:"} className="link-offset-2 link-underline link-underline-opacity-0"> <img src={Wsp} className="m-4" width={70} alt="Whatsapp"/> </Link>
                    </div>
                    <Link to={"../"}><button className="btn btn-primary"> Volver al Home </button></Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;