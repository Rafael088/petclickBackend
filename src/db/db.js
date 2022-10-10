import Sequelize  from "sequelize";

export const sequelize = new Sequelize('postgres://vpledqplsjzigo:7e92cd9e382dd8ea370fa0b68cab0eb812b2178c56e673bbc996198cd108f57f@ec2-54-165-184-219.compute-1.amazonaws.com:5432/d3nf8ne24ocua3',{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}); // Example for postgres
