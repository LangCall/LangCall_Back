const { 
    getUserList, getUserInfo, 
    s_createUser,


} = require('../services/userService');

// 회원 정보 (전체)
const c_getUsers = async (req, res) => {
    try {
        console.log('controller 진입')
        const users = await getUserList();
        console.log('controller', users)
        res.json(users);
    } catch (error) {
        throw(error);
    }
};




// 회원 생성(회원가입)
const c_createUser = async (req, res) => {
    try {
        const newUser = await s_createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        throw(error);
    }
};



module.exports = { c_getUsers, c_createUser };
