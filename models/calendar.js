module.exports = function (sequelize, DataTypes) {
    const Calandar = sequelize.define("Calendar", {
        id:{type: DataTypes.STRING, primaryKey: true },
        familyid: DataTypes.STRING,
        event: DataTypes.STRING,
        eventDate: DataTypes.DATE,
        eventTime: DataTypes.TIME,
        userid: DataTypes.STRING
       },
        {
            freezeTableName: true
        });


    return Calandar;
};
