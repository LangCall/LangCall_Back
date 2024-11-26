const { verifyToken } = require('../services/createtoken');

const authTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // "Bearer {token}" 형식
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = verifyToken(token); // 토큰 검증
        req.user = decoded; // 요청에 사용자 정보 추가
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authTokenMiddleware;
