import Sequelize, { Model } from 'sequelize';

class Plano extends Model {
  static init(sequelize) {
    super.init(
      {
        id_plano: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome_plano: Sequelize.STRING,
        custo_minuto: Sequelize.DOUBLE,
      },
      {
        sequelize,
        tableName: 'planos',
        freezeTableName: true,
        paranoid: true,
      }
    );
    return this;
  }
}
export default Plano;
