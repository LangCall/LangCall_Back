const mysql = require('mysql2');

// connection보다 pool이 더 좋대 gpt
const pool = mysql.createPool(
    {
        host : process.env.DB_HOST,
        port: process.env.DB_PORT,
        user:  process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 10, // 최대 연결 수
    }
);

module.exports = pool;
