package com.langcall.user.service;


import com.langcall.user.dto.MemberResponseDto;
import com.langcall.user.dto.request.auth.LoginRequestDto;
import com.langcall.user.dto.response.auth.LoginResponseDto;
import com.langcall.user.entity.Member;
import com.langcall.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;

    public LoginResponseDto login(LoginRequestDto loginRequestDto){
        LoginResponseDto responseDto= new LoginResponseDto();

        return responseDto ;
    }

    public LoginResponseDto signin(LoginRequestDto loginRequestDto){
        LoginResponseDto responseDto = new LoginResponseDto();

        return responseDto ;
    }

}
