import app from './app.js';
import { sequelize } from "./db/db.js";
const port = 3000

async function main() {
    try {
        await sequelize.sync()
        app.get('/', (req, res) => res.send('Hello World!'))
        app.listen(port, () => console.log(
            `Example app listening on port ${port}!`
        ))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}
main();