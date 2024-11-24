const {
    getAllUsers,
    insertUser,
    verifyUser
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
    const newUser = await insertUser(userData);
    return newUser;
};

//로그인
const s_signinUser = async(userData) => {
    const result = await verifyUser(userData);
    return result;
}

module.exports = { 
    getUserList, 
    s_createUser,
    s_signinUser,
};
