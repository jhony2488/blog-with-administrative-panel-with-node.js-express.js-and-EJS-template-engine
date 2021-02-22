const { User } = require('../../models')
const bcryptjs = require('bcryptjs')

class UsersControllers {
    async index(req, res) {
        User.findAll({
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ],
        })
            .then((users) => {
                res.render('admin/users/index', {
                    users,
                })
            })
            .catch((error) => {
                res.json({ response: 'ocorreu um erro', error })
            })
    }
    async login(req, res) {
        res.render('admin/users/login')
    }
    authenticate(req, res) {
        let email = req.body.email
        let password = req.body.password

        User.findOne({ where: { email } })
            .then((user) => {
                if (user != undefined || user != null || user != NaN) {
                    var correct = bcryptjs.compareSync(
                        password,
                        user.password_hash
                    )
                    if (correct) {
                        req.session.user = {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                        }
                        res.redirect('/admin/articles')
                    } else {
                        res.json({ response: 'Incorrect Password' })
                    }
                } else {
                    res.json({ response: 'User Not Found' })
                }
            })
            .catch((error) => {
                res.json({ response: 'ERRO NA QUERY DE USUARIO' })
            })
    }
    formCreate(req, res) {
        res.render('admin/users/create')
    }
    async create(req, res) {
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        const salt = await bcryptjs.genSaltSync(10)
        let password_hash = await bcryptjs.hashSync(password, salt)

        User.findOne({ where: { email } })
            .then((user) => {
                if (user == undefined || user == null || user == NaN) {
                    User.create({
                        name,
                        email,
                        password_hash,
                    })
                        .then(() => {
                            res.redirect('/')
                        })
                        .catch((error) => {
                            res.json(error)
                        })
                } else {
                    res.redirect('/admin/users')
                }
            })
            .catch((error) => {
                res.json(error)
            })
    }
    async formEdit(req, res) {
        let iduser = req.params.id
        User.findOne({
            where: {
                id: iduser,
            },
        })
            .then((user) => {
                res.render('admin/users/update', { user })
            })
            .catch((error) => {
                res.json({ response: 'ocorreu um erro', error })
            })
    }
    async edit(req, res) {
        res.send('index')
    }
    async delete(req, res) {
        let id = req.params.id

        if (id == undefined || id == null || id == NaN || isNaN(id)) {
            res.redirect('admin/articles/')
        } else {
            User.destroy({
                where: {
                    id,
                },
            })
                .then(() => {
                    res.redirect('/admin/users')
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    }
    async logout(req, res) {
        req.session.user = undefined
        res.redirect('/')
    }
}

module.exports = new UsersControllers()
