import Parametros from '../models/parametros.model.js';

const getParametros = async (req, res) => {
    try {
        const parametros = await Parametros.find();
        res.json(parametros);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getParametro = async (req, res) => {
    try {
        const parametro = await Parametros.findOne({llave: req.params.llave});
        if (!parametro) {
            res.status(404).json({ message: "Parametro no encontrado" });
            return;
        }
        res.json(parametro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const crearParametro =  async (req, res) => {
    try {
        const nuevoParametro = await Parametros.create(req.body);
        res.json(nuevoParametro);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const actualizarParametro = async (req, res) => {
    try {
        const parametroActualizado = await Parametros.findOneAndUpdate({llave: req.params.llave}, req.body, { new: true, runValidators: true });
        if (!parametroActualizado) {
            res.status(404).json({ message: "Parametro no encontrado" });
            return;
        }
        res.json(parametroActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const eliminarParametro = async (req, res) => {
    try {
        const parametroEliminado = await Parametros.findOneAndDelete({llave: req.params.llave});
        if (!parametroEliminado) {
            res.status(404).json({ message: "Parametro no encontrado" });
            return;
        }
        res.json({ message: "Parametro eliminado correctamente", parametro_eliminado: parametroEliminado });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export {
    getParametros,
    getParametro,
    crearParametro,
    actualizarParametro,
    eliminarParametro
}