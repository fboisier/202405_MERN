import { useLocation, useParams } from "react-router-dom";
import Tarjeta from "./Tarjeta"

const PaginaDos = () => {

    const { nombre } = useParams();
    const locate = useLocation();
    const { edad } = locate.state || 0;

    return (
        <Tarjeta
            title={`Esto es el titulo y su NOMBRE: ${nombre} con edad ${edad}`}
            image="https://picsum.photos/202/202"
            buttonText="Visitar PaginaTres"
            buttonUrl="/tres"
        />
    )
}

export default PaginaDos