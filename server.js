const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

let Etapas= [
    {periodo:"Etapa 1", estado: "El embrion no tiene caracteristicas distintivas ", },  
	{periodo:"Etapa 2", estado: "El embrion pasa a llamarse feto ", },
	{periodo:"Etapa 3", estado: "En una ecografia se puede detectar los brazos, piernas y sexo de la criatura", },  
	{periodo:"Etapa 4", estado: "El feto esta completamente desarrollado y listo para nacer", },  
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

app.get('/Etapas', (req, res) => {
    res.send(Etapas)
})

http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})