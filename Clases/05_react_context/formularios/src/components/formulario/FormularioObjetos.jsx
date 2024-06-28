import { useState } from "react"
import Swal from 'sweetalert2'

const FormularioObjetos = () => {

    const valoresIniciales = {
        nombre: 'Ejemplo',
        email: 'test@prueba.com',
        password: '12345',
        recuerdame: true
    }

    const [valores, setValores] = useState(valoresIniciales)

    const {nombre, email, password, recuerdame} = valores

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === '' || password === '') {
            Swal.fire({
                title: "Error!",
                text: "Todos los campos son obligatorios",
                icon: "error"
            });
            return
        }

        Swal.fire({
            title: "Exito!",
            html: `<h3>EMAIL: ${email}</h3><h3>CONTRASEÑA: ${password}</h3>`,
            icon: "success"
        });
    }

    const handleInputs = (e) => {
        console.log(e.target.name, e.target.value, e.target.type)

        if (e.target.type === 'checkbox') {
            setValores({
                ...valores,
                [e.target.name]: e.target.checked
            })
            return
        }

        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="mb-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                    type="text"
                    className="form-control"
                    id="nombre"
                    aria-describedby="emailHelp" 
                    name="nombre"
                    value={nombre}
                    onChange={handleInputs}
                />
                    <div id="emailHelp" className="form-text">Nombre del usuario</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1A" className="form-label">Email</label>
                <input 
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1A"
                    aria-describedby="emailHelp" 
                    name="email"
                    value={email}
                    onChange={handleInputs}
                />
                    <div id="emailHelp" className="form-text">Correo electronico</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1A" className="form-label">Password</label>
                <input 
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1A"
                    name="password"
                    value={password}
                    onChange={handleInputs}
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1A"
                    name="recuerdame"
                    checked={recuerdame}
                    onChange={handleInputs}
                />
                <label className="form-check-label" htmlFor="exampleCheck1A">Recuerdame</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="button" onClick={() => setValores(valoresIniciales)} className="btn btn-danger ms-2">Limpiar</button>
        </form>
    )
}

export default FormularioObjetos
