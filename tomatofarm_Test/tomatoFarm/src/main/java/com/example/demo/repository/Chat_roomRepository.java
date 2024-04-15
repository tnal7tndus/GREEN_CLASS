package com.example.demo.repository;

import java.util.List;

import com.example.demo.domain.Chat_roomDTO;
import com.example.demo.entity.Chat_room;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface Chat_roomRepository {

	List<Chat_roomDTO> selectAllRoom(PageRequest pageRequest, SearchRequest searchRequest);
	
}
