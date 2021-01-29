function server(app) {
  return app.listen(8080, () => {
    console.log('servidor funcionando')
  })
}

module.exports = server
