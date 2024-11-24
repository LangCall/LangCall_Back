// 라우터 : URL 경로와 컨트롤러를 매핑하는 라우트 파일을 정의합니다.
const express = require('express');
const { getUsers, createUser } = require('../controllers/userController.js');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);




module.exports = router;
