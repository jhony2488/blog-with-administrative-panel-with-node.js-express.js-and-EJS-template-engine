function BodyParser(app, bodyParser) {
  return (
    app.use(bodyParser.urlencoded({ extended: false })),
    app.use(bodyParser.json())
  )
}

module.exports = BodyParser
