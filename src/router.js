const express = require('express')
const routerArticles = require('./app/controllers/routers/Articles')
const routerCategories = require('./app/controllers/routers/Categories')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ version: '1.0.0' })
})

router.get('/articles', routerArticles.articles)

router.get('/admin/articles/', routerArticles.adminArticles)

router.get('/admin/articles/new', routerArticles.adminArticleNew)

router.get('/admin/articles/edit/:id', routerCategories.adminCategorieEdit)

router.post('/admin/articles/save', routerCategories.categoriesSave)

router.post('/admin/articles/update/:id', routerCategories.categoriesUpdated)

router.get('/admin/articles/delete/:id', routerCategories.categoriesDelete)

router.get('/categories', routerCategories.categories)

router.get('/admin/categories/', routerCategories.adminCategories)

router.get('/admin/categories/new', routerCategories.adminCategorie)

router.get('/admin/categories/edit/:id', routerCategories.adminCategorieEdit)

router.post('/admin/categories/save', routerCategories.categoriesSave)

router.post('/admin/categories/update/:id', routerCategories.categoriesUpdated)

router.get('/admin/categories/delete/:id', routerCategories.categoriesDelete)

module.exports = router
