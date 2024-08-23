import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import conectarDB from './config/mongoose.config.js';
import cors from 'cors';
import utilsRouter from './src/routes/utils.routes.js';
import cookieParser from 'cookie-parser';

config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(cors({ credentials: true }));
app.use(helmet());
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/utils',  utilsRouter)

conectarDB();

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
})
