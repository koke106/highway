import 'dotenv/config'
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    allowExitOnIdle: true,
})

try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
} catch (error){
    console.log('error ', error)
}

// const {Client} = require("pg");

// const connectDB = async () => {
//     const client = new Client({
//         user: 'koke',
//         host: 'localhost',
//         database: 'highway',
//         port: 5432
//     });
//     await client.connect();
    
//     const res = await client.query('SELECT * FROM users');
    
//     console.log(' res -> ', res.rows);
    
// }

// connectDB();

// const endDB = async () => {
//     const client = new Client();
//     await client.end();
// }

// const checkUsers = async () => {
//     const client = new Client();

    
//     const res = await client.query('SELECT * FROM users');
    
//     console.log(' res -> ', res);
// }


