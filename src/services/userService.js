const {
    getAllUsers,
    insertUser,
    verifyUser
} = require("../repositories/userRepository")
const {hashPassword, comparePassword} = require("../config/bcrypt")

// 회원 정보 (전체)
const getUserList = async () => {
    console.log('service 진입')
    const result = await getAllUsers();
    console.log('service', result);
    return result;
}

// 회원 생성(회원가입)
const s_createUser = async (userData) => {
    // hashing
    const hashpw = await hashPassword(userData.password);
    userData.password = hashpw;

    // 같은 이메일 주소, type이 있는지 확인 
    const result = await verifyUser(userData);
    console.log('service ->', result)

    if (!result){
        // DB 추가
        const newUser = await insertUser(userData);
        console.log('DB 추가 -> ', newUser)
        return newUser;
    }else {
        return null;
    }
};

//로그인
const s_signinUser = async(userData) => {
    // DB 데이터 
    const user = await verifyUser(userData);
    console.log('user->', user)
    // 해싱 복호화
    const iscompare = await comparePassword(userData.password, user.password)
    console.log('t/f', iscompare)
    if(iscompare){
        return user
    }else {
        return null;
    }
}

module.exports = { 
    getUserList, 
    s_createUser,
    s_signinUser,
};
