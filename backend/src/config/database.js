module.exports = {
  development: {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'docker',
    database: 'vxtel',
    define: {
      timestamps: false,
      underscored: false,
      underscoredAll: false,
      quoteIdentifiers: false,
    },
  },
  test: {
    dialect: 'sqlite',
    storage: './src/database/test.sqlite',
    define: {
      timestamps: false,
      underscored: false,
      underscoredAll: false,
      quoteIdentifiers: false,
    },
  },
};
