import { Model, DataTypes, Optional } from 'sequelize';
import  sequelize  from '../config/database';

interface AcompanhamentoAttributes {
  id: number;
  infrator_id: number;
  atividade_id: number;
  data_participacao: Date;
  hora_avaliacao: Date;
  presenca?: boolean;
  observacoes?: string;
  data_created?: Date;
}

export interface AcompanhamentoCreationAttributes extends Optional<AcompanhamentoAttributes, 'id' | 'data_created'> {}

export class Acompanhamento extends Model<AcompanhamentoAttributes, AcompanhamentoCreationAttributes> implements AcompanhamentoAttributes {
  public id!: number;
  public infrator_id!: number;
  public atividade_id!: number;
  public data_participacao!: Date;
  public hora_avaliacao!: Date;
  public presenca?: boolean;
  public observacoes?: string;
  public data_created!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Acompanhamento.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  infrator_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  atividade_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_participacao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hora_avaliacao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  presenca: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  data_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Acompanhamento',
  tableName: 'acompanhamento',
  timestamps: true,
});
