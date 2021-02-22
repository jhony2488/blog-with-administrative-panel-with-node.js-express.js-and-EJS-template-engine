'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                field: 'createdAt',
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                field: 'updatedAt',
                type: Sequelize.DATE,
                allowNull: false,
            },
        })
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users')
    },
}
