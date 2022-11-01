import { sequelize } from "../db/db.js";
import {  DataTypes } from "sequelize";

//falta cambiar los nombres
export const Appointments = sequelize.define('appointments',{
    idappointment:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idveterinaryclinic:{
        type: DataTypes.INTEGER,
    },
    appointmentdate:{
        type: DataTypes.STRING
    },
    iddoctor:{
        type: DataTypes.INTEGER,
    },
    iduser:{
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false
})