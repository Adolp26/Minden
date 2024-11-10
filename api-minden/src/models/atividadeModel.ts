import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

interface AtividadeAttributes {
  id: number;
  descricao: string;
  tipo_atividade: string;
  local?: string;
  data_inicio?: Date;
  data_fim?: Date;
  responsavel_id?: number;
  participantes_max?: number;
  descricao_detalhada?: string;
  status?: string;
  frequencia?: string;
  data_created?: Date;
}

export interface AtividadeCreationAttributes extends Optional<AtividadeAttributes, 'id' | 'data_created' | 'status'> {}

export class Atividade extends Model<AtividadeAttributes, AtividadeCreationAttributes> implements AtividadeAttributes {
  public id!: number;
  public descricao!: string;
  public tipo_atividade!: string;
  public local?: string;
  public data_inicio?: Date;
  public data_fim?: Date;
  public responsavel_id?: number;
  public participantes_max?: number;
  public descricao_detalhada?: string;
  public status!: string;
  public frequencia?: string;
  public data_created!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Atividade.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descricao: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  tipo_atividade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  local: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  data_inicio: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  data_fim: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  responsavel_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  participantes_max: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  descricao_detalhada: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'Pendente', // Valor padrão
  },
  frequencia: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  data_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Atividade',
  tableName: 'atividade',
  timestamps: true,
});
