const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Role }) {
      // define association here
      this.hasMany(Post, { foreignKey: 'user_id' });
      this.belongsTo(Role, { foreignKey: 'role_id' });
      this.belongsToMany(Post, { through: 'Likeds', foreignKey: 'user_id', as: 'userLike' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
