/* eslint-disable indent */
/* eslint-disable arrow-parens */
import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Ligacao from '../app/models/Ligacao';
import Plano from '../app/models/Plano';
import Local from '../app/models/Local';
import Preco from '../app/models/Preco';

const models = [Ligacao, Plano, Local, Preco];

const config =
  process.env.NODE_ENV === 'test'
    ? databaseConfig.test
    : databaseConfig.development;
/*  */

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    // eslint-disable-next-line arrow-parens
    // eslint-disable-next-line prettier/prettier
    models.map(model => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
