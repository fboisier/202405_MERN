import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.get('/usuario/:id', (req, res) => {

    const id = req.params.id;

    res.send('<h2>Hola ' + id + "</h2>");
});

app.get('/json/:id', (req, res) => {

    const id = req.params.id;

    res.json(
        {
            "id": id,
            "nombre": [
                {
                    "apodo": "pancho",
                    "nombre_real": "Francisco",
                    "edad": 39,
                    "apellido": "Boisier"
                }
            ]
        }
    );
});

const getTestData = (req, res) => {
    const test = req.params.test;
    res.json({"estatus": "ok", "test": test})
}

app.get("/prueba/:test", getTestData)



app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});
