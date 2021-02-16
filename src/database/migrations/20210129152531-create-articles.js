'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('articles', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            body: {
                type: Sequelize.TEXT,
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
        return queryInterface.dropTable('articles')
    },
}
