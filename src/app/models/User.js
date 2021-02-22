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
            tableName: 'users',
            timestamps: true,
        }
    )
    Users.associate = function (models) {
        Users.hasMany(models.Article, {
            foreignKey: 'usersId',
            as: 'articlesUser',
        })
    }
    return Users
}
