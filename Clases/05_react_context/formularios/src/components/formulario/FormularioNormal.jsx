import { useState } from "react"
import Swal from 'sweetalert2'

const FormularioNormal = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [recuerdame, setRecuerdame] = useState(false)

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

    return (
        <form className="mb-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input 
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                    <div id="emailHelp" className="form-text">Correo electronico</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={recuerdame}
                    onChange={(e) => setRecuerdame(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default FormularioNormal
