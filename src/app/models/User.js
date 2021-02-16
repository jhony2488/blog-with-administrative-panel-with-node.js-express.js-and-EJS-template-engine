module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING,
        },
        {
            freezeTableName: true,
            tableName: 'articles',
            timestamps: true,
        }
    )
    Users.associate = function (models) {
        Users.hasMany(models.Article, {
            foreignKey: 'id',
            as: 'articles',
        })
    }
    return Users
}
