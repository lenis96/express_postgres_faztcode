import {DataTypes} from 'sequelize'
import {sequelize} from './../database.js'
import {Task} from './Task.js'

export const Project = sequelize.define('porjects',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    priority:{
        type:DataTypes.INTEGER
    },
    description:{
        type:DataTypes.STRING
    }
},{timestamps:true});

Project.hasMany(Task,{
    foreignKey:'projectId',
    sourceKey:'id'
})

Task.belongsTo(Project,{
    foreignKey:'projectId',
    tagerId:'id'
})