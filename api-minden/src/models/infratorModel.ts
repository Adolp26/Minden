import { Model, DataTypes, Optional } from 'sequelize';
import  sequelize  from '../config/database';

interface InfratorAttributes {
  id: number;
  nome: string;
  senha: string;
  data_nascimento?: Date;
  endereco?: string;
  historico_criminal?: string;
  dados_contato?: string;
  data_created?: Date;
}

export interface InfratorCreationAttributes extends Optional<InfratorAttributes, 'id' | 'data_created'> {}

export class Infrator extends Model<InfratorAttributes, InfratorCreationAttributes> implements InfratorAttributes {
  public id!: number;
  public nome!: string;
  public senha!: string;
  public data_nascimento?: Date;
  public endereco?: string;
  public historico_criminal?: string;
  public dados_contato?: string;
  public data_created!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Infrator.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  endereco: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  historico_criminal: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dados_contato: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  data_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Infrator',
  tableName: 'infrator',
  timestamps: true,
});
