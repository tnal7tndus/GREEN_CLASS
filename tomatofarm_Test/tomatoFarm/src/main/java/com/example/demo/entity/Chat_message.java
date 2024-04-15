package com.example.demo.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
public class Chat_message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer seq;
	private String writer; 
	private String content;
	private Integer room_seq;
	private LocalDateTime regdate;

}
