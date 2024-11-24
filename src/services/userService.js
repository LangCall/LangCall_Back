let users = [{ id: 1, name: 'Alice' }, {id:2, name: 'a'}];

// 회원 정보 (전체)
const getUserList = () => users;

// 회원 정보 (개인)
const getUserInfo = (id) =>{
    const userInfo = users.filter((value) => value.id === id);
    console.log('servcie ->', userInfo, id)
    return userInfo;
}


// 회원 생성(회원가입)
const addUser = (userData) => {
    const newUser = { id: users.length + 1, ...userData };
    users.push(newUser);
    return newUser;
};


module.exports = { 
    getUserList, getUserInfo, 
    addUser 
};
