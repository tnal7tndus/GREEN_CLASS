package com.example.demo.entity;

import javax.persistence.*;

import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Table(name = "user_address")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer code;
    private String id;
    private Integer main_address=0;
    private Integer address_code;
    private String address_name;
    private String address1;
    private String address2;
    private String phonenumber;
    private String delieverymessage;
    private String info;

}
