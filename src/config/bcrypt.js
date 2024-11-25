const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        // 솔트 생성 (권장: 10~12 라운드)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error;
    }
};

const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error("Error comparing passwords:", error);
        throw error;
    }
};


// // 사용 예시
// (async () => {
//     const password = "mypassword123";
//     const hashed = await hashPassword(password);
//     console.log("Hashed Password:", hashed);

//     const result = await comparePassword("mypassword3", "$2b$10$ALuu3Mxln2Ym.k.kJaH0j.uQlNR2rffulLOpuKsgs1DkSsSBHs50y");
//     console.log('result', result)
// })();


module.exports = { hashPassword, comparePassword }