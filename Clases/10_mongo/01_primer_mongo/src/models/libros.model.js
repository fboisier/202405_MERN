import { model, Schema } from 'mongoose';

const LibroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "¡El título es obligatorio!"]
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    genero: String,
    año: Number
}, { timestamps: true });

const Libro = model("Libro", LibroSchema);
export default Libro;
