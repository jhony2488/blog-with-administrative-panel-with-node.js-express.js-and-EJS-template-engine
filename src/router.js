const express = require('express')
const routerArticles = require('./app/controllers/routers/Articles')
const routerCategories = require('./app/controllers/routers/Categories')

const router = express.Router()

router.get('/', routerArticles.home)

router.get('/article/:slug_article', routerArticles.articleUnic)

router.get('/category/:slug_category', routerArticles.categoryUnic)

router.get(
    '/category/:slug_category/article/:slug_article',
    routerArticles.categoryUnicArticleUnic
)

router.get('/admin/articles/', routerArticles.adminArticles)

router.get('/admin/articles/new', routerArticles.adminArticleNew)

router.get('/admin/articles/edit/:id', routerArticles.adminArticleEdit)

router.post('/admin/articles/save', routerArticles.articleSave)

router.post('/admin/articles/update/:id', routerArticles.articlesUpdated)

router.get(
    '/admin/articles/delete/:id/categorie/:id_categorie',
    routerArticles.articlesDelete
)

router.get('/categories', routerCategories.categories)

router.get('/admin/categories/', routerCategories.adminCategories)

router.get('/admin/categories/new', routerCategories.adminCategorie)

router.get('/admin/categories/edit/:id', routerCategories.adminCategorieEdit)

router.post('/admin/categories/save', routerCategories.categoriesSave)

router.post('/admin/categories/update/:id', routerCategories.categoriesUpdated)

router.get('/admin/categories/delete/:id', routerCategories.categoriesDelete)

module.exports = router
