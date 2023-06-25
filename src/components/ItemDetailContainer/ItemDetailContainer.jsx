import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setItem({id:resultado.id, ...resultado.data()});
            setLoading(false);
        });
    }, [id])

    return (
        <>
            {loading ? <Loading /> : <ItemDetail producto={item} />}
        </>
    )
}

export default ItemDetailContainer;