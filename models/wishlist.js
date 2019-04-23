module.exports = function(sequelize, DataTypes) {
    const Wish = sequelize.define("Wish", {
      text: DataTypes.STRING,
      granted: DataTypes.BOOLEAN
     
    });
    return Wish;
  };