package com.example.demo.repository;

import java.util.List;

import com.example.demo.domain.Chat_messageDTO;
import com.example.demo.entity.Chat_message;
import com.example.demo.entity.Chat_room;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface Chat_messageRepository {

	List<Chat_messageDTO> selectAllmessageWhereRoomSeq(Chat_message entity);
	
	int insertMessage(Chat_message entity);
	
	
}
