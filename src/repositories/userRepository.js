const {db} = require('../config/db');


const getAllUsers = async() => {
    console.log('repository 진입')
    const [rows] = await db.query('SELECT * FROM lc_user_t');
    console.log('repository', rows)
    return rows;
}

const getUserById = async(id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

module.exports = {
    getAllUsers, getUserById
}