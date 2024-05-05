package com.example.demo.user.user_level.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user_level")
public class UserLevel {
    @Id
    @Column(name = "code", nullable = false)
    private Integer code;

    @Column(name = "name", length = 20)
    private String name;

}