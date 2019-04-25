module.exports = function(sequelize, DataTypes) {
  const ProfileForm = sequelize.define("Profile", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    phone: DataTypes.STRING,
    accessCode: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    st: DataTypes.STRING,
    zip: DataTypes.STRING,
     });
  return ProfileForm;
};