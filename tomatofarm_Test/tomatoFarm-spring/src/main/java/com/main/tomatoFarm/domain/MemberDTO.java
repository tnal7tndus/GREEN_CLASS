package com.main.tomatoFarm.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor // 생성자 자동 생성
@NoArgsConstructor // 기본 생성자 자동 생성
@Data
public class MemberDTO {
	
	private String id;
	private String password;
	private String name;
	private String phonenumber;
	private String address;
	private String delivery1;
	private String delivery2;
	private String delivery3;
	private String email;
	private String emailback;
	private String gender;
	private String birthday;
	
}//signUpDTO
