import {Mascotas} from '../model/mascotas.js';

export async function gMascotas(req, res) {
    try {
        const mascotas = await Mascotas.findAll()
        res.json(mascotas);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export async function cMascota(req, res) {
    const {idmascota, nombre, especie, raza, sexo, peso, utilizacion, altura, usuarioIdusuarios} = req.body
    try {
        await Mascotas.create({
            idmascota,
            nombre,
            especie,
            raza,
            sexo,
            peso,
            utilizacion,
            altura,
            usuarioIdusuarios
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function dMascota(req, res) {
    try {
        const {idmascota} = req.params;
        await Mascotas.destroy({
            where: {
                idmascota,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function uMascota(req, res){
    try {
        const {idmascota} = req.params;
        const {nombre, especie, raza, sexo, peso, utilizacion, altura} = req.body;
        const mascota = await Mascotas.findByPK(idmascota);
        mascota.nombre = nombre;
        mascota.especie = especie;
        mascota.raza = raza;
        mascota.sexo = sexo;
        mascota.peso = peso;
        mascota.utilizacion = utilizacion;
        mascota.altura = altura;

        await mascota.save();
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function gOneMascota(req, res) {
    try {
        const {idmascota} = req.params;
        const mascota = await Mascotas.findOne({
            where:{
                idmascota,
            }
        })
        if(!mascota) return res.status(404).json({message: 'Mascota No Existe'});
        res.json(mascota);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}