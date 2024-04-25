package com.example.demo.chat.repository;

import java.util.List;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.entity.ChatMessage;

public interface ChatMessageRepository {

	List selectAllmessageWhereRoomSeq(ChatMessage entity);

	ChatMessage insertMessage(ChatMessage entity);
	
	
}
