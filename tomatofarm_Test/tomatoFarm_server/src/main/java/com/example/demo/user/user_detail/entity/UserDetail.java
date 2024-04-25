package com.example.demo.user.user_detail.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name="user_detail")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDetail {
	
	@Id
	@Column(name = "user_id")
	private String userId;
	private String email;
	private Integer gender;
	private LocalDate birthdate;
	private LocalDate regdate;
	
}
