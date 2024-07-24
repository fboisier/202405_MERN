import { model, Schema } from 'mongoose';
import uniqueValidator  from 'mongoose-unique-validator';

const ParametrosSchema = new Schema({
    llave: {
        type: String,
        required: [true, "¡la llave es obligatoria!"],
        unique: true,
        validate: {
            validator: (valor) => {
                const nombresProhibidos = ['id', 'identificador'];
                return !nombresProhibidos.includes(valor.toLowerCase());
            },
            message: props => `${props.value} está prohibido en nuestra applicación`,
        },
    },
    valor: {
        type: String,
        required: [true, "¡el valor es obligatorio!"],
        // validate: {
        //     validator: (valor) => {
        //         const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        //         return regex.test(valor);
        //     },
        //     message: props => `${props.value} no cumple el estandar minimo de dato. 1 letra 1 may 1 min 1 numero 8 largo.`,
        //},
    },
}, { timestamps: true });

ParametrosSchema.plugin(uniqueValidator);
const Parametros = model("Parametro", ParametrosSchema);

export default Parametros;
