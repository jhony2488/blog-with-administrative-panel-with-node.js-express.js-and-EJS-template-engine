class authMiddleware {
    authlogin(req, res, next) {
        if (req.session.user != undefined) {
            next()
        } else {
            res.redirect('/login')
        }
    }
    redirectLoginPage(req, res, next) {
        if (req.session.user != undefined) {
            res.redirect('/admin/articles')
        } else {
            next()
        }
    }
}

module.exports = new authMiddleware()
