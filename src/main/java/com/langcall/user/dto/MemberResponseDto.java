package com.langcall.user.dto;
import com.langcall.user.entity.Member;
import lombok.*;

@Getter
@AllArgsConstructor
public class MemberResponseDto {
    private Long user_id;
    private String name;
    private String email;

    public static MemberResponseDto from(Member member) {
        return new MemberResponseDto(
                member.getUser_id(),
                member.getName(),
                member.getEmail()
        );
    }
}
