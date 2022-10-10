import { sequelize } from "../db/db.js";
import {  DataTypes } from "sequelize";

//falta cambiar los nombres
export const Veterinaryclinics = sequelize.define('veterinaryclinics',{
    idveterinaryclinic:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clinicname:{
        type: DataTypes.STRING
    },
    clinicphone:{
        type: DataTypes.INTEGER
    },
    subscriptiondate:{
        type: DataTypes.STRING
    },
    numberemployees:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
})