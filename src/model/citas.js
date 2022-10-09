import { sequelize } from "../db/db.js";
import {  DataTypes } from "sequelize";

//falta cambiar los nombres
export const Dates = sequelize.define('citaclinica',{
    idmascota:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    especie:{
        type: DataTypes.STRING
    },
    raza:{
        type: DataTypes.STRING
    },
    sexo:{
        type: DataTypes.STRING
    },
    peso:{
        type: DataTypes.STRING
    },
    utilizacion:{
        type: DataTypes.STRING
    },
    altura:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})