exports.module = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
        body: DataTypes.TEXT,
    })
    return Article
}
