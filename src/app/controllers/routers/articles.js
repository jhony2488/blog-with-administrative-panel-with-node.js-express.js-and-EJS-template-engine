const Categories = require('../../models/Article')
const slugify = require('slugify')

class ArticlesControllers {
    articles(req, res) {
        res.send('index')
    }
    adminArticles(req, res) {
        res.render('admin/articles/new')
    }
    adminArticleNew(req, res) {
        res.render('admin/articles/new')
    }   
}

module.exports = new ArticlesControllers()
