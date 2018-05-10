const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

let PGerminal = [
    {periodo:"semana 1", estado: "El embrion no tiene caracteristicas distintivas ", },  
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

app.get('/PGerminal', (req, res) => {
    res.send(PGerminal)
})

http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})