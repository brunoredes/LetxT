/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('planos', [
    {
      nome_plano: 'FaleMais 30',
      custo_minuto: 30,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome_plano: 'FaleMais 60',
      custo_minuto: 60,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome_plano: 'FaleMais 120',
      custo_minuto: 120,
      created_at: new Date(),
      updated_at: new Date(),
    },

  ]),

  down: () => {},
};
