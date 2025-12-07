module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    User.associate = (models) => {
      User.hasMany(models.Score, {
        foreignKey: 'userId',
        as: 'scores'
      });
    };
    return User;
  };
  