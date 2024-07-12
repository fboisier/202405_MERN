import { model, Schema } from 'mongoose';

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "¡El nombre es obligatorio!"]
    },
    apellidos: {
        type: String,
        required: [true, "¡El apellido es obligatorio!"]
    },
    libros: [{
        type: Schema.Types.ObjectId,
        ref: 'Libro',
    }],
}, { timestamps: true });

const Usuario = model("Usuario", UsuarioSchema);

export default Usuario;
