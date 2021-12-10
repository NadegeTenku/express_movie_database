const {sequelize, DataTypes, Model} = require('../db')
class Crew extends Model {}

Crew.init({
    position: DataTypes.STRING,
    name: DataTypes.STRING,
    department_no: DataTypes.INTEGER
}, {
    sequelize, timestamps: false
})

module.exports = {Crew};