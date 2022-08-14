import Sequelize from 'sequelize'

export const sequelize = new Sequelize('projects_db','postgres','postgres',{
    host:'localhost',
    dialect: 'postgres'
})