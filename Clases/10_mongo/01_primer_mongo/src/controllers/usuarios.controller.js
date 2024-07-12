import Usuario from '../models/usuarios.model.js';
import Libro from '../models/libros.model.js';

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        for (const usuario of usuarios) {
            const librosUsuario = await Libro.find({ autor: usuario._id });
            console.log(librosUsuario)
            usuario.libros = librosUsuario;
        }
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const crearUsuario =  async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!usuarioActualizado) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuarioActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const eliminarUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json({ mensaje: "Usuario eliminado correctamente", usuario_eliminado: usuarioEliminado });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export {
    getUsuarios,
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}