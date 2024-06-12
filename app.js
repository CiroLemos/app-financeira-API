const express = require('express');
const cors = require('cors')
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

app.get('/', async(req, res) => {
    return res.json({
        nome: 'Bem vindo a aplicação app-financeira.',
        participantes: ['Ciro Lemos', 'Suelen', 'Kayo Fernandes', 'Mauro', 'Wendell Barbosa', 'Jackson', 'Reginaldo', 'Gilberto Queiroz']
    })
});

app.listen(3333, () => {
    console.log('Servidor iniciado na porta http://localhost:3333');
})