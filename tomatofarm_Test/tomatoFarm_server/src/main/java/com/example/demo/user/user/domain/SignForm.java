package com.example.demo.user.user.domain;

import lombok.*;

import java.time.LocalDate;

@Builder
@ToString
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SignForm {

	private String id;
	private String password;
	private String name;
	private String phonenumber;
	private Integer addressCode;
	private String address1;
	private String address2;
	private String email;
	private Integer gender;
	private LocalDate birthdate;
	
//	===========================
	private Integer point; 

	
	
}
