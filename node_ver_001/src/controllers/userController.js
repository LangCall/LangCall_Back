const { 
    getUserList, getUserInfo, 
    s_createUser, s_signinUser


} = require('../services/userService');
// 상태 코드 (가독성을 위해)
// service에 넣지 않는 이유
const STATUS_CODES = require('../middlewares/statusCode');



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

// 로그인
const c_signinUser = async(req, res) =>{
    try{
        // email, password, type이 없을 경우 예외처리
        if(!req.body.email || !req.body.password || !req.body.user_type){
            res.status(STATUS_CODES.UNAUTHORIZED).json({message: 'Invalid username, password or type.'})
        }
        
        // DB 확인
        const result = await s_signinUser(req.body);
        if (!result) { // 401: 인증 실패
            return res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid  username, password or type.' });
        }

        // 로그인 성공
        res.status(STATUS_CODES.OK).json({message: 'Login successful', result});
    }catch(error){
        console.log(error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({message:"INTERNAL_SERVER_ERROR", error})

    }
}



module.exports = { c_getUsers, c_createUser, c_signinUser };
