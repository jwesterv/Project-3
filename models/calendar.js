module.exports = function (sequelize, DataTypes) {
    const Calendar = sequelize.define("Calendar", {
        id:{type: DataTypes.STRING, primaryKey: true },
        familyid: DataTypes.STRING,
        event: DataTypes.STRING,
        eventStart: DataTypes.DATE,
        eventEnd: DataTypes.DATE,
        eventTime: DataTypes.TIME,
        description: DataTypes.STRING,
        userid: DataTypes.STRING
       },
        {
            freezeTableName: true
        });


    return Calendar;
};
