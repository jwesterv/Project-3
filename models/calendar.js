module.exports = function (sequelize, DataTypes) {
    const Calendar = sequelize.define("User", {
        id:{type: DataTypes.STRING, primaryKey: true },
        familyid: DataTypes.STRING,
        event: DataTypes.STRING,
        eventStart: DataTypes.DATE,
        eventEnd: DataTypes.DATE,
        eventTime: DataTypes.TIME,
        eventDescription: DataTypes.STRING
       },
        {
            freezeTableName: true
        });


    return Calendar;
};
