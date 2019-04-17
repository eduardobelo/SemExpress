var router = require('./router');
var app = router(3412);

var operadoras = [
    {
        nome: 'Oi',
        codigo: 31,
        categoria: 'Operadora de telefonia',
        preco: 1
    },
    {
        nome: 'Vivo',
        codigo: 15,
        categoria: 'Operadora de telefonia',
        preco: 2
    },
    {
        nome: 'Tim',
        codigo: 41,
        categoria: 'Operadora de telefonia',
        preco: 3
    },
    {
        nome: 'Claro',
        codigo: 21,
        categoria: 'Operadora de telefonia',
        preco: 4
    }
];

var contatos = [
    {
        nome: 'Bruno',
        telefone: '99999-9999',
        data: new Date(),
        operadora: operadoras[0]
    },
    {
        nome: 'Eduardo',
        telefone: '99999-9998',
        data: new Date(),
        operadora: operadoras[1]
    },
    {
        nome: 'Marlon',
        telefone: '99999-9997',
        data: new Date(),
        operadora: operadoras[2]
    },
    {
        nome: 'Jonathan',
        telefone: '99999-9996',
        data: new Date(),
        operadora: operadoras[3]
    },
];

app.get('/operadoras', (req, res ) => {
    res.write(JSON.stringify(operadoras));
    res.write(req.url);
    res.end();
});

app.get('/contatos', (req, res) => {
    res.write(JSON.stringify(contatos));
    console.log(req);
    res.end();
});

app.post('/contatos', (req, res) => {
    res.end();
});