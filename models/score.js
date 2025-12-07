module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define('Score', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Score;
  };