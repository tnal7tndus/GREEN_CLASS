package com.example.demo.chat.repository;

import com.example.demo.chat.entity.ChatMessage;
import com.example.demo.chat.domain.ChatMessageDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChatMessageRepositoryJPA extends JpaRepository<ChatMessage, Long>{

    @Query(value = "select " +
            "new com.example.demo.chat.domain.ChatMessageDTO(cm.seq, cm.userIdWriter, cm.content, cm.chatRoomSeq, cm.regdate , u.userLevelCode) " +
            "from ChatMessage cm " +
            "left join User u on cm.userIdWriter = u.id " +
            "where cm.chatRoomSeq = :chatRoomSeq")
    List<ChatMessageDTO> findAllByChatRoomSeq(Long chatRoomSeq);
}
