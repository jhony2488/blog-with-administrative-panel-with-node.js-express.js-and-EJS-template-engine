const express = require('express')
const bodyParser = require('body-parser')
const configDB = require('./config/connectionDB')
const configBodyParser = require('./config/bodyParser')
const configTemplateEngine = require('./config/templateEngine')
const routerCategories = require('./controllers/routers/categories')
const server = require('./config/startServe')

const app = express()

configTemplateEngine(app, express)

configBodyParser(app, bodyParser)

configDB()

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/', routerCategories)

server(app)
