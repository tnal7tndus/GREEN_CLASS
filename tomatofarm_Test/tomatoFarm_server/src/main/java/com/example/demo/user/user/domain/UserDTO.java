package com.example.demo.user.user.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
	
	private String id;
	private String password;
	private Integer userLevelCode;
	private String name;
	private String phonenumber;
	private Integer point;
	private LocalDate lastdate;
//	===========================
	private String email;
	private LocalDate birthdate;
}
