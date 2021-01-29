const connection = require('../models/Connection')

function connectionDB() {
  return connection
    .authenticate()
    .then(() => {
      console.log('Banco de dados conectado')
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = connectionDB
