const express = require('express')
const path = require('path')
const expressSession = require('express-session')
const bodyParser = require('body-parser')

class AppController {
    constructor() {
        this.express = express()

        this.templateEngine()
        this.session()
        this.bodyParser()
        this.middleware()
        this.routes()
        this.server()
    }
    middleware() {
        this.express.use(express.json())
    }
    routes() {
        this.express.use(require('./router'))
    }
    bodyParser() {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
    }
    templateEngine() {
        this.express.set('view engine', 'ejs')
        this.express.use(express.static(path.join('./src', 'public')))
        this.express.set('views', path.join('./src/app', 'views'))
    }
    session() {
        this.express.set('trust proxy', 1)
        this.express.use(
            expressSession({
                secret: 'aleatorio',
                cookie: { maxAge: 30000 },
                resave: true,
                saveUninitialized: true,
            })
        )
    }
    server() {
        return this.express.listen(8080, () => {
            console.log('servidor funcionando')
        })
    }
}

exports.module = new AppController()
