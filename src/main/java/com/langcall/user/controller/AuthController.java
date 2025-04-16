package com.langcall.user.controller;

import com.langcall.user.dto.request.auth.LoginRequestDto;
import com.langcall.user.dto.response.auth.LoginResponseDto;
import com.langcall.user.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/users/signin")
    public ResponseEntity<LoginResponseDto> signin(@RequestBody LoginRequestDto loginRequestDto){
        return ResponseEntity.ok(authService.signin(loginRequestDto));
    }


}
