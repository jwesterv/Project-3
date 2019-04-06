module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        email: DataTypes.STRING,
    });

return User;
};
