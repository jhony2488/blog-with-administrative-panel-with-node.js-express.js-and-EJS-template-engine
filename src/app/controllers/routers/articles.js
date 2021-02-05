class ArticlesControllers {
    articles(req, res) {
        res.send('index')
    }
    adminArticle(req, res) {
        res.send('jhonyyyy')
    }   
}

module.exports = new ArticlesControllers()
