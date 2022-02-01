import 'dotenv/config';
import { Sequelize } from 'sequelize';

const urlDatabase: string = process.env.DATABASE_URL || "";
const sequelizeConnection = new Sequelize(urlDatabase);

export default sequelizeConnection;
