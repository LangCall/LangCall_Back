package com.langcall.user.service;

import com.langcall.user.dto.MemberResponseDto;
import com.langcall.user.dto.request.auth.LoginRequestDto;
import com.langcall.user.dto.response.auth.LoginResponseDto;
import com.langcall.user.entity.Member;
import com.langcall.user.entity.User;
import com.langcall.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public LoginResponseDto login(LoginRequestDto loginRequestDto){
        // 사용자 존재 여부 확인
        User user = userRepository.findByEmail(loginRequestDto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 이메일입니다.")); // 예외 처리

        // 비밀번호 일치 여부 확인
        if (!passwordEncoder.matches(loginRequestDto.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        // 인증 요청 토큰 생성
        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(
                        loginRequestDto.getEmail(),
                        loginRequestDto.getPassword()
                );

        // Spring Security가 인증 처리
        Authentication authentication = authenticationManager.authenticate(authToken);

        return new LoginResponseDto(user.getEmail(), user.getPassword(), user.getUser_type(), "로그인 성공");
    }

    public LoginResponseDto signin(LoginRequestDto loginRequestDto){
        LoginResponseDto responseDto = new LoginResponseDto();

        return responseDto ;
    }

}
