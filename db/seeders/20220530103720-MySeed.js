module.exports = {
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
    const roles = [{ name: 'admin', createdAt: new Date(), updatedAt: new Date() },
    { name: 'regular', createdAt: new Date(), updatedAt: new Date() }];

    const users = [{
      name: 'Ilya', email: '11@mail.ru', password: '$2a$10$TArvEPbZBdluLLQNeYhpCeYsvMgYxcPltOfEbgTF8zQGTkS7e/Lra', role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    }, {
      name: 'Alex', email: '22@mail.ru', password: '$2a$10$TArvEPbZBdluLLQNeYhpCeYsvMgYxcPltOfEbgTF8zQGTkS7e/Lra', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    }, {
      name: 'Natalya', email: '33@mail.ru', password: '$2a$10$TArvEPbZBdluLLQNeYhpCeYsvMgYxcPltOfEbgTF8zQGTkS7e/Lra', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    }];
    const posts = [{
      title: 'i am man', user_id: 1, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'i am hero', user_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'i am superHero', user_id: 3, createdAt: new Date(), updatedAt: new Date(),
    },
    ];
    const likeds = [{
      user_id: 1, post_id: 1, createdAt: new Date(), updatedAt: new Date(),
    }, {
      user_id: 1, post_id: 2, createdAt: new Date(), updatedAt: new Date(),
    }, {
      user_id: 2, post_id: 1, createdAt: new Date(), updatedAt: new Date(),
    }, {
      user_id: 3, post_id: 2, createdAt: new Date(), updatedAt: new Date(),
    }, {
      user_id: 1, post_id: 3, createdAt: new Date(), updatedAt: new Date(),
    }];

    await queryInterface.bulkInsert('Roles', roles, {});
    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Posts', posts, {});
    await queryInterface.bulkInsert('Likeds', likeds, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
