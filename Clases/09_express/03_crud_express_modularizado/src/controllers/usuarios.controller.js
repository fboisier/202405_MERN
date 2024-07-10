
const usuarios = [
    { id: 1, nombre: "Neo", apellidos: "Matrix" },
    { id: 2, nombre: "Francisco", apellidos: "Boisier" },
    { id: 3, nombre: "Javier", apellidos: "Sandoval" },
    { id: 4, nombre: "Leonor", apellidos: "Boisier" },
]

const getUsuarios = (req, res) => {
    res.json(usuarios);
};

const getUsuario = (req, res) => {
    const id = req.params.id;
    const index = usuarios.findIndex( (u) => u.id == id );

    if (index == -1) {
        return res.status(400).json(
            {
                "mensaje": "Error en la petición no se encuentra el ID de usuario " + id,
                "data": null
            }
        )
    }
    res.json(usuarios[index]);
}

const crearUsuario =  (req, res) => {
    usuarios.push(req.body);
    res.json({"mensaje": "Usuario Agregado Correctamente", "data": req.body})
}

const actualizarUsuario = (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    const index = usuarios.findIndex( (u) => u.id == id );

    if (index == -1) {
        return res.status(400).json(
            {
                "mensaje": "Error en la petición no se encuentra el ID de usuario " + id,
                "data": null
            }
        )
    }

    usuarios[index] = usuario;
    res.json({"mensaje": "Usuario Actualizado Correctamente", "data": usuario})
}

const eliminarUsuario = (req, res) => {
    const id = req.params.id;
    const index = usuarios.findIndex( (u) => u.id == id )

    if (index == -1) {
        return res.status(400).json(
            {
                "mensaje": "Error en la petición no se encuentra el ID de usuario " + id,
                "data": null
            }
        )
    }

    usuarios.splice(index, 1);
    res.json({"mensaje": "Usuario Eliminado Correctamente", "data": null})
}

export {
    getUsuarios,
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}