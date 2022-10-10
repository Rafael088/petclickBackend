import { Router } from "express";
import { cPet, dPet, gOnePet, gPets, uPet } from "../controller/pets.js";

const router = Router();
router.get("/pets", gPets)
router.post("/pets", cPet)
router.delete("/pets:idpet", dPet)
router.put("/pets:idpet", uPet)
router.get("/pets:idpet", gOnePet)
export default router;