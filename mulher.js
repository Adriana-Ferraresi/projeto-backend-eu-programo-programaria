const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Adriana Ferraresi',
        imagem:'https://github.com/Adriana-Ferraresi.png',
        minibio: 'Desenvolvedora Back end Python e Django'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
} 

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)