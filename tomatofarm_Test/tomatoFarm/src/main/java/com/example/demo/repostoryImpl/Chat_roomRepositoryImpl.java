package com.example.demo.repostoryImpl;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.Chat_messageDTO;
import com.example.demo.domain.Chat_roomDTO;
import com.example.demo.entity.Chat_room;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Chat_messageRepository;
import com.example.demo.repository.Chat_roomRepository;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.example.demo.entity.QChat_message.chat_message;
import static com.example.demo.entity.QChat_room.chat_room;
import static com.example.demo.entity.QUser.user;

import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class Chat_roomRepositoryImpl implements Chat_roomRepository {
	
	private final JPAQueryFactory jPAQueryFactory;
	
	@Override
	public List<Chat_roomDTO> selectAllRoom(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.select(Projections.bean(Chat_roomDTO.class, 
						chat_room.seq, chat_room.ing, chat_room.type, chat_room.admin, chat_room.user, chat_message.regdate.max().as("regdate")))
					.from(chat_room).leftJoin(chat_message).on(chat_room.seq.eq(chat_message.room_seq))
					.groupBy(chat_room.seq,chat_room.type,chat_room.ing,chat_room.user, chat_room.admin)
					.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
					.fetch();
	}
	
}
