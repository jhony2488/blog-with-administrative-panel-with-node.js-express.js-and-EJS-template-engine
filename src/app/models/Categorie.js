module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define(
        'Categorie',
        {
            title: DataTypes.STRING,
            slug: DataTypes.STRING,
        },
        {
            freezeTableName: true,
            tableName: 'categories',
            timestamps: true,
        }
    )
    Categories.associate = function (models) {
        Categories.hasMany(models.Article, {
            foreignKey: 'id',
            as: 'articles',
        })
    }
    return Categories
}
