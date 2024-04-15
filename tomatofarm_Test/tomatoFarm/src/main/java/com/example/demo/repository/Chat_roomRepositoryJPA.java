package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Chat_room;

public interface Chat_roomRepositoryJPA extends JpaRepository<Chat_room, Integer>{
	
}
