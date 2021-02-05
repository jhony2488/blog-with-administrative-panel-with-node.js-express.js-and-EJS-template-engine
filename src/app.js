const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

class AppController {
    constructor() {
        this.express = express()
        this.templateEngine()
        this.bodyParser()
        this.middleware()
        this.routes()
        this.server()
    }
    middleware() {
        this.express.use(express.json())
    }
    routes() {
        this.express.use(require('./app/controllers/routers/articles'))
        this.express.use(require('./app/controllers/routers/categories'))
    }
    bodyParser() {
        return (
            this.express.use(bodyParser.urlencoded({ extended: false })),
            this.express.use(bodyParser.json())
        )
    }
    templateEngine() {
        return (
            this.express.set('view engine', 'ejs'),
            this.express.use(express.static('public')),
            this.express.set('views', path.join('./src/app', 'views'))
        )
    }
    server() {
        return this.express.listen(8080, () => {
            console.log('servidor funcionando')
        })
    }
}

exports.module = new AppController()

