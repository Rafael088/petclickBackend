import { sequelize } from "../db/db.js";
import {  DataTypes } from "sequelize";
import { Pets } from "./pets.js";
//Modelos
export const Users = sequelize.define('users', {
    iduser:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    userrol:{
        type: DataTypes.STRING,
        defaultValue: "users"
    },
    username:{
        type: DataTypes.STRING
    },
    mail:{
        type: DataTypes.STRING
    },
    idsubscription:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    password:{
        type: DataTypes.STRING
    },
    number:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    
},{
    timestamps: false
});