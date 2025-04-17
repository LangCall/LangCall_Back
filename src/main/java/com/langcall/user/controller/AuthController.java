package com.langcall.user.controller;

import com.langcall.user.dto.request.auth.LoginRequestDto;
import com.langcall.user.dto.response.auth.LoginResponseDto;
import com.langcall.user.service.AuthService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginRequestDto) {
        try {
            System.out.println("Authcontroller --> /login");
            LoginResponseDto responseDto = authService.login(loginRequestDto);
            return ResponseEntity
                    .status(HttpStatus.OK) // 또는 ResponseEntity.ok()
                    .body(responseDto);
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponseDto(null, null, 0, "로그인 실패: " + e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new LoginResponseDto(null, null, 0, "서버 오류"));
        }
    }

    @PostMapping("/users/signin")
    public ResponseEntity<LoginResponseDto> signin(@RequestBody LoginRequestDto loginRequestDto){
        return ResponseEntity.ok(authService.signin(loginRequestDto));
    }


}
