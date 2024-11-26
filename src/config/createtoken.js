const jwt = require('jsonwebtoken');

// 비밀 키 설정 (환경 변수에서 불러오기 권장)
const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRES_IN = '1h'; // 토큰 만료 시간 (예: 1시간)

// JWT 토큰 생성 함수
const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
};

// JWT 토큰 검증 함수
const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY); // 검증 성공 시 payload 반환
    } catch (error) {
        throw new Error('Invalid token');
    }
};

module.exports = { generateToken, verifyToken };
