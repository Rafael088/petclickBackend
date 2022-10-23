import { sequelize } from "../db/db.js";
import {  DataTypes } from "sequelize";


export const Pets = sequelize.define('pets',{
    idpet:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    ownername:{
        type: DataTypes.STRING
    },
    kind:{
        type: DataTypes.STRING
    },
    race:{
        type: DataTypes.STRING
    },
    size:{
        type: DataTypes.STRING
    },
    utilization:{
        type: DataTypes.STRING
    },
    weight:{
        type: DataTypes.STRING
    },
    iduser:{
        type: DataTypes.STRING
    },
    gende:{
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})