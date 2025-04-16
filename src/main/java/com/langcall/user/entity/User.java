package com.langcall.user.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "LC_USER_T")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    private int user_type;
    private String email;
    private String name;
    private String password;
    private Date create_time;
    private Date update_time;
    private int delete_acc;
}
