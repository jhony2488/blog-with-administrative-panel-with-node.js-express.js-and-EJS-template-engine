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
                unique: true,
            },
            created_at: {
                type: Sequelize.DATA,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATA,
                allowNull: false,
            },
        })
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('articles')
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
}
