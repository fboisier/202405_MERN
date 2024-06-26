import PropTypes from 'prop-types'
import { useState } from 'react'
import Alerta from './Alerta'

const Contador = ({valorInicial}) => {

    // VARIABLES
    const [valor, setValor] = useState(valorInicial)


    // MANEJADORES
    const handleValor = () =>{ 
        if (valor >= 20){
            return setValor(0) 
        }
        setValor( valor + 1 )
    }


    // RENDER DEL JSX
    return (
        <>
            <div onClick={handleValor}>Contador va en {valor}</div>
            <p onClick={() => setValor(valor - 1)}>Resta!!!!</p>
            <button className='btn btn-primary' onClick={handleValor}>Aumentar</button>

            {
                (valor > 10 ) 
                    ? <Alerta tipo="info">Es mayor a 10</Alerta>
                    : <Alerta tipo="danger">Es menor a o igual 10</Alerta>
            }
        </>
    )
}

Contador.propTypes = {
    valorInicial: PropTypes.number.isRequired
}

export default Contador