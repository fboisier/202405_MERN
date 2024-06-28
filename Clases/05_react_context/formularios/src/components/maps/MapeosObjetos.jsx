import Producto from "./Producto";

const MapeosObjetos = () => {

    const verduras = [
        {
            nombre: 'tomates',
            color: 'rojo',
            cantidad: 11,
        },
        {
            nombre: 'lechuga',
            color: 'verde',
            cantidad: 12,
        },
        {
            nombre: 'zapallo',
            color: 'amarillo',
            cantidad: 13,
        },
        {
            nombre: 'zanahorias',
            color: 'naranja',
            cantidad: 14,
        }
    ]

    return (
        <div>
            {
                verduras.map((verdura, index) => {
                    const { nombre, color, cantidad } = verdura;
                    return (
                        <Producto
                            key={index}
                            color={color}
                            cantidad={cantidad}
                        >{nombre}</Producto>
                    )
                })
            }
        </div>
    )
}

export default MapeosObjetos