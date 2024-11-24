import { Model, DataTypes } from 'sequelize';
import sequelize  from '../config/database'; // ou o caminho correto para sua instância de sequelize

class Avaliacao extends Model {
  public id!: number;
  public infrator_id!: number;
  public atividade_id!: number;
  public data_hora_avaliacao!: Date;
  public nota!: number;
  public observacoes!: string;
  public data_created!: Date;
  public created_at!: Date;
  public updated_at!: Date;
}

Avaliacao.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    infrator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atividade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_hora_avaliacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nota: {
      type: DataTypes.DECIMAL(3, 2),
    },
    observacoes: {
      type: DataTypes.TEXT,
    },
    data_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // a instância do sequelize
    tableName: 'avaliacao',
    timestamps: true, // habilita a atualização automática de created_at e updated_at
    updatedAt: 'updated_at', // nome do campo para o timestamp de atualização
    createdAt: 'created_at', // nome do campo para o timestamp de criação
  }
);

export default Avaliacao;
