const { getUserList, addUser } = require('../services/userService');

// 회원 정보
const getUsers = (req, res, next) => {
    try {
        const users = getUserList();
        res.json(users);
    } catch (error) {
        throw(error);
    }
};

// 회원 생성(회원가입)
const createUser = (req, res, next) => {
    try {
        const newUser = addUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        throw(error);
    }
};

module.exports = { getUsers, createUser };
