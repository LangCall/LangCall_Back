const { 
    getUserList, getUserInfo, 
    s_createUser, s_signinUser


} = require('../services/userService');
// 상태 코드 (가독성을 위해)
// service에 넣지 않는 이유
const STATUS_CODES = require('../middlewares/statusCode');
// 토큰
const {generateToken} = require("../config/createtoken")


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
        console.log('control newUser -> ', newUser);
        if (!newUser) { // 401: 중복 데이터 
            return res.status(STATUS_CODES.CONFLICT).json({ message: '중복된 데이터가 있습니다.' });
        }
        
        // 회원 가입 성공 시
        // json 안이 front로 보내지는 데이터 
        res.status(STATUS_CODES.CREATED).json({ 
            statusCode: 200,
            errorCode: 0,
            message: 'Sign Up Successful.', 
            result: { email: req.body.email, name: req.body.name },
            timestamp: new Date(),
        });
    } catch (error) {
        console.log(error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({message:"INTERNAL_SERVER_ERROR", error})
    }
};

// 로그인
const c_signinUser = async(req, res) => {
    try{
        console.log('c_signinUser')
        // email, password, type이 없을 경우 예외처리
        if(!req.body.email || !req.body.password || !req.body.user_type){
            res.status(STATUS_CODES.UNAUTHORIZED).json({message: 'Invalid username, password or type.'})
        }
        
        // DB 확인 + 해싱 복호화
        const result = await s_signinUser(req.body);

        if (!result) { // 401: 인증 실패
            return res.status(STATUS_CODES.UNAUTHORIZED).json({ message: 'Invalid  username, password or type.' });
        }
        

        // 로그인 성공

        // JWT 생성
        const token = generateToken({ user_id: result.user_id, email: result.email });
        console.log('token 생성 완료', token)

        // json 안이 front로 보내지는 데이터 
        res.status(STATUS_CODES.OK).json({
            statusCode: 200,
            errorCode: 0,
            message: 'Login Up Successful.', 
            result: { email: result.email, name: result.name, user_type: result.user_type },
            token, 
            timestamp: new Date(),
        });
    }catch(error){
        console.log(error);
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({message:"INTERNAL_SERVER_ERROR", error})
    }
}



module.exports = { c_getUsers, c_createUser, c_signinUser };
