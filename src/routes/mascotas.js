import { Router } from "express";
import { cMascota, dMascota, gMascotas, gOneMascota, uMascota } from "../controller/mascotas.js";

const router = Router();
router.get("/mascotas", gMascotas)
router.post("/mascotas", cMascota)
router.delete("/mascotas:idmascota", dMascota)
router.put("/mascotas:idmascota", uMascota)
router.get("/mascotas:idmascota", gOneMascota)
export default router;