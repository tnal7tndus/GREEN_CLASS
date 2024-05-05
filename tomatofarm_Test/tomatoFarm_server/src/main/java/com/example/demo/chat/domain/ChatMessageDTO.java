package com.example.demo.chat.domain;

import java.time.LocalDateTime;
import java.util.Date;

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
public class ChatMessageDTO {
	private Long seq;
	private String userIdWriter;
	private String content;
	private Long chatRoomSeq;
	private LocalDateTime regdate;
	private Integer userLevelCode;

}


