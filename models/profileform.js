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
    zip: DataTypes.STRING
  });

  ProfileForm.associate = function (models) {
    //associate profile with wishes
    //when a profile is deleted, also delete any associated wishes
    ProfileForm.hasMany(models.Wish, {
      onDelete: "cascade"
    });
  };
  return ProfileForm;
};





