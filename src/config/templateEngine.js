function TemplateEngine(app, express) {
  return (
    app.set('view engine', 'ejs'),
    app.use(express.static('public'))
  )
}

module.exports = TemplateEngine
