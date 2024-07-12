import express from 'express';
import { config } from 'dotenv';
import routesUsuario from './src/routes/usuarios.routes.js';
import routesLibro from './src/routes/libros.routes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import morgan from 'morgan';
import helmet from 'helmet';
import conectarDB from './config/mongoose.config.js';
import cors from 'cors';

config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(helmet());
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

app.use('/api/v1/usuarios', routesUsuario)
app.use('/api/v1/libros', routesLibro)

conectarDB();

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
})
