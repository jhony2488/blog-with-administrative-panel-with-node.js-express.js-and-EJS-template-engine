const express = require('express')

const router = express.Router()

router.get('/categories', (req, res) => {
  res.send('index')
})
router.get('/admin/categories/new', (req, res) => {
  res.send('jhonyyyy')
})

module.exports = router
