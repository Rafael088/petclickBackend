import { sequelize } from "../db/db.js";
import {  DataTypes } from "sequelize";
import { Mascotas } from "./mascotas.js";
//Modelos
export const Usuarios = sequelize.define('usuarios', {
    idusuarios:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rolusuarios:{
        type: DataTypes.STRING,
        defaultValue: "users"
    },
    nombreusuario:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    idsuscripcion:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    password:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

Usuarios.hasMany(Mascotas, {
foreingKey: 'idUsuario',
soucerKey: 'idusuarios'
})

Mascotas.belongsTo(Usuarios, {
targetId: 'idusuarios'
})