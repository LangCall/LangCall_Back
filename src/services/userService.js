const {
    getAllUsers,
    insertUser,
} = require("../repositories/userRepository")


// 회원 정보 (전체)
const getUserList = async () => {
    console.log('service 진입')
    const result = await getAllUsers();
    console.log('service', result);
    return result;
}

// 회원 생성(회원가입)
const s_createUser = async (userData) => {
    console.log('create service 진입', userData)
    const newUser = await insertUser(userData);
    console.log(newUser)
    return newUser;
};


module.exports = { 
    getUserList, 
    s_createUser 
};
