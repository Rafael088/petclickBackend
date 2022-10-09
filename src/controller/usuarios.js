import { Mascotas } from '../model/mascotas.js';
import {Usuarios} from '../model/usuarios.js';

export async function gUsuarios(req, res) {
    try {
        const usuarios = await Usuarios.findAll()
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export async function cUsuario(req, res) {
    const {rolusuarios, nombreusuario, correo, password} = req.body
    try {
        await Usuarios.create({
            rolusuarios,
            nombreusuario,
            correo,
            password
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function dUsuario(req, res) {
    try {
        const {idusuarios} = req.params;
        await Usuarios.destroy({
            where: {
                idusuarios,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function uUsuario(req, res){
    try {
        const {idusuarios} = req.params;
        const {rolusuarios, nombreusuario, correo, password} = req.body;
        const usuario = await Usuarios.findByPK(idusuarios);
        usuario.rolusuarios = rolusuarios;
        usuario.nombreusuario = nombreusuario;
        usuario.correo = correo;
        usuario.password = password;
        await usuario.save();
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function gOneUsuario(req, res) {
    try {
        const {idusuarios} = req.params;
        const usuario = await Usuarios.findOne({
            where:{
                idusuarios,
            }
        })
        if(!usuario) return res.status(404).json({message: 'Usuario No Existe'});
        res.json(usuario);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export async function gMUsuario(req, res) {
    try {
        const {idusuarios} = req.params;
        const mascotas = await Mascotas.findAll({
            where:{
                usuarioIdusuarios: idusuarios,
            }
        });
        res.json(mascotas);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}