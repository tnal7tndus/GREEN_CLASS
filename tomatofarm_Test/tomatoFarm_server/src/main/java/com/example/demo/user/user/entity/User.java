package com.example.demo.user.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name="user")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
	
	@Id
	private String id;
	private String password;
	@Column(name = "user_level_code")
	@Builder.Default
	private Integer userLevelCode = 100;
	private String name;
	private String phonenumber;
	@Builder.Default
	private Integer point = 0;
	private LocalDate lastdate;
	
}
