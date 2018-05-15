const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

let Etapas= [
    {id: "1", periodo:"PRIMER TRIMESTRE", 
	semana: [
	{id:"11", semana:"Semana 1", descripción:"Se ha producido la fecundación y la implantación en el endometrio.	Por regla general, esta semana pasa desapercibida para la madre, puesto que los cambios que se han empezado a producir a nivel hormonal, todavía no afectan al humor o al estado físico de la madre.",},
	]
	},  
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