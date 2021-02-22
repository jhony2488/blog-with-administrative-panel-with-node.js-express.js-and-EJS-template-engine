const express = require('express')
const routerArticles = require('./app/controllers/routers/Articles')
const routerCategories = require('./app/controllers/routers/Categories')
const usersRoutes = require('./app/controllers/routers/Users')
const auth = require('./app/middleware/authMiddleware')

const router = express.Router()

//artigos

router.get('/', routerArticles.home)

router.get('/articles/page/:page', routerArticles.navigation)

router.get('/article/:slug_article', routerArticles.articleUnic)

router.get('/category/:slug_category', routerArticles.categoryUnic)

router.get(
    '/category/:slug_category/article/:slug_article',
    routerArticles.articleUnic
)

router.get('/admin/articles/', auth.authlogin, routerArticles.adminArticles)

router.get('/admin/articles/new', auth.authlogin, routerArticles.adminArticleNew)

router.get('/admin/articles/edit/:id', auth.authlogin, routerArticles.adminArticleEdit)

router.post('/admin/articles/save', auth.authlogin, routerArticles.articleSave)

router.post('/admin/articles/update/:id', auth.authlogin, routerArticles.articlesUpdated)

router.get(
    '/admin/articles/delete/:id/categorie/:id_categorie',
    auth.authlogin,
    routerArticles.articlesDelete
)

//categorias
router.get('/categories', routerCategories.categories)

router.get('/admin/categories/', auth.authlogin, routerCategories.adminCategories)

router.get('/admin/categories/new', auth.authlogin, routerCategories.adminCategorie)

router.get(
    '/admin/categories/edit/:id',
    auth.authlogin,
    routerCategories.adminCategorieEdit
)

router.post('/admin/categories/save', auth.authlogin, routerCategories.categoriesSave)

router.post(
    '/admin/categories/update/:id',
    auth.authlogin,
    routerCategories.categoriesUpdated
)

router.get(
    '/admin/categories/delete/:id',
    auth.authlogin,
    routerCategories.categoriesDelete
)

//users
router.get('/login',auth.redirectLoginPage, usersRoutes.login)

router.post('/authenticate', usersRoutes.authenticate)

router.get('/admin/users', auth.authlogin, usersRoutes.index)

router.get('/admin/users/create', auth.authlogin, usersRoutes.formCreate)

router.post('/admin/users/create', auth.authlogin, usersRoutes.create)

router.get('/admin/users/edit/:id', auth.authlogin, usersRoutes.formEdit)

router.post('/admin/users/update/:id', auth.authlogin, usersRoutes.edit)

router.post('/admin/users/delete/:id', auth.authlogin, usersRoutes.delete)

router.get('/logout', auth.authlogin, usersRoutes.logout)

module.exports = router
