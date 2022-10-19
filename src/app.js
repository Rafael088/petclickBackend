import express  from "express";
import users from "./routes/users.js";
import pets from "./routes/pets.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())
app.use(users)
app.use(pets)

export default app;


