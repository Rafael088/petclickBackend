import app from './app.js';
import { sequelize } from "./db/db.js";

const port = 3001

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