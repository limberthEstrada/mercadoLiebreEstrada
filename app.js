const express = require('express')
const path = require('path')

let rutaPath = path.resolve('./public');

//En clase vimos esto app.use(express.static('public'));

const app = express()
const port = 3000
app.use(express.static(rutaPath));

app.listen (process.env.PORT ||3000, ()=>{
    console.log('Servidor funcionando bien');
});


app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'))
})