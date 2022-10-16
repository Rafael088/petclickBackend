import app from './app.js';
import { sequelize } from "./db/db.js";
import cors from 'cors';

const port = 3000
const whitelist = ['https://localhost:3000', 'https://localhost:3001'];

app.use(cors({
    origin: whitelist
}));
async function main() {
    try {
        await sequelize.sync()
        app.get('/', (req, res) => res.send('Hello World!'))
        app.listen(process.env.PORT || port)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
}
main();