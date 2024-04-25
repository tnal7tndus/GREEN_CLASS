package com.example.demo.chat.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="chat_room")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatRoom {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long seq;

	@Column(name = "type")
	private String type;

	@Builder.Default
	@Column(name = "ing")
	private Integer ing = 0;

	@Column(name = "user_id_user")
	private String userIdUser;

	@Column(name = "user_id_admin")
	private String userIdAdmin;


}
