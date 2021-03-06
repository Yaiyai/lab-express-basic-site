//Requerimiento y aplicación
const express = require('express')
const app = express()

//Directorio público
app.use(express.static('public'))

//enrutados
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/me', (req, res) => res.sendFile(`${__dirname}/views/about-me.html`))
app.get('/work', (req, res) => res.sendFile(`${__dirname}/views/works.html`))
app.get('/gallery', (req, res) => res.sendFile(`${__dirname}/views/gallery.html`))

//escucha
app.listen(3000, () => console.log('Servidor on'))