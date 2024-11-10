import { Model, DataTypes, Optional } from 'sequelize';
import  sequelize  from '../config/database';

interface InstituicaoAttributes {
  id: number;
  nome: string;
  contato?: string;
  tipo: string;
  data_created?: Date;
}

export interface InstituicaoCreationAttributes extends Optional<InstituicaoAttributes, 'id' | 'data_created'> {}

export class Instituicao extends Model<InstituicaoAttributes, InstituicaoCreationAttributes> implements InstituicaoAttributes {
  public id!: number;
  public nome!: string;
  public contato?: string;
  public tipo!: string;
  public data_created!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Instituicao.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contato: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  tipo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  data_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Instituicao',
  tableName: 'instituicoes',
  timestamps: true,
});
