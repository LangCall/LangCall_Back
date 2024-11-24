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


module.exports = {
    getAllUsers, 
    insertUser
}