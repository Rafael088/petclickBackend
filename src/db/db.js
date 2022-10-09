import Sequelize  from "sequelize";

export const sequelize = new Sequelize('petClick', 'postgres', '1003027976Ra',{
    host: 'localhost',
    dialect: 'postgres'
})