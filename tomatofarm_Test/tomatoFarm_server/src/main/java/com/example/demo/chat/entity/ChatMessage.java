package com.example.demo.chat.entity;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="chat_message")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long seq;

	@Column(name = "user_id_writer")
	private String userIdWriter;

	@Column(name = "content")
	private String content;

	@Column(name = "chat_room_seq")
	private Long chatRoomSeq;

	@Column(name = "regdate")
	private LocalDateTime regdate;

}
