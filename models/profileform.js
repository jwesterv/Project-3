module.exports = function(sequelize, DataTypes) {
    const ProfileForm = sequelize.define("Profile", {
      birthday: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING
    });
    return ProfileForm;
  };