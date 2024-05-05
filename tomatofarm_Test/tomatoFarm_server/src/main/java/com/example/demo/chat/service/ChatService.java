package com.example.demo.chat.service;

import java.util.List;

import com.example.demo.chat.domain.ChatMessageDTO;
import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.chat.entity.ChatMessage;
import com.example.demo.chat.entity.ChatRoom;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.user.user.domain.AdminChat;

public interface ChatService {

	List<ChatMessageDTO> selectAllmessageWhereRoomSeq(ChatMessage entity);
	List<ChatRoomDTO> selectRoom(String userId);
	List<ChatMessageDTO> insertUserMessage(ChatMessage entity);
	AdminChat insertAdminMessage(ChatMessage entity);
	ChatRoom insertRoom(ChatRoom entity);
	List<ChatRoomDTO> endRoom(ChatRoom entity);
}
