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
      name: 'Ilya', email: '11@', password: '123', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    }, {
      name: 'Alex', email: '22@', password: '123', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    }, {
      name: 'Natalya', email: '33@', password: '123', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
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

    await queryInterface.bulkInsert('Roles', roles, {});
    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Posts', posts, {});
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
