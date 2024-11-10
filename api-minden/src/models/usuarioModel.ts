import { Model, DataTypes, Optional } from 'sequelize';
import  sequelize  from '../config/database';

interface UsuarioAttributes {
  id: number;
  nome: string;
  email: string;
  senha: string;
  contato?: string;
  instituicao_id?: number;
  tipo_de_instituicao: string;
  data_created?: Date;
}

export interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id' | 'data_created'> {}

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  public id!: number;
  public nome!: string;
  public email!: string;
  public senha!: string;
  public contato?: string;
  public instituicao_id?: number;
  public tipo_de_instituicao!: string;
  public data_created!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contato: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  instituicao_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tipo_de_instituicao: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  data_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios',
  timestamps: true,
});
