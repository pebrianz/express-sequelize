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
      "messages",
      [
        {
          user_id: 1,
          room_id: 1,
          content: "hello world",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          room_id: 1,
          content: "hello everyone",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          room_id: 1,
          content: "hai",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          room_id: 1,
          content: "hello",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          room_id: 1,
          content: "Web Developer",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          room_id: 1,
          content: "Node js",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          room_id: 2,
          content: "Link start",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          room_id: 2,
          content: "Solo Player",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          room_id: 2,
          content: "kirito kun",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          room_id: 2,
          content: "link start",
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
    await queryInterface.bulkDelete("messages", null, {});
  },
};
