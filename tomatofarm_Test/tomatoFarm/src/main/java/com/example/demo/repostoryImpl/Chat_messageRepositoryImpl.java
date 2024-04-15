package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.Chat_messageDTO;
import com.example.demo.domain.ItemDTO;
import com.example.demo.entity.Chat_message;
import com.example.demo.entity.Chat_room;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Chat_messageRepository;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import static com.example.demo.entity.QChat_message.chat_message;
import static com.example.demo.entity.QUser.user;

import java.util.List;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class Chat_messageRepositoryImpl implements Chat_messageRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public int insertMessage(Chat_message entity) {
		return entityManager
				.createNativeQuery("INSERT chat_message(writer, content, regdate, room_seq) " + "SELECT"
						+ "    :writer, :content," + "    :regdate,"
						+ "    IFNULL(:room_seq, (SELECT COALESCE(MAX(seq), 0) + 1 FROM chat_message))")
				.setParameter("writer", entity.getWriter())
				.setParameter("content", entity.getContent())
				.setParameter("regdate", entity.getRegdate())
				.setParameter("room_seq", entity.getRoom_seq())
				.executeUpdate();
	}

	@Override
	public List<Chat_messageDTO> selectAllmessageWhereRoomSeq(Chat_message entity) {
		return jPAQueryFactory
				.select(Projections.bean(Chat_messageDTO.class, chat_message.content,
						chat_message.writer, chat_message.regdate, user.level.as("user_level")))
				.from(chat_message).leftJoin(user).on(chat_message.writer.eq(user.id))
				.where(chat_message.room_seq.eq(entity.getRoom_seq()))
				.fetch();
	}

}
