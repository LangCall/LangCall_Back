// 라우터 : URL 경로와 컨트롤러를 매핑하는 라우트 파일을 정의합니다.
const express = require('express');
const { con_getUsers, con_getUserInfo, createUser, } = require('../controllers/userController.js');

const router = express.Router();


// 메소드별 정리
// get
router.get('/', con_getUsers);
router.get('/:id', con_getUserInfo);


// post
router.post('/', createUser);




// put
// router.put("/:id", putUserInfo);


// delete
// router.delete("/:id", deleteUser);

module.exports = router;
