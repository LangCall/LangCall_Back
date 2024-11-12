// index.js
const express = require('express');
const app = express();
const PORT = 4000;

// JSON 형식의 요청 본문을 처리할 수 있도록 설정
app.use(express.json());

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

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
