exports.module = (sequelize, DataTypes) => {
    const Article = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    })
    return Article
}
