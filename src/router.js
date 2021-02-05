const express = require('express')
const routerArticles = require('./app/controllers/routers/articles')
const routerCategories = require('./app/controllers/routers/categories')

const router = express.Router()

router.get('/articles', routerArticles.articles)

router.get('/admin/articles/new', routerArticles.adminArticle)

router.get('/categories', routerCategories.categories)

router.get('/admin/categories/new', routerCategories.adminCategorie)

module.exports = router
