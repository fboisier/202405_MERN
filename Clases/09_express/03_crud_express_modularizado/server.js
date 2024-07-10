import express from 'express';
import { config } from 'dotenv';
import routesUsuario from './src/routes/usuarios.routes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import helmet from 'helmet';


config();

const opcionesSwagger = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Esto es un ejemplo de DOCS',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*.js'], // Rutas a tus archivos de rutas
};
const swaggerDocs = swaggerJsdoc(opcionesSwagger);

const app = express();
const port = process.env.PORT || 8000;


app.use(helmet());
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

app.use('/api/v1/usuarios', routesUsuario)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
})
