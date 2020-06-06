import Sequelize, { Model } from 'sequelize';

class Preco extends Model {
  static init(sequelize) {
    super.init(
      {
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
      },
      {
        sequelize,
        freezeTableName: true,
        paranoid: true,
        tableName: 'precos',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Local, {
      foreignKey: 'id_origem_local',
      as: 'origem_local',
    });

    this.belongsTo(models.Local, {
      foreignKey: 'id_destino_local',
      as: 'destino_local',
    });
  }
}
export default Preco;
