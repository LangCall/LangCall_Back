let users = [{ id: 1, name: 'Alice' }];

// 회원 정보 
const getUserList = () => users;

// 회원 생성(회원가입)
const addUser = (userData) => {
    const newUser = { id: users.length + 1, ...userData };
    users.push(newUser);
    return newUser;
};


module.exports = { getUserList, addUser };
