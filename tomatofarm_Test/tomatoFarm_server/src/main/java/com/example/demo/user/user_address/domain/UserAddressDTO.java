package com.example.demo.user.user_address.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserAddressDTO {

    private Integer seq;
    private String userId;
    private String info;
    private Integer main_address=0;
    private Integer address_code;
    private String address_name;
    private String address1;
    private String address2;
    private String phonenumber;

}

