'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Criando a tabela "usuarios"
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: Sequelize.STRING(100),
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      contato: Sequelize.STRING(15),
      instituicao_id: Sequelize.INTEGER,
      tipo_de_instituicao: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      data_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Criando a tabela "instituicoes"
    await queryInterface.createTable('instituicoes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      contato: Sequelize.STRING(50),
      tipo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      data_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Criando a tabela "infrator"
    await queryInterface.createTable('infrator', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      data_nascimento: Sequelize.DATE,
      endereco: Sequelize.STRING(255),
      historico_criminal: Sequelize.TEXT,
      dados_contato: Sequelize.STRING(50),
      data_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Criando a tabela "acompanhamento"
    await queryInterface.createTable('acompanhamento', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      infrator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      atividade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_participacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora_avaliacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      presenca: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      observacoes: Sequelize.TEXT,
      data_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Criando a tabela "atividade"
    await queryInterface.createTable('atividade', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tipo_atividade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      local: Sequelize.STRING(255),
      data_inicio: Sequelize.DATE,
      data_fim: Sequelize.DATE,
      responsavel_id: Sequelize.INTEGER,
      participantes_max: Sequelize.INTEGER,
      descricao_detalhada: Sequelize.TEXT,
      status: {
        type: Sequelize.STRING(50),
        defaultValue: 'Pendente',
      },
      frequencia: Sequelize.STRING(50),
      data_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Criando a tabela "avaliacao"
    await queryInterface.createTable('avaliacao', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      infrator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      atividade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_hora_avaliacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nota: Sequelize.DECIMAL(3, 2),
      observacoes: Sequelize.TEXT,
      data_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Criando a tabela "notificacoes"
    await queryInterface.createTable('notificacoes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      infrator_id: Sequelize.INTEGER,
      atividade_id: Sequelize.INTEGER,
      titulo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      mensagem: Sequelize.TEXT,
      data_envio: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      status: {
        type: Sequelize.STRING(50),
        defaultValue: 'Enviado',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Adicionando relacionamentos de chave estrangeira
    await queryInterface.addConstraint('usuarios', {
      fields: ['instituicao_id'],
      type: 'foreign key',
      name: 'fk_usuarios_instituicoes',
      references: {
        table: 'instituicoes',
        field: 'id',
      },
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('acompanhamento', {
      fields: ['infrator_id'],
      type: 'foreign key',
      name: 'fk_acompanhamento_infrator',
      references: {
        table: 'infrator',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('acompanhamento', {
      fields: ['atividade_id'],
      type: 'foreign key',
      name: 'fk_acompanhamento_atividade',
      references: {
        table: 'atividade',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('avaliacao', {
      fields: ['infrator_id'],
      type: 'foreign key',
      name: 'fk_avaliacao_infrator',
      references: {
        table: 'infrator',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('avaliacao', {
      fields: ['atividade_id'],
      type: 'foreign key',
      name: 'fk_avaliacao_atividade',
      references: {
        table: 'atividade',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('atividade', {
      fields: ['responsavel_id'],
      type: 'foreign key',
      name: 'fk_atividade_usuarios',
      references: {
        table: 'usuarios',
        field: 'id',
      },
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('notificacoes', {
      fields: ['usuario_id'],
      type: 'foreign key',
      name: 'fk_notificacoes_usuarios',
      references: {
        table: 'usuarios',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('notificacoes', {
      fields: ['infrator_id'],
      type: 'foreign key',
      name: 'fk_notificacoes_infrator',
      references: {
        table: 'infrator',
        field: 'id',
      },
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('notificacoes', {
      fields: ['atividade_id'],
      type: 'foreign key',
      name: 'fk_notificacoes_atividade',
      references: {
        table: 'atividade',
        field: 'id',
      },
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
    await queryInterface.dropTable('instituicoes');
    await queryInterface.dropTable('infrator');
    await queryInterface.dropTable('acompanhamento');
    await queryInterface.dropTable('atividade');
    await queryInterface.dropTable('avaliacao');
    await queryInterface.dropTable('notificacoes');
  },
};
