
import { Pets } from '../model/pets.js';
import {Users} from '../model/users.js';

export async function gUsers(req, res) {
    try {
        const users = await Users.findAll()
        res.json(users);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export async function cUser(req, res) {
    const {iduser, userrol, username, mail, password, number, city} = req.body
    try {
        await Users.create({
            iduser,
            userrol,
            username,
            mail,
            password,
            number,
            city,
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function dUser(req, res) {
    try {
        const {iduser} = req.params;
        await Users.destroy({
            where: {
                iduser,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function uUser(req, res){
    try {
        const {iduser} = req.params;
        const {userrol, username, mail, password} = req.body;
        const user = await Users.findByPK(iduser);
        user.userrol = userrol;
        user.username = username;
        user.mail = mail;
        user.password = password;
        await user.save();
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function gOneUser(req, res) {
    try {
        const {iduser} = req.params;
        const user = await Users.findOne({
            where:{
                iduser,
            }
        })
        if(!user) return res.status(404).json({message: 'Usuario No Existe'});
        res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export async function gMUser(req, res) {
    try {
        const {iduser} = req.params;
        const pets = await Pets.findAll({
            where:{
                iduser,
            }
        });
        res.json(pets);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}