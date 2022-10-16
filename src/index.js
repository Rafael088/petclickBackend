import app from './app.js';
import { sequelize } from "./db/db.js";
import cors from 'cors';

const port = 3001
const optionsCors = {
    origin: 'https://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(optionsCors));
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