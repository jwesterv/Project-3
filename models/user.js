module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        id:{type: DataTypes.STRING, primaryKey: true },
        familyid: DataTypes.STRING,
        isConfirmed: DataTypes.BOOLEAN,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        address: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        email: DataTypes.STRING,
        dob: DataTypes.DATE,
        confirmedBy: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
        {
            freezeTableName: true
        });


    return User;
};
