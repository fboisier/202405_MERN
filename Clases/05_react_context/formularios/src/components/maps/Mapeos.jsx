import Producto from "./Producto"

const Mapeos = () => {

    const verduras = ['tomates', 'lechuga', 'zapallo', 'zanahorias']

    return (
        <div>
            {
                verduras.map((verdura, index) => {
                    return <Producto key={index}>{verdura}</Producto>
                })
            }
        </div>
    )
}

export default Mapeos