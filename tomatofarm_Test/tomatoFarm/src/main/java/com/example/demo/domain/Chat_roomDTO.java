package com.example.demo.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Chat_roomDTO {
	private Integer seq;
	private String type;
	private String user;
	private String admin;
	@Builder.Default 
	private Integer ing = 0;
	
	
	private LocalDateTime regdate;
}


