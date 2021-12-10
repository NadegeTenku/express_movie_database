const {sequelize, DataTypes, Model} = require('../db')
class Cast extends Model {}

Cast.init({
    role_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
}, {
    sequelize, timestamps: false
})

module.exports = {Cast};