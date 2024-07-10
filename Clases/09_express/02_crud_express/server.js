import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

const usuarios = [
    { id: 1, nombre: "Neo", apellidos: "Matrix" },
    { id: 2, nombre: "Francisco", apellidos: "Boisier" },
    { id: 3, nombre: "Javier", apellidos: "Sandoval" },
    { id: 4, nombre: "Leonor", apellidos: "Boisier" },
]

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/v1/usuarios", (req, res) => {
    res.json(usuarios);
});

app.post("/api/v1/usuarios" , (req, res) => {
    usuarios.push(req.body);
    res.json({"mensaje": "Usuario Agregado Correctamente", "data": req.body})
})


app.get("/api/v1/usuarios/:id", (req, res) => {
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
})


app.put("/api/v1/usuarios/:id", (req, res) => {
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
})

app.delete("/api/v1/usuarios/:id", (req, res) => {
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
})

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
})