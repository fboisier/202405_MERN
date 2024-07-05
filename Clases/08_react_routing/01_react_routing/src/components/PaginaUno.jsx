import { useNavigate } from "react-router-dom"
import Tarjeta from "./Tarjeta"

const PaginaUno = () => {

    const navegate = useNavigate();

    const handleClickButton = () => {
        navegate("/dos/con_navegador", { state: { edad: 39 } });
    }

    return (
        <>
            <Tarjeta
                title="PaginaUno"
                image="https://picsum.photos/201/201"
                buttonText="Visitar Pagina DOS con Pancho"
                buttonUrl="/dos/pancho"
            />
            <button className="btn btn-danger" onClick={handleClickButton}>Ir a PaginaDos Con useNavegate</button>    
        </>
    )
}

export default PaginaUno