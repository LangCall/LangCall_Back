const STATUS_CODES = {
    OK: 200, // 서버가 요청을 성공적으로 처리하였다.
    CREATED: 201, // 요청이 처리되어서 새로운 리소스가 생성되었다.
    BAD_REQUEST: 400, // 요청의 구문이 잘못되었다.
    UNAUTHORIZED: 401, // 지정한 리소스에 대한 액세스 권한이 없다.
    FORBIDDEN: 403, // 지정한 리소스에 대한 액세스가 금지되었다. 
    NOT_FOUND: 404, // 지정한 리소스를 찾을 수 없다.
    CONFLICT: 409, //서버의 현재 상태와 요청이 충돌했음을 나타냅니다(중복)
    INTERNAL_SERVER_ERROR: 500, //서버에 에러가 발생하였다.
};

module.exports = STATUS_CODES;
