/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('precos', {
      id_preco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DOUBLE,
      },
      id_origem_local: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locals',
          key: 'id_local',
        },
      },
      id_destino_local: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locals',
          key: 'id_local',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('precos'),
};
