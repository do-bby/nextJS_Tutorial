import { profileEnd } from 'console';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
})

export const selectSQL = async (sqlQuery :string) => {
    try{
        const [rows] = await pool.query(sqlQuery);
        return rows;
    } catch (err) {
        console.error.apply(err);
    }
}