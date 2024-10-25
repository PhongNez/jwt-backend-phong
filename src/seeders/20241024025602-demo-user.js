'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('User', [{
      email: "abc@gmail.com",
      username: 'John Doe 1',
      password: '123456'
    },
    {
      email: "abc@gmail.com",
      username: 'John Doe 2',
      password: '123456'
    },
    {
      email: "abc@gmail.com",
      username: 'John Doe 3',
      password: '123456'
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
