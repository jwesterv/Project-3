module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            validate: {
                isEmail: true
            }
        },
        name: DataTypes.STRING,
        salt: DataTypes.STRING,
        hash: DataTypes.STRING,
        address: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        familyid: DataTypes.STRING,
        isConfirmed: DataTypes.BOOLEAN,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dob: DataTypes.DATE,
        confirmedBy: DataTypes.STRING
    },
    {
                    freezeTableName: true
                }
    
    );
    return User;
};
