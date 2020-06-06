import Sequelize, { Model } from 'sequelize';

class Ligacao extends Model {
  static init(sequelize) {
    super.init(
      {
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
        precoFinal: Sequelize.DOUBLE,
        valorFinalComPlano: Sequelize.DOUBLE,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'ligacoes',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Plano, {
      foreignKey: 'id_plano',
      as: 'plano',
    });

    this.belongsTo(models.Preco, {
      foreignKey: 'id_preco',
      as: 'preco',
    });
  }
}
export default Ligacao;
