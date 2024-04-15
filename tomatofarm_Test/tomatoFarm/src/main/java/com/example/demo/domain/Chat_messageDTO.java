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
public class Chat_messageDTO {
	private Integer seq;
	private String writer; 
	private String content;
	private String type;
	private Integer room_seq;
	private LocalDateTime regdate;

	private Integer user_level;
}


