'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'Users', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      task_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'Tasks', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};