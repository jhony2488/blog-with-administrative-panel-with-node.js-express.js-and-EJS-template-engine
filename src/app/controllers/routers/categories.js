const { Categorie } = require('../../models')
const slugify = require('slugify')

class CategoriesControllers {
    categories(req, res) {
        res.send('index')
    }
    categoriesSave(req, res) {
        let title = req.body.title
        if (title == undefined || title == null || title == NaN) {
            res.redirect('admin/categories/new')
        } else {
            Categorie.create({
                title,
                slug: slugify(title.toLowerCase()),
            }).then(() => {
                res.redirect('/admin/categories/')
            })
        }
    }
    categoriesUpdated(req, res) {
        let id = req.params.id
        let title = req.body.title
        if (
            id == undefined ||
            id == null ||
            id == NaN ||
            title == undefined ||
            title == null ||
            title == NaN
        ) {
            res.redirect('admin/categories/new')
        } else {
            Categorie.update(
                {
                    title,
                    slug: slugify(title.toLowerCase()),
                },
                { where: { id } }
            ).then(() => {
                res.redirect('/admin/categories/')
            })
        }
    }
    categoriesDelete(req, res) {
        let id = req.params.id
        if (id == undefined || id == null || id == NaN || isNaN(id)) {
            res.redirect('admin/categories/')
        } else {
            Categorie.destroy({
                where: {
                    id,
                },
            }).then(() => {
                res.redirect('/admin/categories/')
            })
        }
    }

    adminCategorie(req, res) {
        res.render('admin/categories/new')
    }
    adminCategorieEdit(req, res) {
        let id = req.params.id
        let category
        Categorie.findOne({
            where: {
                id,
            },
        })
            .then((categoryRes) => {
                category = categoryRes
                res.render('admin/categories/edit', {
                    category,
                })
            })
            .catch((err) => {
                console.log(err)
                res.redirect('admin/categories/')
            })
    }
    adminCategories(req, res) {
        Categorie.findAll()
            .then((categories) => {
                res.render('admin/categories/index', { categories })
            })
            .catch((error) => {
                res.send(error)
            })
    }
}

module.exports = new CategoriesControllers()
