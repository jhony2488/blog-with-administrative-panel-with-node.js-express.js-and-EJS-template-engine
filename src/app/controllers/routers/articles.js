const { Categorie, Article } = require('../../models')
const { Op } = require('sequelize')
const slugify = require('slugify')

class ArticlesControllers {
    async home(req, res) {
        let category = await Categorie.findAll()

        Article.findAll({
            order: [
                ['id', 'DESC'],
                ['title', 'ASC'],
            ],
            include: ['categories'],
        })
            .then((articles) => {
                res.render('home', { articles, categories: category })
            })
            .catch((error) => {
                res.json({ response: 'ocorreu um erro', error })
            })
    }
    async articleUnic(req, res) {
        const { slug_article } = req.params
        let category = await Categorie.findAll()
        Article.findOne({
            where: {
                slug: slug_article,
            },
        })
            .then((article) => {
                res.render('article', { article, categories: category })
            })
            .catch((error) => {
                res.redirect('/')
            })
    }
    async categoryUnic(req, res) {
        const { slug_category } = req.params
        let category = await Categorie.findOne({
            where: {
                slug: slug_category,
            },
        })
        let categorys = await Categorie.findAll()

        Article.findAll({
            where: {
                categorieId: {
                    [Op.like]: category.id,
                },
            },
            order: [
                ['id', 'DESC'],
                ['title', 'ASC'],
            ],
        })
            .then((articles) => {
                res.render('categoryFilter', {
                    articles,
                    categories: categorys,
                    category,
                })
            })
            .catch((error) => {
                res.json(error)
            })
    }
    async categoryUnicArticleUnic(req, res) {
        const { slug_category, slug_article } = req.params
        let category = await Categorie.findOne({ slug: slug_category })
        let categorys = await Categorie.findAll()
        Article.findOne({
            where: {
                slug: slug_article,
                categorieId: category.id,
            },
        })
            .then((article) => {
                res.render('article', { article, categories: categorys })
            })
            .catch((error) => {
                res.redirect('/')
            })
    }
    async adminArticles(req, res) {
        Article.findAll({
            include: ['categories'],
            order: [
                ['id', 'DESC'],
                ['title', 'ASC'],
            ],
        })
            .then((articles) => {
                res.render('admin/articles/index', { articles })
            })
            .catch((error) => {
                res.json({ response: 'ocorreu um erro', error })
            })
        //res.json({ response: 'test' })
    }
    async adminArticleNew(req, res) {
        Categorie.findAll()
            .then((categories) => {
                res.render('admin/articles/new', { categories })
            })
            .catch((error) => {
                console.log(error)
                res.json({ error })
            })
    }
    async articleSave(req, res) {
        let title = req.body.title
        let body = req.body.body
        let category = req.body.category
        Article.create({
            title,
            slug: slugify(title.toLowerCase()),
            body,
            categorieId: category,
        })
            .then(() => {
                res.redirect('/admin/articles/')
            })
            .catch((error) => {
                console.log(error)
                res.json({ error })
            })
    }
    async articlesUpdated(req, res) {
        let id = req.params.id
        let title = req.body.title
        let body = req.body.title
        let category = req.body.category
        if (
            id == undefined ||
            id == null ||
            id == NaN ||
            title == undefined ||
            title == null ||
            title == NaN ||
            body == undefined ||
            body == null ||
            body == NaN
        ) {
            res.redirect('admin/articles/edit')
        } else {
            Article.update(
                {
                    title,
                    slug: slugify(title.toLowerCase()),
                    body,
                    categorieId: category,
                },
                { where: { id } }
            )
                .then(() => {
                    res.redirect('/admin/articles/')
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    }
    async articlesDelete(req, res) {
        let id = req.params.id
        let id_categorie = req.params.id_categorie

        if (id == undefined || id == null || id == NaN || isNaN(id)) {
            res.redirect('admin/articles/')
        } else {
            Article.destroy({
                where: {
                    id,
                    categorieId: id_categorie,
                },
            })
                .then(() => {
                    res.redirect('/admin/articles/')
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    }
    async adminArticleEdit(req, res) {
        let id = req.params.id
        let article
        let categories = await Categorie.findAll()
        Article.findOne({
            where: {
                id,
            },
            include: ['categories'],
        })
            .then((articloRes) => {
                article = articloRes
                res.render('admin/articles/edit', {
                    article,
                    categories,
                })
            })
            .catch((err) => {
                console.log(err)
                res.redirect('admin/aricles/')
            })
    }
}

module.exports = new ArticlesControllers()
