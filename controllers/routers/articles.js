const express = require('express')

const router = express.Router()

router.get('/articles', (req, res) => {
    res.send('index')
})
router.get('/admin/articles/new', (req, res) => {
    res.send('jhonyyyy')
})

module.exports = router
