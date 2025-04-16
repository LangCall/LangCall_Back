package com.langcall.user.controller;

import com.langcall.user.dto.MemberResponseDto;
import com.langcall.user.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

// service
import com.langcall.user.service.MemberService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService; //@RequiredArgsConstructor 해줘야 함.

    @GetMapping("/member-list")
    public List<MemberResponseDto> getMembers(){
        return memberService.getAllMembers();
    }
}
