package com.example.demo.chat.repository;

import java.util.List;

import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface ChatRoomRepository {

	List<ChatRoomDTO> selectAllRoom(PageRequest pageRequest, SearchRequest searchRequest);
	List<ChatRoomDTO> selectUserRoom(PageRequest pageRequest, String userId);

}
