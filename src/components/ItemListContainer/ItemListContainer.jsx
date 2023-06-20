import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../asyncMock.json";
import ItemList from "../ItemList/ItemList";
import { getFirestore, collection, getDocs, where, query, addDoc } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    //Proceso de importacion 
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     productos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("Productos cargados desde Firestore!");

    // },[]);

    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? productos.filter(item => item.categoria === id) : productos);
    //         }, 1000);
    //     });

    //     promesa.then(data => {
    //         setItems(data);
    //     });
    // }, [id]);

    // Acceder a una coleccion de documentos desde Firestore
        useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
            getDocs(q).then(resultado => {
                if (resultado.size > 0) {
                    setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                } else {
                    console.error("Error! No se encontraron productos en la colección!");
                }
            })
        }, [id]);

    return (
        <div className="container my-5">
            <div className="row">
                <ItemList productos={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;