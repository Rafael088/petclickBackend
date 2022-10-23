import { Router } from "express";
import { cUser, dUser, gMUser, gOneUser, gUsers, uUser } from "../controller/users.js";
const router = Router();

router.get("/users", gUsers);
router.get("/users:iduser", gOneUser);
router.post("/users", cUser);
router.delete("/users:iduser", dUser);
router.put("/users:iduser", uUser);
router.get("/users/pets:iduser", gMUser);

export default router;