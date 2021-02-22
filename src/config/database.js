module.exports = {
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'blog',
    dialect: 'mysql',
    logging: false,
    timezone: '-03:00',
    define: {
        timestamps: true,
        underscore: true,
        underscoresAll: true,
        freezeTableName: true,
    },
}
