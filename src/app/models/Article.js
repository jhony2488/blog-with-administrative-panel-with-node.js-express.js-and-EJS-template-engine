module.exports = (sequelize, DataTypes) => {
    const Articles = sequelize.define(
        'Article',
        {
            title: DataTypes.STRING,
            slug: DataTypes.STRING,
            body: DataTypes.TEXT,
        },
        {
            freezeTableName: true,
            tableName: 'articles',
            timestamps: true,
        }
    )
    Articles.associate = function (models) {
        Articles.belongsTo(models.Categorie, {
            foreignKey: 'categorieId',
            as: 'categories',
        })
    }
    return Articles
}
