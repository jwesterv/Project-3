module.exports = function (sequelize, DataTypes) {
    const Calendar = sequelize.define("User", {
        id:{type: DataTypes.STRING, primaryKey: true },
        familyid: DataTypes.STRING,
        event: DataTypes.STRING,
        eventDate: DataTypes.DATE,
        eventTime: DataTypes.TIME
       },
        {
            freezeTableName: true
        });


    return Calendar;
};
