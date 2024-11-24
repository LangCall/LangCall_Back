// index.js
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler')

// 회원 정보 라우터
const userRoutes = require("./routes/userRoutes")




const app = express();
const PORT = 4000;



// CORS 설정
app.use(cors({
    origin: 'http://localhost:3000', // 허용할 도메인
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    credentials: true, // 쿠키 전송 허용
  }));
  

// JSON 형식의 요청 본문을 처리할 수 있도록 설정
app.use(express.json());

// 컨트롤러, 서비스 매핑 라우터
app.use('/api/users', userRoutes); // 회원 정보 라우터




// 에러 처리 미들웨어
app.use(errorHandler);








//test
app.post('/user/signup', (req, res) => {
    console.log('user/signup', req.body)
    res.send({
        statusCode: 200, // 상태코드 (보인 서버상태코드)
        errorCode: 0, // 에러코드 (본인 서버에러코드)
        message: 'Signup successful!', // 메시지
        result: {}, // 데이터 내용
        timestamp: new Date() // 시간
    });
})


// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});









// 샘플 데이터 (기본 사용자 목록)
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// 사용자 목록 조회 (Read)
app.get('/users', (req, res) => {
    res.json(users);
});

// 특정 사용자 조회 (Read)
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// 새 사용자 추가 (Create)
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 사용자 정보 업데이트 (Update)
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

// 사용자 삭제 (Delete)
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');
    users.splice(userIndex, 1);
    res.status(204).send();
});

