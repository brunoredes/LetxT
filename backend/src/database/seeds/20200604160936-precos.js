/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('precos', [
    {
        valor: 1.1,
        id_origem_local: 1,
        id_destino_local: 1,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
      valor: 1.3,
      id_origem_local: 2,
      id_destino_local: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 1.9,
      id_origem_local: 1,
      id_destino_local: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 2.9,
      id_origem_local: 2,
      id_destino_local: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 1.7,
      id_origem_local: 1,
      id_destino_local: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 2.7,
      id_origem_local: 3,
      id_destino_local: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: '0.9',
      id_origem_local: 1,
      id_destino_local: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 1.9,
      id_origem_local: 4,
      id_destino_local: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 1.8,
      id_origem_local: 2,
      id_destino_local: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 2.8,
      id_origem_local: 3,
      id_destino_local: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 2.4,
      id_origem_local: 2,
      id_destino_local: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 3.4,
      id_origem_local: 4,
      id_destino_local: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 1.9,
      id_origem_local: 3,
      id_destino_local: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 2.9,
      id_origem_local: 4,
      id_destino_local: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 1.6,
      id_origem_local: 3,
      id_destino_local: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      valor: 1.6,
      id_origem_local: 4,
      id_destino_local: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),

  down: () => {},
};
