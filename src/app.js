import express  from "express";
import users from "./routes/users.js";
import pets from "./routes/pets.js";
const app = express();

app.use(express.json())
app.use(users)
app.use(pets)

export default app;


