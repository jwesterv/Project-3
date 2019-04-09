module.exports = function (sequelize, DataTypes) {
    const Family = sequelize.define("Family", {
        id:{type: DataTypes.STRING, primaryKey: true },
        familyName: DataTypes.STRING,
        accessCode: DataTypes.INTEGER,
        numuUsers: DataTypes.INTEGER,
        creator: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    {
    freezeTableName: true
    });

return Family;
};