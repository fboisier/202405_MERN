

const validarIdUsuario = (req, res, next) => {

    if (!req.body.id) {
        return res.status(400).json(
            {
                "mensaje": "Error en la petición falta el ID",
                "data": null
            }
        )
    }

    next();
};

export {validarIdUsuario}