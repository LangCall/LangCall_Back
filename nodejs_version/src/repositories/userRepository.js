const {db} = require('../config/db');


const getAllUsers = async() => {
    console.log('repository 진입')
    const [rows] = await db.query('SELECT * FROM LC_USER_T');
    console.log('repository', rows)
    return rows;
}


const insertUser = async(userData) => {
    try{
        const {email, name, password, user_type} = userData;
        console.log('repository 진입', userData)
        const result = await db.execute(
            "INSERT INTO LC_USER_T(email, name, password, user_type ) VALUES (?, ?, ?, ? )",
            [email, name, password, user_type])
        return result;
    }catch(error){
        return error;
    }
}

const verifyUser = async(userData) =>{
    const {email, password, user_type} = userData;
    const [result] = await db.query(
        'SELECT * FROM LC_USER_T WHERE email = ? AND password = ? AND user_type = ?',
        [email, password, user_type]
    )
    return result[0];
}


module.exports = {
    getAllUsers, 
    insertUser,
    verifyUser
}