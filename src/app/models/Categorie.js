exports.module = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categorie', {
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
    })
    return Categories
}
