import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const BASE_PORT = 3000

export async function getConnection() {
    return await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    })
}

