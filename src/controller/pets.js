import {Pets} from '../model/pets.js';

export async function gPets(req, res) {
    try {
        const pets = await Pets.findAll()
        res.json(pets);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export async function cPet(req, res) {
    const {idpet, name, ownername, kind, race, size, utilization, weight, iduser} = req.body
    try {
        await Pets.create({
            idpet,
            name,
            ownername,
            kind,
            race,
            size,
            utilization,
            weight,
            iduser
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function dPet(req, res) {
    try {
        const {idpet} = req.params;
        await Pets.destroy({
            where: {
                idpet,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function uPet(req, res){
    try {
        const {idpet} = req.params;
        const {name, ownername, kind, race, size, utilization, weight} = req.body;
        const pet = await Pets.findByPK(idpet);
        pet.name = name;
        pet.ownername = ownername;
        pet.kind = kind;
        pet.race = race;
        pet.size = size;
        pet.utilization = utilization;
        pet.weight = weight;

        await pet.save();
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function gOnePet(req, res) {
    try {
        const {idpet} = req.params;
        const pet = await Pets.findOne({
            where:{
                idpet,
            }
        })
        if(!pet) return res.status(404).json({message: 'pet No Existe'});
        res.json(pet);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}