import express  from "express";

import router from "./routes/usuarios.js";
import mascota from "./routes/mascotas.js";
const app = express();

app.use(express.json())
app.use(router)
app.use(mascota)

export default app;


