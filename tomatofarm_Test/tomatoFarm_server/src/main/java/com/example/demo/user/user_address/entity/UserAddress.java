package com.example.demo.user.user_address.entity;

import javax.persistence.*;

import lombok.*;

@Entity
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "user_address")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer seq;
    @Column(name = "user_id")
    private String userId;
    private String info;
    @Column(name = "main_address")
    private Integer mainAddress=0;
    @Column(name = "address_code")
    private Integer addressCode;
    @Column(name = "address_name")
    private String addressName;
    private String address1;
    private String address2;
    private String phonenumber;

}
