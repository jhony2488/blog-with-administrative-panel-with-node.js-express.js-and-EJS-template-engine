const express = require('express')
const bodyParser = require('body-parser')
const configDB = require('./config/connectionDB')
const configBodyParser = require('./config/bodyParser')
const configTemplateEngine = require('./config/templateEngine')
const routersIndex = require('./controllers/routers/categories')
const routersCategories = require('./controllers/routers/categories')
const routersArticles = require('./controllers/routers/articles')
const server = require('./config/startServe')

const app = express()

configTemplateEngine(app, express)

configBodyParser(app, bodyParser)

configDB()

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', routersCategories)
app.use('/', routersArticles)

server(app)
