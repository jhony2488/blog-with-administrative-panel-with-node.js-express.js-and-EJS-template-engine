const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./database/database')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connection
  .authenticate()
  .then(() => {
    console.log('Banco de dados conectado')
  })
  .catch((error) => {
    console.log(error)
  })

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => {
  console.log('servidor funcionando')
})
