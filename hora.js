const express = require("express")
const router = express.Router()

const app = express()

const Porta = 3333

function mostraHora(request, response) {

    const data = new Date()

    const hora = data.toLocaleTimeString('pt-BR')

    response.send(hora)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ${Porta}")
}

app.use(router.get('/hora', mostraHora))
app.listen(Porta, mostraPorta)