const {db} = require('./config/db');


const getAllUsers = async() => {
    const [rows] = await db.query('SELECT * FROM LC_USER_T');
    return rows;
}

const getUserById = async(id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

module.exports = {
    getAllUsers, getUserById
}