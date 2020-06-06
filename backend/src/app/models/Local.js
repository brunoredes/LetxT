import Sequelize, { Model } from 'sequelize';

class Local extends Model {
  static init(sequelize) {
    super.init(
      {
        id_local: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        codigo_local: Sequelize.STRING,
      },
      {
        sequelize,
        paranoid: true,
        freezeTableName: true,
        tableName: 'locals',
      }
    );
    return this;
  }
}
export default Local;
