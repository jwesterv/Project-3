module.exports = function (sequelize, DataTypes) {
    const Family = sequelize.define("Family", {
        
        familyName: DataTypes.STRING,
        accessCode: DataTypes.STRING,
        numUsers: DataTypes.INTEGER,
        creator: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        //for other family chats will need a chatname
        chatid: DataTypes.STRING,
        userid: DataTypes.STRING,
        familyid: DataTypes.STRING
    },
    {
    freezeTableName: true
    });

return Family;
};