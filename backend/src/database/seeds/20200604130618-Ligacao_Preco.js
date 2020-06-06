module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
    'locals',
    [
      {
        codigo_local: '011',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        codigo_local: '016',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        codigo_local: '017',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        codigo_local: '018',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {}
  ),

  down: () => {},
};
