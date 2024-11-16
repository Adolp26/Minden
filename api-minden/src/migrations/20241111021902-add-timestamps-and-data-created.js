'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adicionando colunas em "usuarios"
    await queryInterface.addColumn('usuarios', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('usuarios', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('usuarios', 'data_created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    // Adicionando colunas em "instituicoes"
    await queryInterface.addColumn('instituicoes', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('instituicoes', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('instituicoes', 'data_created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    // Adicionando colunas em "infrator"
    await queryInterface.addColumn('infrator', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('infrator', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('infrator', 'data_created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    // Adicionando colunas em "acompanhamento"
    await queryInterface.addColumn('acompanhamento', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('acompanhamento', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('acompanhamento', 'data_created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    // Adicionando colunas em "atividade"
    await queryInterface.addColumn('atividade', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('atividade', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('atividade', 'data_created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    // Adicionando colunas em "avaliacao"
    await queryInterface.addColumn('avaliacao', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('avaliacao', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('avaliacao', 'data_created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    // Adicionando colunas em "notificacoes"
    await queryInterface.addColumn('notificacoes', 'createdAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('notificacoes', 'updatedAt', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('notificacoes', 'data_created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },

  async down(queryInterface, Sequelize) {
    // Removendo colunas de "usuarios"
    await queryInterface.removeColumn('usuarios', 'createdAt');
    await queryInterface.removeColumn('usuarios', 'updatedAt');
    await queryInterface.removeColumn('usuarios', 'data_created');

    // Removendo colunas de "instituicoes"
    await queryInterface.removeColumn('instituicoes', 'createdAt');
    await queryInterface.removeColumn('instituicoes', 'updatedAt');
    await queryInterface.removeColumn('instituicoes', 'data_created');

    // Removendo colunas de "infrator"
    await queryInterface.removeColumn('infrator', 'createdAt');
    await queryInterface.removeColumn('infrator', 'updatedAt');
    await queryInterface.removeColumn('infrator', 'data_created');

    // Removendo colunas de "acompanhamento"
    await queryInterface.removeColumn('acompanhamento', 'createdAt');
    await queryInterface.removeColumn('acompanhamento', 'updatedAt');
    await queryInterface.removeColumn('acompanhamento', 'data_created');

    // Removendo colunas de "atividade"
    await queryInterface.removeColumn('atividade', 'createdAt');
    await queryInterface.removeColumn('atividade', 'updatedAt');
    await queryInterface.removeColumn('atividade', 'data_created');

    // Removendo colunas de "avaliacao"
    await queryInterface.removeColumn('avaliacao', 'createdAt');
    await queryInterface.removeColumn('avaliacao', 'updatedAt');
    await queryInterface.removeColumn('avaliacao', 'data_created');

    // Removendo colunas de "notificacoes"
    await queryInterface.removeColumn('notificacoes', 'createdAt');
    await queryInterface.removeColumn('notificacoes', 'updatedAt');
    await queryInterface.removeColumn('notificacoes', 'data_created');
  }
};
