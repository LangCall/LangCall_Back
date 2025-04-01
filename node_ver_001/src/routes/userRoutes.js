// 라우터 : URL 경로와 컨트롤러를 매핑하는 라우트 파일을 정의합니다.
const express = require('express');
const {
    c_getUsers, 
    c_createUser, 
    c_signinUser

} = require('../controllers/userController.js');



const router = express.Router();


// 메소드별 정리
// get
router.get('/', c_getUsers);
// router.get('/:id', c_getUserInfo);


// post
router.post('/signup', c_createUser);
router.post('/signin', c_signinUser);



// put
// router.put("/:id", putUserInfo);


// delete
// router.delete("/:id", deleteUser);

module.exports = router;
