const express = require('express')
const cors = require('cors');
const conexao = require('./src/ConectDatabase/conexao')
const app = express()
//-------------------------------------------------------------------------------------------------------------------------------------------
app.use(express.json()) //Para a api usar o formato Json
app.use(express.urlencoded({extended: true})) //Não sei
app.use(cors()) // Para permitir o acesso de todas as requisições
//-------------------------------------------------------------------------------------------------------------------------------------------

app.get('/listar', (require, response) => {
    const queryListar = 'SELECT * FROM dados'
    conexao.query(queryListar, (err, rows) => {
        if (!err) {
            response.json(rows)
        } else {
            response.status(404)
            response.json({"message": "Nenhum dado foi encontrado!"})
        }
    })
    
})
//-------------------------------------------------------------------------------------------------------------------------------------------

app.listen(3333, () => {
    console.log('O aplicativo esta rodando (●-●) ')
})