import { Router } from "express";
import { cUsuario, dUsuario, gMUsuario, gOneUsuario, gUsuarios, uUsuario } from "../controller/usuarios.js";

const router = Router();

router.get("/usuarios", gUsuarios);
router.get("/usuarios:idusuarios", gOneUsuario);
router.post("/usuarios", cUsuario);
router.delete("/usuarios:idusuarios", dUsuario);
router.put("/usuarios:idusuarios", uUsuario);
router.get("/usuarios:idusuarios/mascotas", gMUsuario);

export default router;