"use strict";

export default {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Pebrianz",
          username: "pebrianz",
          password: "12345678",
          last_seen_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John Doe",
          username: "johndoe",
          password: "xrqwerty",
          last_seen_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "kirigaya kazuto",
          username: "kirito",
          password: "12345abcd",
          last_seen_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Yuuki Asuna",
          username: "Asuna",
          password: "01234ordinal",
          last_seen_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("users", null, {});
  },
};
