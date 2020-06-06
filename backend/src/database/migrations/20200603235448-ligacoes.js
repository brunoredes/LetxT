/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('ligacoes', {
      id_ligacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_plano: {
        type: Sequelize.INTEGER,
        references: {
          model: 'planos',
          key: 'id_plano',
        },
      },
      id_preco: {
        type: Sequelize.INTEGER,
        references: {
          model: 'precos',
          key: 'id_preco',
        },
      },
      duracao: Sequelize.INTEGER,
      precoFinal: Sequelize.DOUBLE(8, 2),
      valorFinalComPlano: Sequelize.DOUBLE(8, 2),
    }),

  down: (queryInterface) => queryInterface.dropTable('ligacoes'),
};
