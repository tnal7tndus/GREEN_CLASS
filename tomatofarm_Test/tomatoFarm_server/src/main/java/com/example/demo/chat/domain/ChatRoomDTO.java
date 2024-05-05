package com.example.demo.chat.domain;

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
public class ChatRoomDTO {
	private Long seq;
	private String type;
	private String userIdUser;
	private String userIdAdmin;
	@Builder.Default 
	private Integer ing = 0;

	private LocalDateTime regdate;
}


