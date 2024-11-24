const { getUserList, getUserInfo, addUser} = require('../services/userService');

// 회원 정보 (전체)
const con_getUsers = (req, res) => {
    try {
        const users = getUserList();
        res.json(users);
    } catch (error) {
        throw(error);
    }
};

// 회원 정보 (개인)
const con_getUserInfo = (req, res) =>{
    try {
        console.log('req', req.params);
        const userInfo = getUserInfo(Number(req.params.id));
        res.json(userInfo)
    }catch(error){
        throw(error)
    }
}



// 회원 생성(회원가입)
const createUser = (req, res) => {
    try {
        const newUser = addUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        throw(error);
    }
};



module.exports = { con_getUsers, con_getUserInfo, createUser };
