package com.example.demo.chat.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.chat.domain.ChatRoomDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.example.demo.chat.entity.QChatMessage.chatMessage;
import static com.example.demo.chat.entity.QChatRoom.chatRoom;

import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class ChatRoomRepositoryImpl implements ChatRoomRepository {
	
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public List<ChatRoomDTO> selectAllRoom(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.select(Projections.bean(ChatRoomDTO.class,
						chatRoom.seq, chatRoom.ing, chatRoom.type, chatRoom.userIdAdmin, chatRoom.userIdUser, chatMessage.regdate.min().as("regdate")))
					.from(chatRoom).leftJoin(chatMessage).on(chatRoom.seq.eq(chatMessage.chatRoomSeq))
					.groupBy(chatRoom.seq,chatRoom.type,chatRoom.ing,chatRoom.userIdUser, chatRoom.userIdAdmin)
					.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
					.fetch();
	}
	
	@Override
	public List<ChatRoomDTO> selectUserRoom(PageRequest pageRequest, String userId) {
		return jPAQueryFactory.select(Projections.bean(ChatRoomDTO.class,
						chatRoom.seq, chatRoom.ing, chatRoom.type, chatRoom.userIdAdmin, chatRoom.userIdUser, chatMessage.regdate.max().as("regdate")))
				.from(chatRoom).leftJoin(chatMessage).on(chatRoom.seq.eq(chatMessage.chatRoomSeq))
				.where(chatRoom.userIdUser.eq(userId))
				.groupBy(chatRoom.seq,chatRoom.type,chatRoom.ing,chatRoom.userIdUser, chatRoom.userIdAdmin)
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	
}
