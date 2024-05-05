package com.example.demo.user.user.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Data
@Builder
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserToken {

	private String id;
	private String username;
	private String token;
	private boolean admin;
	private List<String> keyword;
	
	private String error;
}
