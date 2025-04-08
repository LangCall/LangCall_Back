package com.langcall.user.service;


import com.langcall.user.dto.MemberResponseDto;
import com.langcall.user.entity.Member;
import com.langcall.user.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public List<MemberResponseDto> getAllMembers(){
        List<Member> members = memberRepository.findAll();

        return members.stream()
                .map(MemberResponseDto::from)
                .collect(Collectors.toList());
    }

}
