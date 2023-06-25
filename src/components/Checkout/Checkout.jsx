import { useContext, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Form, Navigate } from "react-router-dom";


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {Cart, clear, sumTotal} = useContext(CartContext);

    
    const generarOrden = () => {
        if (nombre.length === 0 || email.length === 0 || telefono.length === 0 || Cart.length === 0) {
            return false;
        }

        const buyer = { name: nombre, phone: telefono, email: email }
        const items = Cart.map(item => ({
            id: item.id || "",
            title: item.titulo || "",
            price: item.precio || 0,
            quantity: item.quantity || 0
        }));
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = { buyer: buyer, items: items, date: date, total: total };
        

        // Insertar un Documento en Firestore
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
            clear();
            
        })
        .catch(resultado => {
            console.log("Error! No se pudo completar la compra!");
        });
    }





    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <table className="table">
                        <tbody>
                            {
                                Cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td className="align-middle">{item.titulo}</td>
                                        <td className="align-middle">{item.cantidad} x ${item.precio}</td>
                                        <td className="align-middle text-center">${item.cantidad * item.precio}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                                <td className="align-middle text-center">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"../ThankYou/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;